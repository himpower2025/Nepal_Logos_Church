// functions/src/index.ts 파일의 전체 내용을 아래 코드로 교체해주세요.

import {onDocumentCreated} from "firebase-functions/v2/firestore";
import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import {MulticastMessage} from "firebase-admin/messaging";

admin.initializeApp();

const db = admin.firestore();
const fcm = admin.messaging();

// --- TYPE DEFINITIONS for Firestore documents ---
interface UserData {
    fcmTokens?: string[];
    name?: string;
}

interface NewsData {
    title: string;
    authorId: string;
}

interface PrayerRequestData {
    authorName: string;
    title: string;
    authorId: string;
}

interface MessageData {
    senderId: string;
    content?: string;
    media?: { type: "image" | "video" }[];
}

interface ChatData {
    participantIds: string[];
}


// Helper function to get all FCM tokens from all users, optionally excluding one user
const getAllTokens = async (excludeUserId?: string): Promise<string[]> => {
    const usersSnapshot = await db.collection("users").get();
    const tokens: string[] = [];
    usersSnapshot.forEach((doc) => {
        if (doc.id === excludeUserId) {
            return; // Skip the excluded user
        }
        const user = doc.data() as UserData;
        if (user.fcmTokens && Array.isArray(user.fcmTokens)) {
            tokens.push(...user.fcmTokens);
        }
    });
    return [...new Set(tokens)]; // Return unique tokens
};

// Helper function to log stale tokens after a multicast send
const logStaleTokens = (response: admin.messaging.BatchResponse, tokens: string[]) => {
    if (!response || !response.responses) return;
    response.responses.forEach((result, index) => {
        const error = result.error;
        if (error) {
            logger.error("Failure sending notification to", tokens[index], error);
            if (error.code === "messaging/invalid-registration-token" || error.code === "messaging/registration-token-not-registered") {
               logger.warn(`Stale token found: ${tokens[index]}`);
            }
        }
    });
};


// 1. Function to send notification when a new news item is created
export const onNewsCreated = onDocumentCreated("news/{newsId}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
        logger.log("onNewsCreated triggered for a deletion, exiting.");
        return;
    }
    const newsItem = snapshot.data() as NewsData;
    if (!newsItem || !newsItem.title) {
        return logger.log("News item data is missing title.");
    }

    const title = "⛪️ New Announcement";
    const body = newsItem.title;

    // Get tokens, excluding the author of the news item
    const allTokens = await getAllTokens(newsItem.authorId);

    if (allTokens.length > 0) {
         const payload: MulticastMessage = {
            webpush: {
                notification: {
                    title: title,
                    body: body,
                    icon: "/logos-church-new-logo.jpg",
                    tag: `news-${event.params.newsId}`, // Groups notifications
                },
                fcmOptions: {
                    link: "/?page=news",
                },
            },
            // data is a fallback for the service worker's on-click event
            data: {
                url: "/?page=news",
            },
            tokens: allTokens,
        };

        logger.log(`Sending notification to ${allTokens.length} tokens.`);
        try {
            const response = await fcm.sendEachForMulticast(payload);
            logStaleTokens(response, allTokens);
        } catch(error) {
            logger.error("Error sending news notification:", error);
        }
    } else {
         logger.log("No FCM tokens found to send notification.");
    }
});

// 2. Function to send notification for a new prayer request
export const onPrayerRequestCreated = onDocumentCreated("prayerRequests/{requestId}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
        logger.log("onPrayerRequestCreated triggered for a deletion, exiting.");
        return;
    }
    const prayerRequest = snapshot.data() as PrayerRequestData;
    if (!prayerRequest || !prayerRequest.authorName) {
        return logger.log("Prayer request data is missing authorName.");
    }

    const allTokens = await getAllTokens(prayerRequest.authorId);

    if (allTokens.length > 0) {
        const payload: MulticastMessage = {
            webpush: {
                notification: {
                    title: "🙏 New Prayer Request",
                    body: `${prayerRequest.authorName} has shared a new request.`,
                    icon: "/logos-church-new-logo.jpg",
                    tag: `prayer-${event.params.requestId}`,
                },
                fcmOptions: {
                    link: "/?page=prayer",
                },
            },
             data: {
                url: "/?page=prayer",
            },
            tokens: allTokens,
        };
        try {
            const response = await fcm.sendEachForMulticast(payload);
            logStaleTokens(response, allTokens);
        } catch(error) {
            logger.error("Error sending prayer notification:", error);
        }
    }
});

// 3. Function to send notification for a new chat message
export const onChatMessageCreated = onDocumentCreated("chats/{chatId}/messages/{messageId}", async (event) => {
    const { chatId } = event.params;
    const snapshot = event.data;

    if (!snapshot) {
        logger.log("onChatMessageCreated triggered for a deletion, exiting.");
        return;
    }
    const message = snapshot.data() as MessageData;

    if (!message || !message.senderId) {
        return logger.log("Message data is invalid.");
    }

    const chatRef = db.collection("chats").doc(chatId);
    const chatDoc = await chatRef.get();
    const chatData = chatDoc.data() as ChatData | undefined;

    if (!chatDoc.exists || !chatData || !chatData.participantIds) {
        return logger.log(`Chat ${chatId} not found or has no participants.`);
    }

    const senderSnapshot = await db.collection("users").doc(message.senderId).get();
    const senderName = (senderSnapshot.data() as UserData | undefined)?.name || "Someone";

    let messageContent = message.content;
    if (!messageContent) {
        if(message.media && message.media.length > 0) {
             messageContent = message.media[0].type === "image" ? "Sent a photo" : "Sent a video";
        } else {
             messageContent = "Sent a message";
        }
    }

    const recipientIds = chatData.participantIds.filter((id: string) => id !== message.senderId);
    if (recipientIds.length === 0) {
        return logger.log("No recipients for this message.");
    }

    const tokens: string[] = [];
    const userDocs = await db.collection("users").where(admin.firestore.FieldPath.documentId(), "in", recipientIds).get();

    userDocs.forEach((doc) => {
        const user = doc.data() as UserData;
        if (user.fcmTokens && Array.isArray(user.fcmTokens)) {
            tokens.push(...user.fcmTokens);
        }
    });

    if (tokens.length > 0) {
        const uniqueTokens = [...new Set(tokens)];
        const payload: MulticastMessage = {
            webpush: {
                notification: {
                    title: `💬 New Message from ${senderName}`,
                    body: messageContent,
                    icon: "/logos-church-new-logo.jpg",
                    tag: `chat-${chatId}`, // Group all notifications for the same chat
                },
                fcmOptions: {
                    link: `/?page=chat&chatId=${chatId}`,
                },
            },
            data: {
                url: `/?page=chat&chatId=${chatId}`,
            },
            tokens: uniqueTokens,
        };
        logger.log(`Sending chat notification to ${uniqueTokens.length} tokens for chat ${chatId}.`);
         try {
            const response = await fcm.sendEachForMulticast(payload);
            logStaleTokens(response, uniqueTokens);
        } catch(error) {
             logger.error("Error sending chat notification:", error);
        }
    } else {
        logger.log(`No tokens found for recipients in chat ${chatId}.`);
    }
});
