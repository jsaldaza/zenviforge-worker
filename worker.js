const NOTION_PAGE_ID = "1dd8e8096a97800aa251e18cb2ef5234";
const NOTION_DOMAIN = "www.notion.so";
const MY_DOMAIN = "zenviforge.dev";
const TITLE = "Zenviforge HQ";
const DESCRIPTION = "Innovación, tecnología y herramientas para construir el futuro.";
const FAVICON_URL = "https://zenviforge.dev/favicon.ico"; // Opcional

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const notionUrl = `https://${NOTION_DOMAIN}/${NOTION_PAGE_ID}`;

  const response = await fetch(notionUrl, {
    headers: {
      'User-Agent': request.headers.get('User-Agent')
    }
  });

  let text = await response.text();

  // Inyectamos título, descripción y favicon
  text = text
    .replace(/<title>(.*?)<\/title>/, `<title>${TITLE}</title>`)
    .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${DESCRIPTION}">`)
    .replace("</head>", `<link rel="icon" href="${FAVICON_URL}" type="image/x-icon"></head>`);

  // Opcional: estilo base para que se vea centrado o con mejor tipografía
  const cssOverride = `
    <style>
      body {
        font-family: 'Inter', sans-serif !important;
      }
      header, footer {
        display: none !important;
      }
    </style>
  `;

  text = text.replace("</head>", `${cssOverride}</head>`);

  return new Response(text, {
    headers: { 'content-type': 'text/html; charset=UTF-8' }
  });
}
