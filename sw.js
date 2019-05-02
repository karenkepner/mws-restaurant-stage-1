const myCache = 'v1';
const cacheList = [
        "/",
        "/restaurant/",
        "/index.html",
        "/restaurant.html",
        "/css/styles.css",
        "/js/main.js",
        "/js/restaurant_info.js",
        "/js/dbhelper.js",
        "/data/restaurants.json",
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
        "/img/9.jpg",
        "/img/10.jpg"
      ];

self.addEventListener('install', event => {
  console.log("install event");
  event.waitUntil(
    caches.open(myCache)
      .then( cache => {
        cache.addAll(cacheList)
      })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then( response => {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      } 
    })
  );
 });