# STUDIO_UX_VISUAL_RHYTHM.md — Ritmo visual · Visual rhythm

> Documento normativo vivo. Responde a uma pergunta: **por que uma interface parece organizada antes mesmo de ser lida — e como reproduzir essa sensação com regras objetivas de espaço, agrupamento, fluxo, peso e alinhamento?**
> Living normative document. Answers one question: **why does an interface look organized even before it is read — and how do we reproduce that feeling with objective rules of space, grouping, flow, weight and alignment?**
> Governança: `STUDIO_UX.md`. Fundamento: `STUDIO_UX_PHILOSOPHY.md`, `STUDIO_UX_PRINCIPLES.md`, `STUDIO_UX_VISUAL_DNA.md`.

```
Architecture Boundary Check — STUDIO_UX_VISUAL_RHYTHM
Resolve · Solves:            as regras de composição espacial que fazem uma tela parecer organizada — como o
                             espaço agrupa, separa, dirige o olhar e equilibra o peso, com boas práticas e anti-padrões.
                             / the spatial-composition rules that make a screen look organized — how space groups,
                             separates, directs the eye and balances weight, with best practices and anti-patterns.
Não pertence a outro porque · Not elsewhere because:
                             SPACING dá a ESCALA NUMÉRICA (os degraus e os valores); LAYOUT_SYSTEM dá o GRID/colunas;
                             GRAMMAR dá os NÍVEIS de composição. Faltava o documento do RITMO: como se USA o espaço
                             para organizar a percepção, independente da escala, do grid e dos níveis.
                             / SPACING gives the NUMERIC SCALE (steps and values); LAYOUT_SYSTEM gives the GRID/columns;
                             GRAMMAR gives the composition LEVELS. The missing piece was the RHYTHM: how space is USED
                             to organize perception, independent of scale, grid and levels.
Complementa · Complements:   VISUAL_DNA, PRINCIPLES, SPACING, LAYOUT_SYSTEM, GRAMMAR, SURFACES, TYPOGRAPHY.
Nunca substitui · Never replaces: SPACING (dono da escala `space-N`/inset/stack/inline e da base numérica);
                             LAYOUT_SYSTEM (dono do grid, colunas, gutters, margens, regiões); GRAMMAR (dono dos níveis).
                             VISUAL_RHYTHM nunca fixa px, número de degraus, colunas nem nível de composição.
Dono · Owner:                este doc, para o domínio "ritmo visual / composição espacial".
                             / this doc, for the "visual rhythm / spatial composition" domain.
```

> **PT — Nota de fase e fronteira:** este documento define **regras de ritmo e composição espacial** (caráter e método), não **valores**. Ele diz *"o espaço dentro de um grupo é menor que o espaço entre grupos"*, nunca *"8px dentro, 24px entre"* — os valores são do dono `SPACING` (Fase 2). E ele fala de *como* usar o espaço, nunca de *quantos degraus* a escala tem (também `SPACING`), nem de *grid/colunas* (`LAYOUT_SYSTEM`), nem de *níveis de composição* (`GRAMMAR`).
> **EN — Phase and boundary note:** this document defines **rules of rhythm and spatial composition** (character and method), not **values**. It says *"space within a group is smaller than space between groups"*, never *"8px within, 24px between"* — values belong to owner `SPACING` (Phase 2). And it speaks of *how* to use space, never of *how many steps* the scale has (also `SPACING`), nor of *grid/columns* (`LAYOUT_SYSTEM`), nor of *composition levels* (`GRAMMAR`).

---

## 1. Por que uma interface parece organizada · Why an interface looks organized

**PT** — A sensação de "organizado" chega **antes da leitura**: o olho percebe estrutura em milissegundos, por padrões de agrupamento e alinhamento, muito antes de decodificar qualquer palavra (é a primeira camada da percepção-alvo, `VISUAL_DNA` §2). Essa percepção pré-verbal é regida por leis conhecidas de como o cérebro agrupa o que vê — e o Studio UX as reinterpreta como regras de composição. Uma tela organizada não é uma tela "bonita"; é uma tela cujo **espaço conta a mesma história que o conteúdo**. Quando o espaço mente — aproxima o que não é grupo, afasta o que é — a tela parece desorganizada mesmo que cada elemento, isolado, esteja correto.

