const CACHE='browser-app-v5',ROOT=self.registration.scope;
const FILES=['','index.html','shortcut.html','privacy-policy.html','manifest.json','icon-192.png','icon-512.png'].map(f=>ROOT+f);
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled(FILES.map(u=>c.add(u)))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r})
    .catch(()=>caches.match(e.request).then(m=>m||(e.request.mode==='navigate'?caches.match(ROOT+'index.html'):undefined))));
});
