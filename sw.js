/* Academia de DJ — service worker: offline-first para app 100% estática. */
const CACHE = "dj-academy-v9";
const MEDIA = "dj-academy-media-v1"; // mp3s imutáveis — sobrevive a bumps do CACHE (evita re-download de ~12MB)
const ASSETS = [
  "./",
  "./index.html",
  "./curriculum.js",
  "./manifest.json",
  "./tracks/manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== MEDIA).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  const path = new URL(req.url).pathname;

  /* mp3s: cache-first (imutáveis; se mudarem, muda o nome do ficheiro).
     put dentro de e.waitUntil — sem ele o SW pode morrer a meio do streaming
     de ~2MB (iOS mata SWs agressivamente) e a faixa nunca fica offline. */
  if (path.endsWith(".mp3")) {
    e.respondWith(
      caches.open(MEDIA).then((c) =>
        c.match(req).then((hit) => {
          if (hit) return hit;
          return fetch(req).then((res) => {
            if (res && res.status === 200) { // 200 apenas — cache.put rejeita 206 (Range)
              const copy = res.clone();
              e.waitUntil(c.put(req, copy).catch(() => {}));
            }
            return res;
          });
        })
      )
    );
    return;
  }

  /* manifest das faixas: network-first (senão o manifest velho em cache
     dessincroniza BPM/tom dos mp3s novos), fallback cache p/ offline */
  if (path.endsWith("/tracks/manifest.json")) {
    e.respondWith(
      fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          e.waitUntil(caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {}));
        }
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  /* resto: stale-while-revalidate */
  e.respondWith(
    caches.match(req).then((cached) => {
      const fresh = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            e.waitUntil(caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {}));
          }
          return res;
        })
        .catch(() => cached);
      return cached || fresh;
    })
  );
});