**EN** — The feeling of "organized" arrives **before reading**: the eye perceives structure in milliseconds, through grouping and alignment patterns, long before decoding any word (the first layer of the target perception, `VISUAL_DNA` §2). This pre-verbal perception is governed by known laws of how the brain groups what it sees — and Studio UX reinterprets them as composition rules. An organized screen is not a "pretty" screen; it is a screen whose **space tells the same story as the content**. When space lies — pulling together what is not a group, pushing apart what is — the screen looks disorganized even if every element, in isolation, is correct.

**PT** — As leis de percepção que este documento reinterpreta (Gestalt), em prosa e sem jargão de tela:

- **Proximidade** — o que está perto é lido como um grupo. O espaço é a cola e a tesoura ao mesmo tempo.
- **Similaridade** — o que compartilha forma, peso ou tratamento é lido como do mesmo tipo, mesmo distante.
- **Continuidade** — o olho segue linhas e eixos; elementos alinhados sugerem uma sequência a percorrer.
- **Região comum** — o que compartilha uma mesma superfície ou área delimitada é lido como pertencente ao mesmo conjunto.

**EN** — The perception laws this document reinterprets (Gestalt), in prose and free of screen jargon:

- **Proximity** — what is close is read as a group. Space is both the glue and the scissors.
- **Similarity** — what shares shape, weight or treatment is read as the same type, even far apart.
- **Continuity** — the eye follows lines and axes; aligned elements suggest a sequence to travel.
- **Common region** — what shares one surface or delimited area is read as belonging to the same set.

**PT** — O ritmo visual é o uso **deliberado e consistente** dessas quatro leis. As seções a seguir traduzem cada uma em regra objetiva.

**EN** — Visual rhythm is the **deliberate, consistent** use of these four laws. The sections below translate each into an objective rule.

---

## 2. Espaçamento e respiração · Spacing and breathing

**PT** — O espaço em branco é o **material de construção primário** do Studio UX, não a sobra (`VISUAL_DNA` §5.6, P5). Este documento não define **quanto** espaço — a escala numérica, a base de quatro, os degraus `space-N` e as famílias de aplicação (`inset` para preenchimento interno, `stack` para empilhamento vertical, `inline` para afastamento horizontal) são do dono `SPACING`. O que é **deste** documento é a regra de *como* esse espaço organiza a percepção: o espaço não é decorativo; ele **agrupa, separa e hierarquiza**. Toda respiração vem de um degrau da escala (P7 — sem espaçamento arbitrário); um afastamento "quase certo" fora da escala é o bug silencioso do ritmo.

**EN** — Whitespace is Studio UX's **primary building material**, not the leftover (`VISUAL_DNA` §5.6, P5). This document does not define **how much** space — the numeric scale, the base-of-four, the `space-N` steps and the application families (`inset` for inner padding, `stack` for vertical stacking, `inline` for horizontal spacing) belong to owner `SPACING`. What belongs to **this** document is the rule of *how* that space organizes perception: space is not decorative; it **groups, separates and ranks**. All breathing comes from a step on the scale (P7 — no arbitrary spacing); an "almost right" spacing off the scale is the silent bug of rhythm.

**PT** — Regra de gosto herdada do DNA: **na dúvida, mais espaço** (`VISUAL_DNA` §5.6). A respiração generosa é o que separa uma densidade *organizada* de um amontoado. Respirar não é desperdiçar: o vazio ao redor de um número é o que faz o número ser lido primeiro.

**EN** — Taste rule inherited from the DNA: **when in doubt, more space** (`VISUAL_DNA` §5.6). Generous breathing is what separates *organized* density from a pile. Breathing is not waste: the emptiness around a number is what makes the number get read first.

