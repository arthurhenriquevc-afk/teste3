---
name: Union3D
description: Sistema visual do site da Union3D, levantamento 3D a laser e fotogrametria por drone para obras.
colors:
  petroleo-950: "#00202e"
  petroleo-900: "#002e40"
  petroleo-850: "#063446"
  petroleo-800: "#0d394c"
  petroleo-750: "#0b3d52"
  petroleo-550: "#186381"
  petroleo-500: "#247293"
  petroleo-50: "#e6f2f9"
  ceu-400: "#6ccbf7"
  ceu-500: "#4fbbec"
  ceu-600: "#3fa8d5"
  neutral-0: "#ffffff"
  neutral-50: "#fafafc"
  neutral-100: "#f5f5f7"
  neutral-200: "#e4e9eb"
  neutral-300: "#cfd5d8"
  neutral-500: "#8b9498"
  neutral-600: "#666f74"
  neutral-700: "#4e575c"
  neutral-950: "#10171b"
  bruma-200: "#d7dfe4"
  bruma-300: "#c4ced4"
  bruma-400: "#a6b3bb"
  success-600: "#267543"
  warning-700: "#8b5502"
  warning-400: "#f2af48"
  danger-600: "#c83122"
typography:
  display:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.25rem + 6.4vw, 7rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.048em"
  headline:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 2.0856rem + 1.7680vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.071
    letterSpacing: "-0.04em"
  headline-2:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.6892rem + 1.3260vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.091
    letterSpacing: "-0.035em"
  title-lg:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "clamp(1.688rem, 1.5062rem + 0.7735vw, 2.125rem)"
    fontWeight: 600
    lineHeight: 1.176
    letterSpacing: "-0.03em"
  title:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.2714rem + 0.4420vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.231
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "clamp(1.188rem, 1.1357rem + 0.2210vw, 1.312rem)"
    fontWeight: 500
    lineHeight: 1.333
    letterSpacing: "-0.015em"
  subtitle-sm:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "clamp(1.062rem, 1.0366rem + 0.1105vw, 1.125rem)"
    fontWeight: 500
    lineHeight: 1.333
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "clamp(1.062rem, 1.0366rem + 0.1105vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.556
    letterSpacing: "-0.005em"
  body:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  control:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.467
    letterSpacing: "0"
  label:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.429
    letterSpacing: "0"
  helper:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.385
    letterSpacing: "0"
  caption:
    fontFamily: "\"Geist\", \"Geist Fallback\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: "0.01em"
  overline:
    fontFamily: "\"Geist Mono\", ui-monospace, \"SF Mono\", SFMono-Regular, Menlo, Consolas, \"Liberation Mono\", monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.333
    letterSpacing: "0.08em"
rounded:
  r-4: "4px"
  r-8: "8px"
  r-12: "12px"
  pill: "999px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "17px"
  space-5: "24px"
  space-6: "32px"
  space-7: "48px"
  space-8: "80px"
components:
  button-primary:
    backgroundColor: "{colors.petroleo-900}"
    textColor: "{colors.neutral-50}"
    typography: "{typography.control}"
    rounded: "{rounded.r-4}"
    padding: "0 22px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.petroleo-750}"
  button-primary-active:
    backgroundColor: "{colors.petroleo-950}"
  button-secondary:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.petroleo-500}"
    rounded: "{rounded.r-4}"
    padding: "0 22px"
    height: "40px"
  button-secondary-hover:
    textColor: "{colors.petroleo-550}"
  button-accent:
    backgroundColor: "{colors.ceu-500}"
    textColor: "{colors.petroleo-900}"
    rounded: "{rounded.r-4}"
    padding: "0 22px"
    height: "40px"
  button-accent-hover:
    backgroundColor: "{colors.ceu-400}"
  button-ghost:
    textColor: "{colors.petroleo-900}"
    rounded: "{rounded.r-4}"
    padding: "0 14px"
    height: "40px"
  card:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-950}"
    rounded: "{rounded.r-12}"
    padding: "24px"
  card-feature:
    backgroundColor: "{colors.petroleo-900}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.r-12}"
    padding: "24px"
  input:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-950}"
    typography: "{typography.body}"
    rounded: "{rounded.r-4}"
    padding: "0 14px"
    height: "48px"
  tag:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.neutral-700}"
    rounded: "{rounded.r-4}"
    padding: "2px 6px"
  nav-link:
    textColor: "{colors.petroleo-900}"
    typography: "{typography.label}"
    rounded: "{rounded.r-4}"
    padding: "4px 16px"
    height: "32px"
