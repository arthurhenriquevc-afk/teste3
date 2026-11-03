import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { routes } from '../src/pages.mjs';
import { media } from '../src/content.mjs';
import { siteBase } from './site-base.mjs';

const base = siteBase();

for (const item of Object.values(media)) {
  if (!item.src) continue;
  if (!item.src.startsWith('/media/') || item.src.includes('..')) throw new Error('Mídia deve ser um arquivo local de public/media/.');
  await access(resolve('public', item.src.slice(1)));
}
for (const route of routes) {
  const target = resolve('.' + (route.path.endsWith('.html') ? route.path : route.path + 'index.html'));
  await mkdir(dirname(target), { recursive: true });
  let html = route.render();
  if (base !== '/') html = html.replace(/(<a\b[^>]*\bhref=")\/(?!\/)/g, (_, start) => start + base);
  if (process.env.PREVIEW_SITE === '1' && !html.includes('name="robots"')) {
    html = html.replace('</head>', '<meta name="robots" content="noindex,nofollow"></head>');
  }
  await writeFile(target, html);
}
console.log(`${routes.length} páginas estáticas geradas a partir de src/pages.mjs.`);
