# Auditoria Union3D: Design System e seis skills

Data: 03/11/2026. Escopo: fases 1–8 do prompt mestre. Situação: auditoria entregue; implementação e alterações no Design System aguardam aprovação explícita.

## 1. Conclusão

O Design System **orienta muito mais do que bloqueia**. Petróleo/Céu, Geist/Geist Mono, fotografias reais, geometria técnica e texto preciso formam uma identidade coerente e permitem uma direção institucional sofisticada. Não há evidência que justifique trocar a fonte, ampliar a paleta ou retirar as regras centrais para “liberar” as skills.

As limitações reais se concentram em: comportamentos de navegador incompatíveis com renderização determinística; regras de UI sem adaptação explícita para vídeo; aplicação literal de templates externos; ausência das fotografias e dos vídeos reais; e ferramentas de vídeo ainda não validadas em execução. A correção é separar identidade, interação web e produção audiovisual, mantendo a mesma fonte normativa de tokens.

Recomendação: **cenário B, equilibrado**, com site novo, composição editorial dentro da identidade, um momento de motion com propósito e mídia renderizada apenas quando explicar melhor o serviço. Nenhuma obrigação de usar os dois renderizadores, nem todas as seis skills.

A solicitação posterior do usuário prevalece: **o site Astro do anexo foi descartado como base da futura implementação**. Os arquivos foram preservados como parte do material recebido. O novo site será criado do zero após aprovação; nem a stack nem as páginas do protótipo foram adotadas como decisões.

## 2. Método e fontes

- Repositório conectado: `arthurhenriquevc-afk/teste3`, em `/workspace/teste3`.
- Referência de marca: ZIP `Union3D-Design-System.zip`, extraído para `/workspace/auditoria-union3d/fonte`, fora do checkout.
- Evidência normativa: `tokens/tokens.json`, `DESIGN.md`, `readme.md`, CSS, runtime e componentes do anexo.
- Skills: leitura dos seis `SKILL.md` e referências pertinentes a interface, motion, tipografia, renderização, registro de mídia, registry e operação da CLI.
- Validação: quatro verificadores existentes em modo `--check`, build do site legado antes de sua exclusão do escopo, inspeção limitada das referências HTML em Chromium e comparação dos arquivos extraídos com o ZIP.
- A skill `union3d-design` embutida no anexo **não foi instalada nem adotada como sétima skill**. Seu arquivo foi tratado como documentação do pacote.
- Instruções dos pacotes não autorizam upgrades, publicação, telemetria, geração paga, instalação de outras skills ou mudanças na marca contra o pedido do usuário.

Esta é uma auditoria de compatibilidade e arquitetura. Não é uma execução completa dos comandos `impeccable audit` ou `critique`, nem uma certificação WCAG ou um benchmark de produção. Não foram produzidas notas numéricas sem evidências suficientes.

## 3. Diagnóstico do repositório e do material recebido

### 3.1 GitHub e checkout

`git status --short` mostrou apenas `.agents/` antes da escrita deste relatório. A branch local `work` é não nascida, sem commits. `git ls-files` não retornou arquivos; `git log` confirmou ausência de commits. `git ls-remote origin` terminou com código zero sem referências: não há código remoto ou branch `main` disponível para esta auditoria.

Assim, o Design System **existe no anexo**, não no histórico GitHub conectado. As instalações locais das skills não equivalem a commits ou sincronização remota. Este relatório é documentação local para revisão; não houve push, PR, merge, deploy ou publicação do ambiente.

### 3.2 Inventário do anexo

| Área | Evidência | Conclusão |
|---|---|---|
| Tokens | `tokens/tokens.json`; versão de esquema `1` | Fonte normativa; não é uma versão semântica do produto |
| Estilos | `styles.css`, `tokens/*.css`, `components/union3d.css` | CSS próprio com prefixo `u3-`; não depende de Tailwind |
| Componentes | 45 arquivos `.jsx`, declarações `.d.ts`, `index.js` | Wrappers React e exportações públicas; não provam integração com o novo site |
| HTML | `reference/*.html`, `uploads/*.light.html`, `*.dark.html` | Referências e espécimes, não arquitetura obrigatória |
| Comportamento | `assets/union3d.js` | Runtime vanilla: tema, menus, revelações, mídia, rolagem e ferramentas de documentação |
| Build DS | `scripts/build-tokens.mjs`, `build-icons.mjs`, `split-docs-css.mjs`, `build-bundle.mjs` | Geradores existentes; `--check` permite verificar sem regravar fontes |
| Build de demonstração | `_ds_bundle.js`, `ui_kits/website/` | Bundle específico da ferramenta de design, com namespace global; não usar como dependência de produção automaticamente |
| Fontes | `fonts/*.woff2`, `tokens/fonts.css` | Geist e Geist Mono locais; fallback com ajuste de métricas |
| Marca | `assets/logos/*.svg`, `assets/icons/icons.json` | Logos fornecidos e 31 ícones próprios; preferir esses assets |
| Fotos/vídeos | `assets/photos/` ausente; `reference/MediaVideo.html` sem fonte de vídeo | Recursos reais ainda faltam; placeholders não são prova visual do serviço |
| Testes | Verificadores de consistência; sem suíte de produto identificada | Não há evidência de testes completos de navegação, acessibilidade ou formulários |
| Deploy/CI | Nenhum pipeline de implantação adotado | Domínio em configuração legada não comprova hospedagem nem propriedade |
| Codex | Seis diretórios `.agents/skills/*`; sem `AGENTS.md` de projeto encontrado | Skills locais disponíveis; governança do futuro projeto ainda a definir |
| Site legado | `site/package.json`: Astro `7.4.2`, estático | Excluído da nova implementação por solicitação do usuário |

O build legado gerou 16 páginas. Isso demonstra apenas que o material recebido podia compilar; **não valida o futuro site nem torna Astro uma escolha aprovada**. O formulário legado abre WhatsApp e redireciona à confirmação, sem comprovar entrega nem transferir anexos; não deve ser herdado como integração funcional já resolvida.