---

# Design System: Union3D

<!-- Fonte normativa dos valores: tokens/tokens.json (gera tokens/*.css). Este arquivo descreve como aplicá-los. Se os dois divergirem, vale o tokens.json; rode /impeccable document de novo. -->

## Overview

**Creative North Star: "O Registro Antes da Próxima Etapa"**

A Union3D documenta cada etapa de uma obra antes que a seguinte a cubra: a laje antes do concreto, a instalação antes do reboco, o interior antes da mobília. O sistema visual tem a postura de quem faz esse registro: um engenheiro de campo calmo e preciso, que mede, anota e entrega. Tudo nasce de uma única família azul petróleo profunda, de tipografia Geist com tracking negativo firme e de texturas técnicas (grade, curvas de nível, nuvem de pontos, varredura) em baixo contraste. A cor de destaque, o Céu, aparece pouco e com função: um CTA de acento por tela, brilhos, feixes e o anel de foco.

A densidade é de site de engenharia, não de painel. Seções largas com 80px de ritmo vertical encostam umas nas outras e se separam só pela troca de fundo. Fotografia real de canteiro, tratada em duotone petróleo e em preto e branco nos cartões, carrega a prova; a interface fica sóbria em volta dela. Números são concretos e verificáveis, e o visual acompanha: índices em mono, legendas literais, rótulos FIG. 01.

O sistema recusa o que soaria como marketing genérico: nada de emoji, nada de gradiente decorativo além do cônico da marca (petróleo para Céu), nada de foto de banco com gente sorrindo, nada de linha divisória entre seções.

**Key Characteristics:**
- Uma família de cor só (Petróleo), um acento raro (Céu) e neutros frios.
- Tema claro e escuro completos, mais contexto escuro por seção nos dois temas (hero, seção escura, rodapé, modal, toast, popover, blocos de mídia).
- Geist 600 com tracking negativo nos títulos; Geist Mono para sobretítulos, índices e rótulos técnicos.
- Cantos quase retos (4px) em tudo que é controle; 12px só em cartões e painéis.
- Profundidade por troca de superfície e sombras frias e escuras que aparecem como resposta a estado.
- Movimento numa escala única de durações, com curvas enfáticas para setas e mola para indicadores.

## Colors

Uma paleta de engenharia: petróleo profundo como estrutura, Céu como sinal e neutros frios levemente azulados para o resto.

### Primary
- **Petróleo Profundo** (petroleo-900): ação primária no claro, fundo de página no escuro, superfície dos contextos escuros (hero, cartão de destaque, seção escura). É a cor que define a marca.
- **Petróleo Noite** (petroleo-950): estado pressionado da ação primária e fundo mais fundo de contextos escuros.
- **Petróleo de Hover** (petroleo-750): hover da ação primária.
- **Petróleo Técnico** (petroleo-500): links, ação secundária, anel de foco no claro, sobretítulos. Base da tinta translúcida `--u3-secondary-24` do halo de foco dos campos.
- **Névoa Petróleo** (petroleo-50): superfície sutil e fundo de item selecionado.

### Secondary
- **Céu** (ceu-500): o único acento. Botão de acento (no máximo um por tela), brilhos, feixe rotativo do CTA final, halo e sombra `--u3-shadow-hover-accent`. Texto sobre Céu é sempre Petróleo Profundo. Hover em ceu-400, pressionado em ceu-600.

### Neutral
- **Branco Papel** (neutral-0): superfície de cartão e campo no claro.
- **Cinza Página** (neutral-100): fundo de página no claro; neutral-50 para superfícies alternadas.
- **Divisória Fria** (neutral-200) e **Borda de Cartão** (neutral-300): contornos de 1px.
- **Borda de Campo** (neutral-500): contorno de inputs, também texto desabilitado.
- **Meta** (neutral-600): texto de apoio, datas, legendas (4,71:1 sobre a página, 5,13:1 sobre o cartão).
- **Texto Secundário** (neutral-700) e **Tinta** (neutral-950): corpo de texto.
- **Bruma** (bruma-200, 300, 400): textos claros dentro de contextos escuros, hover e pressão da ação primária no escuro. Link e meta compartilham bruma-400 no escuro.
- **Branco Pérola** (neutral-50): ação primária dentro de contextos escuros, com texto Petróleo Profundo. Também é a tinta de ação no escuro (traços de 1 e 2px, marcas de seleção).

### Semânticas
Sucesso, aviso, perigo e informação têm cada uma fg, bg, border e solid (`--u3-feedback-*`). Os sólidos de referência são success-600, warning-400 (com texto warning-700) e danger-600.

### Named Rules
**The One Signal Rule.** Céu aparece no máximo uma vez como CTA por tela. Nos demais lugares ele só brilha, nunca preenche.

**The Tinted Transparency Rule.** Transparência é sempre tingida: `--u3-ink-*` (petróleo em alfa, que vira branco no escuro), `--u3-white-*` e `--u3-accent-*`. Nunca preto ou cinza puro em alfa.

**The Tonal Layer Rule.** Petróleo 850, 800, 750 e 700 são camadas de superfície no escuro, quase iguais de propósito (1,06 a 1,09:1): separam planos sem desenhar borda. A diferença entre elas nunca comunica estado.

**The One Map Rule.** Os papéis de cor existem uma vez só, em `tokens/tokens.json`. Um componente que precisa de contexto escuro entra na lista `color.contexts`; nenhum CSS redeclara os papéis.

## Typography

**Display Font:** Geist (com -apple-system, Segoe UI, system-ui)
**Body Font:** Geist
**Label/Mono Font:** Geist Mono (com ui-monospace, SF Mono, Menlo)

**Character:** uma única sans geométrica e técnica em todos os papéis, com tracking cada vez mais negativo conforme o tamanho cresce. A mono entra como voz de prancheta: índices `03 / 13`, tipos de arquivo, rótulos de figura.

### Hierarchy
- **Display** (600, de 3rem a 7rem fluido, 0,96): título grande de abertura e lettering fantasma; o `display-xl` chega a 20rem.
- **Headline** (600, h1 de 40 a 56px a 1,071 com -0,04em; h2 de 32 a 44px com -0,035em): títulos de página e de seção. Fluidos por clamp, equilibrados com `text-wrap: balance`, sempre frases completas com ponto final.
- **Title** (600, h3 até 34px, h4 até 26px; 500, h5 até 21px, h6 até 18px, todos fluidos): subtítulos e títulos de cartão.
- **Body** (400, 16px a 1,5; lead de 17 a 18px a 1,556): texto corrido. Links sem classe dentro de texto corrido ficam sublinhados em repouso.
- **Control** (400, 15px a 1,467): texto de botão, índice de cartão e controles compactos.
- **Label** (500, 14px e 12px): rótulos de campo, navegação, selos. Ajuda de campo em 13px e legenda em 12px, ambos 400.
- **Overline** (Geist Mono 500, 12px, 0,08em, caixa alta via CSS): sobretítulos de seção.

### Named Rules
**The Sentence Headline Rule.** Títulos são frases em caixa de sentença terminadas em ponto. Caixa alta só existe no sobretítulo mono, aplicada por CSS.

**The 12px Floor Rule.** Nenhum texto que alguém precise ler fica abaixo de 12px, rótulos mono incluídos. Abaixo disso só o número de contador em pílula de 20px, iniciais de avatar pequeno, os marcadores de logo e de foto que ainda faltam, o HUD do scanner e as páginas de documentação.

**The Shorthand Rule.** Componente usa o atalho `--u3-font-<papel>` (peso, tamanho/entrelinha em px, família). Escrever `font: 500 14px/20px` à mão é dívida.

## Layout

Contêiner de 1280px com margens de 80px e gutter de 24px numa grade de 12 colunas. Abaixo de 1280 a grade vira 8 colunas (margem 40, gutter 20); abaixo de 768, 4 colunas (margem 20, gutter 16). Os degraus 640 e 960 são de componente (galeria, scanner, acordeão) e 1400 é só da documentação, onde o trilho lateral aparece. Media queries não leem variáveis, então os valores vivem em `layout.breakpoints` do `tokens.json`; escreva `max-width` com o valor menos 1.

O espaço segue 4, 8, 12, 17, 24, 32, 48 e 80px. O 17 vem da fonte e fica. Seções têm 80px de ritmo vertical (48 na variante compacta). Cabeçalho de 56px, transparente sobre mídia e compacto na rolagem; subnavegação fixa com vidro; controles flutuantes de tema e voltar ao topo; no máximo um palco fixo de rolagem por página. Alvos de toque têm 44px (40 nos controles finos).

**The Background Seam Rule.** Seções encostam umas nas outras e se separam só pela troca de fundo. Nunca uma linha.

**The Layer Scale Rule.** Empilhamento só por `--u3-z-*`: sticky 20, popover 30, header 40, float 45, doc 60, menu 100, drawer 110, toast 120, skip 200. Números de 0 a 4 ficam locais, dentro de um componente.

## Elevation & Depth

Híbrido com base plana. A profundidade vem primeiro da troca de superfície (página, cartão, alternada, contexto escuro) e dos contornos de 1px. As sombras são frias e escuras (`rgb(16 23 27)`), sempre com um realce interno de 1px branco no topo, e crescem como resposta a estado: o cartão quase plano em repouso sobe 4px com a sombra 3 no hover. O vidro forte (petróleo a 72% com 16px de desfoque) cobre modal, toast, popover, subnavegação e formulários sobre foto; o vidro claro (`--u3-decor-glass-bg`) fica para botão, selo e chips sobre foto ou textura.

### Shadow Vocabulary
- **Repouso** (`--u3-shadow-1`): cartões e superfícies em repouso, quase imperceptível.
- **Painel** (`--u3-shadow-2`): painéis flutuantes, vidro, popovers.
- **Elevado** (`--u3-shadow-3`): hover de cartão interativo e camadas altas.
- **Hover** (`--u3-shadow-hover`): botões no hover; mais densa no escuro.
- **Brilho Céu** (`--u3-shadow-hover-accent`): só o botão de acento no hover.

**The Response Shadow Rule.** Sombra forte aparece como resposta (hover, camada aberta), nunca como decoração em repouso.

## Shapes

Linguagem técnica e quase reta. Botões, campos, selos e tags usam 4px; itens de lista, passos, escolhas e ícones de cartão usam 8px; cartões, painéis e tabelas usam 12px; botões só de ícone, segmentado e chips são pílula. Contornos de 1px são a regra; botões inversos desabilitados usam traço tracejado. Mídia em cartão é recortada pelo raio do cartão.

**The Near-Square Rule.** Tudo que é controle fica em 4px. Arredondar um botão para 8px ou mais tira a voz técnica do sistema.

## Components

### Buttons
Firmes, compactos, de prancheta.
- **Shape:** cantos quase retos (4px), 40px de altura (sm 14px de texto, lg 56px de altura), texto Control 500.
- **Primary:** Petróleo Profundo com texto claro; hover em Petróleo de Hover com sombra escura suave; pressionado em Petróleo Noite. Em contexto escuro vira Branco Pérola com texto Petróleo Profundo; hover em bruma-200, pressionado em bruma-300.
- **Hover / Focus:** transições em `--u3-dur-base` (300ms) com ease-out. Setas avançam 4px. Pressão é `scale(.98)` em 80ms. Foco é anel de 2px em petróleo-500 (branco no escuro) com 2px de afastamento.
- **Secondary / Pearl / Ghost:** secundário é contorno petróleo-500 sobre cartão que se preenche com tinta no hover; pearl é secundário sem borda para superfície de página; ghost é transparente com `ink-4` no hover.
- **Accent:** Céu com texto Petróleo, brilho Céu no hover, perde o brilho ao pressionar.
- **Especiais:** glass (sobre foto), danger, outline-inverse (contexto escuro), degrade, beam (borda com feixe rotativo, só no CTA final) e flash (secundário com luz Céu que segue o cursor).
- **Loading:** `.is-loading` com `aria-busy`; o botão continua focável e engole clique, Enter, Espaço e envio implícito.

### Chips
- **Style:** pílula de vidro claro, borda de vidro, texto Geist Mono 500 12px.
- **State:** o chip de filtro (`.u3-chip-btn`, sobre contexto escuro) fica quase transparente com contorno de 1px; ligado (`aria-pressed`), preenche em bruma-300 com texto Petróleo Profundo.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Branco Papel no claro, petroleo-800 no escuro; o cartão de destaque é contexto escuro nos dois temas.
- **Shadow Strategy:** repouso com `--u3-shadow-1`; interativo sobe 4px com `--u3-shadow-3`, escurece a borda e desenha uma régua de 2px em petróleo no topo, da esquerda para a direita.
- **Border:** 1px `--u3-border-card`.
- **Internal Padding:** 24px, 14px entre blocos.
- **Media:** foto em preto e branco que ganha cor no hover.

### Inputs / Fields
- **Style:** 48px de altura, contorno de 1px em neutral-500, fundo de cartão, 4px de canto, texto Body.
- **Focus:** borda petróleo-500 e halo de 3px em petróleo a 24%.
- **Error / Disabled:** erro com borda de 2px em `--u3-feedback-danger-fg`, fundo de página e mensagem 600 em vermelho com ícone; desabilitado com fundo de página, borda tracejada e texto neutral-500.

### Navigation
- **Header:** 56px, grade de três colunas (marca, navegação, ações), fundo de cartão com divisória de 1px; transparente sobre mídia. Links em Label, 32px de altura, 4px de canto, fundo de hover tingido e `ink-4` na página atual.
- **Compact:** depois de 120px de rolagem a barra flutua a 12px do topo, com 48px de altura, e mantém o pedido de orçamento.
- **Mobile:** menu em gaveta abaixo de 1280px, com o telefone sempre ao lado do botão Menu; a gaveta volta em 300ms.
- **Touch:** com ponteiro grosso os botões vão a 44px (o sm fica em 40) e links pequenos, links do rodapé e linhas de checkbox e rádio ganham área de toque por padding com margem negativa, sem mover nada.
- **Subnav:** fixa, com vidro forte, em `--u3-z-sticky`.

### Palco de Abertura (signature)
Hero escuro com foto real em duotone petróleo sob véus (`--u3-gradient-veil-hero`, `-lateral`, `-mare`), texturas técnicas em baixo contraste, título revelado por máscara de linha e deriva leve com a rolagem. É aqui que o sistema mostra o canteiro antes de falar.

## Do's and Don'ts

### Do:
- **Do** usar Petróleo como estrutura e Céu como sinal, com no máximo um CTA de acento por tela.
- **Do** separar seções pela troca de fundo e manter 80px de ritmo vertical (48 na variante compacta).
- **Do** manter controles em 4px de canto e cartões em 12px.
- **Do** escrever títulos como frases em caixa de sentença com ponto final, e sobretítulos em Geist Mono.
- **Do** tratar fotografia real em duotone petróleo nos heróis e em preto e branco nos cartões.
- **Do** usar só tokens da escala: `--u3-dur-*` para tempo, `--u3-z-*` para camada, `--u3-space-*` para espaço, `--u3-font-*` para texto.
- **Do** reduzir todo movimento a fades de 200ms quando o usuário pede movimento reduzido.

### Don't:
- **Don't** usar emoji, ponto de exclamação ou ícone em fonte; glifos Unicode só nas marcas de alerta (i ✓ ! ×).
- **Don't** traçar linha entre seções.
- **Don't** criar gradiente decorativo além do cônico da marca e dos véus de foto.
- **Don't** usar foto de banco ou estilo de vida; só canteiro real e nuvem de pontos.
- **Don't** redeclarar papéis de cor fora do `tokens.json` nem escrever z-index numérico acima de 4.
- **Don't** inventar preço ou número; "Sob consulta" e placeholders entre colchetes são a regra.
