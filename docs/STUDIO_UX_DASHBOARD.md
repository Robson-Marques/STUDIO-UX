# STUDIO_UX_DASHBOARD.md — Composição de Dashboards · Dashboard Composition

> Documento normativo vivo. Responde a: **como se compõe um dashboard no Studio UX — como os números, gráficos e listas convivem numa mesma tela, o que ganha destaque, o que recua, e como isso não vira poluição visual?**
> Living normative document. Answers: **how is a dashboard composed in Studio UX — how numbers, charts and lists coexist on one screen, what stands out, what recedes, and how this never becomes visual clutter?**
> Governança: `STUDIO_UX.md`. Princípios-âncora: P1, P5, P6, P8, P14, P17, P21. Fundamento de gosto: `STUDIO_UX_VISUAL_DNA.md` (§6.8 gráficos, §8 exemplos). Peças: `components/STUDIO_UX_COMPONENT_LIBRARY.md`. Níveis: `STUDIO_UX_GRAMMAR.md`.

```
Architecture Boundary Check — STUDIO_UX_DASHBOARD
Resolve · Solves:            como COMPOR um dashboard — a distribuição da informação (o que vem primeiro,
                             o que recua), quando um número vira card, quando vira gráfico, quando vira tabela,
                             e como manter a calma numa tela cheia de indicadores.
                             / how to COMPOSE a dashboard — the distribution of information (what comes first,
                             what recedes), when a number becomes a card, a chart or a table, and how to keep
                             a screen full of indicators calm.
Não pertence a outro porque · Not elsewhere because:
                             COMPONENT_LIBRARY define as peças (StatCard, Card, DataTable) mas não como arranjá-las
                             juntas; VISUAL_DNA dá o gosto do gráfico (§6.8) mas não a composição da tela;
                             DESKTOP/MOBILE citam o arquétipo "Dashboard" mas não esgotam a regra de composição.
                             Faltava o dono da COMPOSIÇÃO de dashboards.
                             / COMPONENT_LIBRARY defines the pieces but not how to arrange them together; VISUAL_DNA
                             gives chart taste (§6.8) but not screen composition; DESKTOP/MOBILE cite the "Dashboard"
                             archetype but don't exhaust the composition rule. The owner of dashboard COMPOSITION was missing.
Complementa · Complements:   COMPONENT_LIBRARY, VISUAL_DNA, GRAMMAR, VISUAL_RHYTHM, LAYOUT_SYSTEM, PATTERNS, DESKTOP, MOBILE.
Nunca substitui · Never replaces: COMPONENT_LIBRARY (as peças e seu comportamento), LAYOUT_SYSTEM (grid/colunas/regiões),
                             VISUAL_DNA (o caráter do gráfico), TOKENS (valores), PATTERNS (fluxos genéricos).
Dono · Owner:                este doc, para o domínio "composição de dashboards".
                             / this doc, for the "dashboard composition" domain.
```

---

## 1. O que é um dashboard aqui · What a dashboard is here

**PT** — Um dashboard é uma **tela de relance**: existe para que alguém entenda, em segundos, o estado do que importa e saiba o próximo passo. Não é um depósito de tudo que se pode medir — é uma decisão editorial sobre o que merece a atenção do usuário agora. O teste do minimalismo do Studio UX (`VISUAL_DNA` §5.1) vale em cheio: "o que posso remover sem perda?" — e remover. Um bom dashboard responde três perguntas do P6 sem esforço: *onde estou, o que importa, o que faço a seguir*. Se a tela obriga o usuário a caçar, ela ainda não foi composta.

**EN** — A dashboard is a **glance screen**: it exists so someone understands, in seconds, the state of what matters and knows the next step. It is not a dump of everything measurable — it is an editorial decision about what deserves the user's attention now. Studio UX's minimalism test (`VISUAL_DNA` §5.1) fully applies: "what can I remove without loss?" — and remove it. A good dashboard answers P6's three questions effortlessly: *where am I, what matters, what do I do next*. If the screen forces the user to hunt, it hasn't been composed yet.