---

## 3. Agrupamento e proximidade · Grouping and proximity

**PT** — A lei da proximidade é a ferramenta mais poderosa do ritmo, e sua regra é uma só, objetiva e inegociável: **o espaço dentro de um grupo é menor que o espaço entre grupos.** Enquanto essa relação for respeitada, o olho monta os grupos corretos sem nenhuma borda, fundo ou linha. Um rótulo colado ao seu campo, e uma folga maior antes do próximo par rótulo–campo, já dizem "estes dois pertencem um ao outro, aquele é outro assunto" — sem desenhar nada.

**EN** — The proximity law is rhythm's most powerful tool, and its rule is a single, objective, non-negotiable one: **space within a group is smaller than space between groups.** As long as that relationship holds, the eye assembles the correct groups with no border, background or line. A label snug to its field, and a larger gap before the next label–field pair, already say "these two belong together, that one is a different subject" — without drawing anything.

**PT** — Corolários objetivos:

- **Antes da borda, o espaço.** Só se agrupa com borda ou superfície depois de tentar (e falhar em) agrupar com espaço (P5; `VISUAL_DNA` §6.3 evita a "gaiola" de molduras).
- **Proximidade tem de bater com o significado.** Se dois elementos estão perto mas não são um grupo, o espaço está mentindo — corrigir o afastamento, não adicionar uma linha para "consertar".
- **Hierarquia de agrupamento por hierarquia de espaço.** Grupos dentro de grupos: o espaço cresce a cada nível de "subida" (item < subgrupo < grupo < seção). É o eco espacial dos níveis de composição — que são definidos por `GRAMMAR`; aqui tratamos só da relação de espaço entre eles.

**EN** — Objective corollaries:

- **Before the border, the space.** Group with border or surface only after trying (and failing) to group with space (P5; `VISUAL_DNA` §6.3 avoids the "cage" of frames).
- **Proximity must match meaning.** If two elements are close but not a group, space is lying — fix the spacing, don't add a line to "patch" it.
- **Grouping hierarchy through spacing hierarchy.** Groups within groups: space grows at each "level up" (item < subgroup < group < section). It is the spatial echo of the composition levels — which `GRAMMAR` defines; here we handle only the space relationship between them.

---

## 4. Fluxo de leitura e escaneabilidade · Reading flow and scannability

**PT** — Uma tela organizada tem um **caminho de leitura previsível**. O olho não lê tudo — ele varre, saltando entre pontos de maior peso. O ritmo do Studio UX projeta esse caminho para que o salto natural do olhar coincida com a ordem de importância do conteúdo (a segunda camada da percepção-alvo, "hierarquia", `VISUAL_DNA` §2, P6). O padrão de varredura muda com o tipo de tela: conteúdo majoritariamente textual tende a ser varrido em faixas horizontais decrescentes a partir do topo; telas de dados e ação tendem a ser varridas pelos cantos e pela coluna de maior peso. A regra objetiva é a mesma em ambos: **o elemento mais importante ocupa o ponto que o olho alcança primeiro**, e cada ponto seguinte da varredura carrega o próximo item em importância.

**EN** — An organized screen has a **predictable reading path**. The eye does not read everything — it scans, hopping between points of greater weight. Studio UX rhythm designs that path so the natural jump of the gaze coincides with the content's order of importance (the second layer of target perception, "hierarchy", `VISUAL_DNA` §2, P6). The scanning pattern changes with screen type: mostly textual content tends to be scanned in decreasing horizontal bands from the top; data and action screens tend to be scanned by the corners and the heaviest column. The objective rule is the same in both: **the most important element occupies the point the eye reaches first**, and each following scan point carries the next item in importance.

**PT** — Regras de escaneabilidade:

