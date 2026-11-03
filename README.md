# Union3D — site institucional

Site novo, estático, em HTML/CSS/TypeScript com Vite. Combinação aprovada pelo usuário: abertura do estudo 2 e corpo editorial do estudo 1. O site Astro do anexo não é uma dependência nem foi reutilizado.

## Executar

Node 22.12+.

```sh
npm ci
npm run dev
```

`npm run build` gera as páginas, verifica TypeScript e compila para `dist/`. `npm run preview` serve o build. O código-fonte está em `src/`; os HTMLs de entrada são gerados e ignorados pelo Git. Ao alterar `src/pages.mjs` ou `src/content.mjs`, execute novamente o gerador (`node scripts/generate.mjs`) ou reinicie `npm run dev`. CSS/TypeScript têm recarregamento pelo Vite.

Cada tarefa de nuvem já usa um ambiente isolado: trabalhe neste checkout; não crie outro worktree para executar o site.

## Estrutura

- `src/pages.mjs`: templates semânticos compartilhados e 16 rotas, com conteúdo já presente no HTML.
- `src/content.mjs`: dados de contato, dez serviços e manifesto de mídia.
- `src/main.ts`: menu, comparação por scroll/teclado, evolução da construção, filtros e contato.
- `src/styles.css`: composição aprovada e estilos de página; tokens base importados, fontes locais.
- `src/design-system/`: tokens e fontes copiados sem alteração do Design System fornecido.
- `public/brand/`: logos SVG oficiais.
- `scripts/generate.mjs`: geração dos HTMLs e validação dos caminhos de mídia locais.
- `scripts/check-links.mjs`: arquivos e âncoras locais no build.
- `docs/`: auditoria, direção aprovada, decisões e relatório de validação.
- `.impeccable/mocks/`: estudos visuais e sua proveniência. Não são imagens de projetos da empresa.

## Páginas

Home, empresa, diretório de serviços, dez páginas de serviços, contato, privacidade em preparação e 404. Serviços individuais preservam escopo, momento e resumo; não incluem prazos ou números de precisão não confirmados.

## Mídia e as duas experiências

As áreas de mídia estão identificadas porque não foi fornecido acervo real. **Não são imagens quebradas nem projetos fictícios.**

1. Hero: uma superfície ampla; foto e registro correspondente são revelados por scroll. Controle de range nativo permite operar por teclado e toque e prevalece sobre a rolagem após uso manual.
2. Construção: a captura anterior fica preservada ao lado da passagem para o ambiente fechado; o texto acompanha a etapa. Controle manual equivalente disponível.

Com `prefers-reduced-motion: reduce`, o scroll não controla as comparações; os controles manuais continuam disponíveis. Não há loop de animação em repouso, captura do gesto de scroll ou dependência de um renderer de vídeo.

Para integrar material real: salve derivados aprovados em `public/media/` e configure `media` em `src/content.mjs`. Um `src` não nulo deve apontar para `/media/...` e o gerador exige que o arquivo exista. Mantenha `alt` descritivo. São necessários: foto/registro digital do mesmo espaço com enquadramento correspondente; imagens do mesmo ambiente antes/depois do fechamento; fotografia real de campo. Guarde originais, autorizações, autoria e tratamento aplicado fora dos derivados publicados. Faça revisão visual e de performance novamente com os arquivos reais.

## Contato

O formulário valida os campos e prepara uma mensagem para o número fornecido na documentação: `(47) 99649-0312`. Abre o WhatsApp e mantém um link de continuidade caso o navegador bloqueie a janela. O visitante confirma o envio no aplicativo. Não existe envio servidor, armazenamento dos campos ou tela afirmando recebimento. E-mail/telefone/WhatsApp direto funcionam como alternativa, inclusive sem JavaScript.

## Verificação

```sh
npm run build
npm test
npm run check:links
```

Os testes de navegador usam Python Playwright e Chromium disponíveis neste ambiente; não integram o bundle do site. Com dev ou preview em execução:

```sh
TEST_BASE_URL=http://127.0.0.1:4174 python tests/browser.py
```

`CHROMIUM_PATH` configura outro caminho de Chromium. Os testes não enviam mensagens nem acionam serviços externos: a abertura do WhatsApp é interceptada. Resultados ficam em `artifacts/`, ignorado pelo Git. O teste de zoom cobre aumento de texto no browser, não um aparelho físico ou uma auditoria completa de tecnologia assistiva.

## Publicação ainda pendente

Não há deploy configurado ou executado. Antes de publicar: integrar e autorizar acervo; confirmar textos técnicos e dados legais; concluir política de privacidade e requisitos do provedor; definir domínio, canonical/sitemap e hospedagem; revisar acessibilidade, mídia e desempenho com os conteúdos finais. Nenhuma métrica de conversão ou Core Web Vitals foi presumida.
