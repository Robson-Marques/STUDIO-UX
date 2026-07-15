# STUDIO_UX_GRAMMAR.md — Gramática da Interface · Interface Grammar

> Documento normativo vivo. Responde a: **como uma interface é composta — quais níveis existem, como se aninham e como um componente nasce dentro da estrutura?**
> Living normative document. Answers: **how is an interface composed — which levels exist, how they nest, and how a component is born within the structure?**
> Governança: `STUDIO_UX.md`. Fundamento: `STUDIO_UX_PRINCIPLES.md` (P6, P22), `STUDIO_UX_VISUAL_DNA.md`.

```
Architecture Boundary Check — STUDIO_UX_GRAMMAR
Resolve · Solves:            a gramática de composição — QUAIS níveis existem numa tela e como se aninham,
                             de Application a Content. Define "o que existe".
                             / the composition grammar — WHICH levels exist in a screen and how they nest,
                             from Application to Content. Defines "what exists".
Não pertence a outro porque · Not elsewhere because:
                             LAYOUT_SYSTEM define "ONDE existe" (grid, colunas, gutters, breakpoints, z-index,
                             regiões físicas); COMPONENT_LIBRARY define as peças. Faltava nomear a hierarquia
                             de composição que aninha essas peças.
                             / LAYOUT_SYSTEM defines "WHERE it exists"; COMPONENT_LIBRARY defines the pieces.
                             The missing piece was naming the composition hierarchy that nests those pieces.
Complementa · Complements:   LAYOUT_SYSTEM, COMPONENT_LIBRARY, SURFACES, VISUAL_RHYTHM, DESKTOP, MOBILE.
Nunca substitui · Never replaces: LAYOUT_SYSTEM (grid/colunas/gutter/breakpoints/z-index/regiões físicas),
                             COMPONENT_LIBRARY (as peças), DESIGN_TOKENS (valores).
Dono · Owner:                este doc, para o domínio "gramática de composição".
                             / this doc, for the "composition grammar" domain.
```

---

## 1. Por que uma gramática · Why a grammar

**PT** — Uma língua tem gramática para que frases diferentes sejam compreensíveis pela mesma estrutura. Uma interface precisa do mesmo: uma **gramática de composição** que garante que toda tela — de qualquer sistema, feita por qualquer pessoa ou IA — seja montada segundo a mesma hierarquia de níveis. Sem gramática, cada tela inventa sua própria estrutura e a família visual se perde (P20). Com gramática, qualquer tela é "parseável": sabe-se onde cada coisa mora e por quê.

**EN** — A language has grammar so that different sentences are understandable through the same structure. An interface needs the same: a **composition grammar** that guarantees every screen — from any system, built by any person or AI — is assembled by the same hierarchy of levels. Without grammar, each screen invents its own structure and the visual family is lost (P20). With grammar, any screen is "parseable": one knows where each thing lives and why.

**PT** — Esta gramática responde "**o que existe**" numa tela e como os níveis se relacionam. Ela **não** responde "onde/como no espaço" (grid, colunas, medidas) — isso é do `LAYOUT_SYSTEM`. Ver o ADR na §4.

**EN** — This grammar answers "**what exists**" in a screen and how the levels relate. It does **not** answer "where/how in space" (grid, columns, measures) — that belongs to `LAYOUT_SYSTEM`. See the ADR in §4.

---

## 2. Os sete níveis · The seven levels

```
Application   (a aplicação inteira / the whole application)
   ↓
Shell         (a moldura persistente / the persistent frame)
   ↓
Region        (as áreas canônicas do shell / the shell's canonical areas)
   ↓
Section       (blocos temáticos dentro de uma região / thematic blocks within a region)
   ↓
Block         (uma unidade coesa de conteúdo / a cohesive unit of content)
   ↓
Component     (a peça oficial reutilizável / the official reusable piece)
   ↓
Content       (o dado real do usuário / the user's actual data)
```

**PT — Regra de aninhamento:** cada nível só contém o nível imediatamente abaixo (ou pula para Component/Content quando não há subdivisão). Nunca se inverte a ordem: um Component não contém uma Region; uma Section não contém um Shell. A composição flui sempre de fora (mais estável, mais raro de mudar) para dentro (mais volátil, o dado).

