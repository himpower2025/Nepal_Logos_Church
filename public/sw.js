
const CACHE_NAME = 'nepal-logos-church-v42'; // Increment version on significant changes

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
      fetch(event.request)
        .then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            if (networkResponse.type !== 'opaque') {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match(event.request).then(cachedResponse => {
            if (!cachedResponse && event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return cachedResponse;
          });
        })
    );
  }
});

self.addEventListener('push', event => {
  console.log('[Service Worker] Push Received.');
  const data = event.data ? event.data.json() : {
      body: 'You have a new notification.',
      url: '/'
  };
  const title = 'Logos Church, Nepal';
  const options = {
    body: data.body,
    icon: '/logos-church-new-logo.jpg',
    badge: '/logos-church-new-logo.jpg', // Icon for the notification tray
    data: {
      url: data.url || '/' // Fallback URL
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
