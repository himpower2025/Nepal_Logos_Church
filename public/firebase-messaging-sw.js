// IMPORTANT: This service worker file must be in the public directory.
console.log('[SW-LOG] v6: Service Worker file evaluating.');

try {
    // Use a specific, stable version of the Firebase SDK
    console.log('[SW-LOG] Attempting to import Firebase scripts...');
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW-LOG] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW-LOG] CRITICAL: Failed to import Firebase scripts. Notifications will not work.', e);
}

// --- PWA Caching Logic ---
const CACHE_NAME = 'logos-church-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/logos-church-new-logo.jpg',
    '/manifest.json'
];

// Function to retrieve config from IndexedDB
function getFirebaseConfigFromDB() {
    return new Promise((resolve, reject) => {
        const request = self.indexedDB.open('firebase-config-db', 1);
        request.onerror = (event) => reject("IndexedDB error: " + request.error);
        request.onsuccess = (event) => {
            try {
                const db = request.result;
                const transaction = db.transaction(['config'], 'readonly');
                const store = transaction.objectStore('config');
                const getRequest = store.get('firebaseConfig');
                getRequest.onsuccess = () => resolve(getRequest.result);
                getRequest.onerror = () => reject("Failed to get config from store: " + getRequest.error);
            } catch (e) {
                reject("Error in DB operations: " + e);
            }
        };
    });
}

async function initializeFirebase() {
    if (typeof firebase === 'undefined') {
        console.error('[SW-LOG] Firebase object not available. Scripts might have failed to load.');
        return null;
    }

    if (firebase.apps.length > 0) {
        console.log('[SW-LOG] Firebase already initialized.');
        return firebase.app();
    }
    
    try {
        const config = await getFirebaseConfigFromDB();
        if (config) {
            console.log('[SW-LOG] Firebase config retrieved from IndexedDB.');
            const app = firebase.initializeApp(config);
            console.log('[SW-LOG] Firebase app initialized successfully from DB config.');
            
            // This is necessary for the service worker to handle background notifications
            if (typeof firebase.messaging === 'function' && firebase.messaging.isSupported()) {
                firebase.messaging(app);
                console.log('[SW-LOG] Firebase Messaging service obtained for background handling.');
            }
            return app;
        } else {
             console.error('[SW-LOG] CRITICAL: firebaseConfig not found in IndexedDB. Cannot initialize Firebase.');
             return null;
        }
    } catch (e) {
        console.error('[SW-LOG] CRITICAL: Error initializing Firebase from DB.', e);
        return null;
    }
}

// Keep a promise for initialization to avoid race conditions.
const firebaseInitializationPromise = initializeFirebase();

// Set up the background message handler.
firebaseInitializationPromise.then(app => {
    if (app && typeof firebase.messaging === 'function' && firebase.messaging.isSupported()) {
        const messaging = firebase.messaging();
        messaging.onBackgroundMessage(function(payload) {
            console.log('[SW-LOG] Received background message: ', payload);

            const notificationTitle = payload.notification?.title || "New Message";
            const notificationOptions = {
                body: payload.notification?.body || "",
                icon: '/logos-church-new-logo.jpg',
                data: {
                    FCM_MSG: { // Match the structure used by the notificationclick handler
                        fcmOptions: {
                            link: payload.fcmOptions?.link || payload.data?.url || '/'
                        }
                    }
                }
            };
            
            return self.registration.showNotification(notificationTitle, notificationOptions);
        });
        console.log('[SW-LOG] Background message handler set up.');
    }
}).catch(err => {
    console.error("[SW-LOG] Failed to set up background message handler", err);
});


self.addEventListener('install', event => {
    console.log('[SW-LOG] Install event triggered.');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW-LOG] Opened cache for PWA assets');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    console.log('[SW-LOG] Activate event triggered.');
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('[SW-LOG] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                    return null;
                })
            );
        })
        .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                // For navigation, fallback to the main cached HTML file
                return caches.match('/index.html');
            })
        );
        return;
    }

    // For other requests, try cache first, then network.
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('notificationclick', event => {
    console.log('[SW-LOG] Notification click Received.');
    event.notification.close();
    const urlToOpen = event.notification.data?.FCM_MSG?.fcmOptions?.link || '/';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
            const client = windowClients.find(c => c.url.startsWith(self.location.origin) && 'focus' in c);
            if (client) {
                return client.navigate(urlToOpen).then(c => c.focus());
            } else {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

console.log('[SW-LOG] Service worker script evaluation complete.');