**PT** — Este documento é dono da **composição**: como as peças convivem. As peças em si (StatCard, Card, DataTable, gráfico) são do `COMPONENT_LIBRARY`; o caráter do gráfico (poucas cores, sem 3D, sem sombra) é do `VISUAL_DNA` §6.8; o grid e as colunas são do `LAYOUT_SYSTEM`; os valores são dos tokens. Aqui falamos de **arranjo, prioridade e contenção**.

**EN** — This document owns **composition**: how the pieces coexist. The pieces themselves (StatCard, Card, DataTable, chart) belong to `COMPONENT_LIBRARY`; chart character (few colors, no 3D, no shadow) to `VISUAL_DNA` §6.8; the grid and columns to `LAYOUT_SYSTEM`; the values to the tokens. Here we speak of **arrangement, priority and restraint**.

---

## 2. A pirâmide invertida — o mais importante primeiro · The inverted pyramid — most important first

**PT** — A informação de um dashboard distribui-se como uma **pirâmide invertida**, herdada do jornalismo: o mais importante ocupa o topo e a esquerda (onde o olho ocidental começa a ler), e a densidade e o detalhe crescem conforme se desce. No topo, poucos indicadores-síntese (o "manchete"); no meio, a evolução e as comparações (os gráficos); embaixo, o detalhe acionável (listas e tabelas). Quem só bate o olho no topo já saiu sabendo o essencial; quem precisa de mais desce. Nunca se inverte: um gráfico de detalhe fino não abre o dashboard, e um número crítico não fica escondido no rodapé.

**EN** — A dashboard's information is distributed as an **inverted pyramid**, borrowed from journalism: the most important sits at the top and left (where the Western eye starts reading), and density and detail grow as you scroll down. At the top, a few synthesis indicators (the "headline"); in the middle, evolution and comparisons (the charts); at the bottom, actionable detail (lists and tables). Someone who only glances at the top already leaves knowing the essentials; whoever needs more scrolls. It never inverts: a fine-detail chart doesn't open the dashboard, and a critical number isn't buried in the footer.

**PT** — Essa ordem é hierarquia visual (`VISUAL_DNA` §5.4), construída por **posição, tamanho, peso e espaço** — nunca por moldura ou cor gritante. O número que mais importa é o maior e o mais alto; o de apoio é menor e mais abaixo. A hierarquia é o pensamento da tela: sem ela, o dashboard vira um mural plano onde tudo grita igual e nada é ouvido.

**EN** — This order is visual hierarchy (`VISUAL_DNA` §5.4), built by **position, size, weight and space** — never by a frame or a loud color. The number that matters most is the largest and highest; the supporting one is smaller and lower. Hierarchy is the screen's thinking: without it, the dashboard becomes a flat wall where everything shouts equally and nothing is heard.

---

## 3. Os níveis de composição (GRAMMAR) · The composition levels (GRAMMAR)

**PT** — Um dashboard é composto nos níveis da gramática (`GRAMMAR`): a **Region** de conteúdo abriga o dashboard; ele se divide em **Sections** temáticas ("Visão geral", "Vendas", "Operação"); cada Section contém **Blocks** coesos (um bloco de KPIs, um bloco de gráfico com seu título, um bloco de lista de pendências); cada Block é montado com **Components** oficiais; e o **Content** é o dado real. Um número nunca aparece solto: ele mora num StatCard, dentro de um Block de KPIs, dentro de uma Section. Se você tem um indicador e não sabe em qual Section ele vive, a tela ainda não foi pensada (P6).

**EN** — A dashboard is composed at the grammar levels (`GRAMMAR`): the content **Region** hosts the dashboard; it splits into thematic **Sections** ("Overview", "Sales", "Operations"); each Section holds cohesive **Blocks** (a KPI block, a chart-with-title block, a pending-items list block); each Block is assembled from official **Components**; and **Content** is the real data. A number never appears loose: it lives in a StatCard, inside a KPI Block, inside a Section. If you have an indicator and don't know which Section it lives in, the screen hasn't been thought through yet (P6).

