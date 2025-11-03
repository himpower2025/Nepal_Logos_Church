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
        // It's safer to not cache files that are part of the build output like tsx/css
        // as their names might be hashed. Caching the main entry points is enough.
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
  // We will use a network-first strategy to ensure content is always fresh.
  // This is better for a dynamic app than cache-first.
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

// --- PUSH NOTIFICATION HANDLING ---

self.addEventListener('push', event => {
  console.log('[Service Worker] Push Received.');
  
  let payload;
  try {
    payload = event.data.json();
  } catch (e) {
    console.error('Could not parse push notification payload as JSON.', e);
    // If the payload isn't JSON, we can't process it.
    // The browser might have already shown a basic notification if it was sent with a 'notification' block.
    return;
  }
  
  // The backend now sends a structured payload with both notification and data
  const { notification, data } = payload;
  
  const title = notification?.title || 'Logos Church';
  const options = {
    body: notification?.body || 'You have a new message.',
    icon: notification?.icon || '/logos-church-new-logo.jpg',
    badge: '/logos-church-new-logo.jpg', // For Android
    tag: notification?.tag || 'logos-church-notification',
    data: {
      // Pass the URL from the 'data' payload to the notification's data for the click event
      url: data?.url || '/',
    },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  // Get the URL to open from the notification's data
  const urlToOpen = event.notification.data.url;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // Check if a window/tab with the same URL is already open.
      for (const client of windowClients) {
        // Use a more lenient check for URLs with query params
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