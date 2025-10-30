// Import Firebase SDKs
// Using compat scripts for broader compatibility within service workers.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// IMPORTANT: Replace the placeholder values below with your actual
// Firebase project configuration. You can find this in your
// Firebase project settings under "Your apps" > "Firebase SDK snippet" > "Config".
const firebaseConfig = {
  apiKey: "YOUR_VITE_FIREBASE_API_KEY",
  authDomain: "YOUR_VITE_FIREBASE_AUTH_DOMAIN",
  projectId: "YOUR_VITE_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_VITE_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "YOUR_VITE_FIREBASE_MESSAGING_SENDER_ID",
  appId: "YOUR_VITE_FIREBASE_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const CACHE_NAME = 'nepal-logos-church-v48'; // Increment version on significant changes

// These are cached on install for basic offline fallback.
const APP_SHELL_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logos-church-new-logo.jpg', // Main church logo (local path)
  '/logos-qr-code.png'          // Offering QR code (local path)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL_URLS))
      .then(() => self.skipWaiting()) // Force the new service worker to activate immediately
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return fetch(event.request).then(networkResponse => {
          if (networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          return cache.match(event.request).then(cachedResponse => {
            if (!cachedResponse && event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return cachedResponse || new Response(null, { status: 404 });
          });
        });
      })
    );
  }
});

self.addEventListener('push', event => {
  console.log('[Service Worker] Push Received.', event.data);
  
  let payload = {};
  try {
      if (event.data) {
          payload = event.data.json();
      }
  } catch(e) {
      console.error('[Service Worker] Push event data is not valid JSON.', e);
  }

  // Handle both `notification` and `data` payloads for flexibility
  const notification = payload.notification || {};
  const data = payload.data || {};

  const title = notification.title || data.title || 'Logos Church, Nepal';
  const options = {
    body: notification.body || data.body || 'You have a new notification.',
    icon: notification.icon || data.icon || '/logos-church-new-logo.jpg',
    badge: '/logos-church-new-logo.jpg',
    data: {
      url: data.url || '/'
    }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification click Received.');
  event.notification.close();
  const urlToOpen = new URL(event.notification.data.url, self.location.origin).href;

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true,
    }).then(windowClients => {
      // Check if a window is already open.
      for(let i=0; i<windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // If not, open a new window.
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
