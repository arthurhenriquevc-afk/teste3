# Direção editorial — adendo à auditoria

O usuário aprovou o cenário B em 03/11/2026 e especificou:

- Universo de arquitetura internacional, indústria premium e engenharia especializada; não startup tecnológica.
- Fotografia arquitetônica real de alta qualidade, composição editorial, sans-serif com hierarquia, grandes respiros e geometria discreta.
- Sem projetos inventados. Fotografias, equipamentos, atividades e resultados do acervo real devem ser solicitados e suas ausências sinalizadas.
- Duas experiências principais de movimento: foto real → representação digital no hero; evolução da construção → ocultação das informações antes visíveis.
- A homepage apresenta e desperta interesse; detalhes nas páginas dos serviços. Sem ressalvas repetidas sobre laudos.
- Personalidade reconhecível sem o logotipo.

Base técnica aceita: HTML/CSS/TypeScript e Vite. Preferência aceita: estudo visual **antes** do código. A aprovação B não é aprovação automática de uma composição ainda não apresentada.

O DESIGN.md recebido foi copiado sem mudanças para registrar a base. O presente adendo delimita a aplicação aprovada. Nesta etapa não há página implementada, render de vídeo nem mídia falsa.

## Conteúdo e arquitetura propostos

Home: apresentação curta e clara → obra/registro (primeiro momento) → ponto de vista da Union3D → construção/informação (segundo momento) → entradas editoriais para serviços → contato.

Serviços: diretório organizado pelas duas situações existentes (obra em andamento / edificação existente); páginas específicas com finalidade, momento, escopo, material real e contato contextual. Não copiar os layouts do site descartado.

Empresa: posicionamento e atuação apoiados apenas nos fatos confirmados; fotografia da equipe/campo quando fornecida. Contato: canais fornecidos, formulário somente com comportamento de envio honesto e integração definida. Privacidade: depende dos dados legais e do tratamento de dados efetivo.

## Brief de acervo

1. Hero: fotografia arquitetônica de uma estrutura real, larga, sem texto, alta resolução; captura digital da mesma estrutura e do mesmo ponto de vista. Confirmar autoria, autorização, enquadramento e correspondência. Não fabricar a segunda imagem a partir da primeira como se fosse levantamento.
2. Evolução: duas ou mais capturas do mesmo local em etapas diferentes (instalações aparentes / fechamento), registro técnico correspondente e autorização para divulgação. Sem esse conjunto, apresentar apenas o estudo da interação, explicitamente marcado como pendente.
3. Editorial: obra em escala arquitetônica; equipe/equipamento em atividade; detalhe material. Sem títulos ou promessas embutidos nos arquivos.

## Critérios de aceitação para a futura implementação

Texto e controles em HTML; menu e links reais; leitura mobile; imagens dimensionadas e otimizadas; hero com scroll sem capturar o gesto; segunda transformação independente da primeira; preferência de movimento reduzido com estado estático e controle manual; nada essencial oculto por animação; nenhuma fotografia gerada apresentada como obra real. Build, typecheck, links, teclado, responsividade e comportamento das duas experiências devem ser verificados no site novo.
