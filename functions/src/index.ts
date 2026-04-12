import {onDocumentCreated} from "firebase-functions/v2/firestore";
import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import {MulticastMessage} from "firebase-admin/messaging";

admin.initializeApp();

const db = admin.firestore();
const fcm = admin.messaging();

const APP_URL = "https://logos-church-nepal.web.app";

// --- TYPE DEFINITIONS ---
interface UserData {
    fcmTokens?: string[];
    name?: string;
    notificationPreferences?: {
        news?: boolean;
        prayer?: boolean;
        chat?: boolean;
        worship?: boolean;
        podcast?: boolean;
    };
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

// Helper to get tokens for a specific topic, respecting user preferences
const getTokensForTopic = async (
    topic: "news" | "prayer" | "worship" | "podcast",
    excludeUserId?: string
): Promise<string[]> => {
    const usersSnapshot = await db.collection("users").get();
    const tokens: string[] = [];

    usersSnapshot.forEach((doc) => {
        if (doc.id === excludeUserId) {
            return;
        }
        const user = doc.data() as UserData;
        const canNotify = !user.notificationPreferences || (user.notificationPreferences as any)[topic] !== false;

        if (canNotify && user.fcmTokens && Array.isArray(user.fcmTokens)) {
            tokens.push(...user.fcmTokens);
        }
    });
    return [...new Set(tokens)];
};

// Helper to remove stale FCM tokens
const cleanStaleTokens = async (tokensToRemove: string[]) => {
    if (tokensToRemove.length === 0) return;
    try {
        const usersRef = db.collection("users");
        const snapshot = await usersRef.where("fcmTokens", "array-contains-any", tokensToRemove.slice(0, 30)).get();
        const updates: Promise<admin.firestore.WriteResult>[] = [];
        snapshot.forEach((doc) => {
            updates.push(doc.ref.update({
                fcmTokens: admin.firestore.FieldValue.arrayRemove(...tokensToRemove),
            }));
        });
        await Promise.all(updates);
    } catch (error) {
        logger.error("Error cleaning stale tokens:", error);
    }
};

// Helper function to process FCM send responses
const handleSendResponse = (response: admin.messaging.BatchResponse, tokens: string[]) => {
    const staleTokens: string[] = [];
    response.responses.forEach((result, index) => {
        if (!result.success && result.error) {
            if (result.error.code === "messaging/invalid-registration-token" ||
                result.error.code === "messaging/registration-token-not-registered") {
                staleTokens.push(tokens[index]);
            }
        }
    });
    if (staleTokens.length > 0) cleanStaleTokens(staleTokens);
};

// 1. New News Notification
export const onNewsCreated = onDocumentCreated("news/{newsId}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;
    const newsItem = snapshot.data() as NewsData;
    if (!newsItem || !newsItem.title) return;

    const allTokens = await getTokensForTopic("news", newsItem.authorId);
    if (allTokens.length > 0) {
        const link = "/?page=news";
        const title = "⛪️ New Announcement";
        const body = newsItem.title;

        const payload: MulticastMessage = {
            notification: { title, body },
            data: { url: link },
            tokens: allTokens,
            android: {
                priority: "high",
                notification: { priority: "max", channelId: "church_announcements" },
            },
            apns: { headers: { "apns-priority": "10" }, payload: { aps: { sound: "default" } } },
            webpush: {
                headers: { Urgency: "high" },
                notification: { title, body, icon: `${APP_URL}/logos-church-new-logo.jpg`, tag: `news-${event.params.newsId}` },
                fcmOptions: { link: `${APP_URL}${link}` },
            },
        };
        const response = await fcm.sendEachForMulticast(payload);
        handleSendResponse(response, allTokens);
    }
});

// 2. New Prayer Request Notification
export const onPrayerRequestCreated = onDocumentCreated("prayerRequests/{requestId}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;
    const prayerRequest = snapshot.data() as PrayerRequestData;
    if (!prayerRequest) return;

    const allTokens = await getTokensForTopic("prayer", prayerRequest.authorId);
    if (allTokens.length > 0) {
        const link = "/?page=prayer";
        const title = "🙏 New Prayer Request";
        const body = `${prayerRequest.authorName} has shared a new request.`;

        const payload: MulticastMessage = {
            notification: { title, body },
            data: { url: link },
            tokens: allTokens,
            android: {
                priority: "high",
                notification: { priority: "max", channelId: "prayer_requests" },
            },
            apns: { headers: { "apns-priority": "10" }, payload: { aps: { sound: "default" } } },
            webpush: {
                headers: { Urgency: "high" },
                notification: { title, body, icon: `${APP_URL}/logos-church-new-logo.jpg`, tag: `prayer-${event.params.requestId}` },
                fcmOptions: { link: `${APP_URL}${link}` },
            },
        };
        const response = await fcm.sendEachForMulticast(payload);
        handleSendResponse(response, allTokens);
    }
});

