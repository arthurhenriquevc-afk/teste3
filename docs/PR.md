## Site institucional Union3D

Cria o site do zero em HTML/CSS/TypeScript com Vite, combinando o hero amplo do estudo 2 com o corpo editorial do estudo 1, conforme aprovação do usuário. O Design System fornecido orienta tipografia, cores e geometria; o antigo site Astro não foi reutilizado.

Inclui home, empresa, catálogo e dez páginas de serviços, contato, página técnica de privacidade ainda pendente de revisão jurídica e 404. Os dois momentos de movimento usam scroll e controles manuais; movimento reduzido preserva acesso aos estados sem scrub automático. O formulário prepara uma mensagem para WhatsApp e nunca afirma que ela foi enviada.

As áreas de fotografia e de registro digital estão explicitamente sinalizadas, pois o acervo real não foi fornecido. A fidelidade da transformação com fotos/levantamentos reais ainda não foi validada. Não há mídia de projetos inventada, motor de vídeo, renderização cloud ou implantação.

### Validação

- Build e TypeScript passaram; 16 páginas estáticas.
- 3 testes Node aprovados.
- 10 checks funcionais em Chromium aprovados: rotas, controles de movimento, filtros, contato interceptado sem envio, teclado/menu, mobile em cinco larguras, reduced motion, JavaScript desativado e texto 200%.
- 353 referências locais válidas; links externos não foram acionados.
- Revisão visual independente da combinação e dos estados; ver docs/implementacao.md para limitações do detector e do fluxo automático Impeccable.

### Evidências

[Desktop](previews/home-desktop.png) · [Mobile](previews/home-mobile.png) · [Resultados de browser](browser-results.json)

### Antes de publicar

Integrar acervo autorizado, confirmar textos técnicos/dados legais, concluir privacidade e configuração de domínio/SEO/hospedagem e repetir testes com mídia final. Leitor de tela, aparelhos físicos e Core Web Vitals não foram certificados. Nenhum merge ou deploy autorizado.

Para revisão local: `npm ci`, `npm run dev`. Para build: `npm run build` e `npm run preview`.
