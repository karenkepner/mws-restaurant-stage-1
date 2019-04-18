const myCache = 'v1'

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(myCache).then(function(cache) {
      return cache.addAll(
        "/",
        "/index.html",
        "/restaurant.html",
        "/css/styles.css",
        "/js/main.js",
        "/js/restaurant_info.js",
        "js/dbhelper.js",
        "/data/restaurants.json"
      )
    })
  )
})