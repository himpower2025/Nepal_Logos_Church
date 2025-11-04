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
  // This is more reliable than constructing it from pieces.
  const urlToOpen = event.notification.data?.FCM_MSG?.data?.url || event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // Check if a window/tab is already open.
      for (const client of windowClients) {
        // Focus any existing tab of the app, regardless of the exact URL path.
        // This provides a better user experience than opening a new tab when the app is already open.
        if (client.url.startsWith(self.location.origin) && 'focus' in client) {
          // If we focus an existing client, we can't easily navigate it to the
          // specific URL from the service worker, but focusing is better than a new tab.
          // The app's own logic will handle the deep link if the URL was changed on focus.
          return client.focus();
        }
      }
      // If no window is found, open a new one with the correct URL.
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});