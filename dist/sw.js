importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/style.css",
    "revision": "919f02fb2c6c2ea75d29c4177b63440e"
  },
  {
    "url": "img/back.png",
    "revision": "7fe8cac425783b2df3c348c2db4a6514"
  },
  {
    "url": "img/big-card.png",
    "revision": "2bc04e8b20d00d36b560cb9d02a814a9"
  },
  {
    "url": "img/little-card.png",
    "revision": "7b4021f7f1aee8b88fb7b65c120e2525"
  },
  {
    "url": "img/medium-card.png",
    "revision": "76da1f34c606784b826e39f057d94fea"
  },
  {
    "url": "index.html",
    "revision": "6953b2d18f2f995ea559be285a161eae"
  },
  {
    "url": "js/script.js",
    "revision": "97a1364602eb77bc79b5552cc8891e7e"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
