const V="astelecom-v2";
const SHELL=["./","index.html","style.css","config.js","manifest.webmanifest","icon-192.png","icon-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==V).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
 const r=e.request;if(r.method!=="GET")return;
 const u=new URL(r.url),same=u.origin===location.origin,cdn=u.hostname.endsWith("jsdelivr.net");
 if(!same&&!cdn)return;
 if(cdn){e.respondWith(caches.match(r).then(h=>h||fetch(r).then(n=>{if(n.ok){const c=n.clone();caches.open(V).then(x=>x.put(r,c))}return n})));return}
 e.respondWith(fetch(r).then(n=>{if(n.ok){const c=n.clone();caches.open(V).then(x=>x.put(r,c))}return n}).catch(()=>caches.match(r).then(h=>h||(r.mode==="navigate"?caches.match("index.html"):Response.error()))));
});
