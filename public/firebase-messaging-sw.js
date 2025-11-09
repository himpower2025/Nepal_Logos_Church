// IMPORTANT: This service worker file must be in the public directory.
console.log('[SW-LOG] v12: Service Worker file evaluating.');

try {
    // Use a specific, stable version of the Firebase SDK
    console.log('[SW-LOG] Attempting to import Firebase scripts...');
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW-LOG] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW-LOG] CRITICAL: Failed to import Firebase scripts. Notifications will not work.', e);
}

// --- Firebase Initialization from URL parameters for robustness ---
const urlParams = new URLSearchParams(self.location.search);
const firebaseConfig = {
    apiKey: urlParams.get('apiKey'),
    authDomain: urlParams.get('authDomain'),
    projectId: urlParams.get('projectId'),
    storageBucket: urlParams.get('storageBucket'),
    messagingSenderId: urlParams.get('messagingSenderId'),
    appId: urlParams.get('appId'),
    measurementId: urlParams.get('measurementId'),
};

const hasAllConfig = Object.values(firebaseConfig).every(Boolean);

if (typeof firebase !== 'undefined' && hasAllConfig) {
    console.log('[SW-LOG] Initializing Firebase with config from URL.');
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
                    data: {
                        FCM_MSG: { // Structure to match what FCM expects
                            fcmOptions: {
                                link: payload.fcmOptions?.link || payload.data?.url || '/'
                            }
                        }
                    }
                };
                
                return self.registration.showNotification(notificationTitle, notificationOptions);
            });
            console.log('[SW-LOG] Background message handler set up.');
        } else {
            console.log('[SW-LOG] Firebase Messaging is not supported in this browser.');
        }
    } catch(e) {
        console.error('[SW-LOG] CRITICAL: Error initializing Firebase from config.', e);
    }
} else {
    if (typeof firebase === 'undefined') {
         console.error('[SW-LOG] CRITICAL: Firebase object not found. Imports likely failed.');
    } else {
         console.error('[SW-LOG] CRITICAL: Firebase config from URL is incomplete. Cannot initialize.');
    }
}


// --- PWA Caching Logic ---
const CACHE_NAME = 'logos-church-cache-v6'; // Incremented cache version for updates
const CRITICAL_URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/logos-church-new-logo.jpg',
    '/logos-qr-code.png',
    '/manifest.json',
];
const NON_CRITICAL_URLS_TO_CACHE = [
    'https://firebasestorage.googleapis.com/v0/b/logos-church-nepal.appspot.com/o/assets%2Fnotification.mp3?alt=media&token=24838a14-a901-469b-9a4f-56193796537b'
];

self.addEventListener('install', event => {
    console.log('[SW-LOG] Install event triggered.');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(async (cache) => {
                console.log('[SW-LOG] Opened cache for PWA assets. Caching critical assets...');
                // Cache critical assets. If this fails, the entire installation fails.
                await cache.addAll(CRITICAL_URLS_TO_CACHE);

                console.log('[SW-LOG] Caching non-critical assets (will not block installation).');
                // Attempt to cache non-critical assets but don't let failures block installation.
                try {
                    await cache.addAll(NON_CRITICAL_URLS_TO_CACHE);
                } catch (error) {
                    console.warn('[SW-LOG] Failed to cache a non-critical asset. This is not a fatal error.', error);
                }
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
    
    // Correctly extract the link from the nested data structure.
    const urlToOpen = event.notification.data?.FCM_MSG?.fcmOptions?.link || '/';
    console.log('[SW-LOG] Opening URL from notification:', urlToOpen);

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
            // Check if a window with the app's origin is already open.
            const client = windowClients.find(c => c.url.startsWith(self.location.origin) && 'focus' in c);
            if (client) {
                // If found, navigate that window to the correct URL and focus it.
                return client.navigate(urlToOpen).then(c => c.focus());
            } else {
                // Otherwise, open a new window.
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

console.log('[SW-LOG] Service worker script evaluation complete.');