- **Uma âncora por região.** Cada região tem um ponto de entrada visual claro (título, número-chave, ação primária). Duas âncoras competindo empatam o olho e a tela "não sabe começar" (P6 — uma única ação primária por contexto).
- **Ordem visual = ordem de importância.** Nada importante escondido abaixo de algo trivial; nada trivial roubando o primeiro ponto de varredura.
- **Blocos escaneáveis, não muros de conteúdo.** Agrupar em blocos curtos com respiração entre eles é o que permite varrer; um bloco único e denso obriga a ler tudo para achar qualquer coisa.
- **O vazio guia.** Um corredor de espaço conduz o olho tão bem quanto uma seta — e sem ruído.

**EN** — Scannability rules:

- **One anchor per region.** Each region has a clear visual entry point (title, key number, primary action). Two competing anchors tie the eye and the screen "doesn't know where to start" (P6 — a single primary action per context).
- **Visual order = order of importance.** Nothing important hidden below something trivial; nothing trivial stealing the first scan point.
- **Scannable blocks, not walls of content.** Grouping into short blocks with breathing between them is what enables scanning; one dense block forces reading everything to find anything.
- **Emptiness guides.** A corridor of space leads the eye as well as an arrow — and without noise.

---

## 5. Peso visual e equilíbrio · Visual weight and balance

**PT** — Cada elemento tem um **peso visual** — o quanto puxa o olhar — determinado por tamanho, contraste tonal, densidade e área ocupada (não por moldura; `VISUAL_DNA` §5.4, P5). O ritmo distribui esses pesos para que a tela fique **equilibrada, não simétrica**. Equilíbrio é a sensação de que nada tomba para um lado; consegue-se com poucos elementos pesados ancorando a composição e muitos leves ao redor, respirando. Uma tela desequilibrada tem todo o peso amontoado num canto e vazio morto no oposto — não o vazio que respira, mas o vazio que "sobrou".

**EN** — Each element has a **visual weight** — how much it pulls the gaze — set by size, tonal contrast, density and occupied area (not by frame; `VISUAL_DNA` §5.4, P5). Rhythm distributes these weights so the screen is **balanced, not symmetric**. Balance is the feeling that nothing tips to one side; it is achieved with a few heavy elements anchoring the composition and many light ones around, breathing. An unbalanced screen has all its weight piled in one corner and dead emptiness opposite — not the emptiness that breathes, but the emptiness that "was left over".

**PT** — Regras de peso:

- **Poucos elementos pesados por tela.** Se tudo é pesado, nada é — o contraste de peso é o que cria hierarquia (P6; contraste como hierarquia, `VISUAL_DNA` §5.7).
- **Peso segue importância.** O elemento mais importante é o mais pesado; nunca o contrário.
- **Equilíbrio pelo espaço, não pelo enfeite.** Corrige-se desequilíbrio redistribuindo espaço e peso, jamais adicionando um adorno para "preencher" (isso viola a regra de ouro §3.1 e o veto "decorativo", `VISUAL_DNA` §7).

**EN** — Weight rules:

- **Few heavy elements per screen.** If everything is heavy, nothing is — weight contrast is what creates hierarchy (P6; contrast as hierarchy, `VISUAL_DNA` §5.7).
- **Weight follows importance.** The most important element is the heaviest; never the reverse.
- **Balance through space, not ornament.** Fix imbalance by redistributing space and weight, never by adding an adornment to "fill" (that violates golden rule §3.1 and the "decorative" veto, `VISUAL_DNA` §7).

---

## 6. Alinhamento — o poder de um eixo único · Alignment — the power of a single axis

**PT** — O alinhamento é o que mais barato compra a sensação de "organizado". A regra é radical na sua simplicidade: **quanto menos eixos de alinhamento, mais organizada a tela parece.** Cada novo eixo (uma coluna que começa num ponto diferente, um rótulo que foge da margem comum) é uma pequena desordem que o olho registra mesmo sem saber nomear. A lei da continuidade recompensa o alinhamento: elementos que compartilham uma borda invisível são lidos como uma sequência coerente, e o olho desliza por eles sem esforço.