// 3. New Chat Message Notification
export const onChatMessageCreated = onDocumentCreated("chats/{chatId}/messages/{messageId}", async (event) => {
    const { chatId } = event.params;
    const snapshot = event.data;
    if (!snapshot) return;
    const message = snapshot.data() as MessageData;
    if (!message) return;

    const chatDoc = await db.collection("chats").doc(chatId).get();
    const chatData = chatDoc.data() as ChatData | undefined;
    if (!chatDoc.exists || !chatData) return;

    const senderSnapshot = await db.collection("users").doc(message.senderId).get();
    const senderName = (senderSnapshot.data() as UserData | undefined)?.name || "Someone";
    const recipientIds = chatData.participantIds.filter((id) => id !== message.senderId);
    if (recipientIds.length === 0) return;

    const userDocs = await db.collection("users").where(admin.firestore.FieldPath.documentId(), "in", recipientIds).get();
    const tokensToSend: string[] = [];
    userDocs.docs.forEach((doc) => {
        const user = doc.data() as UserData;
        if (user.notificationPreferences?.chat !== false && user.fcmTokens) {
            tokensToSend.push(...user.fcmTokens);
        }
    });
    
    const uniqueTokens = [...new Set(tokensToSend)];
    if (uniqueTokens.length === 0) return;

    let messageContent = message.content;
    if (!messageContent) {
        messageContent = message.media && message.media.length > 0 ? "Sent media" : "Sent a message";
    }

    const link = `/?page=chat&chatId=${chatId}`;
    const truncatedBody = messageContent.length > 100 ? messageContent.substring(0, 97) + "..." : messageContent;
    const isGroupChat = chatData.participantIds.length > 2;
    const notificationTitle = isGroupChat ? `💬 ${chatData.name || "Group Chat"}` : `💬 ${senderName}`;
    const notificationBody = isGroupChat ? `${senderName}: ${truncatedBody}` : truncatedBody;

    const payload: MulticastMessage = {
        notification: { title: notificationTitle, body: notificationBody },
        data: { url: link, chatId: chatId },
        tokens: uniqueTokens,
        android: {
            priority: "high",
            notification: { priority: "max", channelId: "chat_messages" },
        },
        apns: { headers: { "apns-priority": "10" }, payload: { aps: { sound: "default" } } },
        webpush: {
            headers: { Urgency: "high" },
            notification: { title: notificationTitle, body: notificationBody, icon: `${APP_URL}/logos-church-new-logo.jpg`, tag: `chat-${chatId}` },
            fcmOptions: { link: `${APP_URL}${link}` },
        },
    };
    const response = await fcm.sendEachForMulticast(payload);
    handleSendResponse(response, uniqueTokens);
});

// 4. New Worship Video Notification
export const onPastWorshipCreated = onDocumentCreated("pastWorshipServices/{serviceId}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;
    const service = snapshot.data() as { title: string };
    if (!service || !service.title) return;

    const allTokens = await getTokensForTopic("worship");
    if (allTokens.length > 0) {
        const link = "/?page=worship";
        const title = "🎥 New Worship Video";
        const body = service.title;

        const payload: MulticastMessage = {
            notification: { title, body },
            data: { url: link },
            tokens: allTokens,
            android: { priority: "high", notification: { priority: "max", channelId: "worship_updates" } },
            apns: { headers: { "apns-priority": "10" }, payload: { aps: { sound: "default" } } },
            webpush: {
                headers: { Urgency: "high" },
                notification: { title, body, icon: `${APP_URL}/logos-church-new-logo.jpg`, tag: `worship-${event.params.serviceId}` },
                fcmOptions: { link: `${APP_URL}${link}` },
            },
        };
        const response = await fcm.sendEachForMulticast(payload);
        handleSendResponse(response, allTokens);
    }
});

// 5. New Podcast Notification
export const onPodcastCreated = onDocumentCreated("podcasts/{podcastId}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;
    const podcast = snapshot.data() as { title: string };
    if (!podcast || !podcast.title) return;

    const allTokens = await getTokensForTopic("podcast");
    if (allTokens.length > 0) {
        const link = "/?page=podcast";
        const title = "🎧 New Podcast";
        const body = podcast.title;

        const payload: MulticastMessage = {
            notification: { title, body },
            data: { url: link },
            tokens: allTokens,
            android: { priority: "high", notification: { priority: "max", channelId: "podcast_updates" } },
            apns: { headers: { "apns-priority": "10" }, payload: { aps: { sound: "default" } } },
            webpush: {
                headers: { Urgency: "high" },
                notification: { title, body, icon: `${APP_URL}/logos-church-new-logo.jpg`, tag: `podcast-${event.params.podcastId}` },
                fcmOptions: { link: `${APP_URL}${link}` },
            },
        };
        const response = await fcm.sendEachForMulticast(payload);
        handleSendResponse(response, allTokens);
    }
});