/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-05-11 14:57:02
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-05-13 15:33:27
 */
console.log(123);
const urls = {
  index: './index.html',
  sw: './scripts/sw1.js',
  img: './img/icon.png',
};

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v3').then(function(cache) {
      return cache.addAll([urls.index, urls.sw, urls.img]);
    }),
  );
});

self.addEventListener('activate', function(event) {
  console.log(event);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      console.log(23);
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});
