self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('my-cache').then(function(cache){
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/icon.png' // cachear
            ]);
        })
    );
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});