**EN — Nesting rule:** each level contains only the level immediately below (or jumps to Component/Content when there is no subdivision). The order never inverts: a Component doesn't contain a Region; a Section doesn't contain a Shell. Composition always flows from outside (more stable, rarely changing) to inside (more volatile, the data).

### 2.1 Application
**PT** — O produto inteiro construído sobre o Studio UX. Escolhe o produto-base (Desktop **ou** Mobile — nunca os dois na mesma superfície, P4), o tema ativo (`THEMES`) e a identidade de marca. É o contexto que tudo abaixo herda. Responsabilidade: definir "que produto é este". Limite: não desenha nada — delega ao Shell.
**EN** — The entire product built on Studio UX. It chooses the base product (Desktop **or** Mobile — never both on the same surface, P4), the active theme (`THEMES`) and the brand identity. It is the context everything below inherits. Responsibility: define "which product this is". Limit: it draws nothing — it delegates to the Shell.

### 2.2 Shell
**PT** — A moldura persistente que não muda ao navegar entre telas: no Desktop, tipicamente navegação + cabeçalho + área de conteúdo + rodapé; no Mobile, tipicamente barra superior + navegação inferior + pilha de telas. O Shell é o mesmo entre páginas; só o conteúdo troca. Responsabilidade: dar estabilidade e orientação constante. Limite: o **desenho físico das regiões do Shell** (tamanho, posição, colapso, camadas) é do `LAYOUT_SYSTEM`; a Gramática apenas afirma que o Shell existe e contém Regions. Desktop e Mobile têm Shells diferentes (P4) — o dono de cada arquétipo é `DESKTOP`/`MOBILE`.
**EN** — The persistent frame that doesn't change when navigating between screens: on Desktop, typically navigation + header + content area + footer; on Mobile, typically a top bar + bottom navigation + screen stack. The Shell is the same across pages; only content changes. Responsibility: provide stability and constant orientation. Limit: the **physical drawing of the Shell's regions** (size, position, collapse, layers) belongs to `LAYOUT_SYSTEM`; the Grammar only states that the Shell exists and contains Regions. Desktop and Mobile have different Shells (P4) — each archetype's owner is `DESKTOP`/`MOBILE`.