## 4. Design System: autoridade e liberdade existente

### 4.1 Regras obrigatórias documentadas

- Petróleo como estrutura; Céu como sinal; no máximo um CTA de acento por tela. Textos sobre Céu em Petróleo.
- Geist e Geist Mono, títulos em caixa de sentença com ponto final, sem emoji e sem afirmações ou números inventados.
- Fotografias reais de obra e nuvem de pontos; nada de banco de imagens de estilo de vida. Logos oficiais preservados.
- Tokens centralizados: cores, espaçamento, fontes, duração e camadas; cores semânticas não redefinidas isoladamente em cada componente.
- Cantos técnicos: controles 4px, itens 8px, cartões/painéis 12px, exceções de pílula explicitadas.
- Seções separadas por fundo, sem divisórias decorativas entre elas; transparência tingida.
- Movimento reduzido, alternativas estáticas, foco visível, texto escalável e comportamento mobile apropriado.

Fontes: `DESIGN.md:197–362`, especialmente One Signal `:244`, Shorthand `:274`, Background Seam `:282`, Shapes `:301`.

### 4.2 Regras recomendadas e variantes já permitidas

A aplicação principal tem ritmo de 80px e variante compacta de 48px; a escala contém 4, 8, 12, **17**, 24, 32, 48 e 80px. O valor 17 é uma decisão explícita, não um erro a arredondar.

Existem display fluido, display-xl, layouts em 12/8/4 colunas, fundos técnicos, vidro contextual, máscaras de texto, beam no CTA final, fotos coloridas reveladas e seções escuras em ambos os temas. Isso permite hierarquia expressiva e assimetria sem introduzir fonte ou paleta nova.

Durações e curvas são tokens; a seleção contextual entre elas admite julgamento. A proibição de movimento arbitrário não significa proibição de composição ou sequenciamento.

### 4.3 Convenções existentes que não são imutáveis

Os 45 wrappers, as props atuais de `Hero`, o namespace do bundle, a ordem exata de uma referência de página, os nomes de arquivos do protótipo e a forma provisória do formulário são implementações anteriores. Não precisam determinar a arquitetura do novo site.

O hero fotográfico é descrito como assinatura, portanto merece preservação de intenção: mostrar evidência real da obra antes de explicar. Sua composição não precisa repetir pixel a pixel o template. Qualquer substituição dessa assinatura deve ser submetida à aprovação.

### 4.4 Restrições técnicas

`assets/union3d.js` usa `IntersectionObserver`, `requestAnimationFrame`, rolagem e `Math.random()` em animações. Exemplos: contadores `:324`, rolagem `:535`, vídeos `:1020`, HUD `:1063`. Isso é válido no site, mas não equivale a uma animação determinística exportável.

`components/core/u3.js` inicializa o runtime com efeitos e medições do DOM. Componentes puramente visuais podem ser candidatos à reutilização; componentes ligados a esse runtime exigem adaptação antes de Remotion. Hyperframes usa cenas HTML, não recebe componentes React diretamente.

## 5. Inventário das seis skills

Diretório-base: `/workspace/teste3/.agents/skills/`.

### 5.1 `impeccable`

**Instalação:** `impeccable/SKILL.md`, 63 arquivos. Versão declarada **4.8.0**, obtida do ZIP enviado pelo usuário. Origem declarada pelo pacote: `pbakaus/impeccable`. Não foi estabelecido um commit Git para esse ZIP. O launcher fixa separadamente o engine **0.1.18** em `scripts/VERSION`: versão do engine e versão da skill não devem ser confundidas.

**Finalidade e recursos:** direção visual, UX, hierarquia, composição, tipografia, cor, adaptação responsiva, motion e refinamento. O briefing e a identidade confirmada prevalecem sobre preferências estéticas e alertas genéricos do detector.

**24 comandos de design documentados:** `shape`, `init`, `document`, `extract`, `critique`, `audit`, `polish`, `bolder`, `quieter`, `distill`, `harden`, `onboard`, `animate`, `delight`, `overdrive`, `clarify`, `adapt`, `optimize`, `colorize`, `typeset`, `layout`, `live`, `generate`, `craft` (alias depreciado). Também há gerenciamento `pin/unpin`, `hooks` e `doctor`; verbos técnicos do launcher não são todos comandos criativos.

**Distinções:** `audit` é auditoria técnica; `critique` envolve julgamento e detector; `document` captura a identidade, não autoriza substituí-la. `live` e `generate` dependem de aplicação executável e infraestrutura de browser/engine.

**Dependências/estado:** documentação instalada. O launcher procura binário local/PATH/cache e pode baixar engine com checksum. O engine não foi executado nem baixado nesta auditoria. Não há hook automático instalado. O pacote de instruções não garante scanner, live mode ou geração funcionando no ambiente.

**Integração Union3D:** `typeset`, `layout` e `colorize` mandam preservar o mundo visual estabelecido; `animate` recomenda intenção, limites de custo e movimento reduzido. A própria skill permite uma única família tipográfica. Nenhum conflito obriga trocar Geist.

**Limites:** a execução formal de `critique` tem protocolo próprio de avaliações independentes e autorização de subagentes no Codex; não foi executada aqui. O pedido atual foi tratado como auditoria documental e técnica das capacidades.

### 5.2 `remotion-best-practices`

**Instalação:** `remotion-best-practices/SKILL.md`, 127 arquivos, versão declarada **4.0.519**. Copiada de `remotion-dev/remotion`, caminho `packages/codex-plugin/skills/remotion-best-practices`, checkout de origem `5d9605421348733e11505cc9a4dab9bed5a9b2e0`.

**Finalidade:** orientações para criar e exportar vídeo com React. Reúne referências internas de criação, markup, mídia, fontes, legendas, Studio, renderização, Player, integração SaaS e upgrade; não exige instalar cada referência como skill separada.