**EN** — Alignment is the cheapest purchase of the "organized" feeling. The rule is radical in its simplicity: **the fewer alignment axes, the more organized the screen looks.** Each new axis (a column starting at a different point, a label straying from the common margin) is a small disorder the eye registers even without naming it. The continuity law rewards alignment: elements sharing an invisible edge are read as a coherent sequence, and the eye glides over them effortlessly.

**PT** — Regras de alinhamento:

- **Prefira um eixo dominante.** Um conteúdo que se ancora numa única margem esquerda (ou num único eixo) parece mais calmo que um que se espalha por vários pontos de partida.
- **Alinhamentos concorrentes são anti-padrão.** Três colunas que começam em três pontos ligeiramente diferentes criam um "tremor" visual — o olho não encontra a linha (ver §9).
- **Números alinham pela ordem de grandeza.** Em dados numéricos, o alinhamento que permite comparar magnitudes vence o alinhamento "estético" (alimenta a leitura de tabelas, `VISUAL_DNA` §8).
- **O grid é o guardião do eixo, mas não é deste doc.** *Onde* ficam as colunas e as margens é do `LAYOUT_SYSTEM`; *por que* poucos eixos organizam é daqui.

**EN** — Alignment rules:

- **Prefer one dominant axis.** Content anchored to a single left margin (or a single axis) feels calmer than content spread across several starting points.
- **Competing alignments are an anti-pattern.** Three columns starting at three slightly different points create a visual "tremor" — the eye can't find the line (see §9).
- **Numbers align by magnitude.** In numeric data, the alignment that lets magnitudes be compared beats "aesthetic" alignment (feeds table reading, `VISUAL_DNA` §8).
- **The grid guards the axis, but is not this doc's.** *Where* columns and margins sit belongs to `LAYOUT_SYSTEM`; *why* few axes organize belongs here.

---

## 7. Hierarquia por espaço · Hierarchy through space

**PT** — A hierarquia — o "pensamento da tela" (`VISUAL_DNA` §5.4) — constrói-se com tamanho, peso, cor, posição **e espaço**, nunca com molduras (P5). Este documento é o dono da parte **espacial** dessa hierarquia: o espaço declara nível. Mais espaço ao redor de um elemento o eleva; menos espaço o subordina. Uma seção precedida por uma folga generosa é lida como um novo capítulo; um item colado ao anterior é lido como continuação. O espaço, portanto, não só agrupa (§3) — ele **ordena** (P5, P6).

**EN** — Hierarchy — the "screen's thinking" (`VISUAL_DNA` §5.4) — is built with size, weight, color, position **and space**, never with frames (P5). This document owns the **spatial** part of that hierarchy: space declares level. More space around an element elevates it; less space subordinates it. A section preceded by a generous gap reads as a new chapter; an item snug to the previous reads as a continuation. Space, therefore, not only groups (§3) — it **orders** (P5, P6).

**PT** — A hierarquia por espaço tem de ser **coerente com as outras dimensões** de hierarquia: o elemento que recebe mais espaço deve também, em geral, ter mais peso e melhor posição. Espaço grande em torno de um elemento trivial é uma promessa quebrada — o olho vai até lá e não encontra importância. Sem hierarquia, o minimalismo vira "vazio confuso" (`VISUAL_DNA` §5.4): espaço sem ordem não é calma, é ausência de direção.

**EN** — Hierarchy through space must be **coherent with the other hierarchy dimensions**: the element given more space should also, generally, carry more weight and a better position. Large space around a trivial element is a broken promise — the eye travels there and finds no importance. Without hierarchy, minimalism becomes "confusing emptiness" (`VISUAL_DNA` §5.4): space without order is not calm, it is a lack of direction.

---

## 8. Consistência de ritmo e densidade · Rhythm consistency and density

**PT** — Ritmo é **repetição previsível**. Assim como uma batida musical se estabelece pela regularidade, o ritmo visual se estabelece quando o mesmo tipo de relação espacial se repete pela tela inteira: o afastamento entre itens de uma lista é sempre o mesmo, o respiro interno de cada agrupamento equivalente é sempre o mesmo, a folga entre seções é sempre a mesma. Essa regularidade é o que faz o produto inteiro parecer "da mesma família" (P20). Um ritmo irregular — mesmo com cada tela isoladamente bonita — trai a consistência e cansa: o olho recalibra a cada bloco.