**PT** — As Sections separam-se por **espaço e ritmo** (`VISUAL_RHYTHM`), não por linhas: um degrau de espaço maior entre Sections do que entre Blocks já diz "isto é outro assunto" sem desenhar uma caixa (P5). O grid que posiciona os Blocks (quantas colunas, onde quebra) é do `LAYOUT_SYSTEM` — este documento diz *que* Blocks convivem e *em que ordem de prioridade*, não em quantas colunas.

**EN** — Sections separate by **space and rhythm** (`VISUAL_RHYTHM`), not lines: a larger space step between Sections than between Blocks already says "this is another subject" without drawing a box (P5). The grid that positions the Blocks (how many columns, where it breaks) belongs to `LAYOUT_SYSTEM` — this document says *which* Blocks coexist and *in what priority order*, not in how many columns.

---

## 4. Como os indicadores (KPIs) aparecem · How indicators (KPIs) appear

**PT** — O KPI é o topo da pirâmide. Ele aparece num **StatCard** (dono: `COMPONENT_LIBRARY`): um número dominante, um rótulo humano acima ou abaixo (P11 — "Clientes ativos", não `active_count`), e uma variação/tendência com **sinal + cor + ícone** juntos (P17 — nunca a cor sozinha dizendo "caiu"). A régua de gosto está no exemplo do `VISUAL_DNA` §8: superfície levemente elevada, muito espaço interno, sem borda pesada, sem fundo colorido, sem ícone decorativo. O olho lê o número num instante. A cor de status toca só o símbolo e o texto da variação, nunca colore o cartão inteiro.

**EN** — The KPI is the top of the pyramid. It appears in a **StatCard** (owner: `COMPONENT_LIBRARY`): a dominant number, a human label above or below (P11 — "Active customers", not `active_count`), and a change/trend with **sign + color + icon** together (P17 — never color alone saying "it dropped"). The taste ruler is in the `VISUAL_DNA` §8 example: a slightly elevated surface, generous inner space, no heavy border, no colored background, no decorative icon. The eye reads the number instantly. The status color touches only the change's symbol and text, never coloring the whole card.

**PT** — KPIs vivem juntos num **Block de indicadores** — uma fileira de StatCards de igual peso, lado a lado no Desktop, empilhados no Mobile. A régua de contenção: **poucos números grandes** no topo. Um dashboard executivo mostra de três a cinco; passar disso dilui o destaque e o "manchete" some. Se há muitos indicadores candidatos, isso é sinal de que faltam Sections (separe por assunto) ou de que alguns não são KPIs de topo (descem para o detalhe).

**EN** — KPIs live together in an **indicator Block** — a row of equal-weight StatCards, side by side on Desktop, stacked on Mobile. The restraint rule: **few large numbers** at the top. An executive dashboard shows three to five; beyond that the emphasis dilutes and the "headline" disappears. If there are many candidate indicators, that signals missing Sections (split by subject) or that some aren't top KPIs (they descend to the detail).

**PT — Nunca mentir o número (anti-erro-silencioso).** O StatCard tem estados projetados (P14): carregando (Skeleton), carregado, **erro** (nunca mostra um número velho como se fosse novo) e vazio (sem dado ainda). Um valor obsoleto exibido como atual é o pior bug de um dashboard — parece plausível e engana. Se o dado falhou, o cartão diz que falhou; não inventa um fallback silencioso.

**EN — Never lie the number (anti-silent-error).** The StatCard has designed states (P14): loading (Skeleton), loaded, **error** (never shows an old number as new) and empty (no data yet). A stale value shown as current is a dashboard's worst bug — it looks plausible and deceives. If the datum failed, the card says it failed; it doesn't invent a silent fallback.

---

## 5. Número, gráfico ou tabela — a decisão · Number, chart or table — the decision

**PT** — A pergunta central da composição: cada dado merece qual forma? A regra é de **intenção de leitura**:

