console.log('[SW-LOG] v20: Service Worker file evaluating.');

try {
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
    console.log('[SW-LOG] Firebase scripts imported successfully.');
} catch (e) {
    console.error('[SW-LOG] CRITICAL: Failed to import Firebase scripts.', e);
}

// --- 배지 카운트 IndexedDB 관리 함수 ---
const getBadgeCount = () => {
    return new Promise((resolve) => {
        const request = indexedDB.open('badge-store', 1);
        request.onupgradeneeded = (e) => {
            e.target.result.createObjectStore('badges', { keyPath: 'id' });
        };
        request.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction('badges', 'readonly');
            const store = tx.objectStore('badges');
            const getReq = store.get('count');
            getReq.onsuccess = () => resolve(getReq.result?.value || 0);
            getReq.onerror = () => resolve(0);
        };
        request.onerror = () => resolve(0);
    });
};

const setBadgeCount = (count) => {
    return new Promise((resolve) => {
        const request = indexedDB.open('badge-store', 1);
        request.onupgradeneeded = (e) => {
            e.target.result.createObjectStore('badges', { keyPath: 'id' });
        };
        request.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction('badges', 'readwrite');
            const store = tx.objectStore('badges');
            store.put({ id: 'count', value: count });
            tx.oncomplete = () => resolve();
            tx.onerror = () => resolve();
        };
        request.onerror = () => resolve();
    });
};

const saveTabBadgeCount = (page) => {
    return new Promise((resolve) => {
        const request = indexedDB.open('tab-badge-store', 1);
        request.onupgradeneeded = (e) => {
            e.target.result.createObjectStore('tabBadges', { keyPath: 'page' });
        };
        request.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction('tabBadges', 'readwrite');
            const store = tx.objectStore('tabBadges');
            const getReq = store.get(page);
            getReq.onsuccess = () => {
                const current = getReq.result?.count || 0;
                store.put({ page, count: current + 1 });
            };
            tx.oncomplete = () => resolve();
            tx.onerror = () => resolve();
        };
        request.onerror = () => resolve();
    });
};

const firebaseConfig = {
    apiKey: "__VITE_FIREBASE_API_KEY__",
    authDomain: "__VITE_FIREBASE_AUTH_DOMAIN__",
    projectId: "__VITE_FIREBASE_PROJECT_ID__",
    storageBucket: "__VITE_FIREBASE_STORAGE_BUCKET__",
    messagingSenderId: "__VITE_FIREBASE_MESSAGING_SENDER_ID__",
    appId: "__VITE_FIREBASE_APP_ID__",
    measurementId: "__VITE_FIREBASE_MEASUREMENT_ID__",
};

const hasAllConfig = Object.values(firebaseConfig).every(val => val && !val.startsWith('__'));

if (typeof firebase !== 'undefined' && hasAllConfig) {
    try {
        firebase.initializeApp(firebaseConfig);
        if (firebase.messaging.isSupported()) {
            const messaging = firebase.messaging();

            messaging.onBackgroundMessage(function(payload) {
                console.log('[SW-LOG] Background message received:', payload);

                const notificationTitle = payload.notification?.title || "New Message";
                const notificationOptions = {
                    body: payload.notification?.body || "",
                    icon: '/logos-church-new-logo.jpg',
                    badge: '/logos-church-new-logo.jpg',
                    tag: payload.data?.tag || 'logos-church-notification',
                    data: {
                        url: payload.fcmOptions?.link || payload.data?.url || self.origin,
                    }
                };

                // 배지 카운트 증가
                getBadgeCount().then(async (count) => {
                    const newCount = count + 1;
                    await setBadgeCount(newCount);
                    if (navigator.setAppBadge) {
                        navigator.setAppBadge(newCount).catch(() => {
                            navigator.setAppBadge();
                        });
                    }
                });
                const targetUrl = payload.fcmOptions?.link || payload.data?.url || '';
                const pageMatch = targetUrl.match(/[?&]page=([^&]+)/);
                const targetPage = pageMatch ? pageMatch[1] : 'news';
                self.clients.matchAll({ type: 'window', includeUncontrolled: true })
                    .then(clients => {
                        clients.forEach(client => {
                            client.postMessage({
                                type: 'NEW_NOTIFICATION',
                                page: targetPage
                            });
                        });
            });

                return self.registration.showNotification(notificationTitle, notificationOptions);
            });
            console.log('[SW-LOG] Background message handler set up.');
        }
    } catch(e) {
        console.error('[SW-LOG] Firebase initialization error:', e);
    }
}

// --- PWA Caching Logic ---
const CACHE_NAME = 'logos-church-cache-v14';
const CRITICAL_URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/logos-church-new-logo.jpg',
    '/logos-qr-code.png',
    '/manifest.json',
];

self.addEventListener('install', event => {
    console.log('[SW-LOG] Install event.');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(CRITICAL_URLS_TO_CACHE))
            .then(() => self.skipWaiting())
            .catch(error => console.error('[SW-LOG] Cache install failed:', error))
    );
});

self.addEventListener('activate', event => {
    console.log('[SW-LOG] Activate event.');
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => caches.match('/'))
        );
        return;
    }
    event.respondWith(
        caches.match(event.request).then(response =>
            response || fetch(event.request).then(fetchResponse =>
                caches.open(CACHE_NAME).then(cache => {
                    if (fetchResponse.status === 200 && event.request.method === 'GET') {
                        cache.put(event.request, fetchResponse.clone());
                    }
                    return fetchResponse;
                })
            )
        )
    );
});

self.addEventListener('notificationclick', event => {
    console.log('[SW-LOG] Notification click received.');
    event.notification.close();
    const urlToOpen = event.notification.data?.url || '/';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
            const client = windowClients.find(c =>
                c.url.startsWith(self.location.origin) && 'focus' in c
            );
            if (client) {
                return client.navigate(urlToOpen).then(c => c.focus());
            }
            return clients.openWindow(urlToOpen);
        })
    );
});

console.log('[SW-LOG] Service worker script evaluation complete.');