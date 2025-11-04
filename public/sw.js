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

// --- PUSH NOTIFICATION HANDLING ---

self.addEventListener('push', event => {
  // The browser will automatically display the notification since we're sending
  // a `notification` payload from the backend. This event listener is kept
  // for logging or potential future use.
  console.log('[Service Worker] Push Received. The browser will display the notification.');
});

self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  // The backend now sends the full URL in `fcmOptions.link` which is accessible here.
  const urlToOpen = event.notification.data?.FCM_MSG?.fcmOptions?.link || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // Check if a window/tab is already open.
      const client = windowClients.find(c => c.url.startsWith(self.location.origin) && 'focus' in c);

      if (client) {
        // If a client is found, navigate it to the correct URL and focus it.
        // This is better than just focusing, as it ensures the user lands on the correct page.
        return client.navigate(urlToOpen).then(c => c.focus());
      } else {
        // If no window is found, open a new one with the correct URL.
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
