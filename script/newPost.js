// script/newPost.js
import fs from 'fs';
import path from 'path';

const title = process.argv.slice(2).join(' ');

if (!title) {
	console.error('⚠️  Tenés que escribir un título. Ejemplo: npm run new-post "Mi nuevo artículo"');
	process.exit(1);
}

const slug = title
	.toLowerCase()
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/(^-|-$)/g, '');

const date = new Date().toISOString().split('T')[0];

const content = `---
title: "${title}"
date: "${date}"
description: "Agregá una breve descripción para este artículo."
---

# ${title}

Escribí acá tu artículo en Markdown ✍️
`;

const filePath = path.join('content', `${slug}.md`);

fs.writeFileSync(filePath, content);
console.log(`✅ Nuevo artículo creado: content/${slug}.md`);