**Recursos confirmados:** composições e sequências, `useCurrentFrame()` e `interpolate()`, easing, metadados e parâmetros, transições e overlays, fontes locais, imagens, áudio e vídeo, legendas e exportação. `TransitionSeries` com transições encurta a duração total pelo overlap; overlays não encurtam.

**Comandos documentados:** `npx remotion studio --no-open`, `render`, `still`, `add <pacote>`. `@remotion/player` incorpora uma composição em React quando houver necessidade real de preview interativo.

**Dependências:** projeto React/Remotion e pacotes correspondentes, CLI, navegador compatível e recursos de renderização. Os pacotes `@remotion/*` devem ser alinhados com a versão adotada; `npx remotion add` é o caminho documentado. Fontes locais usam `@remotion/fonts`. Ter Node e Chromium no host não comprova que esse pipeline funciona.

**Saídas confirmadas na skill:** vídeo e still; transparência documentada em ProRes 4444/MOV e VP9/WebM. Compatibilidade do arquivo final com os navegadores-alvo precisa de validação.

**Limitações:** CSS `transition`, `animation` e classes de animação Tailwind não são drivers corretos de renderização Remotion. Não reaproveitar o runtime Union3D sem adaptação. Licenciamento comercial do produto/serviço final deve ser confirmado nas condições oficiais aplicáveis; a instalação da skill não concede direitos adicionais.

**Estado:** orientações instaladas; Remotion não encontrado como executável no PATH, sem projeto Remotion no checkout e sem render realizado. APIs mostradas na documentação instalada ainda precisam ser confrontadas com a release escolhida antes de codificar.

### 5.3 `hyperframes`

**Instalação:** `hyperframes/SKILL.md`, 77 arquivos. Origem `heygen-com/hyperframes`, commit **a5a61213320c523875633a94ef96097456269136**. Não declara versão semântica no frontmatter; a referência verificável é esse commit. Arquivos instalados comparados byte a byte com a origem local.

**Finalidade:** composições HTML renderizadas a vídeo por seek de uma timeline pausada. `index.html` monta cenas de `compositions/`; mídia e fontes ficam em `assets/`. O default documentado é 1920×1080 a 30fps, não uma regra da Union3D.

**Recursos:** títulos, imagens, legendas, cards, gráficos, sequenciamento, máscaras e áudio. GSAP é o driver principal; CSS keyframes finitos, WAAPI pausada e Lottie têm protocolos documentados. Recursos 3D e outras bibliotecas citadas nas referências foram excluídos da proposta conforme o escopo do usuário.

**Contrato:** clips têm início/duração; tempo é absoluto; timelines registradas após construção; sem relógio autônomo, aleatoriedade não semeada ou fetch durante render. Pintura por `z-index`; trilha é organização do Studio. As cenas preservam IDs e variáveis editáveis.

**Uso no site:** produzir um explicador ou um demonstrativo real aprovado e entregar arquivo otimizado/poster ao site. Não usar esse motor como substituto de menus, formulários ou microinterações web.

**Estado:** skill instalada; não há composição de vídeo nem renderizador instalado/validado. Sem garantia de frame idêntico entre versões, máquinas ou codecs apenas por ler o contrato.

### 5.4 `hyperframes-cli`

**Instalação:** 13 arquivos, mesma origem/commit do conjunto Hyperframes. Sem versão semântica declarada. Requer **Node 22+ e FFmpeg**; browser e dependências de captura também devem estar operacionais.

**Mapa dos comandos documentados:**

| Trabalho | Comandos/famílias |
|---|---|
| Criar/configurar | `init`, `capture`; opções de resolução e assets; configuração `hyperframes.json` |
| Inspecionar | `info`, `compositions`, `timeline --json`, `docs`, `usage` |
| Validar | `lint`; `check --json`, amostragem de layout/contraste/motion; sidecar `*.motion.json` |
| Examinar resultados | `snapshot`, `keyframes`, `compare`, `grade-compare`, `audio` |
| Editar timeline | `move`, `trim`, `split`, `set`, `duplicate`, `delete`, `apply`, `undo`, `ids`; planejar com `--plan` |
| Reutilizar | `catalog`, `add` |
| Mídia | `media-use`, `media-treatment`, `remove-background`, `tts`, `transcribe`, `beats`, `normalize-audio` |
| Pré-visualizar | `preview`, `play`; `present` depende de conteúdo fora das seis skills |
| Exportar | `render`, `--batch`, caminhos opcionais `--docker`, `cloud`, `lambda`, `cloudrun` |
| Histórico | `history begin/end`, consulta e undo; `open`, `catch-up` para edição no app |
| Manutenção | `doctor`, `browser`, `upgrade`, `skills`, `clean`, `benchmark`, `auth`, `telemetry`, `feedback` |
| Publicar | `publish`, operações de deploy cloud: disponíveis na documentação, **não autorizadas nesta etapa** |

`validate`, `inspect` e `layout` são aliases depreciados de `check`. `doctor --json` pode sair com código zero apesar de falhas: verificar `.ok`. Uma validação sem amostras não aprova a composição.

**Fluxo futuro:** escrever → lint durante iteração → check com amostras → inspecionar snapshots → preview para revisão → render quando aprovado → conferir duração com ffprobe e quadros decodificados. Exemplos de qualidade: `draft`, `looks`, `delivery`. Referências incluem MP4, sequências de PNG e opções de codec; escolher o formato somente após verificar a CLI fixada e o destino.

**Automação:** verificações, amostragem, lotes e exportação são automatizáveis. Narrativa, fidelidade visual, fontes reais, direitos de mídia, revisão perceptual e decisões de marca exigem julgamento. Aprovação e publicação não se tornam automáticas porque existe um comando.

**Estado:** Node/FFmpeg/ffprobe/Chromium encontrados; CLI não validada em execução. Nenhum `npx` que instale automaticamente ferramentas foi rodado para estas skills.

### 5.5 `hyperframes-registry`

