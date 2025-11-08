// IMPORTANT: This service worker file must be in the public directory.
console.log('[SW-LOG] v3: Service Worker file evaluating.');

// This is a placeholder that will be replaced by the actual config from the URL.
let firebaseConfig = {};

try {
    // Use a specific, stable version of the Firebase SDK
    console.log('[SW-LOG] Attempting to import Firebase scripts...');
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW-LOG] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW-LOG] CRITICAL: Failed to import Firebase scripts. Notifications will not work.', e);
}

self.addEventListener('install', (event) => {
     console.log('[SW-LOG] Install event triggered. Service worker is installing.');
     // This ensures the new service worker activates immediately once installed.
     event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    console.log('[SW-LOG] Activate event triggered. Service worker is now active.');
    // This claims control of any open clients (tabs) so it can handle messages immediately.
    event.waitUntil(self.clients.claim());
});

// The main purpose of this service worker for FCM is to handle background notifications.
// It needs to be initialized.
try {
    // The client-side code passes the config as a URL parameter.
    const urlParams = new URL(location).searchParams;
    const configParam = urlParams.get('firebaseConfig');
    
    if (configParam) {
        firebaseConfig = JSON.parse(decodeURIComponent(configParam));
        console.log('[SW-LOG] Firebase config parsed successfully from URL.');

        if (typeof firebase !== 'undefined' && firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
            console.log('[SW-LOG] Firebase app initialized successfully.');
            
            // This is necessary for the service worker to handle background notifications
            const messaging = firebase.messaging();
            console.log('[SW-LOG] Firebase Messaging service obtained for background handling.');
        } else if (typeof firebase !== 'undefined') {
            console.log('[SW-LOG] Firebase already initialized.');
        } else {
             console.error('[SW-LOG] Firebase is not defined, though scripts were imported. This is unexpected.');
        }
    } else {
         console.error('[SW-LOG] CRITICAL: firebaseConfig parameter not found in service worker URL. Cannot initialize Firebase.');
    }

} catch (e) {
    console.error('[SW-LOG] CRITICAL: Error during Firebase initialization in service worker.', e);
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
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('[SW-LOG] Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('[SW-LOG] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    // Network falling back to cache for navigation requests.
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.match(event.request);
            })
        );
    }
});


// The browser itself handles displaying the notification when the app is in the background.
// We just need to listen for clicks on that notification.
self.addEventListener('notificationclick', event => {
    console.log('[SW-LOG] Notification click Received.');

    event.notification.close();

    // This is the key part: get the URL from the notification's data payload.
    const urlToOpen = event.notification.data?.FCM_MSG?.fcmOptions?.link || '/';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
            // Check if a window/tab is already open.
            const client = windowClients.find(c => c.url.startsWith(self.location.origin) && 'focus' in c);

            if (client) {
                // If a window is open, navigate it to the new URL and focus it.
                return client.navigate(urlToOpen).then(c => c.focus());
            } else {
                // If no window is open, open a new one.
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

console.log('[SW-LOG] Service worker script evaluation complete.');
