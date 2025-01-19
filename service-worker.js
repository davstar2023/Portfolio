const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/projects.html',
    '/works.html',
    '/manifest.json',
    '/coach_two.jpg',
    '/cv.jpg',
    '/game.png',
    '/wallpapersden.com_programming-8k-cool_600x600.jpg',
    '/wallpapersden.com_stargazing-hd-pixel-art_600x600.jpg',
    '/ww.jpg',
    '/your-picture.jpeg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
