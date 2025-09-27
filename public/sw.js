const CACHE_NAME = 'nepal-logos-church-v11'; // Increment version on significant changes

// These are cached on install for basic offline fallback.
const APP_SHELL_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo192.png',
  '/logo512.png',
  '/apple-touch-icon.png',
  'https://i.ibb.co/9g0P5P3/logos-qr-code.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL_URLS))
      .then(() => self.skipWaiting())
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
  // Use a "Network falling back to cache" strategy for all GET requests.
  // This ensures that online users always get the latest content.
  // Offline users will get the last cached version.
  if (event.request.method === 'GET') {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          // If the fetch is successful, cache the response for offline use.
          return caches.open(CACHE_NAME).then(cache => {
            // Do not cache opaque responses (e.g., from third-party CDNs without CORS)
            // as we can't determine if they were successful.
            if (networkResponse.type !== 'opaque') {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
        .catch(() => {
          // If the network request fails (e.g., offline),
          // try to serve the response from the cache.
          return caches.match(event.request).then(cachedResponse => {
            // For navigation requests that fail and are not in cache,
            // always return the cached index.html as a fallback for the SPA.
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
  const data = event.data ? event.data.json() : {
      body: 'You have a new notification.',
      url: '/'
  };
  const title = 'Nepal Logos Church';
  const options = {
    body: data.body,
    icon: '/logo192.png',
    badge: '/logo192.png', // Badge should be monochrome, but this works for demo
    data: {
      url: data.url
    }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const urlToOpen = new URL(event.notification.data.url || '/', self.location.origin).href;

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