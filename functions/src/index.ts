// functions/src/index.ts 파일의 전체 내용을 아래 코드로 교체해주세요.

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";

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
}

interface PrayerRequestData {
    authorName: string;
    title: string;
}

interface MessageData {
    senderId: string;
    content?: string;
    media?: { type: "image" | "video" }[];
}

interface ChatData {
    participantIds: string[];
}


// Helper function to get all FCM tokens from all users
const getAllTokens = async (): Promise<string[]> => {
    const usersSnapshot = await db.collection("users").get();
    const tokens: string[] = [];
    usersSnapshot.forEach((doc) => {
        const user = doc.data() as UserData;
        if (user.fcmTokens && Array.isArray(user.fcmTokens)) {
            tokens.push(...user.fcmTokens);
        }
    });
    return [...new Set(tokens)]; // Return unique tokens
};

// Helper function to log stale tokens after a multicast send
const logStaleTokens = (response: admin.messaging.BatchResponse, tokens: string[]) => {
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
export const onNewsCreated = functions.firestore
    .document("news/{newsId}")
    .onCreate(async (snapshot, context) => {
        const newsItem = snapshot.data() as NewsData;
        if (!newsItem || !newsItem.title) {
            return logger.log("News item data is missing title.");
        }

        const title = "⛪️ New Announcement";
        const body = newsItem.title;

        const allTokens = await getAllTokens();

        if (allTokens.length > 0) {
            const payload: admin.messaging.MulticastMessage = {
                notification: {
                    title: title,
                    body: body,
                },
                webpush: {
                    notification: {
                        icon: "/logos-church-new-logo.jpg",
                    },
                },
                data: {
                    url: "/",
                    page: "news",
                },
                tokens: allTokens,
            };

            logger.log(`Sending notification to ${allTokens.length} tokens.`);
            const response = await fcm.sendEachForMulticast(payload);
            logStaleTokens(response, allTokens);
        } else {
             logger.log("No FCM tokens found to send notification.");
        }
    });

// 2. Function to send notification for a new prayer request
export const onPrayerRequestCreated = functions.firestore
    .document("prayerRequests/{requestId}")
    .onCreate(async (snapshot, context) => {
        const prayerRequest = snapshot.data() as PrayerRequestData;
        if (!prayerRequest || !prayerRequest.authorName) {
            return logger.log("Prayer request data is missing authorName.");
        }

        const allTokens = await getAllTokens();
        if (allTokens.length > 0) {
            const payload: admin.messaging.MulticastMessage = {
                notification: {
                    title: "🙏 New Prayer Request",
                    body: `${prayerRequest.authorName} has shared a new request.`,
                },
                webpush: {
                    notification: {
                        icon: "/logos-church-new-logo.jpg",
                    },
                },
                 data: {
                    url: "/",
                    page: "prayer",
                },
                tokens: allTokens,
            };
            const response = await fcm.sendEachForMulticast(payload);
            logStaleTokens(response, allTokens);
        }
    });

// 3. Function to send notification for a new chat message
export const onChatMessageCreated = functions.firestore
    .document("chats/{chatId}/messages/{messageId}")
    .onCreate(async (snapshot, context) => {
        const { chatId } = context.params;
        const message = snapshot.data() as MessageData;

        if (!message || !message.senderId) {
            return logger.log("Message data is invalid.");
        }

        const chatRef = db.collection("chats").doc(chatId);
        const chatDoc = await chatRef.get();
        const chatData = chatDoc.data() as ChatData | undefined;

        if (!chatData || !chatData.participantIds) {
            return logger.log(`Chat ${chatId} not found or has no participants.`);
        }
        
        // Get the sender's details
        const senderSnapshot = await db.collection("users").doc(message.senderId).get();
        const senderName = (senderSnapshot.data() as UserData | undefined)?.name || "Someone";
        
        let messageContent = message.content;
        if (!messageContent) {
            if(message.media && message.media.length > 0) {
                 messageContent = message.media[0].type === 'image' ? "Sent a photo" : "Sent a video";
            } else {
                 messageContent = "Sent a message";
            }
        }

        // Get tokens of all participants except the sender
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
            const payload: admin.messaging.MulticastMessage = {
                notification: {
                    title: `💬 New Message from ${senderName}`,
                    body: messageContent,
                },
                webpush: {
                    notification: {
                        icon: "/logos-church-new-logo.jpg",
                    },
                },
                data: {
                    url: "/",
                    page: "chat", // To open the chat page
                    chatId: chatId,
                },
                tokens: uniqueTokens,
            };
            logger.log(`Sending chat notification to ${uniqueTokens.length} tokens for chat ${chatId}.`);
            const response = await fcm.sendEachForMulticast(payload);
            logStaleTokens(response, uniqueTokens);
        } else {
            logger.log(`No tokens found for recipients in chat ${chatId}.`);
        }
    });