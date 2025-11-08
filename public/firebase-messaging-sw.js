// IMPORTANT: This service worker file must be in the public directory.
console.log('[SW-LOG] v7: Service Worker file evaluating.');

try {
    // Use a specific, stable version of the Firebase SDK
    console.log('[SW-LOG] Attempting to import Firebase scripts...');
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW-LOG] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW-LOG] CRITICAL: Failed to import Firebase scripts. Notifications will not work.', e);
}

// --- Firebase Initialization (Synchronous from URL) ---
const params = new URLSearchParams(self.location.search);
const firebaseConfig = {
  apiKey: params.get('apiKey'),
  authDomain: params.get('authDomain'),
  projectId: params.get('projectId'),
  storageBucket: params.get('storageBucket'),
  messagingSenderId: params.get('messagingSenderId'),
  appId: params.get('appId'),
  measurementId: params.get('measurementId'),
};

if (!firebaseConfig.apiKey) {
  console.error('[SW-LOG] CRITICAL: firebaseConfig parameter not found in service worker URL. Cannot initialize Firebase.');
} else if (typeof firebase !== 'undefined') {
    console.log('[SW-LOG] Firebase config parsed from URL. Initializing...');
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
        console.error('[SW-LOG] CRITICAL: Error initializing Firebase.', e);
    }
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