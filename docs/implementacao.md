# Implementação da combinação aprovada

## Resultado

Branch de trabalho: `feat/union3d-editorial`. O usuário escolheu as imagens dos estudos 2 e 1. A abertura ampla e a oferta clara do estudo 2 foram combinadas com a introdução em duas colunas e o ritmo editorial do estudo 1. Foram acrescentadas as rotas institucionais e de serviço necessárias ao fluxo, sem aproveitar a implementação Astro anterior.

Os HTMLs são estáticos, com um único módulo TypeScript progressivo. Não há React, roteamento exclusivamente cliente, motor de vídeo, pacote de animação ou recursos 3D no bundle. Há 16 páginas: home, empresa, catálogo, dez serviços, contato, privacidade e 404.

## Design System

Mantidos: paleta, Geist/Geist Mono, logos, tokens normativos copiados, cantos de controles e linguagem sóbria. A aplicação adiciona papéis de composição em `src/styles.css`: `--page-gutter`, `--section-space`, `--type-display`, `--type-section`, `--media-height`, `--site-ink` e `--site-muted`. São a extensão editorial aprovada, não uma regravação do `tokens.json` recebido. O DESIGN.md de base foi preservado; decisões novas ficam neste adendo e no brief da homepage.

Sem fotografia disponível, o campo petróleo do hero é uma reserva de acervo. Não é intenção substituir a futura fotografia por um fundo tecnológico. As áreas de campo e construção também aguardam material real. Não foram produzidos falsos levantamentos ou imagens de projetos.

## Movimento

O progresso responde à posição do elemento no viewport e a um controle manual acessível. Alterações visuais são `clip-path` sobre camadas já dimensionadas, com texto e controles independentes; os títulos não se deslocam com a transformação. Só se agenda um frame em resposta a scroll/resize, sem loop contínuo. O controle manual interrompe a atualização automática daquela experiência. A preferência de movimento reduzido desativa o scrub automático e conserva os estados acessíveis por controle.

Esses mecanismos foram exercitados com placeholders. Não foi validada uma transformação fotográfica/geométrica final, porque os pares reais ainda não existem no projeto. A qualidade visual final e o custo de decodificação devem ser revistos com o acervo.

## Skills efetivamente aplicadas

| Skill | Recurso aplicado | Resultado |
|---|---|---|
| Impeccable | Contexto, referências de criação/motion/tipografia, estudos, medição, detector e revisão independente | Direção registrada, comps aprovadas e verificações da implementação |
| Remotion Best Practices | Conhecimento consultado na auditoria; nenhum renderer executado | Não houve produção de vídeo Remotion |
| Hyperframes | Conhecimento consultado na auditoria; nenhum projeto de vídeo criado | Não integra o frontend |
| Hyperframes CLI | Não executada para produção | Sem render/export/cloud |
| Hyperframes Registry | Nenhum bloco instalado | Sem templates externos no site |
| media-use | Nenhuma geração ou resolução de mídia executada | Acervo pendente, sem imagens falsas |

Não foi forçado o uso das seis skills. Os estudos foram gerados pela ferramenta de imagem; não são mídia institucional e não são servidos pelo site.

## Validação executada

- `npm run build`: passou, incluindo TypeScript; 16 páginas geradas.
- `npm test`: 3 testes executados e aprovados, sem skips: escape contra injeção, integridade das rotas/contato oficial e metadados/h1/idioma.
- `npm run check:links`: 353 referências locais válidas; links externos não foram enviados.
- `tests/browser.py`: 10 verificações aprovadas em Chromium 155. Incluem as 16 rotas, scroll e controle manual, evolução da construção, filtros (6/9), contato com abertura interceptada, menu/Escape/foco, cinco rotas em cinco larguras (320–1440), movimento reduzido, funcionamento sem JavaScript e aumento de texto a 200%.
- Capturas reais da home desktop/mobile, estados de sequência e contato mobile foram examinadas. Não foram inspecionadas em aparelhos físicos.
- Corrigido um problema encontrado no teste sem JS: CSS agora é carregado por link independente do módulo.
- Revisão independente confirmou a fidelidade da combinação B/A e a adaptação mobile. A etapa dos serviços foi movida para metadado abaixo do título, conforme o achado. A captura do contato foi corrigida restaurando scroll ao topo; o skip link estava inteiramente fora da viewport e não foi observado um defeito de sobreposição no uso real.

Tamanho observado no build, antes de conteúdo fotográfico: JavaScript compartilhado de aproximadamente 5,16KB (2,20KB gzip) e CSS aproximadamente 33,5KB (7,1KB gzip). Não são medições de Core Web Vitals, nem orçamento que inclua o acervo futuro.

## Detector e limitações da ferramenta

O detector da Impeccable foi executado uma vez sobre os arquivos locais, retornando 32 apontamentos: 4 warnings de fontes frequentes (Geist/Mono), 15 avisos de cor de borda, 12 de tamanhos tipográficos e 1 da curva spring herdada. As fontes são identidade aprovada; a curva está no token original e não é usada para o scrub. Os tamanhos adicionais compõem a extensão editorial. Os avisos de bordas foram confrontados com navegador; a amostra de botão tem border-width 0px e border-style none. Não há autorização para substituir a marca por uma fonte sugerida pelo scanner. Não foi alegado resultado “zero findings”.

O fluxo numérico comp-led registrou e mediu as referências, mas a etapa interna `plates` permanece aberta por pedir uma confirmação adicional do mesmo plano sem rasters novos. A seleção explícita das duas comps pelo usuário já autoriza a implementação; não foi fabricado recibo de revisão ou usado `--force`. Esse fluxo automático não é reportado como concluído. A revisão visual independente e os testes de aplicação são evidências separadas.

## Pendências para produção

- Acervo real, pares registrados, licenças e autorizações.
- Revisão dos textos técnicos e das condições de entrega pela empresa.
- Política jurídica, razão social/controlador, domínio, canonical, sitemap e hospedagem.
- Testes com imagens finais, leitor de tela, aparelhos físicos e medição de desempenho.
- Pull Request: API GitHub retornou 403 no CONNECT do proxy. Acesso por Git HTTPS será tratado separadamente; não inferir falta de credenciais a partir desse bloqueio de rede.

Sem merge, deploy, envio real de formulário ou publicação do ambiente.
