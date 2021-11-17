self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static').then( cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './icons/icon-192x192.png',
        './icons/icon-512x512.png',
        'index.js',
        'db.js',
      ]);
    })
  );
  console.log('Install');
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then( response => {
      return response || fetch(event.request);
    })
  );
});
