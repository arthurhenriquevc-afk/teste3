# Estudos de composição — combinação escolhida

Os três pertencem ao cenário B aprovado. São imagens geradas para estudo de estrutura, não páginas implementadas. Não existe fotografia, projeto ou registro técnico inventado: os campos de mídia estão reservados e identificados. Textos gerados são propostas editoriais, não fatos institucionais novos aprovados.

| Estudo | Arquivo | Ênfase | Atenção |
|---|---|---|---|
| 1 — Caderno editorial | estudo-a.png | Título e oferta claros, fotografia larga e composição espaçada | A fotografia precisa ser forte para a interface não se tornar apenas texto e retângulos |
| 2 — Arquitetura em primeiro plano | estudo-b.png | A imagem de abertura domina a página; o título acompanha o enquadramento | O campo petróleo é uma reserva de mídia, não a recomendação de um hero vazio ou de fundo tecnológico |
| 3 — Díptico do registro | estudo-c.png | Tipografia de grande escala e justaposição foto/registro | Maior risco de a tipografia dominar a arquitetura; precisa de escala responsiva e de revisão com o acervo |

Escolha explícita do usuário: estudos 2 e 1, em combinação. A implementação utiliza o hero amplo do estudo 2 e o ritmo editorial do estudo 1. O estudo 3 não foi selecionado.

## Movimento, ainda não executado

No site, a primeira experiência deve transformar a imagem da estrutura real em seu registro digital correspondente, sem exigir scroll infinito nem ocultar o acesso à navegação. A segunda deve mostrar a evolução de uma mesma estrutura e a informação que fica encoberta. As imagens de estudo apenas reservam essas posições. Antes de implementar com mídia final, obter pares reais e aprovar sua correspondência.

Não literalizar as imprecisões de um mock gerado: contraste, logo vetorial oficial, texto em HTML, pesos de Geist, cantos de 4px dos controles, alinhamentos, fontes locais, responsividade, foco e movimento reduzido serão verificados em código. Não copiar uma linha gráfica de separação se ela contrariar a regra do Design System; a aprovação é de composição e hierarquia.

## Proveniência e estado

Gerados nesta sessão com a ferramenta de imagem. Cada PNG tem prompt incorporado e um sidecar `.png.json`, com `approved: false`. Referências: captura do espécime de tipografia e logo oficial do pacote fornecido. O contato do estudo 2 foi corrigido para o telefone do anexo. Nenhum asset de fotografia foi produzido.

Prompts originais e revisados estão em `prompts/`. `estudo-b.png.json` registra também o prompt de edição. Arquivos descartados do gerador não são assets do projeto. Aprovação de composição pendente; implementação não iniciada; sem deploy ou publicação.
