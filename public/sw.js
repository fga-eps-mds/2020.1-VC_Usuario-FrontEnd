var CACHE_NAME = 'vamos-cuidar-cache-v1';
var urlsToCache = [
  '/',
  '/manifest.json',
  '/index.html',
  '/img/icons/vamosCuidarIcon-72x72.png',
  '/img/icons/vamosCuidarIcon-96x96.png',
  '/img/icons/vamosCuidarIcon-128x128.png',
  '/img/icons/vamosCuidarIcon-144x144.png',
  '/img/icons/vamosCuidarIcon-152x152.png',
  '/img/icons/vamosCuidarIcon-192x192.png',
  '/img/icons/vamosCuidarIcon-384x384.png',
  '/img/icons/vamosCuidarIcon-512x512.png',
  '/img/icons/maskable_icon.png'
  // 'http://localhost:8080/perfil',
  // 'http://localhost:8080/criarpostagem',
  // 'http://localhost:8080/login',
  // 'src/assets/example.html',
  // 'src/components/Header.vue',
  // 'src/assets/stylesheets/font.scss',
  // 'src/assets/stylesheets/pallete.scss',
  // 'src/views/Home.vue'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });