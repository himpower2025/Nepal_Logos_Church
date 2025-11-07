
// IMPORTANT: This service worker file must be in the `public` directory.

try {
    console.log('[SW] Attempting to import Firebase scripts...');
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW] CRITICAL: Failed to import Firebase scripts. Notifications will not work.', e);
}

// Get Firebase config from URL query parameters
const urlParams = new URLSearchParams(self.location.search);
const firebaseConfig = {
    apiKey: urlParams.get('apiKey'),
    authDomain: urlParams.get('authDomain'),
    projectId: urlParams.get('projectId'),
    storageBucket: urlParams.get('storageBucket'),
    messagingSenderId: urlParams.get('messagingSenderId'),
    appId: urlParams.get('appId'),
    measurementId: urlParams.get('measurementId')
};

const missingKeys = Object.entries(firebaseConfig)
    .filter(([key, value]) => !value && key !== 'measurementId') // measurementId is often optional
    .map(([key]) => key);

// Initialize Firebase
if (missingKeys.length === 0 && typeof firebase !== 'undefined' && firebase.apps.length === 0) {
    try {
        firebase.initializeApp(firebaseConfig);
        console.log('[SW] Firebase app initialized successfully.');
        
        // Get a reference to the messaging service only after successful initialization
        const messaging = firebase.messaging();
        console.log('[SW] Firebase Messaging service obtained.');

    } catch(e) {
        console.error('[SW] Firebase initialization failed.', e);
    }
} else {
    if (missingKeys.length > 0) {
        console.warn(
            `[SW] Firebase config from URL parameters is incomplete. The following keys are missing: ${missingKeys.join(', ')}.`,
            "This usually happens when environment variables (like VITE_FIREBASE_API_KEY) were not set in the deployment environment (e.g., Vercel).",
            "Firebase will not be initialized, and push notifications will fail."
        );
    } else if (typeof firebase === 'undefined') {
        console.warn('[SW] Firebase is not defined. Initialization skipped.');
    } else if (firebase.apps.length > 0) {
        console.warn('[SW] Firebase is already initialized. Initialization skipped.');
    } else {
        console.warn('[SW] An unknown issue prevented Firebase initialization.');
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
  // This strategy is a "Network falling back to cache" for navigation requests.
  // It's good for ensuring users get the latest version if they are online.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  }
  // For other requests (CSS, JS, images), you might want a "Cache First" strategy
  // to make the app load faster, but that can be added later if needed.
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
