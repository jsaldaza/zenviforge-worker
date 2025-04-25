export default {
	async fetch(request) {
		const url = new URL(request.url);
		const path = url.pathname;

		// 🧠 Frases técnicas inspiradoras
		const frases = [
			'El mejor código es el que no hay que escribir.',
			'Simplicidad es sofisticación suprema. — Leonardo da Vinci',
			'Aprendé, aplicá, compartí.',
			'No escribas código que no puedas explicar en voz alta.',
			'El software es una herramienta para amplificar ideas.',
			'Primero hacelo funcionar. Después hacelo elegante.',
			'Las decisiones técnicas también son decisiones humanas.',
			'Un bug es una oportunidad para aprender más del sistema.',
			'El código limpio no se escribe solo, pero se lee como si lo fuera.',
			'Automatizá lo que repetís. Documentá lo que importa.',
		];
		const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

		if (path === '/') {
			return new Response(
				`<!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Zenviforge • Innovación Técnica</title>
          <link rel="icon" href="https://fav.farm/🚀" />
          <meta name="description" content="Zenviforge: Donde el conocimiento técnico se transforma en innovación digital." />
          <meta property="og:title" content="Zenviforge • Innovación Técnica" />
          <meta property="og:description" content="Blog, experimentos y conocimiento técnico desde la trinchera dev." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zenviforge.dev" />
          <meta property="og:image" content="https://fav.farm/🚀" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body {
              font-family: 'Inter', sans-serif;
              background: linear-gradient(to bottom right, #1f2937, #4b5563);
              color: #f9fafb;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              padding: 2rem;
              text-align: center;
              animation: fadeIn 1.2s ease-in;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            h1 { font-size: 3rem; margin-bottom: 1rem; color: #ffffff; }
            p { font-size: 1.2rem; color: #d1d5db; margin-bottom: 1rem; }
            .frase { font-style: italic; color: #9ca3af; margin-top: 1rem; font-size: 1rem; max-width: 500px; }
            .button {
              background: #3b82f6;
              color: white;
              padding: 0.8rem 1.5rem;
              border: none;
              border-radius: 6px;
              font-size: 1rem;
              text-decoration: none;
              transition: background 0.3s ease;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
            }
            .button .arrow { display: inline-block; transition: transform 0.3s ease; }
            .button:hover { background: #2563eb; }
            .button:hover .arrow { transform: translateX(5px); }
            .links {
              margin-top: 2.5rem;
              display: flex;
              gap: 1rem;
              justify-content: center;
              flex-wrap: wrap;
            }
            .links a {
              color: #93c5fd;
              text-decoration: none;
              font-weight: 500;
            }
            footer {
              margin-top: 4rem;
              font-size: 0.9rem;
              color: #9ca3af;
            }
            @media (prefers-color-scheme: dark) {
              body {
                background: #0f172a;
                color: #f1f5f9;
              }
              a { color: #60a5fa; }
              .button { background: #2563eb; }
              .button:hover { background: #1d4ed8; }
              .frase { color: #cbd5e1; }
            }
          </style>
        </head>
        <body>
          <h1>🚀 Zenviforge</h1>
          <p>Donde el conocimiento técnico se transforma en innovación digital.</p>
          <p class="frase">“${fraseAleatoria}”</p>
          <a class="button" href="/blog">
            📚 Ir al Blog Técnico <span class="arrow">→</span>
          </a>
          <div class="links">
            <a href="https://github.com/jsaldaza" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
            <a href="https://www.linkedin.com/in/jsaldaza" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            <a href="mailto:contacto@zenviforge.dev" target="_blank" rel="noopener noreferrer">✉️ Contacto</a>
            <a href="/about">👨‍💻 Acerca de</a>
          </div>
          <footer>© 2025 Zenviforge. Todos los derechos reservados.</footer>
        </body>
      </html>`,
				{ headers: { 'content-type': 'text/html; charset=UTF-8' } }
			);
		}

		if (path === '/about') {
			return new Response(
				`<html><head><title>Acerca de</title></head><body><h1>Sobre Zenviforge</h1><p>Una iniciativa de conocimiento y desarrollo técnico.</p><a href="/">← Volver al inicio</a></body></html>`,
				{
					headers: { 'content-type': 'text/html' },
				}
			);
		}

		if (path === '/blog') {
			const categories = {
				'Cloudflare Workers': [
					{
						title: 'Mi primer artículo en Zenviforge',
						slug: 'primer-articulo',
						description: 'Exploramos cómo montar un blog técnico con Workers y Markdown.',
						date: '2025-04-24',
					},
				],
				'Markdown & Blogging': [
					{
						title: 'Escribiendo con estilo en Markdown',
						slug: 'markdown-tips',
						description: 'Tips y buenas prácticas para crear artículos legibles y profesionales.',
						date: '2025-04-25',
					},
				],
			};

			const content = Object.entries(categories)
				.map(([category, posts]) => {
					const list = posts
						.map(
							(post) => `
          <li>
            <a href="/blog/${post.slug}"><strong>${post.title}</strong></a><br/>
            <small>${post.date}</small><br/>
            <p>${post.description}</p>
          </li>`
						)
						.join('\n');

					return `
          <section>
            <h2>${category}</h2>
            <ul>${list}</ul>
          </section>`;
				})
				.join('\n');

			return new Response(
				`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Blog</title></head><body><h1>📝 Blog de Zenviforge</h1>${content}</body></html>`,
				{
					headers: { 'content-type': 'text/html; charset=UTF-8' },
				}
			);
		}

		if (path.startsWith('/blog/')) {
			const slug = path.replace('/blog/', '').replace(/\/$/, '');
			try {
				const res = await fetch(`https://zenviforge.dev/content/${slug}.md`);
				if (!res.ok) throw new Error('Not found');
				const md = await res.text();
				const { default: marked } = await import('marked');
				const fm = (await import('front-matter')).default;
				const { body: content, attributes: data } = fm(md);
				const html = marked(content);

				return new Response(
					`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>${data.title}</title></head><body><a href="/blog">← Volver</a><h1>${data.title}</h1><small>${data.date}</small><article>${html}</article></body></html>`,
					{
						headers: { 'content-type': 'text/html; charset=UTF-8' },
					}
				);
			} catch {
				return new Response('Artículo no encontrado', { status: 404 });
			}
		}

		return new Response('Ruta no encontrada', { status: 404 });
	},
};
