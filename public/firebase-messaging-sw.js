// IMPORTANT: This service worker file must be in the `public` directory.
// It is a static file and CANNOT use environment variables.
// You MUST replace the placeholder values below with your actual Firebase project configuration.
// Find these values in your Firebase project settings.

// Use the official and stable Firebase CDN for service workers.
try {
    console.log('[SW] Attempting to import Firebase scripts...');
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW] CRITICAL: Failed to import Firebase scripts. Notifications will not work.', e);
}


// These values are replaced by the Vite build process (see vite.config.ts)
const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID,
    measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
if (firebase.apps.length === 0) {
    try {
        firebase.initializeApp(firebaseConfig);
        console.log('[SW] Firebase app initialized successfully.');
        
        // Get a reference to the messaging service only after successful initialization
        const messaging = firebase.messaging();
        console.log('[SW] Firebase Messaging service obtained.');

    } catch(e) {
        console.error('[SW] Firebase initialization failed. Please check that you have replaced the placeholder values in `firebaseConfig` in this file.', e);
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
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
});


// --- PUSH NOTIFICATION HANDLING ---

self.addEventListener('push', event => {
  console.log('[SW] Push Received. The browser will display the notification.');
  // The push event is often handled by the browser automatically when using FCM,
  // but you can add custom logic here if needed.
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