### 2.3 Region
**PT** — As áreas canônicas dentro do Shell (navegação, cabeçalho, conteúdo, rodapé). Cada Region tem um propósito fixo e não empresta função de outra (a navegação não vira conteúdo). Responsabilidade: separar orientação (navegação/cabeçalho) de trabalho (conteúdo). Limite: as **regiões físicas e como ocupam o espaço** são definidas pelo `LAYOUT_SYSTEM`; a Gramática nomeia as regiões como nível de composição e afirma que elas contêm Sections. A Region de conteúdo é onde a tela específica vive.
**EN** — The canonical areas within the Shell (navigation, header, content, footer). Each Region has a fixed purpose and doesn't borrow another's function (navigation doesn't become content). Responsibility: separate orientation (navigation/header) from work (content). Limit: the **physical regions and how they occupy space** are defined by `LAYOUT_SYSTEM`; the Grammar names the regions as a composition level and states they contain Sections. The content Region is where the specific screen lives.

### 2.4 Section
**PT** — Um agrupamento temático dentro de uma Region — o que separa "Resumo" de "Atividade recente" de "Configurações da conta" numa mesma tela. A Section tem um assunto e, frequentemente, um título discreto. É o principal instrumento de hierarquia de alto nível dentro do conteúdo (P6). Responsabilidade: organizar a tela em assuntos escaneáveis. Limite: a Section agrupa por *espaço e ritmo* (dono do ritmo: `VISUAL_RHYTHM`), não desenha grid próprio.
**EN** — A thematic grouping within a Region — what separates "Summary" from "Recent activity" from "Account settings" on the same screen. A Section has a subject and, often, a discreet title. It is the main high-level hierarchy instrument within content (P6). Responsibility: organize the screen into scannable subjects. Limit: the Section groups by *space and rhythm* (rhythm owner: `VISUAL_RHYTHM`), it does not draw its own grid.

### 2.5 Block
**PT** — Uma unidade coesa de conteúdo dentro de uma Section — um cartão de KPI, um formulário, uma tabela, um gráfico com seu título. O Block é o "tijolo" que se repete e se rearranja. Um Block resolve uma coisa e pode ser movido inteiro sem quebrar. Responsabilidade: encapsular um conjunto de componentes que fazem sentido juntos. Limite: o Block **não é um componente do catálogo** — ele *contém* componentes. O que é um Block de dashboard, de formulário ou de tabela é detalhado pelos donos `DASHBOARD`/`FORMS`/`TABLES`.
**EN** — A cohesive unit of content within a Section — a KPI card, a form, a table, a chart with its title. The Block is the "brick" that repeats and rearranges. A Block solves one thing and can be moved whole without breaking. Responsibility: encapsulate a set of components that make sense together. Limit: the Block **is not a catalog component** — it *contains* components. What a dashboard, form or table Block is gets detailed by the owners `DASHBOARD`/`FORMS`/`TABLES`.

### 2.6 Component
**PT** — A peça oficial, reutilizável, do catálogo (`COMPONENT_LIBRARY`) — Button, DataTable, FormField, Card, etc. É onde a gramática encontra a biblioteca: um Block é montado com Components, nunca com elementos avulsos (P3). Responsabilidade: ser a unidade consistente e testada. Limite: a Gramática não define o comportamento interno do componente — isso é do `COMPONENT_LIBRARY`; a Gramática só afirma que Components são a única matéria-prima permitida dentro de um Block.
**EN** — The official, reusable catalog piece (`COMPONENT_LIBRARY`) — Button, DataTable, FormField, Card, etc. This is where grammar meets the library: a Block is assembled from Components, never from ad-hoc elements (P3). Responsibility: be the consistent, tested unit. Limit: the Grammar doesn't define the component's internal behavior — that belongs to `COMPONENT_LIBRARY`; the Grammar only states that Components are the sole allowed raw material inside a Block.

### 2.7 Content
**PT** — O dado real do usuário que preenche os componentes — o texto, o número, a linha da tabela, o valor do campo. É o nível mais volátil e o motivo de tudo existir (P do foco no dado, `VISUAL_DNA`). Responsabilidade: ser o protagonista. Limite: o Content nunca dita a estrutura; a estrutura o acomoda. A linguagem do Content é a do usuário, nunca a do desenvolvedor (P11).
**EN** — The user's actual data filling the components — the text, the number, the table row, the field value. It is the most volatile level and the reason everything exists (data-focus principle, `VISUAL_DNA`). Responsibility: be the protagonist. Limit: Content never dictates structure; structure accommodates it. The Content's language is the user's, never the developer's (P11).

---

## 3. Como um componente nasce dentro da estrutura · How a component is born within the structure

**PT** — A gramática impõe um caminho de fora para dentro. Ao construir uma tela: escolhe-se o produto (Application) → herda-se o Shell → identifica-se a Region de conteúdo → divide-se o conteúdo em Sections por assunto → dentro de cada Section, definem-se os Blocks (as unidades coesas) → cada Block é montado com Components oficiais → cada Component é preenchido com Content. Um componente nunca "aparece solto": ele nasce dentro de um Block, que nasce dentro de uma Section, dentro da Region, dentro do Shell. Se você está prestes a colocar um componente sem saber em qual Block/Section ele vive, a tela ainda não foi pensada (P6).

**EN** — The grammar imposes an outside-in path. When building a screen: choose the product (Application) → inherit the Shell → identify the content Region → divide the content into Sections by subject → within each Section, define the Blocks (the cohesive units) → each Block is assembled from official Components → each Component is filled with Content. A component never "appears loose": it is born inside a Block, born inside a Section, inside the Region, inside the Shell. If you are about to place a component without knowing which Block/Section it lives in, the screen hasn't been thought through yet (P6).

---

## 4. ADR-001 — Fronteira Grammar × Layout System · Grammar × Layout System boundary

> **PT** — Registro de Decisão Arquitetural. Permanente. **EN** — Architecture Decision Record. Permanent.

**Contexto · Context**
**PT** — "Composição de tela" pode ser lida de dois jeitos: a *hierarquia lógica* dos níveis (o que contém o quê) e a *mecânica espacial* (grid, colunas, medidas, camadas). Se os dois morarem no mesmo documento — ou pior, em documentos que se sobrepõem —, surge ambiguidade e duplicação, exatamente o que a SSOT (`STUDIO_UX.md` §11) proíbe.
**EN** — "Screen composition" can be read two ways: the *logical hierarchy* of levels (what contains what) and the *spatial mechanics* (grid, columns, measures, layers). If both live in the same document — or worse, in overlapping documents — ambiguity and duplication arise, exactly what SSOT forbids.

**Decisão · Decision**
**PT** — Separação permanente e mutuamente exclusiva:

- **`STUDIO_UX_GRAMMAR` define "o que existe"** — os sete níveis (Application → Shell → Region → Section → Block → Component → Content), como se aninham e as responsabilidades de cada um. **Não** fala de grid, colunas, espaçamento, gutter, breakpoints, z-index ou tamanhos.
- **`STUDIO_UX_LAYOUT_SYSTEM` define "onde existe"** — grid, colunas, containers, gutter, margens, breakpoints, regiões físicas, distribuição espacial e camadas (z-index). **Não** fala da gramática de composição.

Em uma frase: **Grammar diz o que existe; Layout System diz onde existe.**

**EN** — Permanent, mutually exclusive separation:

- **`STUDIO_UX_GRAMMAR` defines "what exists"** — the seven levels, how they nest, and each one's responsibilities. It does **not** talk about grid, columns, spacing, gutter, breakpoints, z-index or sizes.
- **`STUDIO_UX_LAYOUT_SYSTEM` defines "where it exists"** — grid, columns, containers, gutter, margins, breakpoints, physical regions, spatial distribution and layers (z-index). It does **not** talk about the composition grammar.

In one line: **Grammar says what exists; Layout System says where it exists.**

**Consequência · Consequence**
**PT** — Os termos `Shell`, `Region` e `Component` são compartilhados pelos dois documentos, mas com lentes distintas: a Gramática os trata como *níveis de composição*; o Layout System os trata como *regiões físicas e camadas*. Nenhum redefine o do outro; cada um referencia o outro pela fronteira. Um leitor que queira "quais níveis existem" vai à Gramática; quem queira "quantas colunas, qual breakpoint" vai ao Layout System. Esta fronteira é permanente e não se reabre sem um novo ADR.
**EN** — The terms `Shell`, `Region` and `Component` are shared by both documents, but through distinct lenses: the Grammar treats them as *composition levels*; the Layout System treats them as *physical regions and layers*. Neither redefines the other's; each references the other across the boundary. A reader wanting "which levels exist" goes to the Grammar; one wanting "how many columns, which breakpoint" goes to the Layout System. This boundary is permanent and does not reopen without a new ADR.

---

## 5. Anti-padrões · Anti-patterns

**PT / EN**

- Falar de grid, colunas, gutter, breakpoints ou z-index aqui (é do `LAYOUT_SYSTEM`). / Talking about grid, columns, gutter, breakpoints or z-index here.
- Tratar um Block como se fosse um componente do catálogo (Block *contém* Components). / Treating a Block as a catalog component.
- Colocar um Component sem Block/Section (tela não pensada, P6). / Placing a Component with no Block/Section.
- Inverter o aninhamento (um Component contendo uma Region). / Inverting the nesting.
- Usar a mesma Region para orientação e conteúdo ao mesmo tempo. / Using the same Region for orientation and content at once.
- Copiar a estrutura de um produto no outro (Desktop ≠ Mobile, P4). / Copying one product's structure onto the other.

---

*Documento vivo. Define "o que existe"; "onde existe" é do LAYOUT_SYSTEM (ADR-001). · Living document. Defines "what exists"; "where it exists" belongs to LAYOUT_SYSTEM (ADR-001).*
