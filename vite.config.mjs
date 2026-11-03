import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { routes } from './src/pages.mjs';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: Object.fromEntries(routes.map((r, i) => [`page-${i}`, resolve('.' + (r.path.endsWith('.html') ? r.path : r.path + 'index.html'))])),
    },
  },
});
