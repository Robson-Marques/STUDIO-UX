# STUDIO_UX_SURFACES.md — Sistema de Superfícies · Surface System

> Documento normativo vivo. Responde a: **quais superfícies existem, como elas se empilham e se elevam, e quando usar cada uma?**
> Living normative document. Answers: **which surfaces exist, how they stack and elevate, and when to use each one?**
> Governança: `STUDIO_UX.md`. Fundamento: `STUDIO_UX_PRINCIPLES.md` (P5, P9), `STUDIO_UX_VISUAL_DNA.md`.

```
Architecture Boundary Check — STUDIO_UX_SURFACES
Resolve · Solves:            o sistema de superfícies e elevação — quais planos existem, como se empilham
                             (o que flutua sobre o quê) e quando usar cada um. Define a ESTRUTURA da elevação.
                             / the surface & elevation system — which planes exist, how they stack (what floats
                             above what) and when to use each. Defines the STRUCTURE of elevation.
Não pertence a outro porque · Not elsewhere because:
                             COLOR_SYSTEM é dono dos PAPÉIS DE COR de superfície (color.surface.*); THEMES é dono
                             do MECANISMO de troca (dark clareia). Faltava o sistema que ORDENA as superfícies
                             em uma hierarquia de elevação e diz quando cada plano é usado.
                             / COLOR_SYSTEM owns the surface COLOR ROLES; THEMES owns the SWAP MECHANISM. The
                             missing piece orders surfaces into an elevation hierarchy and says when each is used.
Complementa · Complements:   COLOR_SYSTEM, DESIGN_TOKENS (Elevation/Shadow), THEMES, GRAMMAR, LAYOUT_SYSTEM, COMPONENT_LIBRARY.
Nunca substitui · Never replaces: COLOR_SYSTEM (papéis/valores de cor de superfície), THEMES (mecanismo de tema),
                             LAYOUT_SYSTEM (z-index físico e regiões), DESIGN_TOKENS (valores).
Dono · Owner:                este doc, para o domínio "superfícies e elevação (estrutura)".
                             / this doc, for the "surfaces & elevation (structure)" domain.
```

> **PT — Fronteira essencial:** este documento **usa** os papéis de cor `color.surface.base/raised/overlay/sunken` (dono: `COLOR_SYSTEM`) e a família Elevation/Shadow (dono: `DESIGN_TOKENS`); ele **não** define cores nem valores. Ele define a **hierarquia estrutural** das superfícies e o **quando**. O empilhamento físico por camadas de z-index é do `LAYOUT_SYSTEM`; aqui tratamos da *lógica* de elevação, não das medidas.
> **EN — Essential boundary:** this document **uses** the color roles `color.surface.*` (owner: `COLOR_SYSTEM`) and the Elevation/Shadow family (owner: `DESIGN_TOKENS`); it does **not** define colors or values. It defines the **structural hierarchy** of surfaces and the **when**. Physical z-index layering belongs to `LAYOUT_SYSTEM`; here we handle the *logic* of elevation, not the measures.

---

## 1. Por que um sistema de superfícies · Why a surface system

**PT** — Uma interface é feita de planos sobrepostos. Se esses planos não seguirem uma hierarquia clara, o usuário perde a noção do que está "em cima", do que é permanente e do que é temporário. O sistema de superfícies dá a cada plano um papel fixo e uma posição na pilha, de modo que a elevação **signifique** algo: quanto mais alto na pilha, mais temporário e mais focal. Isto realiza duas crenças do Studio UX — hierarquia impecável e elevação contida (P9) — e mantém a calma visual (poucos níveis, pouca sombra).

**EN** — An interface is made of overlapping planes. If those planes don't follow a clear hierarchy, the user loses track of what is "on top", what is permanent and what is temporary. The surface system gives each plane a fixed role and a position in the stack, so that elevation **means** something: the higher in the stack, the more temporary and more focal. This realizes two Studio UX beliefs — impeccable hierarchy and restrained elevation (P9) — and keeps visual calm (few levels, little shadow).

