const CACHE_NAME = 'portfolio-cache-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/background.jpg',
    '/works.html',
    '/manifest.json',
    '/coach_two.jpg',
    '/cv.jpg',
    '/game.png',
    '/wallpapersden.com_programming-8k-cool_600x600.jpg',
    '/wallpapersden.com_stargazing-hd-pixel-art_600x600.jpg',
    '/ww.jpg',
    '/your-picture.jpeg',
    '/c#.png',
    '/coffee.png',
    '/css.jpg',
    '/download.jpg',
    '/html.jpg',
    '/java.png',
    '/js.png',
    '/python.jpg',
    '/mountain.jpg',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache); // Delete old caches
                    }
                })
            );
        })
    );
});