- **Um número** (StatCard) quando o que importa é *o estado agora*: quanto é, quantos são, subiu ou desceu. É a forma mais rápida de ler — e a primeira escolha. Se um número basta, um gráfico é excesso.
- **Um gráfico** quando o que importa é *a forma no tempo ou a comparação*: uma tendência, uma sazonalidade, a distribuição entre categorias. O gráfico só se justifica quando a **relação** entre pontos carrega o significado; um gráfico para exibir um único valor é decorativo (anti-padrão).
- **Uma tabela** (DataTable) quando o que importa é *o detalhe acionável*: os registros individuais que o usuário vai inspecionar ou operar. A tabela é o fundo da pirâmide — o convite para agir sobre itens específicos.

**EN** — The core composition question: which form does each datum deserve? The rule is **reading intent**:

- **A number** (StatCard) when what matters is *the state now*: how much, how many, up or down. It is the fastest form to read — and the first choice. If a number suffices, a chart is excess.
- **A chart** when what matters is *shape over time or comparison*: a trend, a seasonality, the distribution across categories. A chart is only justified when the **relationship** between points carries the meaning; a chart to show a single value is decorative (anti-pattern).
- **A table** (DataTable) when what matters is *actionable detail*: the individual records the user will inspect or operate on. The table is the pyramid's base — the invitation to act on specific items.

**PT** — Na dúvida entre número e gráfico, comece pelo número: é mais legível, ocupa menos, e quase sempre responde a pergunta de relance. O gráfico entra quando o número sozinho esconde a história (um total estável que na verdade oscila muito no meio do mês). Um dashboard maduro tem **poucos gráficos, bem escolhidos**, não um gráfico por métrica.

**EN** — When in doubt between number and chart, start with the number: more legible, smaller footprint, and almost always answers the glance question. The chart enters when the number alone hides the story (a stable total that actually swings mid-month). A mature dashboard has **few, well-chosen charts**, not one chart per metric.

---

## 6. Como os gráficos convivem · How charts coexist

**PT** — O caráter de cada gráfico é do `VISUAL_DNA` §6.8 — limpo a ponto de parecer óbvio: poucas cores (as mesmas semânticas do sistema), sem 3D, sem sombra, sem efeito; eixo, rótulo e valor têm prioridade sobre o enfeite. Este documento cuida da **convivência**: cada gráfico mora num Block com **título claro, unidade e legenda** (P11 — na língua do usuário); gráficos irmãos numa Section usam a **mesma paleta e a mesma convenção** (a mesma cor significa a mesma coisa em todos), para o olho não reaprender a cada bloco. Cor tem papel semântico (P8) e nunca é o único sinal (P17): uma série também se distingue por rótulo direto, padrão ou posição.