---

## 2. A escala de superfícies · The surface scale

**PT** — Da mais profunda (o fundo de tudo) à mais alta (o que paira momentaneamente sobre tudo). Cada superfície mapeia para um papel de cor semântico (`COLOR_SYSTEM`) e um nível de elevação (`DESIGN_TOKENS`). Os **nomes de nível de elevação** abaixo são arquitetura desta fase; os **valores** (sombra, tom) vêm na Fase 2.

**EN** — From the deepest (the background of everything) to the highest (what momentarily hovers over all). Each surface maps to a semantic color role (`COLOR_SYSTEM`) and an elevation level (`DESIGN_TOKENS`). The **elevation level names** below are this phase's architecture; the **values** (shadow, tone) come in Phase 2.

| Superfície · Surface | Papel de cor · Color role | Elevação · Elevation | Papel · Role |
|---|---|---|---|
| **Application Background** | `color.surface.base` (nível mais profundo) | nenhuma / none | O fundo raiz da aplicação; tudo repousa sobre ele. / The app's root background; everything rests on it. |
| **Canvas** | `color.surface.base`/`sunken` | nenhuma / none | A área de trabalho dentro da Region de conteúdo, onde as Sections vivem. / The work area within the content Region. |
| **Surface** | `color.surface.raised` | `elevation.raised` (baixa) | A superfície padrão de conteúdo agrupado (a base de um Block/Card). / The default grouped-content surface. |
| **Raised Surface** | `color.surface.raised` | `elevation.raised` | Um Block/Card que se destaca levemente do Canvas para agrupar. / A Block/Card lifted slightly off the Canvas. |
| **Elevated Surface** | `color.surface.raised` (mais claro no dark) | `elevation.elevated` | Conteúdo que precisa de mais separação (painel flutuante ancorado, item arrastado). / Content needing more separation. |
| **Overlay** | `color.surface.overlay` | `elevation.overlay` | Camadas temporárias ancoradas a um gatilho (menu, dropdown). / Temporary layers anchored to a trigger. |
| **Popover** | `color.surface.overlay` | `elevation.overlay` | Conteúdo contextual ancorado a um elemento (mais rico que um menu). / Contextual content anchored to an element. |
| **Tooltip** | `color.surface.overlay` | `elevation.overlay` | Rótulo/ajuda mínima e efêmera sobre um elemento. / Minimal, ephemeral label/help over an element. |
| **Sheet** | `color.surface.raised`/`overlay` | `elevation.overlay` | Painel que desliza de uma borda (predominante no Mobile). / A panel sliding from an edge (predominant on Mobile). |
| **Dialog** | `color.surface.overlay` | `elevation.modal` | Superfície modal centrada que exige atenção/decisão; acompanha um scrim. / Centered modal surface demanding attention. |
| **Floating Layer** | `color.surface.overlay` | `elevation.toast` (topo) | O plano mais alto: toasts e notificações efêmeras que não bloqueiam. / The highest plane: ephemeral toasts. |

**PT** — Note a correspondência com a pilha de camadas do `LAYOUT_SYSTEM` (`base → content → sticky → overlay → modal → toast`): este documento diz *que superfície é* e *quando*; o Layout System diz *em que camada de z-index ela é desenhada*. São lentes distintas do mesmo empilhamento (ADR-001 do `GRAMMAR` é o modelo desta separação).

**EN** — Note the correspondence with the `LAYOUT_SYSTEM` layer stack (`base → content → sticky → overlay → modal → toast`): this document says *which surface it is* and *when*; the Layout System says *in which z-index layer it is drawn*. These are distinct lenses on the same stacking (the `GRAMMAR` ADR-001 is the model for this separation).

---

## 3. As regras de elevação · The elevation rules

**PT**