**EN** — Rhythm is **predictable repetition**. Just as a musical beat establishes itself through regularity, visual rhythm establishes itself when the same kind of spatial relationship repeats across the whole screen: the gap between list items is always the same, the inner breathing of each equivalent grouping is always the same, the gap between sections is always the same. That regularity is what makes the entire product look "from the same family" (P20). Irregular rhythm — even with each screen pretty in isolation — betrays consistency and tires: the eye recalibrates at every block.

**PT** — Sobre densidade (P4, P21): a densidade é uma **decisão de produto**, não um acaso. O Desktop tende à densidade (produtividade); o Mobile tende ao espaço (toque). Duas regras de ritmo governam isso:

- **Densidade uniforme dentro de um produto.** Não se mistura uma tela apertada com outra frouxa sem razão — o operador confia num ritmo constante (P21). Densidade alta é legítima *quando organizada por ritmo e superfície*; vira poluição quando falta espaço e hierarquia (`VISUAL_DNA` §5.8).
- **Desktop e Mobile têm ritmos próprios, não escalados um do outro.** O Mobile não é o Desktop "esticado"; cada produto recompõe o ritmo a partir dos mesmos tokens, para o seu contexto de uso (P4). O *como* essa recomposição vira layout é do `LAYOUT_SYSTEM`; a exigência de ritmos próprios é daqui.

**EN** — On density (P4, P21): density is a **product decision**, not an accident. Desktop leans dense (productivity); Mobile leans spacious (touch). Two rhythm rules govern this:

- **Uniform density within a product.** A cramped screen is not mixed with a loose one without reason — the operator trusts a constant rhythm (P21). High density is legitimate *when organized by rhythm and surface*; it becomes clutter when space and hierarchy are missing (`VISUAL_DNA` §5.8).
- **Desktop and Mobile have their own rhythms, not scaled from one another.** Mobile is not Desktop "stretched"; each product recomposes rhythm from the same tokens, for its context of use (P4). *How* that recomposition becomes layout belongs to `LAYOUT_SYSTEM`; the requirement of distinct rhythms belongs here.

---

## 9. Boas práticas e anti-padrões · Best practices and anti-patterns

**PT** — Boas práticas do ritmo:

- **Resolver com espaço antes de qualquer linha ou superfície** (P5) — a borda é o último recurso.
- **Espaço menor dentro do grupo, maior entre grupos** — a regra-mãe da proximidade (§3).
- **Um eixo de alinhamento dominante por região** (§6).
- **Uma âncora visual por região; ordem visual = ordem de importância** (§4, P6).
- **Repetir a mesma relação espacial em toda a tela e todo o produto** (§8, P20).
- **Todo afastamento ancorado num degrau da escala** (P7; valores do dono `SPACING`).
- **Na dúvida, mais espaço** (`VISUAL_DNA` §5.6).

**EN** — Rhythm best practices:

- **Solve with space before any line or surface** (P5) — the border is the last resort.
- **Smaller space within a group, larger between groups** — the mother rule of proximity (§3).
- **One dominant alignment axis per region** (§6).
- **One visual anchor per region; visual order = order of importance** (§4, P6).
- **Repeat the same spatial relationship across the screen and the whole product** (§8, P20).
- **Every gap anchored to a scale step** (P7; values from owner `SPACING`).
- **When in doubt, more space** (`VISUAL_DNA` §5.6).

**PT** — Anti-padrões do ritmo (pare e revise se aparecerem):

