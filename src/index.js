import { marked } from 'marked';

export default {
	async fetch(request) {
		const url = new URL(request.url);
		const pathname = url.pathname;

		// === Ruta para blog ===
		if (pathname.startsWith('/blog')) {
			const slug = pathname.replace('/blog/', '').replace(/\/$/, '') || 'primer-articulo';
			try {
				const article = await fetch(`https://zenviforge.dev/content/${slug}.md`);
				if (!article.ok) throw new Error('Not found');
				const md = await article.text();
				const html = marked(md);

				return new Response(
					`
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${slug.replace(/-/g, ' ')}</title>
            <style>
              body { font-family: sans-serif; max-width: 700px; margin: auto; padding: 2rem; line-height: 1.6; }
              h1, h2, h3 { color: #111; }
              blockquote { border-left: 3px solid #ccc; padding-left: 1rem; color: #555; }
              code { background: #f4f4f4; padding: 2px 4px; border-radius: 4px; }
              a { color: #0070f3; text-decoration: none; }
            </style>
          </head>
          <body>
            ${html}
          </body>
          </html>
          `,
					{ headers: { 'content-type': 'text/html;charset=UTF-8' } }
				);
			} catch (err) {
				return new Response('Artículo no encontrado', { status: 404 });
			}
		}

		// Home básica
		return new Response('¡Hola desde Zenviforge! Entrá a /blog para ver los artículos.', {
			headers: { 'content-type': 'text/plain' },
		});
	},
};