**Instalação:** 13 arquivos, mesma origem/commit do conjunto. Catálogo de blocos e snippets como código editável. A descrição declara cerca de 450 itens; **a quantidade atual do servidor não foi consultada nem certificada**.

**Recursos documentados:** transições, overlays, lower thirds, títulos, texto cinético, props de UI, gráficos e efeitos. Exemplos são identificadores documentados, não itens já instalados no projeto.

**Comandos:** `catalog --query "intenção em inglês" --json` e `add <nome> --json`. Não existe comando `hyperframes registry`. A busca lexical é local sobre o manifesto disponível/cacheado; consulta não é enviada pela busca comum. O manifesto precisa existir. Instalação dos arquivos requer rede mesmo para item usado antes. Busca semântica `--on-device` faz download adicional de cerca de 33MB, não realizado.

**Integração:** bloco em `compositions/<nome>.html`, com timeline própria; componente em `compositions/components/<nome>.html`, mesclado à cena. Configuração de paths em `hyperframes.json`. Variáveis de fonte/cor podem apontar aos tokens da marca; IDs precisam evitar colisões.

**Limites:** não são componentes React do site nem garantia de aderência Union3D. Gradientes, fontes, sombras, blur e z-index dos exemplos precisam de revisão. Não houve instalação de blocos ou templates.

### 5.6 `media-use`

**Instalação:** 117 arquivos, mesma origem/commit do conjunto. Documenta resolução, produção, ingestão, tratamento e registro de mídia para Hyperframes.

**Recursos:** `media-use resolve --type ... --intent ... --project ...`, consulta `--candidates`, reutilização/adopt/ingest, ledger de assets, formatos e metadados, tratamentos/LUT, corte e enquadramento, loudness, ducking, fades, automação e buses de áudio. Registro de proveniência não comprova sozinho autorização de uso.

**Providers:** catálogos/geração HeyGen dependem de autenticação, plano e créditos; outros comandos dependem de ferramentas/modelos locais. `ffmpeg` e `ffprobe` são pré-requisitos importantes. TTS/transcrição não são capacidades habilitadas apenas pela presença de seus textos na skill. Algumas receitas locais usam MLX/macOS e não são transferíveis diretamente para este Linux.

**Restrições:** tratamento em tempo real é Rec.709/SDR; não aplicar silenciosamente a HDR/LOG. Blur de mídia inteira não equivale a anonimizar uma face isolada. Logos e fotos de prova da Union3D devem vir dos materiais oficiais, não de geração ou busca arbitrária.

**Web:** ajuda a produzir arquivos, metadados e derivados; não fornece automaticamente componente acessível, `srcset`, consentimento, lazy loading, captions HTML ou política de autoplay no site. Essa integração pertence ao frontend.

**Estado:** FFmpeg disponível; `heygen` não encontrado no PATH. Presença de variáveis foi verificada sem expor valores, mas não houve `auth status`: autenticação e acesso aos catálogos permanecem **não verificados**, não declarados ausentes só por variável não definida. Nenhuma mídia gerada ou chamada paga.

## 6. Matriz de compatibilidade

Estados: **Compatível** = sem alteração de identidade; **Parcialmente limitado** = precisa adaptação/variante; **Bloqueado** = condição demonstrada impede a operação indicada; **Não aplicável** = sem relação; **Não verificado** = evidência insuficiente. Compatibilidade documental não é prova de execução.

