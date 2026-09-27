/* ============================================================
   Service worker: enables "Add to Home Screen" + basic offline
   access. Uses a NETWORK-FIRST strategy on purpose — since this
   site gets updated often (new results, roster changes, etc.),
   we always try to fetch the latest version first, and only
   fall back to a cached copy if there's no internet connection.
   This avoids the classic PWA problem of showing people an
   outdated page even though a newer one exists.

   Bump CACHE_VERSION any time you want to force old caches to
   clear out (not usually necessary — normal edits don't need this).
   ============================================================ */
const CACHE_VERSION = 'mlk-xc-v1';

const APP_SHELL = [
  'index.html',
  'roster.html',
  'results.html',
  'records.html',
  'style.css',
  'quotes.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_VERSION).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests for same-origin files (skip API calls like weather).
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
