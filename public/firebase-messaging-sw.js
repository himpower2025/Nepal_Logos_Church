// IMPORTANT: This service worker file must be in the `public` directory.

try {
    console.log('[SW] Attempting to import Firebase scripts...');
    // Use a specific, stable version of the Firebase SDK
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW] CRITICAL: Failed to import Firebase scripts. Notifications will not work.', e);
}

// =================================================================================
// TODO: Replace these placeholder values with your actual Firebase project config.
// You can find these values in your Firebase project settings under "General".
// =================================================================================
const firebaseConfig = {
  apiKey: "AIzaSyAP9kw58KFVZ_abiiLiJUFqSPOjLSQraC0", // <-- REPLACE with your API Key
  authDomain: "logos-church-nepal.firebaseapp.com", // <-- REPLACE with your Auth Domain
  projectId: "logos-church-nepal", // <-- REPLACE with your Project ID
  storageBucket: "logos-church-nepal.firebasestorage.app", // <-- REPLACE with your Storage Bucket
  messagingSenderId: "869546960167", // <-- REPLACE with your Messaging Sender ID
  appId: "1:869546960167:web:19a41c46ef253617683502", // <-- REPLACE with your App ID
};

// Initialize Firebase
if (typeof firebase !== 'undefined' && firebase.apps.length === 0) {
    // Basic validation to ensure placeholders are replaced
    if (firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("YOUR_")) {
        try {
            firebase.initializeApp(firebaseConfig);
            console.log('[SW] Firebase app initialized successfully.');
            
            // This is necessary for the service worker to handle background notifications
            const messaging = firebase.messaging();
            console.log('[SW] Firebase Messaging service obtained for background handling.');

        } catch(e) {
            console.error('[SW] Firebase initialization failed.', e);
        }
    } else {
        console.warn("[SW] Firebase config is missing or contains placeholder values. Firebase will not be initialized.");
    }
} else {
    if (typeof firebase === 'undefined') {
        console.error('[SW] Firebase is not defined. Scripts might have failed to load.');
    } else {
        console.log('[SW] Firebase already initialized.');
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
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Opened cache');
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
            console.log('[SW] Deleting old cache:', cacheName);
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


// --- PUSH NOTIFICATION HANDLING ---

self.addEventListener('push', event => {
  console.log('[SW] Push Received. The browser will display the notification.');
  // The push event is handled by the browser automatically when using FCM.
});

self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification click Received.');

  event.notification.close();

  const urlToOpen = event.notification.data?.FCM_MSG?.fcmOptions?.link || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // Check if a window/tab is already open.
      const client = windowClients.find(c => c.url.startsWith(self.location.origin) && 'focus' in c);

      if (client) {
        return client.navigate(urlToOpen).then(c => c.focus());
      } else {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