1. **Elevação significa temporariedade e foco.** Quanto mais alta a superfície, mais temporária e mais focal. Uma superfície alta e permanente é uma contradição (um menu que nunca fecha não deveria ser um Overlay).
2. **Poucos níveis (P9).** O Studio UX opera com um número pequeno e fixo de níveis de elevação. Não se cria um nível novo para "destacar um pouco mais" — usa-se espaço e cor de superfície antes de subir a pilha (P5).
3. **Sobe a superfície, sobe a separação.** Cada nível se distingue do de baixo por uma combinação discreta de tom de superfície e sombra mínima — nunca por sombra forte sozinha (`VISUAL_DNA` §6.2).
4. **No tema escuro, elevar é clarear.** A superfície que sobe fica mais clara; a sombra tem papel reduzido (dono do mecanismo: `COLOR_SYSTEM`/`THEMES`). A hierarquia se mantém sem depender de sombra.
5. **Um scrim isola o modal.** Dialog e, no Mobile, Sheet vêm com um escurecimento do fundo (scrim) que foca a atenção e comunica bloqueio. Transparência só nesse papel funcional (`VISUAL_DNA` §6.5).
6. **Nada paira sem razão.** Um elemento só é elevado se for temporário, contextual ou focal. Conteúdo permanente vive em Surface/Canvas, não flutuando.

**EN**

1. **Elevation means temporariness and focus.** The higher the surface, the more temporary and focal. A high, permanent surface is a contradiction.
2. **Few levels (P9).** Studio UX operates with a small, fixed number of elevation levels. You don't create a new level to "stand out a bit more" — you use space and surface color before climbing the stack (P5).
3. **Surface rises, separation rises.** Each level distinguishes itself from the one below by a discreet combination of surface tone and minimal shadow — never by strong shadow alone (`VISUAL_DNA` §6.2).
4. **In dark theme, to elevate is to lighten.** The rising surface gets lighter; shadow plays a reduced role (mechanism owner: `COLOR_SYSTEM`/`THEMES`). Hierarchy holds without relying on shadow.
5. **A scrim isolates the modal.** Dialog and, on Mobile, Sheet come with a background dimming (scrim) that focuses attention and communicates blocking. Transparency only in that functional role (`VISUAL_DNA` §6.5).
6. **Nothing hovers without reason.** An element is elevated only if it is temporary, contextual or focal. Permanent content lives in Surface/Canvas, not floating.

---

## 4. Quando usar / quando não usar cada superfície · When to use / not use each surface

**PT**

- **Application Background / Canvas** — sempre presentes; são o repouso. *Não* os use para agrupar conteúdo (isso é Surface). Não desenhe um "cartão" do tamanho do Canvas — é redundante.
- **Surface / Raised Surface** — para agrupar conteúdo relacionado (um Block, um Card). Use quando o espaço sozinho não separa o suficiente. *Não* eleve cada pedaço da tela (o "mar de cards", `VISUAL_DNA` §6.9).
- **Elevated Surface** — para algo que precisa de destaque estrutural momentâneo (item sendo arrastado, painel ancorado). *Não* a use como estado permanente.
- **Overlay / Popover / Tooltip** — para conteúdo temporário ancorado a um gatilho. Fecham ao perder foco/contexto. *Não* coloque tarefa longa ou formulário extenso aqui (vira Dialog/Sheet ou tela).
- **Sheet** — painel deslizante; no Mobile é o padrão para filtros, detalhes e ações; no Desktop, para conteúdo lateral secundário. *Não* empilhe Sheets sobre Sheets.
- **Dialog** — decisão/confirmação que exige foco e bloqueia o fundo (com scrim). Casa com o padrão de ações destrutivas (P13). *Não* use Dialog para informação que caberia num Toast, nem para fluxo longo (vira tela/Wizard).
- **Floating Layer (Toast)** — feedback efêmero, não bloqueante (P12, P16). *Não* coloque ação crítica só no Toast (ele some).

