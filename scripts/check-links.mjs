import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { routes } from '../src/pages.mjs';

let checked = 0;
const failures = [];
for (const route of routes) {
  const file = resolve('dist', route.path.slice(1), ...(route.path.endsWith('.html') ? [] : ['index.html']));
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"]*)"/g)) {
    const target = match[1];
    if (!target || target === '#') { failures.push(`${route.path}: destino vazio`); continue; }
    if (/^(https?:|mailto:|tel:|data:)/.test(target)) continue;
    const url = new URL(target.replace(/&amp;/g, '&'), 'https://local.test' + route.path);
    const pathname = decodeURIComponent(url.pathname);
    const dest = resolve('dist', '.' + pathname, ...(pathname.endsWith('/') ? ['index.html'] : []));
    try {
      await access(dest);
      if (url.hash) {
        const body = await readFile(dest, 'utf8');
        if (!body.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)) failures.push(`${route.path}: âncora ausente ${target}`);
      }
    } catch { failures.push(`${route.path}: arquivo ausente ${target}`); }
    checked++;
  }
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`${checked} referências locais verificadas em ${routes.length} páginas. Links externos não foram enviados ou validados.`);