- **Ritmo irregular** — afastamentos que mudam sem razão entre blocos equivalentes; o olho recalibra e cansa (§8).
- **Alinhamentos múltiplos concorrentes** — várias colunas partindo de pontos ligeiramente diferentes; o "tremor" visual que denuncia desordem (§6).
- **Densidade inconsistente** — uma tela apertada ao lado de outra frouxa dentro do mesmo produto, sem motivo (§8, P21).
- **Espaço igual dentro e entre grupos** — o pecado capital da proximidade: sem contraste de espaço, o olho não consegue montar os grupos e tudo vira um bloco (§3).
- **Vazio morto vs. vazio que respira** — grande espaço em torno do trivial (promessa quebrada) ou peso todo amontoado num canto (desequilíbrio) — não confundir com a respiração intencional (§5, §7).
- **Borda para consertar espaço ruim** — adicionar molduras/fundos para "organizar" o que um espaçamento correto já resolveria; leva à "gaiola" de bordas (`VISUAL_DNA` §6.3, P5).
- **Enfeite para preencher** — adornar o vazio em vez de reequilibrar; viola a regra de ouro §3.1 e o veto "decorativo" (`VISUAL_DNA` §7).

**EN** — Rhythm anti-patterns (stop and review if they appear):

- **Irregular rhythm** — gaps changing without reason between equivalent blocks; the eye recalibrates and tires (§8).
- **Multiple competing alignments** — several columns starting at slightly different points; the visual "tremor" that betrays disorder (§6).
- **Inconsistent density** — a cramped screen beside a loose one within the same product, for no reason (§8, P21).
- **Equal space within and between groups** — the cardinal proximity sin: with no space contrast, the eye can't assemble groups and everything becomes one block (§3).
- **Dead emptiness vs. breathing emptiness** — large space around the trivial (broken promise) or all weight piled in a corner (imbalance) — not to be confused with intentional breathing (§5, §7).
- **Border to patch bad spacing** — adding frames/backgrounds to "organize" what correct spacing would already solve; leads to the "cage" of borders (`VISUAL_DNA` §6.3, P5).
- **Ornament to fill** — adorning emptiness instead of rebalancing; violates golden rule §3.1 and the "decorative" veto (`VISUAL_DNA` §7).

---

## 10. Fronteira do domínio — o que é e o que não é deste doc · Domain boundary — what is and isn't this doc's

**PT** — Para não violar a SSOT (`STUDIO_UX.md` §11), a fronteira é explícita. **É deste documento:** as regras de *como* o espaço agrupa, separa, dirige o olhar, equilibra o peso e cria hierarquia; a consistência de ritmo; a exigência de densidades próprias por produto; as boas práticas e anti-padrões de composição espacial. **NÃO é deste documento:** a **escala numérica** de espaçamento — os degraus `space-N`, as famílias `inset`/`stack`/`inline` e a base de quatro (dono: `SPACING`); o **grid, colunas, gutters, margens, regiões e camadas** (dono: `LAYOUT_SYSTEM`); os **níveis de composição** e como se aninham (dono: `GRAMMAR`); os **valores concretos** de qualquer natureza (Fase 2). Este documento **referencia** esses donos e nunca redefine o que é deles.

**EN** — To avoid violating SSOT (`STUDIO_UX.md` §11), the boundary is explicit. **This document's:** the rules of *how* space groups, separates, directs the eye, balances weight and creates hierarchy; rhythm consistency; the requirement of product-specific densities; the best practices and anti-patterns of spatial composition. **NOT this document's:** the **numeric scale** of spacing — the `space-N` steps, the `inset`/`stack`/`inline` families and the base-of-four (owner: `SPACING`); the **grid, columns, gutters, margins, regions and layers** (owner: `LAYOUT_SYSTEM`); the **composition levels** and how they nest (owner: `GRAMMAR`); the **concrete values** of any kind (Phase 2). This document **references** these owners and never redefines what is theirs.

---

*Documento vivo. Define regras de ritmo e composição espacial, nunca valores, nem a escala, nem o grid, nem os níveis (esses têm seus donos). · Living document. Defines rules of rhythm and spatial composition, never values, nor the scale, nor the grid, nor the levels (those have their owners).*
