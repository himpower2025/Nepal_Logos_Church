// IMPORTANT: This service worker file must be in the public directory.
console.log('[SW-LOG] v9: Service Worker file evaluating.');

try {
    // Use a specific, stable version of the Firebase SDK
    console.log('[SW-LOG] Attempting to import Firebase scripts...');
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW-LOG] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW-LOG] CRITICAL: Failed to import Firebase scripts. Notifications will not work.', e);
}

// --- IndexedDB functions for robust config storage ---
const DB_NAME = 'sw-config-db';
const STORE_NAME = 'config-store';
const CONFIG_KEY = 'firebase-config';

function openDb() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = () => {
            if (!request.result.objectStoreNames.contains(STORE_NAME)) {
                request.result.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function saveConfigToDb(config) {
    try {
        const db = await openDb();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        tx.objectStore(STORE_NAME).put(config, CONFIG_KEY);
        return new Promise((resolve, reject) => {
            tx.oncomplete = () => {
                console.log('[SW-LOG] Config saved to IndexedDB.');
                resolve();
            };
            tx.onerror = () => reject(tx.error);
        });
    } catch(e) {
        console.error('[SW-LOG] Failed to save config to IndexedDB.', e);
    }
}

async function getConfigFromDb() {
    try {
        const db = await openDb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const request = tx.objectStore(STORE_NAME).get(CONFIG_KEY);
            tx.oncomplete = () => resolve(request.result);
            tx.onerror = () => reject(tx.error);
        });
    } catch (e) {
        console.warn("[SW-LOG] IndexedDB not available or failed to open. Will rely on BroadcastChannel.", e);
        return null;
    }
}

// --- Firebase Initialization Logic ---
let firebaseInitialized = false;

function initializeFirebase(config) {
    if (firebaseInitialized || !config || firebase.apps.length) {
        if (!firebaseInitialized) console.log('[SW-LOG] Firebase app already initialized or config missing.');
        firebaseInitialized = true;
        return;
    }

    try {
        firebase.initializeApp(config);
        firebaseInitialized = true;
        console.log('[SW-LOG] Firebase app initialized successfully.');
        
        if (firebase.messaging.isSupported()) {
            const messaging = firebase.messaging();
            console.log('[SW-LOG] Firebase Messaging service obtained.');

            messaging.onBackgroundMessage(function(payload) {
                console.log('[SW-LOG] Received background message: ', payload);

                const notificationTitle = payload.notification?.title || "New Message";
                const notificationOptions = {
                    body: payload.notification?.body || "",
                    icon: '/logos-church-new-logo.jpg',
                    data: {
                        FCM_MSG: {
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
    } catch(e) {
        console.error('[SW-LOG] CRITICAL: Error initializing Firebase from config.', e);
    }
}

// Main logic to orchestrate initialization
async function main() {
    const savedConfig = await getConfigFromDb();
    if (savedConfig) {
        console.log('[SW-LOG] Initializing Firebase from IndexedDB config.');
        initializeFirebase(savedConfig);
    } else {
        console.log('[SW-LOG] No config in IndexedDB, listening on BroadcastChannel.');
        const channel = new BroadcastChannel('firebase-config-channel');
        channel.onmessage = async (event) => {
            if (event.data.type === 'FIREBASE_CONFIG' && event.data.config) {
                console.log('[SW-LOG] Received Firebase config via BroadcastChannel.');
                const config = event.data.config;
                initializeFirebase(config);
                await saveConfigToDb(config);
                channel.close();
            }
        };
    }
}

if (typeof firebase !== 'undefined') {
    main();
} else {
    console.error('[SW-LOG] CRITICAL: Firebase object not found. Imports likely failed.');
}


// --- PWA Caching Logic ---
const CACHE_NAME = 'logos-church-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/logos-church-new-logo.jpg',
    '/manifest.json'
];

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
                return caches.match('/index.html');
            })
        );
        return;
    }

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
            // Check if a window is already open.
            const client = windowClients.find(c => c.url.startsWith(self.location.origin) && 'focus' in c);
            if (client) {
                return client.navigate(urlToOpen).then(c => c.focus());
            } else {
                // Otherwise, open a new window.
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

console.log('[SW-LOG] Service worker script evaluation complete.');
