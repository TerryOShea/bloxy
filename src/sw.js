const CACHE_NAME = "v3";
const URLS_TO_CACHE = ["/", "public/main.css", "public/main.js"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName === CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