**EN** — Each chart's character belongs to `VISUAL_DNA` §6.8 — clean to the point of looking obvious: few colors (the system's same semantic ones), no 3D, no shadow, no effect; axis, label and value take priority over ornament. This document handles **coexistence**: each chart lives in a Block with a **clear title, unit and legend** (P11 — in the user's language); sibling charts in a Section use the **same palette and convention** (the same color means the same thing everywhere), so the eye doesn't relearn per block. Color has a semantic role (P8) and is never the sole cue (P17): a series is also distinguished by a direct label, pattern or position.

**PT** — Poucos gráficos por Section, com respiro entre eles (P5). Dois gráficos que respondem à mesma pergunta são um só bem feito. Um gráfico grande e importante pode ocupar mais largura que os de apoio — a própria diferença de tamanho constrói a hierarquia. Cada gráfico projeta seus estados (P14): carregando (Skeleton na forma do gráfico), **sem dados no período** (EmptyState específico, não um gráfico vazio ambíguo) e erro (com repetir). Um eixo que começa fora do zero para dramatizar uma variação é desonesto — o gráfico do Studio UX não distorce para impressionar.

**EN** — Few charts per Section, with breathing room between them (P5). Two charts answering the same question are one done well. A large, important chart may take more width than the supporting ones — the size difference itself builds hierarchy. Each chart designs its states (P14): loading (a Skeleton in the chart's shape), **no data in range** (a specific EmptyState, not an ambiguous blank chart) and error (with retry). An axis starting off-zero to dramatize a swing is dishonest — the Studio UX chart doesn't distort to impress.

---

## 7. Como as tabelas e listas convivem · How tables and lists coexist

**PT** — No fundo da pirâmide vive o detalhe acionável. No Desktop, é uma **DataTable** (dono: `COMPONENT_LIBRARY`; composição detalhada: `STUDIO_UX_TABLES.md`) — tipicamente uma versão enxuta dentro do dashboard: as poucas colunas que importam para agir, as linhas mais relevantes (as pendentes, as recentes), com um caminho para a tela cheia da coleção. No Mobile, a mesma coleção vira **lista de Cards** (P4). O dashboard não repete a tabela inteira do módulo; ele mostra o recorte acionável e leva ao detalhe.

**EN** — At the pyramid's base lives actionable detail. On Desktop, a **DataTable** (owner: `COMPONENT_LIBRARY`; detailed composition: `STUDIO_UX_TABLES.md`) — typically a lean version inside the dashboard: the few columns that matter for acting, the most relevant rows (pending, recent), with a path to the collection's full screen. On Mobile, the same collection becomes a **list of Cards** (P4). The dashboard doesn't repeat the module's whole table; it shows the actionable slice and links to the detail.

**PT** — A ponte entre topo e base é a **navegação por significado**: cada indicador aponta para o detalhe correspondente (o KPI "12 faturas vencidas" leva à lista dessas faturas). Um dashboard onde os números não levam a lugar nenhum é um mural de vaidade — informa mas não deixa agir, violando o P6 ("qual a ação principal").

**EN** — The bridge between top and base is **navigation by meaning**: each indicator links to its matching detail (the KPI "12 overdue invoices" leads to the list of those invoices). A dashboard where numbers lead nowhere is a vanity wall — it informs but doesn't let you act, violating P6 ("what's the primary action").

---

## 8. Quando usar Card, e quando NÃO · When to use Card, and when NOT

**PT** — O Card agrupa informação relacionada de uma entidade numa superfície elevada (dono: `COMPONENT_LIBRARY`; superfície: `SURFACES`). Num dashboard, ele é legítimo para: um **StatCard** de KPI, um **Block de gráfico** com seu título, um **resumo de entidade** (o cliente do dia, a conexão em foco). Ele **não** é para: emoldurar cada pedaço da tela. O anti-padrão-mor do dashboard é o **"mar de cards"** (`VISUAL_DNA` §6.9) — tudo virou caixa elevada, nada tem hierarquia, e o olho não sabe onde pousar porque cada elemento tem o mesmo peso visual.

**EN** — The Card groups related info of an entity on an elevated surface (owner: `COMPONENT_LIBRARY`; surface: `SURFACES`). On a dashboard, it is legitimate for: a KPI **StatCard**, a **chart Block** with its title, an **entity summary** (the customer of the day, the connection in focus). It is **not** for: framing every piece of the screen. The dashboard's chief anti-pattern is the **"sea of cards"** (`VISUAL_DNA` §6.9) — everything became an elevated box, nothing has hierarchy, and the eye doesn't know where to land because every element carries the same visual weight.

**PT** — A régua: um card é para agrupar o que é **de fato um grupo**. Antes de colocar algo numa caixa, tente separá-lo por espaço (P5 — a caixa é o último recurso, não o primeiro). Se uma Section já está separada por ritmo de espaço, seus Blocks não precisam, cada um, de uma borda ao redor. Elevação contida (P9): poucos níveis, sombra discreta que comunica "isto flutua", nunca sombra para embelezar um cartão parado.

**EN** — The rule: a card is for grouping what is **truly a group**. Before putting something in a box, try separating it with space (P5 — the box is the last resort, not the first). If a Section is already separated by space rhythm, its Blocks each don't need a border around them. Restrained elevation (P9): few levels, a discreet shadow saying "this floats", never a shadow to beautify a resting card.

---

## 9. Executivo vs operacional · Executive vs operational

**PT** — Há dois temperamentos de dashboard, e a composição muda com o propósito:

- **Executivo** — para quem *monitora e decide*. Poucos números grandes, tendências de alto nível, comparação de períodos. Prioriza **visão e direção** sobre detalhe. Densidade baixa, muito respiro, o "manchete" domina. Raramente exige ação imediata na própria tela — leva ao detalhe quando algo chama atenção.
- **Operacional** — para quem *age agora*. Densidade maior (P21 — o operador quer ver muito de uma vez), listas de itens pendentes, estado em quase-tempo-real, ações à mão. Prioriza **densidade e ação** sobre síntese. Aqui a DataTable e as listas ganham peso, e a tela é uma bancada de trabalho, não um painel de vitrine.

**EN** — There are two dashboard temperaments, and composition changes with purpose:

- **Executive** — for those who *monitor and decide*. Few large numbers, high-level trends, period comparison. Prioritizes **vision and direction** over detail. Low density, plenty of breathing room, the "headline" dominates. Rarely demands immediate action on-screen — it leads to detail when something draws attention.
- **Operational** — for those who *act now*. Higher density (P21 — the operator wants to see a lot at once), pending-item lists, near-real-time state, actions at hand. Prioritizes **density and action** over synthesis. Here the DataTable and lists gain weight, and the screen is a workbench, not a showcase panel.

**PT** — Os dois compartilham a mesma linguagem e as mesmas peças; divergem na **dosagem** de densidade e na proporção número/gráfico/lista. Dentro de cada um, a densidade é coerente (P21) — não se mistura uma metade frouxa com outra apertada sem razão. E os dois respeitam o teto: nem o executivo vira pobreza (três números perdidos num oceano), nem o operacional vira amontoado (tudo apertado sem hierarquia).

**EN** — Both share the same language and pieces; they diverge in the **dosage** of density and in the number/chart/list proportion. Within each, density is coherent (P21) — a loose half isn't mixed with a cramped one without reason. And both respect the ceiling: the executive doesn't become poverty (three numbers lost in an ocean), nor the operational a pile (everything cramped with no hierarchy).

---

## 10. Dashboards simples vs complexos · Simple vs complex dashboards

**PT** — Um dashboard **simples** é uma Section: uma fileira de KPIs e talvez um gráfico. Não precisa de mais estrutura — forçar Sections e abas onde há pouca informação é overengineering visual. Um dashboard **complexo** tem várias Sections por assunto, cada uma com seu Block de KPIs, seus gráficos e sua lista; quando as Sections são muitas, considere **abas** (`Tabs`, dono: `COMPONENT_LIBRARY`) para não empilhar tudo numa rolagem infinita — cada aba é um recorte coeso (ex.: "Financeiro", "Operação", "Atendimento"). A regra de crescimento: **não é tudo em cima ao mesmo tempo.** Mostrar todas as Sections abertas simultaneamente, todas competindo, é o anti-padrão do "despejo" — o usuário não sabe por onde começar.

**EN** — A **simple** dashboard is one Section: a KPI row and maybe a chart. It needs no more structure — forcing Sections and tabs where there's little information is visual overengineering. A **complex** dashboard has several Sections by subject, each with its KPI Block, charts and list; when Sections are many, consider **tabs** (`Tabs`, owner: `COMPONENT_LIBRARY`) so as not to stack everything into an infinite scroll — each tab is a cohesive slice (e.g. "Finance", "Operations", "Support"). The growth rule: **not everything at once.** Showing all Sections open simultaneously, all competing, is the "dump" anti-pattern — the user doesn't know where to start.

---

## 11. Desktop vs Mobile · Desktop vs Mobile

**PT** — São **duas composições distintas do mesmo dashboard** (P4), não uma esticada na outra. No **Desktop**, o dashboard é uma **grade de múltiplas colunas** (`DESKTOP` §7.1): fileira de StatCards no topo, blocos de gráfico e listas lado a lado abaixo, aproveitando a largura para pôr comparações em paralelo. O grid vem do `LAYOUT_SYSTEM`. O olho varre da esquerda-topo em diagonal; a densidade é maior porque o operador quer ver muito de uma vez.

**EN** — These are **two distinct compositions of the same dashboard** (P4), not one stretched into the other. On **Desktop**, the dashboard is a **multi-column grid** (`DESKTOP` §7.1): a StatCard row on top, chart blocks and lists side by side below, using width to place comparisons in parallel. The grid comes from `LAYOUT_SYSTEM`. The eye sweeps from top-left diagonally; density is higher because the operator wants to see a lot at once.

**PT** — No **Mobile**, o dashboard é uma **coluna única rolável de cartões priorizados** (`MOBILE`, `DESKTOP` §7.1) — os três a cinco números que cabem na zona do polegar, empilhados em ordem de importância, seguidos de um gráfico por vez e de listas de Cards. Não há grade densa: o que no Desktop convive lado a lado, no Mobile vira sequência vertical na ordem da pirâmide. Controles de período/filtro vão para bottom sheet. Priorizar é obrigatório — no Mobile não cabe tudo, então o que fica de fora do primeiro scroll precisa ser o menos crítico.

**EN** — On **Mobile**, the dashboard is a **single scrollable column of prioritized cards** (`MOBILE`, `DESKTOP` §7.1) — the three to five numbers that fit the thumb zone, stacked by importance, followed by one chart at a time and Card lists. There is no dense grid: what coexists side by side on Desktop becomes a vertical sequence in pyramid order on Mobile. Period/filter controls go to a bottom sheet. Prioritizing is mandatory — on Mobile not everything fits, so what falls below the first scroll must be the least critical.

---

## 12. Anti-padrões · Anti-patterns

**PT / EN**

- **Mar de cards** — tudo virou caixa elevada, nada tem hierarquia (P5, P9; `VISUAL_DNA` §6.9). / **Sea of cards** — everything became an elevated box, nothing has hierarchy.
- **Mural de vaidade / números sem próximo passo** — indicadores que não levam ao detalhe nem sugerem ação (viola P6). / **Vanity wall / numbers with no next step** — indicators that lead nowhere and suggest no action.
- **Tudo em cima ao mesmo tempo** — todas as Sections competindo, sem prioridade, o "despejo". / **Everything at once** — all Sections competing, no priority, the "dump".
- **Gráfico decorativo** — gráfico para um único valor, ou 3D/sombra/efeito que enfeita sem informar (`VISUAL_DNA` §6.8). / **Decorative chart** — a chart for a single value, or 3D/shadow/effect that adorns without informing.
- **Cor sem significado** — colorir cartões e séries para "dar vida", sem papel semântico (viola P8); cor como único sinal (viola P17). / **Color with no meaning** — coloring cards and series to "add life", no semantic role; color as the sole cue.
- **Número plausível mentiroso** — mostrar valor obsoleto/estimado como se fosse o real e atual (anti-erro-silencioso; viola o estado de erro do StatCard). / **Lying plausible number** — showing a stale/estimated value as the real, current one.
- **Densidade sem hierarquia** — apertar tudo sem espaço nem ordem, o amontoado (viola P21, P5). / **Density without hierarchy** — cramming everything with no space or order.
- **Eixo desonesto** — gráfico que distorce escala/zero para dramatizar. / **Dishonest axis** — a chart distorting scale/zero to dramatize.
- **Portar o Desktop encolhendo** — espremer a grade densa no Mobile em vez de reprojetar a coluna priorizada (viola P4). / **Porting Desktop by shrinking** — squeezing the dense grid onto Mobile instead of redesigning the prioritized column.

---

*Documento vivo. Descreve a composição de dashboards que existe hoje; referencia os donos (COMPONENT_LIBRARY, VISUAL_DNA, LAYOUT_SYSTEM, TOKENS) e nunca redefine peça, gosto de gráfico, grid ou valor. Toda mudança nas duas línguas na mesma leva. · Living document. Describes today's dashboard composition; it references the owners and never redefines a piece, chart taste, grid or value. Every change in both languages in the same commit.*
