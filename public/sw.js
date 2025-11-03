const CACHE_NAME = 'logos-church-cache-v53';
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
        console.log('Opened cache');
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
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

// --- PUSH NOTIFICATION HANDLING (HYBRID: notification + data PAYLOAD) ---

self.addEventListener('push', event => {
  // With the hybrid payload, the browser automatically handles showing the notification
  // based on the `notification` object in the push payload.
  // This listener is kept for potential future logic or logging, but the core
  // notification display is now handled by the browser for maximum reliability.
  console.log('[Service Worker] Push Received. Notification will be displayed by the browser.');
});

self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  // Get the URL to open from the notification's data payload.
  // This is sent from our backend in the `data` part of the FCM message.
  const urlToOpen = event.notification.data.url;

  if (!urlToOpen) {
    console.log('No URL in notification data to open.');
    return;
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // Check if a window/tab with the same URL is already open.
      for (const client of windowClients) {
        const clientUrl = new URL(client.url);
        const targetUrl = new URL(urlToOpen, self.location.origin);
        if (clientUrl.href === targetUrl.href && 'focus' in client) {
          return client.focus();
        }
      }
      // If no window is found, open a new one.
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
