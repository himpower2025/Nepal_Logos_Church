import {onDocumentCreated} from "firebase-functions/v2/firestore";
import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import {MulticastMessage} from "firebase-admin/messaging";

admin.initializeApp();

const db = admin.firestore();
const fcm = admin.messaging();

const APP_URL = "https://logos-church-nepal.web.app";

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
    name?: string;
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

// Helper to remove stale FCM tokens from Firestore to prevent sending to invalid endpoints.
const cleanStaleTokens = async (tokensToRemove: string[]) => {
    if (tokensToRemove.length === 0) {
        return;
    }
    logger.log(`Attempting to clean ${tokensToRemove.length} stale tokens.`);
    try {
        const usersRef = db.collection("users");
        // Firestore 'in' queries are limited to 30 items. A more robust solution
        // would batch this for large numbers of stale tokens.
        const snapshot = await usersRef.where("fcmTokens", "array-contains-any", tokensToRemove.slice(0, 30)).get();

        if (snapshot.empty) {
            logger.log("No users found with the specified stale tokens.");
            return;
        }

        const updates: Promise<FirebaseFirestore.WriteResult>[] = [];
        snapshot.forEach((doc) => {
            updates.push(doc.ref.update({
                fcmTokens: admin.firestore.FieldValue.arrayRemove(...tokensToRemove),
            }));
        });

        await Promise.all(updates);
        logger.log(`Cleaned stale tokens from ${updates.length} user documents.`);
    } catch (error) {
        logger.error("Error cleaning stale tokens:", error);
    }
};

