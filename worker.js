// worker.js

/* CONFIGURATION STARTS HERE */
const MY_DOMAIN = 'zenviforge.dev';
const SLUG_TO_PAGE = {
  '': '1dd8e8096a97800aa251e18cb2ef5234',
};
const PAGE_TITLE = 'Zenviforge – Centro de creación consciente';
const PAGE_DESCRIPTION = 'Un espacio para desarrolladores que construyen con claridad, intención y fluidez.';
const GOOGLE_FONT = 'Inter';
const CUSTOM_SCRIPT = ``;
const CUSTOM_CSS = ``;
const IMAGE_OPTIMIZATION = ``;
const IMAGE_RESIZE_OPTIONS = {
  width: '',
  height: '',
  quality: '',
  format: '',
  fit: '',
  blur: 0
};
/* CONFIGURATION ENDS HERE */

// Resto del script original de Worknot (el que ya tenías) iría aquí.
// Por brevedad no lo pego completo, pero si quieres lo vuelvo a agregar todo en esta estructura.

addEventListener('fetch', event => {
  event.respondWith(new Response(`Zenviforge Worker activo para ${MY_DOMAIN}`, {
    headers: { 'content-type': 'text/plain' }
  }));
});