**EN**

- **Application Background / Canvas** — always present; they are the rest. *Don't* use them to group content (that's Surface). Don't draw a Canvas-sized "card" — it's redundant.
- **Surface / Raised Surface** — to group related content (a Block, a Card). Use when space alone doesn't separate enough. *Don't* elevate every piece of the screen (the "sea of cards").
- **Elevated Surface** — for something needing momentary structural emphasis (a dragged item, an anchored panel). *Don't* use it as a permanent state.
- **Overlay / Popover / Tooltip** — for temporary content anchored to a trigger. They close on losing focus/context. *Don't* put a long task or extensive form here (that becomes a Dialog/Sheet or screen).
- **Sheet** — a sliding panel; on Mobile it's the default for filters, details and actions; on Desktop, for secondary side content. *Don't* stack Sheets over Sheets.
- **Dialog** — a decision/confirmation needing focus that blocks the background (with a scrim). Pairs with the destructive-action pattern (P13). *Don't* use a Dialog for info that a Toast would carry, nor for a long flow.
- **Floating Layer (Toast)** — ephemeral, non-blocking feedback (P12, P16). *Don't* put a critical action only in a Toast (it disappears).

---

## 5. Relação entre superfícies · Relationship between surfaces

**PT** — As superfícies formam uma pilha coerente e previsível: `Application Background < Canvas < Surface/Raised < Elevated < Overlay/Popover/Tooltip/Sheet < Dialog < Floating Layer`. Essa ordem é a mesma descrita informalmente no `STUDIO_UX_DESKTOP.md` ("fundo da aplicação < superfície da Sidebar < superfície de conteúdo < superfície elevada de overlays") — aqui ela é formalizada e vale para os dois produtos, com a ressalva de que **Desktop e Mobile usam superfícies diferentes com mais frequência** (o Desktop apoia-se em Overlay/Popover/Dialog; o Mobile, em Sheet e tela cheia — P4). Uma superfície nunca aparece abaixo de outra que deveria estar sob ela: um Tooltip nunca fica atrás de um Card; um Toast nunca é coberto por um Dialog.

**EN** — Surfaces form a coherent, predictable stack: `Application Background < Canvas < Surface/Raised < Elevated < Overlay/Popover/Tooltip/Sheet < Dialog < Floating Layer`. This order is the same one informally described in `STUDIO_UX_DESKTOP.md` — here it is formalized and holds for both products, with the caveat that **Desktop and Mobile use different surfaces more often** (Desktop leans on Overlay/Popover/Dialog; Mobile on Sheet and full screen — P4). A surface never appears below one that should sit under it: a Tooltip never falls behind a Card; a Toast is never covered by a Dialog.

---

## 6. Anti-padrões · Anti-patterns

**PT / EN**

- Definir cor ou valor de superfície aqui (é do `COLOR_SYSTEM`/`DESIGN_TOKENS`). / Defining surface color or value here.
- Criar um nível de elevação novo para "destacar um pouco mais" (P9). / Creating a new elevation level to "stand out a bit more".
- Usar sombra forte para embelezar uma superfície parada (`VISUAL_DNA` §6.2). / Using strong shadow to beautify a resting surface.
- Elevar conteúdo permanente sem razão (regra 6). / Elevating permanent content for no reason.
- Empilhar modais/sheets em cascata. / Cascading stacked modals/sheets.
- Transparência decorativa (vidro/desfoque) que reduz contraste (P18, `VISUAL_DNA` §6.5). / Decorative glass/blur transparency reducing contrast.
- "Mar de cards": tudo elevado, nada com hierarquia. / "Sea of cards": everything elevated, nothing with hierarchy.

---

*Documento vivo. Define a estrutura da elevação; cor e valores são de COLOR_SYSTEM/DESIGN_TOKENS. · Living document. Defines elevation structure; color and values belong to COLOR_SYSTEM/DESIGN_TOKENS.*