// Helper function to process FCM send responses, logging errors and cleaning stale tokens.
const handleSendResponse = (response: admin.messaging.BatchResponse, tokens: string[]) => {
    if (!response || !response.responses) {
        logger.log("No response object from FCM send.");
        return;
    }
    const staleTokens: string[] = [];
    let successCount = 0;

    response.responses.forEach((result, index) => {
        const error = result.error;
        if (result.success) {
            successCount++;
        } else if (error) {
            logger.error(`Failure sending notification to token: ${tokens[index]}`, error);
            // Check for codes indicating a token is no longer valid.
            if (error.code === "messaging/invalid-registration-token" ||
                error.code === "messaging/registration-token-not-registered") {
                staleTokens.push(tokens[index]);
            }
        }
    });

    logger.log(`FCM send complete. Success: ${successCount}, Failures: ${response.failureCount}.`);

    if (staleTokens.length > 0) {
        cleanStaleTokens(staleTokens);
    }
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

    const allTokens = await getAllTokens(newsItem.authorId);

    if (allTokens.length > 0) {
        const link = "/?page=news";
        const notificationTitle = "⛪️ New Announcement";
        const notificationBody = newsItem.title;

        const payload: MulticastMessage = {
            notification: {
                title: notificationTitle,
                body: notificationBody,
            },
            data: {
                url: link,
            },
            webpush: {
                notification: {
                    title: notificationTitle,
                    body: notificationBody,
                    icon: `${APP_URL}/logos-church-new-logo.jpg`,
                    tag: `news-${event.params.newsId}`,
                },
                fcmOptions: {
                    link: `${APP_URL}${link}`,
                },
            },
            tokens: allTokens,
        };

        logger.log(`Sending 'news' notification to ${allTokens.length} tokens.`);
        try {
            const response = await fcm.sendEachForMulticast(payload);
            handleSendResponse(response, allTokens);
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
        const link = "/?page=prayer";
        const notificationTitle = "🙏 New Prayer Request";
        const notificationBody = `${prayerRequest.authorName} has shared a new request.`;

        const payload: MulticastMessage = {
            notification: {
                title: notificationTitle,
                body: notificationBody,
            },
            data: {
                url: link,
            },
            webpush: {
                notification: {
                    title: notificationTitle,
                    body: notificationBody,
                    icon: `${APP_URL}/logos-church-new-logo.jpg`,
                    tag: `prayer-${event.params.requestId}`,
                },
                fcmOptions: {
                    link: `${APP_URL}${link}`,
                },
            },
            tokens: allTokens,
        };
        logger.log(`Sending 'prayer' notification to ${allTokens.length} tokens.`);
        try {
            const response = await fcm.sendEachForMulticast(payload);
            handleSendResponse(response, allTokens);
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

    const chatDoc = await db.collection("chats").doc(chatId).get();
    const chatData = chatDoc.data() as ChatData | undefined;

    if (!chatDoc.exists || !chatData || !chatData.participantIds) {
        return logger.log(`Chat ${chatId} not found or has no participants.`);
    }

    const senderSnapshot = await db.collection("users").doc(message.senderId).get();
    const senderName = (senderSnapshot.data() as UserData | undefined)?.name || "Someone";

    const recipientIds = chatData.participantIds.filter((id) => id !== message.senderId);
    if (recipientIds.length === 0) {
        return logger.log("No recipients for this message.");
    }

    const recipients: { name: string; tokens: string[] }[] = [];
    if (recipientIds.length > 0) {
        const userDocs = await db.collection("users").where(admin.firestore.FieldPath.documentId(), "in", recipientIds).get();
        userDocs.forEach((doc) => {
            const user = doc.data() as UserData;
            recipients.push({
                name: user.name || "User",
                tokens: user.fcmTokens || [],
            });
        });
    }

    const allTokens = recipients.flatMap((r) => r.tokens);
    const uniqueTokens = [...new Set(allTokens)];

    if (uniqueTokens.length === 0) {
        return logger.log(`No tokens found for recipients in chat ${chatId}.`);
    }

    let messageContent = message.content;
    if (!messageContent) {
        if (message.media && message.media.length > 0) {
            messageContent = message.media.length > 1 ? "Sent media" : (message.media[0].type === "image" ? "Sent a photo" : "Sent a video");
        } else {
            messageContent = "Sent a message";
        }
    }

    const link = `/?page=chat&chatId=${chatId}`;
    const truncatedBody = messageContent.length > 100 ? messageContent.substring(0, 97) + "..." : messageContent;
    const isGroupChat = chatData.participantIds.length > 2;

    let notificationTitle: string;

    if (isGroupChat) {
        let groupTitle = chatData.name;
        if (!groupTitle) {
            const participantNames = (await Promise.all(
                chatData.participantIds
                .filter((id) => id !== message.senderId)
                .slice(0, 3) // get up to 3 other participants
                .map((id) => db.collection("users").doc(id).get())
            )).map((doc) => (doc.data() as UserData)?.name?.split(" ")[0] || "");
            
            groupTitle = participantNames.slice(0, 2).join(", ");
            if (participantNames.length > 2) {
                groupTitle += "...";
            }
        }
        notificationTitle = `💬 ${groupTitle || "Group Chat"}`;
    } else {
        notificationTitle = `💬 ${senderName}`;
    }

    const notificationBody = isGroupChat ? `${senderName}: ${truncatedBody}` : truncatedBody;

    const payload: MulticastMessage = {
        notification: {
            title: notificationTitle,
            body: notificationBody,
        },
        data: {
            url: link,
            chatId: chatId, // Pass for in-app handling
        },
        webpush: {
            notification: {
                title: notificationTitle,
                body: notificationBody,
                icon: `${APP_URL}/logos-church-new-logo.jpg`,
                tag: `chat-${chatId}`,
            },
            fcmOptions: {
                link: `${APP_URL}${link}`,
            },
        },
        tokens: uniqueTokens,
    };

    logger.log(`Sending chat notification to ${uniqueTokens.length} tokens for chat ${chatId}.`);
    try {
        const response = await fcm.sendEachForMulticast(payload);
        handleSendResponse(response, uniqueTokens);
    } catch (error) {
        logger.error("Error sending chat notification:", error);
    }
});
