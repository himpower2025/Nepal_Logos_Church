// IMPORTANT: Import Firebase scripts for compatibility in service workers.
importScripts("https://aistudiocdn.com/firebase@^12.4.0/firebase-app-compat.js");
importScripts("https://aistudiocdn.com/firebase@^12.4.0/firebase-messaging-compat.js");

// =================================================================================
// [중요] 사용자 작업 필요
// 아래의 플레이스홀더 값들을 실제 Firebase 프로젝트 설정 값으로 교체해주세요.
// 이 값들은 VITE 환경 변수 (.env.local 파일 등)에 있는 값과 동일합니다.
// 예: "YOUR_VITE_FIREBASE_API_KEY" -> 실제 API 키 값
// =================================================================================
const firebaseConfig = {
    apiKey: "AIzaSyAP9kw58KFVZ_abiiLiJUFqSPOjLSQraC0",
    authDomain: "logos-church-nepal.firebaseapp.com",
    projectId: "logos-church-nepal",
    storageBucket: "logos-church-nepal.firebasestorage.app",
    messagingSenderId: "869546960167",
    appId: "1:869546960167:web:19a41c46ef253617683502",
    measurementId: "G-6DQ7BDJ8GX"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

// Get a reference to the messaging service
const messaging = firebase.messaging();

// --- PWA Caching Logic (from original sw.js) ---
const CACHE_NAME = 'logos-church-cache-v54'; // Version bumped to ensure update
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