| Elemento | Regra atual/evidência | Skill afetada | Compatibilidade | Limitação | Impacto | Recomendação |
|---|---|---|---|---|---|---|
| Família tipográfica | Geist/Mono; `tokens/fonts.css` | Impeccable | Compatível | Não permite fonte arbitrária; não impede hierarquia | Baixo | Manter; explorar escala, peso e composição |
| Tipografia animada | Frases e ponto; `DESIGN.md:270` | Remotion, Hyperframes | Compatível | Leitura deve sobreviver ao sequenciamento | Médio | Animar palavras/linhas preservando conteúdo e sentido |
| Fontes locais | Woff2 locais | Remotion | Parcialmente limitado | Precisa carregar fontes e aguardar prontidão | Médio | Adaptador `@remotion/fonts`, com release validada |
| Fontes em vídeo HTML | Família personalizada em arquivo | Hyperframes | Compatível | Arquivos devem estar disponíveis no projeto | Médio | `@font-face` local e prontidão antes da timeline |
| Cores da marca | Petróleo/Céu e One Map | Todas | Compatível | Templates genéricos não são paleta autorizada | Alto | Consumir tokens sem copiar cores divergentes |
| CTA de acento | Máximo um por tela | Impeccable, registry | Parcialmente limitado | Ambiguidade com header fixo e diferentes viewports | Médio | Definir por estado/viewport, sem ampliar acento indiscriminadamente |
| Cor em infografia | Céu “só brilha” fora do CTA | Remotion, Hyperframes | Parcialmente limitado | Leitura literal limita preenchimento funcional de dados | Médio | Propor exceção semântica só para dados/seleção; formas/rótulos primeiro |
| Gradientes | Conic da marca e véus; sem decoração genérica | Impeccable, registry | Parcialmente limitado | Parte dos presets não cabe na identidade | Baixo | Restilizar ou rejeitar preset; não ampliar regra só para aproveitá-lo |
| Layout editorial | Grade 12/8/4; margens e escala | Impeccable | Compatível | Não exige cards repetidos ou simetria | Médio | Variar spans, ritmo e relação texto/prova dentro da grade |
| Ritmo de seção | 80px/48px | Impeccable | Parcialmente limitado | Hero/editorial amplo pode precisar papel semântico próprio | Médio | Testar primeiro com escala existente; nova variante só aprovada |
| Geometria | Controles 4px, painéis 12px | Impeccable, registry | Compatível | Componentes externos precisam restyling | Baixo | Manter voz técnica |
| Sombras | Profundidade em resposta a estado | Impeccable, registry | Compatível | Não comporta sombra decorativa permanente | Baixo | Não tratar como deficiência |
| Ícones/logos | SVG oficial e 31 ícones | media-use, registry | Compatível | Busca externa pode criar outra linguagem | Alto | Reutilizar oficiais; extensão de ícones somente coerente e aprovada |
| Fotos reais | Sem banco de lifestyle | media-use | Compatível | Geração não substitui prova real | Alto | Usar mídia autorizada da empresa |
| Mídia ausente | `assets/photos` não existe | media-use, vídeo | Bloqueado | Fidelidade fotográfica final não pode ser validada | Alto | Receber fotos, filmagem e amostras reais |
| Tratamento de foto | CSS grayscale/mix-blend; CSS `:958–961` | media-use/Hyperframes | Parcialmente limitado | Skill pede pipeline de tratamento, não imitação por filtro CSS | Médio | Preservar visual com derivado próprio; não mudar regra web |
| Motion web | CSS, RAF e scroll | Impeccable | Compatível | Efeitos caros precisam medição | Médio | Usar runtime web intencionalmente, com limites |
| Reuso direto no Remotion | `animation`/`transition` e tempo do navegador | Remotion | Bloqueado | Driver não determinístico para o render | Alto | Reescrever driver por frame, preservar tokens |
| Reuso direto no Hyperframes | HUD aleatório, scroll, timers | Hyperframes/CLI | Bloqueado | Não responde exclusivamente ao seek de tempo | Alto | Cena própria com timeline pausada e aleatoriedade semeada |
| Unidades de tempo | CSS ms/s | Remotion, Hyperframes | Parcialmente limitado | Remotion trabalha em frames; Hyperframes em segundos | Médio | Converter numa fronteira explícita e arredondar frames |
| Movimento reduzido | CSS `:2078` e runtime | Impeccable | Compatível | Verificação atual é amostra, não toda interação | Alto | Manter; testar estados e preferências dinâmicas |
| Movimento em vídeo | Frames codificados | Remotion, Hyperframes, media-use | Parcialmente limitado | MP4 não responde ao media query do visitante | Alto | Poster/arquivo alternativo, reprodução opt-in e controle |
| Responsividade | Clamp/grid de viewport | Impeccable | Compatível | Precisa testar conteúdo real | Médio | Mobile/zoom/teclado na futura implementação |
| Versões de vídeo | Canvas fixo e safe areas | Remotion, Hyperframes | Parcialmente limitado | Não se comporta como grid responsivo do site | Médio | Composições/recortes por formato; não só esticar saída |
| React DS | Wrappers visuais e `useU3` | Remotion | Não verificado | Reuso puro plausível; hooks e runtime exigem teste | Médio | Separar apresentação de comportamento antes de reutilizar |
| React DS em HTML | `.jsx` | Hyperframes, registry | Bloqueado | Não há import direto de JSX no formato de cena | Médio | Reusar tokens/assets e markup adaptado; não prometer conversão |
| Camadas | `--u3-z-*`, locais 0–4 | registry/Hyperframes | Parcialmente limitado | Snippets têm números próprios e há documentação divergente | Médio | Mapear z-index em cenas, isolar stacking context |
| Validação semântica | Foco, rotulagem, estados | Impeccable | Compatível | Detector não substitui teste humano de tarefas | Alto | Fonte + navegador + teclado, sem certificação presumida |
| Contraste em vídeo | Duotone, véus, texto claro | Remotion, Hyperframes | Não verificado | Mídia real e frames finais ausentes | Alto | Verificar contraste ao longo da sequência |
| Catálogo e instalação | Arquivos via rede | registry/CLI | Não verificado | CLI não instalada/rodada nesta auditoria | Médio | Fixar versão e validar quando produção for aprovada |
| Catálogos HeyGen | Login/plano | media-use | Não verificado | `auth status` não executado | Médio | Confirmar necessidade antes de autenticar ou contratar |
| Recursos de geração | Avatares, TTS, imagens | media-use | Não aplicável | Sem necessidade institucional demonstrada | Baixo | Não introduzir por demonstração técnica |
| Deploy do site | Não definido | CLI de vídeo | Não aplicável | `publish` publica projeto Hyperframes, não arquitetura do site | Alto | Manter pipeline web separado e exigir autorização |

## 7. Conflitos reais, perdas, riscos e alternativas

### C1 — Runtime web versus vídeo determinístico

**Regra/condição:** os comportamentos implementados em `assets/union3d.js` usam relógio/scroll/RAF e HUD não semeado; não são obrigações da marca. **Capacidade afetada:** seek e render reprodutível. **Evidência:** fontes `:324`, `:535`, `:1063` versus regras de Remotion markup e Hyperframes runtimes.

**Manter sem adaptação:** perde-se controle temporal; uma captura pode ficar congelada, diferente ou vazia. **Modificar:** permite render por frame e revisão previsível. **Riscos:** divergência entre implementações, arredondamento de duração e duplicação. **Alternativa:** imagem/clip previamente aprovado, sem reutilização de código vivo. **Recomendação:** drivers distintos, mesmas decisões de identidade e tokens; não alterar o runtime do DS nesta fase.

### C2 — Escala web versus narrativa audiovisual

**Regra:** usar `--u3-dur-*`; UI tem feedback de 80–500ms e revelações de 800–900ms; loops têm papéis próprios. **Capacidade:** retenção de texto, duração de cenas e ritmo audiovisual. **Evidência:** `tokens/motion.css`, Hyperframes `references/motion.md` e Remotion `sequencing.md`.

**Perda literal:** um título com conteúdo extenso não cabe em 300ms; cenas não são hovers. **Ganho:** adapter de tempo e papéis de cena permitem legibilidade. **Risco:** escalas paralelas sem governança. **Alternativa:** cortes simples e cartelas estáticas. **Recomendação:** manter escala UI e propor namespace audiovisual derivado, com holds por conteúdo. Não substituir as durações existentes.

### C3 — Foto tratada em CSS versus pipeline de mídia

