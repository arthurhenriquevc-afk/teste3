import test from 'node:test';
import assert from 'node:assert/strict';
import { routes, escape } from '../src/pages.mjs';
import { services } from '../src/content.mjs';

test('conteúdo interpolado é escapado contra injeção de HTML e atributos', () => {
  assert.equal(escape('<img src=x onerror="alert(1)"> & \'x\''), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt; &amp; &#39;x&#39;');
});
test('todas as páginas de serviço têm rota própria e o mesmo contato oficial', () => {
  assert.equal(new Set(services.map(s => s.slug)).size, 10);
  for (const service of services) {
    const route = routes.find(r => r.path === `/servicos/${service.slug}/`);
    assert.ok(route, service.slug);
    const html = route.render();
    assert.ok(html.includes(service.name));
    assert.ok(html.includes('tel:+5547996490312'));
    assert.ok(!html.includes('3333-0000'));
  }
});
test('cada página tem título, descrição, idioma e um único h1', () => {
  for (const route of routes) {
    const html = route.render();
    assert.equal((html.match(/<h1\b/g) || []).length, 1, route.path);
    assert.match(html, /<html lang="pt-BR"/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.ok(!html.includes('undefined'), route.path);
  }
});
