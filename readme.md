# 🧠 Estructura técnica y flujo completo de Zenviforge

## 🚀 Objetivo del proyecto

Construir una **plataforma técnica minimalista** para publicar contenido educativo, artículos técnicos y documentación, utilizando **Cloudflare Workers**, **Markdown** y **Visual Studio Code** (o Notion como alternativa inicial).

---

## 🧩 Tecnologías y herramientas usadas

| Herramienta        | Propósito principal                                      |
|--------------------|----------------------------------------------------------|
| **Cloudflare Workers** | Hosting serverless, donde corre toda la lógica del sitio |
| **Wrangler CLI**   | Herramienta para compilar y desplegar el Worker          |
| **Visual Studio Code** | Editor local para gestionar código y Markdown            |
| **Markdown (.md)** | Formato liviano para escribir artículos con estilo       |
| **front-matter**   | Extrae metadatos (título, fecha, descripción) de los `.md` |
| **marked**         | Convierte Markdown a HTML dinámicamente                 |
| **GitHub**         | Control de versiones y backup                           |
| **Google Fonts**   | Tipografía personalizada (Inter)                        |
| **Modo oscuro CSS**| Estilo adaptativo al sistema del usuario                |

---

## 🧱 Estructura general del proyecto

```plaintext
zenviforge-worker/
├── content/                     # Aquí van los artículos en Markdown
│   └── primer-articulo.md
├── script/
│   └── newPost.js              # Script para generar nuevos artículos automáticamente
├── src/
│   └── index.js                # Código principal del Worker (rutas y lógica)
├── package.json                # Scripts y dependencias
└── wrangler.toml               # Configuración para desplegar con Wrangler
```

---

## 🗺️ Diagrama del flujo Happy Path

```markdown
1. ✍️ Escribís un artículo con:
   - `npm run new-post "Mi nuevo post"`
   - Se crea un `.md` en `/content` con título, fecha y estructura base

2. ✨ Escribís el contenido en Markdown
   - Usás títulos, listas, código, bloques quote, etc.

3. 🧠 El Worker (index.js):
   - Lee las rutas `/`, `/about`, `/blog`, `/blog/:slug`
   - `/blog` genera una lista con título, fecha, descripción
   - `/blog/slug` transforma el `.md` en HTML con `marked`

4. 🌐 `npm run deploy`
   - Wrangler sube el código a Cloudflare
   - Tu web queda online en `https://zenviforge.dev`
```

---

## 🎯 Para qué sirve este enfoque

Este setup es ideal para:

- Crear un **blog técnico personalizado**
- Documentar tus proyectos y publicar tutoriales
- Generar una **marca personal como desarrollador**
- Compartir conocimientos de forma profesional sin depender de plataformas como Medium
- Aplicar buenas prácticas de frontend, serverless y SEO básico

---

## 💡 Notion como alternativa (Fruition, Potion o Proxy)

También podés montar tu blog sobre Notion público, pero:

✅ Es rápido y sin código  
⚠️ Tiene límites de personalización y SEO  
✅ Ideal para contenido educativo más informal o microblogging

---

## 💎 Tips PRO & PRO ORO

### ⚡ PRO:
- Usá `front-matter` para definir SEO, meta y descripción única por post
- Activá `robots.txt` y `sitemap.xml` para mejorar el posicionamiento
- Mostrá enlaces internos entre posts para mejorar navegación

### 🥇 PRO ORO:
- Automatizá publicación con GitHub Actions (`deploy` cuando haya nuevo commit)
- Monetizá tus artículos con enlaces afiliados o botones de contacto/consultoría
- Creá `/cv`, `/resources`, `/labs` y `/newsletter` como extensiones naturales
- Usá frases técnicas como elemento de identidad en la landing
- Mantené tu estructura simple, pero escalable (¡como lo hicimos!)

---

## 🧘‍♂️ Conclusión

Zenviforge es un dojo digital: minimalista, potente y centrado en el contenido.  
Cada línea de código está pensada para escalar con vos.  
Ahora tenés un setup que podés entender, modificar y expandir.  

✨ ¡Tu conocimiento ahora tiene una base sólida donde vivir, crecer y brillar!

