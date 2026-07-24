const CACHE_NAME = 'aabshar-cache-v3';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/index.css',
  '/src/assets/images/aabshar_brand_logo.png',
  '/src/assets/images/hero_combined_bottles.png',
  '/src/assets/images/product_card_500ml.png',
  '/src/assets/images/product_card_1_5l.png',
  '/src/assets/images/b2b_gym_card_mockup.png',
  '/src/assets/images/b2b_riverdale_card_mockup.png',
  '/src/assets/images/b2b_nexora_card_mockup.png',
  '/src/assets/images/order_form_500ml.png',
  '/src/assets/images/order_form_1_5l.png',
  '/src/assets/images/abshar_mountain_scenery_1779999755087.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Failed to cache some assets on install:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Allow chrome-extension and dev socket calls to pass through normally
  if (
    event.request.url.startsWith('chrome-extension') || 
    event.request.url.includes('socket') || 
    event.request.url.includes('hmr') ||
    event.request.url.includes('__aistudio') ||
    event.request.url.includes('localhost') ||
    event.request.url.includes('run.app')
  ) {
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If offline and request is document, return standard offline response
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html') || new Response(
              '<div style="font-family: sans-serif; text-align: center; padding: 40px;"><h2>You are offline</h2><p>Aabshar is loaded from cache, but some fresh server content requires connection. Please check your network and retry.</p></div>',
              { headers: { 'Content-Type': 'text/html' } }
            );
          }
        });
      })
  );
});