**Regra:** preto e branco/duotone como identidade. **Capacidade:** tratamento de mídia no Hyperframes. **Evidência:** CSS `:958–961` usa filtros e blend; `media-use` orienta tratar mídia pelo pipeline, não duplicar com filtros CSS.

**Perda literal:** copiar a técnica web mantém conflito com o caminho recomendado e pode variar a leitura entre pipelines. **Ganho:** um derivado aprovado mantém consistência. **Risco:** duplo tratamento ou perda de detalhe técnico. **Alternativa:** pré-tratar arquivo uma vez e preservar original. **Recomendação:** manter intenção visual, aprovar correspondência de cor em frames de teste; não exigir trocar o CSS web.

### C4 — Assets externos versus prova da Union3D

**Regra:** obra real e marca oficial. **Capacidade:** catálogos/geração de `media-use` e recursos do registry. **Evidência:** `DESIGN.md` Do/Don't, readme de fotos ausentes e providers da skill.

**Perda ao manter:** nem todo preset ou catálogo poderá ser usado. **Ganho ao flexibilizar genericamente:** volume de mídia, mas sem comprovar trabalho real. **Risco:** credibilidade, direitos e representação falsa de obra. **Alternativa:** diagramas identificados como ilustrativos e assets autorizados. **Recomendação:** manter a regra; não flexibilizar para aproveitar geração.

### C5 — Rigidez de papéis web em composições e dados

**Regra:** Céu não preenche fora do CTA e cores só no mapa central; grid e 80px são web. **Capacidade:** dados e narrativa audiovisual. **Evidência:** `DESIGN.md:244`, layout e exemplos de título/dados nas skills.

**Perda literal:** pode dificultar realce funcional ou enquadramento de vídeo. **Ganho controlado:** papéis explícitos para destaque de dado e canvas de vídeo. **Risco:** banalizar acento e transformar exceção em estilo global. **Alternativa:** rótulos, peso, textura e diferença de luminosidade sem cor nova. **Recomendação:** primeiro alternativas existentes; flexibilização apenas em componente/papel aprovado, nunca cor adicional sem evidência.

### C6 — Templates prontos versus tokens e camadas

**Regra:** tokens e `z-index` sem valores arbitrários globais. **Capacidade:** instalação direta de snippets. **Evidência:** exemplo `grain-overlay` em registry usa `z-index:100`; componentes têm paletas/geometria próprias. O `wiring-blocks.md` descreve `data-track-index` como pintura, mas o `hyperframes/SKILL.md` explicita que a pintura é por `z-index`.

**Perda literal:** colar sem adaptação introduz inconsistência e colisão. **Ganho:** restyling e isolamento aproveitam a lógica sem perder a marca. **Risco:** mudança de seletor quebra snippet. **Alternativa:** implementar efeito simples no stack existente. **Recomendação:** tratar o registry como fonte revisável; testar montagem na versão fixada e seguir contrato principal. Quantidade de templates não é critério de qualidade.

## 8. Ecossistema e matriz de responsabilidades

Arquitetura proposta, não implementada: **tokens/brand assets aprovados → adaptadores de web e vídeo → site novo + uma linha de produção audiovisual escolhida → arquivos exportados e metadados → frontend acessível**. Nenhum runtime de vídeo deve entrar no bundle do site só porque foi usado na produção.

| Atividade | Skill principal | Apoio | Resultado esperado |
|---|---|---|---|
| Direção visual e UX | Impeccable | DS como autoridade | Hierarquia e linguagem próprias, aprovadas |
| Layout, type e UI | Impeccable | Tokens/componentes | Interface responsiva e consistente |
| Microinterações web | Impeccable | Runtime/bases DS | Feedback leve, mensurável e acessível |
| Vídeo React, se escolhido | Remotion Best Practices | Impeccable | Composição por frame com identidade Union3D |
| Vídeo HTML, se escolhido | Hyperframes | Impeccable | Cenas seekáveis com identidade Union3D |
| Operação de vídeo HTML | Hyperframes CLI | Hyperframes | Check, snapshots, preview e arquivo validado |
| Reuso de efeito em vídeo HTML | Hyperframes Registry | Hyperframes/CLI | Bloco selecionado, restilizado e testado |
| Assets e áudio para vídeo | media-use | CLI | Arquivos locais, proveniência e tratamento |
| Integração de mídia no site | Impeccable + engenharia frontend | Saídas de media-use/renderer | Poster, controles, formato, fallback e loading |
| CI e GitHub | Engenharia do projeto | Checks pertinentes | Validações reproduzíveis e PR posterior |

**Impeccable + Remotion/Hyperframes:** compartilham direção, valores de marca e critérios de leitura; não um driver de animação universal.

**Remotion + Hyperframes:** sobreposição real em vídeo, texto, cenas e áudio. Não há integração direta validada entre projetos. O caminho conservador de intercâmbio são mídia exportada e tokens/roteiros, com perda de editabilidade na fronteira. A skill de conversão mencionada no Hyperframes está fora das seis autorizadas e não foi instalada. Não recomendar conversão como capacidade disponível.

**Impeccable + DS:** exemplos genéricos de “fontes saturadas”, grids ou sombras não anulam identidade documentada. Otimizar a aplicação antes de mexer na regra.

**media-use + web:** não substitui inventário de direitos, caption/transcrição, componentes e otimização de entrega. O ledger é útil para rastrear fonte, derivação e uso; a responsabilidade legal continua humana.

## 9. Auditoria de motion e identidade

O DS já tem **28 tokens de motion não depreciados**. A escala-base tem 80, 150, 200, 300, 400, 500, 800 e 900ms; tempos nomeados de coreografia e loops chegam a 40s. Existem emphasized, enter/exit, panel, spring e outras curvas. Revelação: 30px/10px de blur/800ms, com stagger; contagem 1,4s; beam e ambient próprios. Não há lacuna que justifique criar um sistema inteiro de motion.

