// IMPORTANT: This service worker file must be in the public directory.
console.log('[SW-LOG] v19: Service Worker file evaluating.');

try {
    // Use a specific, stable version of the Firebase SDK
    console.log('[SW-LOG] Attempting to import Firebase scripts...');
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW-LOG] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW-LOG] CRITICAL: Failed to import Firebase scripts. Notifications will not work.', e);
}

// --- Robust Firebase Initialization with hardcoded config ---
// This is the most reliable way to ensure the service worker always has its config.
// In a real build pipeline, these values would be replaced at build time.
const firebaseConfig = {
    apiKey: "__VITE_FIREBASE_API_KEY__",
    authDomain: "__VITE_FIREBASE_AUTH_DOMAIN__",
    projectId: "__VITE_FIREBASE_PROJECT_ID__",
    storageBucket: "__VITE_FIREBASE_STORAGE_BUCKET__",
    messagingSenderId: "__VITE_FIREBASE_MESSAGING_SENDER_ID__",
    appId: "__VITE_FIREBASE_APP_ID__",
    measurementId: "__VITE_FIREBASE_MEASUREMENT_ID__",
};


const hasAllConfig = Object.values(firebaseConfig).every(val => val && !val.startsWith('__'));

if (typeof firebase !== 'undefined' && hasAllConfig) {
    console.log('[SW-LOG] Initializing Firebase with hardcoded config.');
    try {
        firebase.initializeApp(firebaseConfig);
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
                    badge: '/logos-church-new-logo.jpg',
                    tag: payload.data?.tag || 'logos-church-notification',
                    data: {
                        url: payload.fcmOptions?.link || payload.data?.url || self.origin,
                    }
                };
                if (navigator.setAppBadge) { navigator.setAppBadge(); }
                return self.registration.showNotification(notificationTitle, notificationOptions);
            });
            console.log('[SW-LOG] Background message handler set up.');
        } else {
            console.log('[SW-LOG] Firebase Messaging is not supported in this browser environment.');
        }
    } catch(e) {
        console.error('[SW-LOG] CRITICAL: An error occurred during Firebase initialization.', e);
    }
} else {
    if (typeof firebase === 'undefined') {
         console.error('[SW-LOG] CRITICAL: The `firebase` object is not available. Firebase script imports have failed.');
    } else {
         const missingKeys = Object.entries(firebaseConfig).filter(([, val]) => !val || val.startsWith('__')).map(([key]) => key);
         console.error(`[SW-LOG] CRITICAL: Firebase config is incomplete or not replaced by build process. Missing/Invalid keys: ${missingKeys.join(', ')}. Notifications will fail.`);
    }
}


// --- PWA Caching Logic ---
const CACHE_NAME = 'logos-church-cache-v13'; // Incremented cache version for updates
const CRITICAL_URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/logos-church-new-logo.jpg',
    '/logos-qr-code.png',
    '/manifest.json',
];

self.addEventListener('install', event => {
    console.log('[SW-LOG] Install event triggered.');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(async (cache) => {
                console.log('[SW-LOG] Opened cache for PWA assets. Caching critical assets...');
                // Cache critical assets. If this fails, the entire installation fails.
                await cache.addAll(CRITICAL_URLS_TO_CACHE);
            })
            .then(() => {
                console.log('[SW-LOG] Critical assets cached. Service worker installing.');
                return self.skipWaiting();
            })
            .catch(error => {
                // This catch will trigger if caching critical assets failed.
                console.error('[SW-LOG] Caching of critical assets failed. Service worker installation aborted.', error);
            })
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
    // For navigation requests, use a network-first strategy.
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                // If network fails, serve the main app page from cache.
                return caches.match('/');
            })
        );
        return;
    }

    // For other requests (CSS, JS, images), use a cache-first strategy.
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchResponse => {
                // Optional: Cache new assets as they are fetched.
                return caches.open(CACHE_NAME).then(cache => {
                    // Only cache successful GET requests.
                    if (fetchResponse.status === 200 && event.request.method === 'GET') {
                        cache.put(event.request, fetchResponse.clone());
                    }
                    return fetchResponse;
                });
            });
        })
    );
});

self.addEventListener('notificationclick', event => {
    console.log('[SW-LOG] Notification click Received.');
    event.notification.close();
    
    const urlToOpen = event.notification.data?.url || '/';
    console.log('[SW-LOG] User clicked notification. Attempting to open URL:', urlToOpen);

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
            const client = windowClients.find(c => c.url.startsWith(self.location.origin) && 'focus' in c);
            if (client) {
                console.log('[SW-LOG] Found an existing app window. Navigating and focusing.');
                return client.navigate(urlToOpen).then(c => c.focus());
            } else {
                console.log('[SW-LOG] No existing app window found. Opening a new one.');
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

console.log('[SW-LOG] Service worker script evaluation complete.');
