import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { routes } from '../src/pages.mjs';
import { media } from '../src/content.mjs';

for (const item of Object.values(media)) {
  if (!item.src) continue;
  if (!item.src.startsWith('/media/') || item.src.includes('..')) throw new Error('Mídia deve ser um arquivo local de public/media/.');
  await access(resolve('public', item.src.slice(1)));
}
for (const route of routes) {
  const target = resolve('.' + (route.path.endsWith('.html') ? route.path : route.path + 'index.html'));
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, route.render());
}
console.log(`${routes.length} páginas estáticas geradas a partir de src/pages.mjs.`);