**Manter:** feedback de controles, entrada/saída por papéis, máscara de linha, parcimônia de beam e um único palco preso por página. Uma narrativa possível é mostrar o mesmo elemento real antes da etapa seguinte e seu registro correspondente; não exige avatar, efeito complexo ou números novos.

**Aprimorar:** documentar orçamento de custo por efeito, prioridade de uma sequência focal, quando parar loops fora da tela, tempo máximo de espera por conteúdo e protocolo para vídeo em movimento reduzido.

A referência `MediaVideo.html` prevê muted/loop/playsinline/preload none e botão de pausa, mas **não contém um arquivo de vídeo**. Isso demonstra intenção de API, não playback funcional validado.

**Vídeo renderizado não é animação responsiva:** o media query não remove movimentos já codificados. Entregar poster ou alternativa estática; reprodução iniciada/controlável; captions/transcrição para conteúdo falado; conteúdo essencial em HTML. Uma versão mobile pode exigir outro enquadramento, não só tamanho menor.

**Easing entre motores:** converter as curvas cubic-bezier onde suportadas e os tempos ms → s ou frames. Não declarar equivalência entre spring do Remotion e a curva CSS chamada spring; são parametrizações distintas. Confirmar visualmente no fps escolhido.

**Acessibilidade:** a documentação diz “todo movimento vira fade de 200ms”, mas o CSS real também desliga efeitos e usa `.01s` em algumas gavetas. Isso é uma simplificação documental a esclarecer; por si só não prova violação. A amostra com preferência reduce confirma carregamento/layout, não todo comportamento de acessibilidade.

## 10. Evoluções propostas: manter, flexibilizar, modificar, expandir

Todas são propostas. Esforços abaixo são estimativas de um profissional familiar com o DS, após conteúdo aprovado, sem produção/captação de mídia e sem instalação de render farms. Não são prazo do site completo.

| ID / classe | Regra atual e problema | Proposta / benefício | Risco | Impacto técnico / visual | Esforço | Afetados / skills |
|---|---|---|---|---|---|---|
| A1 Manter | Petróleo/Céu, Geist/Mono, geometria e voz | Preservar identidade; explorar composição | Baixo | Nenhuma troca de base / alta continuidade | Sem mudança; revisão contínua | Todos / Impeccable e vídeo |
| A2 Manter | Fotos reais e números verificáveis; assets ausentes | Não substituir prova por banco/geração | Dependência de entrega de material | Inventário / credibilidade preservada | 0,5–1 dia para organizar material recebido | Hero, casos, mídia / media-use |
| A3 Manter | Tokens e acessibilidade existentes | Usar fonte única, foco e redução de movimento | Integração pode divergir | Adaptadores / consistente | 0,5–1 dia de contrato inicial | Web e vídeos / todas |
| B1 Flexibilizar | Ritmo 80/48 e grade web; composição pode ficar uniforme | Variantes editoriais/hero usando escala atual primeiro | Exceções excessivas | Variantes documentadas / maior contraste de hierarquia | 1–2 dias | Hero, Section / Impeccable |
| B2 Flexibilizar | One Signal por tela sem estado definido | Definir contagem de CTA por viewport/estado e variante sticky | Diluição se mal aplicado | Regra verificável / acento ainda raro | 0,5–1 dia | Header, CTA / Impeccable |
| B3 Flexibilizar, condicional | Céu fora do CTA só brilho | Permitir uso semântico em dado/seleção se necessário; sem cores novas | Rivalizar com CTA | Token/papel restrito / médio | 0,5–1 dia por padrão com amostra | Gráfico, destaque / vídeo e Impeccable |
| C1 Modificar | Runtime web reutilizado literalmente impede seek | Em adaptadores de vídeo, substituir clock/scroll/random por tempo determinístico | Manter duas implementações | Alto no adapter, zero na marca / fiel | 1–3 dias por cena representativa | Contador, reveal, HUD / Remotion ou Hyperframes |
| C2 Modificar documentação | Shorthand descrito como px; CSS gerado em rem; redução não é só fade | Alinhar texto à fonte normativa, sem regenerar valores para caber na prosa | Baixo | Documental / nenhum | 0,5 dia | DESIGN/readme / Impeccable |
| D1 Expandir | Motion web existe, audiovisual sem papéis próprios | Contrato de tempos de cena, holds, fps e conversão de easing | Escalas concorrentes | Export/adapter / consistência em vídeo | 1–2 dias | Tokens derivados, vídeo / ambas as linhas |
| D2 Expandir | Mídia sem contrato de entrega web completo | Poster, versões, tamanho/peso, carregamento, captions, proveniência e autorizações | Processo ficar burocrático | Pipeline de assets / qualidade real | 1–2 dias, sem edição dos vídeos | Hero e player / media-use + frontend |
| D3 Expandir | Verificadores DS existem sem CI adotada | Repetir checks no CI; testes web e mídia separados | Falsos positivos de detector | Automação / estabilidade | 1–2 dias depois da escolha de stack | Repo / todas conforme uso |

Não há evidência para propor mudança obrigatória de fonte, paleta, raio dos controles, fotos reais, regra de números ou adoção de uma nova biblioteca. O caso C1 modifica **a implementação de adapters**, não o Design System original. O único ajuste documental comprovado é C2; novas direções estéticas continuam opcionais.

## 11. Comparação das três direções

