export default {
	async fetch(request) {
		const url = new URL(request.url);

		// === robots.txt ===
		if (url.pathname === '/robots.txt') {
			return new Response(`User-agent: *\nAllow: /\nSitemap: https://zenviforge.dev/sitemap.xml`, {
				headers: { 'content-type': 'text/plain' },
			});
		}

		// === sitemap.xml ===
		if (url.pathname === '/sitemap.xml') {
			return new Response(
				`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url><loc>https://zenviforge.dev/</loc></url>
        </urlset>`,
				{ headers: { 'content-type': 'application/xml' } }
			);
		}

		// === Proxy a Notion ===
		const notionPage = '1dd8e8096a97800aa251e18cb2ef5234';
		const notionURL = `https://www.notion.so/${notionPage}`;
		const notionRes = await fetch(notionURL, {
			headers: {
				'User-Agent': request.headers.get('User-Agent'),
			},
		});

		let html = await notionRes.text();

		// SEO y branding
		html = html.replace(/<title>(.*?)<\/title>/, '<title>Zenviforge HQ – Innovación y tecnología</title>').replace(
			'</head>',
			`
        <meta name="description" content="Blog y espacio de innovación de Zenviforge. Tecnología, herramientas y estrategia.">
        <link rel="icon" href="https://zenviforge.dev/favicon.ico" />
      </head>
      `
		);

		return new Response(html, {
			headers: { 'content-type': 'text/html; charset=UTF-8' },
		});
	},
};
