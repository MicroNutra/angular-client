importScripts('./cache-polyfill.js')

self.addEventListener('install', (e) => {
 e.waitUntil(
   caches.open('microLens').then(cache => cache.addAll([
     '../',
     '../index.html'
    ])
   )
 )
})

self.addEventListener('fetch', (event) => {
  console.log(event.request.url)
  event.respondWith(caches.match(event.request)
    .then(response => response || fetch(event.request))
  )
})