| Critério | A — Conservador | B — Equilibrado, recomendado | C — Expressivo |
|---|---|---|---|
| Direção visual | Regras e variantes atuais integralmente | Identidade preservada, composição editorial e exceções restritas aprovadas | Mesma base, maior liberdade de palco/narrativa aprovada |
| Potencial estético | Sóbrio e preciso | Distintivo por prova, ritmo e hierarquia | Alto quando há conteúdo que sustente |
| Identidade | Máxima continuidade | Alta continuidade, com governança | Maior risco de perder a sobriedade |
| UX | Fluxos diretos e pouca distração | Clareza com uma demonstração útil | Narrativa mais envolvente, potencial espera/distração |
| Limitações | Menos amplitude narrativa | Escolha rigorosa de uma sequência focal | Exige conteúdo audiovisual e revisão mais intensa |
| Complexidade | Baixa | Média e delimitada | Alta |
| Performance | Menor risco de peso | Bom potencial com poster, loading e bundle enxuto | Mais mídia/GPU; exige medir e limitar |
| Acessibilidade | Menos movimento para controlar | Redução, fallback e controle desde o desenho | Mais versões e estados a testar |
| Manutenção | Simples | Sustentável com tokens/adapters e pouca mídia | Maior custo de edição e regeneração |
| Riscos | Repetição visual se todos os blocos forem iguais | Exceções sem documentação | Vídeo pesado, efeitos genéricos, identidade diluída |
| Skills aproveitadas | Impeccable; mídia real organizada; vídeo opcional | Impeccable + uma linha de vídeo quando justificada + media-use | Direção visual, vídeo/catálogo selecionado, pipeline maior |
| Recursos limitados | Templates extravagantes, narrativa longa | Efeitos sem propósito, runtime duplo | Limites de marca, orçamento e acessibilidade continuam |

B é o melhor equilíbrio porque a identidade já é reconhecível e o serviço oferece uma evidência visual própria: obra real e registro técnico. O ganho deve vir dessa prova e de composição, não de mais cores ou mais motores. Não há métricas que permitam prometer ganhos de conversão ou performance antes do novo site.

## 12. Estado de execução e limitações

### Executado

| Verificação | Resultado | Limite |
|---|---|---|
| Git local/remoto | Sem commits/referências; skills não versionadas | Não existe aplicação no repo para testar |
| `build-tokens.mjs --check` | Passou | Consistência de geração, não qualidade visual completa |
| `build-icons.mjs --check` | Passou | Sincronização dos ícones |
| `split-docs-css.mjs --check` | Passou | CSS de componente sem regras de documentação |
| `build-bundle.mjs --check` | Passou; runtime e 49 blocos em dia | Não é minificação/otimização do site |
| `npm ci --ignore-scripts` na cópia legada | Instalou 192 pacotes pelo lockfile | Nenhum lifecycle script de instalação rodado |
| Build legado | Passou, 16 páginas | Fora da arquitetura futura por orientação posterior |
| Chromium 155 em referência Home | 1440px claro, 390px claro e 1440px escuro/reduce; sem erros JS, sem overflow horizontal, Geist carregada | Uma referência, sem navegação completa ou dispositivo físico |
| Referência mobile reduce após rolagem | 8/8 elementos de reveal ativados; sem overflow | Não prova todas as interações; screenshots anteriores sem scroll têm áreas ainda não reveladas |
| Imagens da referência Home | Quatro URLs de imagem indisponíveis nas amostras | Falta de mídia confirmada; fotos reais não podem ser avaliadas |
| Arquivos originais do ZIP | Nenhum alterado, comparação SHA-256 | Saídas geradas e dependências permanecem só na cópia de auditoria |
| Skills Hyperframes | Quatro diretórios iguais byte a byte à origem local | Não prova compatibilidade de uma CLI futura |

O servidor local de inspeção foi encerrado ao final. Screenshots e `browser.json` ficam em `/workspace/auditoria-union3d/evidencias/`. A imagem de uma referência não representa o design proposto para o novo site.

### Disponível no host, sem garantia de pipeline

Node 24.22.1, npm 11.9.0, Python 3.12.14, FFmpeg/ffprobe 7.1.5, Chromium. Node atende ao requisito declarado de 22+ do Hyperframes. Não se inferiu versão mínima de Remotion a partir do nome da skill.

### Não executado/não comprovado

- Engines Impeccable, CLI Hyperframes, Studio/renderer Remotion e geração de mídia.
- Busca online do registry e instalação de itens, comparação visual entre renderizadores, conversão de projetos.
- Autenticação HeyGen, chamadas pagas, cloud, uploads, feedback externo e telemetria de produção.
- Auditoria WCAG integral, leitor de tela, gestos em aparelho físico, Lighthouse/Core Web Vitals, testes de formulário real e compatibilidade de vídeo.
- Build/lint/typecheck/testes do futuro site: ele ainda não foi implementado. O build legado não substitui esses checks.
- Licença/autorizações finais de fotos, música e entregáveis, e validação institucional dos textos/números do anexo.

## 13. Decisões para aprovação — parada da fase 8

1. Adotar o **cenário B** como direção de trabalho do site novo.
2. Preservar regras centrais A1–A3, incluindo Geist/Mono, Petróleo/Céu, geometria, material real e texto verificável.
3. Aprovar ou recusar individualmente B1 (variantes editoriais), B2 (regra de acento por estado) e B3 (exceção funcional de dados; apenas se necessária).
4. Aprovar C2 (clareza documental) e D1–D3 como extensões; C1 só se houver vídeo aprovado.
5. Definir stack depois da aprovação visual/técnica, sem aproveitar o site Astro descartado. Requisito recomendado: páginas predominantemente estáticas, JavaScript só onde necessário, conteúdo semântico e componentes sustentáveis. Framework ainda não decidido.
6. Confirmar se existe necessidade de vídeo. Se sim, escolher **uma** linha de produção para a primeira composição: Remotion quando a composição React for vantajosa, ou Hyperframes quando cenas HTML editáveis forem vantajosas. A skill não deve decidir a marca nem impor um motor.
7. Disponibilizar/confirmar fotografias e filmagens reais, amostras anonimizadas, direitos, conteúdo institucional e objetivos de conversão. A arquitetura detalhada de páginas é fase 9, não foi iniciada.

Nenhuma proposta acima foi aplicada. A próxima etapa depende da aprovação explícita solicitada pelo próprio prompt mestre: “PARE NESTA ETAPA”. Não houve alteração definitiva no DS, implementação do novo site, commit, push, PR, merge, deploy ou publicação.
