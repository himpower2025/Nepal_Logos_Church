// Use the official and stable Firebase CDN for service workers.
try {
    console.log('[SW] Attempting to import Firebase scripts...');
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW] CRITICAL: Failed to import Firebase scripts. This is why notifications will not work.', e);
}


// =================================================================================
// [★★★★★ 가장 중요 ★★★★★]
// 아래의 값들을 실제 Firebase 프로젝트 설정 값으로 반드시 교체해야 합니다!
// 이 값들은 Vercel 프로젝트의 환경 변수나 .env.local 파일에서 찾을 수 있습니다.
// 이 부분을 수정하지 않으면 알림 기능이 절대 동작하지 않습니다.
// =================================================================================
const firebaseConfig = {
    // 예: "AIzaSy...
    apiKey: "AIzaSyAP9kw58KFVZ_abiiLiJUFqSPOjLSQraC0", // <== 여기에 실제 API 키를 입력하세요.
    
    // 예: "your-project-id.firebaseapp.com"
    authDomain: "logos-church-nepal.firebaseapp.com", // <== 여기에 실제 Auth Domain을 입력하세요.
    
    // 예: "your-project-id"
    projectId: "logos-church-nepal", // <== 여기에 실제 Project ID를 입력하세요.
    
    // 예: "your-project-id.appspot.com"
    storageBucket: "logos-church-nepal.firebasestorage.app", // <== 여기에 실제 Storage Bucket을 입력하세요.
    
    // 예: "123456789012"
    messagingSenderId: "869546960167", // <== 여기에 실제 Messaging Sender ID를 입력하세요.
    
    // 예: "1:12345...
    appId: "1:869546960167:web:19a41c46ef253617683502", // <== 여기에 실제 App ID를 입력하세요.
    
    // 예: "G-..."
    measurementId: "G-6DQ7BDJ8GX" // <== 여기에 실제 Measurement ID를 입력하세요.
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
        console.error('[SW] Firebase initialization failed.', e);
    }
}


// --- PWA Caching Logic (from original sw.js) ---
const CACHE_NAME = 'logos-church-cache-v55'; // Version bumped to ensure update
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
  // We only handle navigation requests with a network-first strategy.
  // For other requests (CSS, JS, images), we let the browser handle it,
  // relying on standard HTTP caching. This avoids issues with opaque responses
  // from cross-origin CDNs.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        })
        .catch(() => {
          // Network failed, try to serve from cache.
          return caches.match(event.request);
        })
    );
  }
});


// --- PUSH NOTIFICATION HANDLING ---

self.addEventListener('push', event => {
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
