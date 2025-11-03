// This service worker now relies on the browser's native handling of 'notification' payloads for display,
// which is more robust and works from a cold start without needing complex initialization.
// The main responsibilities are now caching and handling notification clicks.

const CACHE_NAME = 'nepal-logos-church-v50'; // Increment version to force update

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
    }).then(() => self.clients.claim()) // Take control of all open clients immediately
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


self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification click Received.');
  event.notification.close();
  // The 'data' payload from the cloud function is automatically attached to the notification.
  const urlToOpen = new URL(event.notification.data.url, self.location.origin).href;

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true,
    }).then(windowClients => {
      // Check if a window is already open and focused.
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