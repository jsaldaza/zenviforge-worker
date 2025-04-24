// worker.js

const MY_DOMAIN = "zenviforge.dev";

addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(`Zenviforge Worker activo para ${MY_DOMAIN}`, {
      headers: { "content-type": "text/plain" },
    })
  );
});
