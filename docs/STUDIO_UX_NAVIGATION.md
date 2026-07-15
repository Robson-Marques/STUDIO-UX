# STUDIO_UX_NAVIGATION.md — Modelo e Fluxo de Navegação · Navigation Model and Flow

> Documento normativo vivo. Responde a: **como o usuário se move dentro de um produto Studio UX — qual é o modelo de navegação, como as peças (sidebar, topbar, abas, breadcrumb, busca, atalhos) cooperam, e como ele sempre sabe onde está?**
> Living normative document. Answers: **how does the user move within a Studio UX product — what is the navigation model, how do the pieces (sidebar, topbar, tabs, breadcrumb, search, shortcuts) cooperate, and how does the user always know where they are?**
> Governança: `STUDIO_UX.md`. Princípios-âncora: P4, P6, P11, P17, P19, P23. Peças: `components/STUDIO_UX_COMPONENT_LIBRARY.md` (Grupo D). Regiões físicas: `layouts/STUDIO_UX_LAYOUT_SYSTEM.md`. Produtos: `desktop/STUDIO_UX_DESKTOP.md`, `mobile/STUDIO_UX_MOBILE.md`.

```
Architecture Boundary Check — STUDIO_UX_NAVIGATION
Resolve · Solves:            o MODELO e o FLUXO de navegação — qual peça é navegação primária/secundária/terciária,
                             quando usar cada uma, como o usuário se move entre telas e sempre sabe onde está.
                             / the navigation MODEL and FLOW — which piece is primary/secondary/tertiary navigation,
                             when to use each, how the user moves between screens and always knows where they are.
Não pertence a outro porque · Not elsewhere because:
                             COMPONENT_LIBRARY define as PEÇAS de navegação (Sidebar, Breadcrumb, Tabs, Menu, CommandPalette)
                             mas não o modelo que as orquestra; LAYOUT_SYSTEM define as REGIÕES FÍSICAS (onde no espaço)
                             mas não o fluxo de navegação. Faltava o dono do MODELO/fluxo de navegação.
                             / COMPONENT_LIBRARY defines the navigation PIECES but not the model orchestrating them;
                             LAYOUT_SYSTEM defines the PHYSICAL REGIONS (where in space) but not the navigation flow.
                             The owner of the navigation MODEL/flow was missing.
Complementa · Complements:   COMPONENT_LIBRARY, LAYOUT_SYSTEM, GRAMMAR, PATTERNS, DESKTOP, MOBILE, ACCESSIBILITY.
Nunca substitui · Never replaces: COMPONENT_LIBRARY (as peças e seu comportamento), LAYOUT_SYSTEM (regiões físicas,
                             grid, z-index), GRAMMAR (os níveis de composição), TOKENS (valores).
Dono · Owner:                este doc, para o domínio "modelo e fluxo de navegação".
                             / this doc, for the "navigation model and flow" domain.
```

---

## 1. O que a navegação resolve · What navigation solves

**PT** — A navegação responde a duas perguntas do usuário o tempo todo: **"onde estou?"** e **"como chego lá?"** (P6). Um bom modelo de navegação torna essas respostas óbvias sem que o usuário precise pensar — ele se orienta como quem conhece o próprio bairro. O Studio UX trata a navegação como **infraestrutura invisível**: quando funciona, ninguém a nota; quando falha, o usuário se sente perdido, que é a pior sensação num produto de trabalho. A régua é a confiança (`VISUAL_DNA` §1): o usuário confia num sistema onde nunca se perde.

**EN** — Navigation answers two of the user's questions all the time: **"where am I?"** and **"how do I get there?"** (P6). A good navigation model makes those answers obvious without the user having to think — they orient themselves like someone who knows their own neighborhood. Studio UX treats navigation as **invisible infrastructure**: when it works, no one notices; when it fails, the user feels lost, the worst feeling in a work product. The ruler is trust (`VISUAL_DNA` §1): the user trusts a system where they never get lost.

**PT** — Este documento é dono do **modelo e do fluxo**: qual peça faz qual papel, como cooperam, como o usuário transita. As peças em si (Sidebar, TopBar, BottomNavigation, Breadcrumb, Tabs, Menu, CommandPalette…) são do `COMPONENT_LIBRARY` e **não são reescritas aqui**. As regiões físicas onde elas moram (a faixa lateral, a barra superior, as camadas de overlay, z-index) são do `LAYOUT_SYSTEM`. Aqui: **a hierarquia, a orquestração e o fluxo.**

**EN** — This document owns the **model and flow**: which piece plays which role, how they cooperate, how the user transits. The pieces themselves belong to `COMPONENT_LIBRARY` and are **not rewritten here**. The physical regions where they live (the side strip, the top bar, overlay layers, z-index) belong to `LAYOUT_SYSTEM`. Here: **the hierarchy, the orchestration and the flow.**

---

## 2. Os princípios do modelo · The model's principles

**PT** — Quatro princípios permanentes governam qualquer navegação do Studio UX:

1. **Onde estou é sempre claro (P6).** Em qualquer tela, o usuário identifica sua posição por destaque inequívoco (item ativo na navegação, título de página, breadcrumb) — sinalizado por mais que cor (P17). Esconder a localização atual é o pecado capital da navegação.
2. **Profundidade rasa.** Quanto menos níveis entre o usuário e o que ele busca, melhor. Hierarquias profundas (clicar cinco vezes para chegar a uma função comum) viram labirinto. Prefira largura (mais destinos visíveis) a profundidade (mais níveis escondidos).
3. **Navegação previsível.** O mesmo destino está sempre no mesmo lugar; a moldura de navegação não muda de tela para tela (é o shell — `GRAMMAR`, `DESKTOP` §1). A memória espacial do usuário é um ativo que o produto protege.
4. **Atalho é acelerador, não requisito (P19).** Command Palette, atalhos de teclado e gestos aceleram quem já sabe — mas nunca são o *único* caminho para uma função. Toda função é alcançável pela navegação visível.

**EN** — Four permanent principles govern any Studio UX navigation:

1. **Where I am is always clear (P6).** On any screen, the user identifies their position by unambiguous emphasis (active nav item, page title, breadcrumb) — signaled by more than color (P17). Hiding the current location is navigation's cardinal sin.
2. **Shallow depth.** The fewer levels between the user and what they seek, the better. Deep hierarchies (five clicks to a common function) become a maze. Prefer breadth (more visible destinations) to depth (more hidden levels).
3. **Predictable navigation.** The same destination is always in the same place; the navigation frame doesn't change screen to screen (it is the shell — `GRAMMAR`, `DESKTOP` §1). The user's spatial memory is an asset the product protects.
4. **A shortcut is an accelerator, not a requirement (P19).** Command Palette, keyboard shortcuts and gestures speed up those who already know — but are never the *only* path to a function. Every function is reachable via visible navigation.

---

## 3. A hierarquia de navegação — três níveis · The navigation hierarchy — three levels

**PT** — A navegação organiza-se em três níveis, e cada peça tem seu nível:

- **Primária** — os destinos de topo do produto (as grandes seções). No Desktop, mora na **Sidebar**; no Mobile, na **BottomNavigation**. É permanente, sempre visível, e marca onde o usuário está no nível mais alto.
- **Secundária** — a navegação *dentro* de uma seção. Pode ser um **Breadcrumb** (profundidade hierárquica: Clientes › Contrato #123 › Faturas), uma navegação lateral secundária (a lista de seções de Configurações — o master–detail do `DESKTOP` §7.6), ou **Tabs** (vistas irmãs de uma entidade: Detalhes | Histórico | Configurações).
- **Terciária** — ações e opções contextuais que aparecem sob demanda: **Menu/Dropdown** ("mais opções" de uma linha), **Context Menu**, e as **Quick Actions**. Não é navegação de estrutura, e sim atalho contextual.

**EN** — Navigation is organized in three levels, and each piece has its level:

- **Primary** — the product's top destinations (the major sections). On Desktop it lives in the **Sidebar**; on Mobile in the **BottomNavigation**. It is permanent, always visible, and marks where the user is at the highest level.
- **Secondary** — navigation *within* a section. It can be a **Breadcrumb** (hierarchical depth: Customers › Contract #123 › Invoices), a secondary side navigation (the Settings section list — the `DESKTOP` §7.6 master–detail), or **Tabs** (an entity's sibling views: Details | History | Settings).
- **Tertiary** — contextual actions and options appearing on demand: **Menu/Dropdown** (a row's "more"), **Context Menu**, and **Quick Actions**. It is not structural navigation but a contextual shortcut.

**PT** — A regra de ouro da hierarquia: **um sistema de navegação primária por vez.** Dois sistemas concorrentes (uma sidebar *e* uma barra de abas de topo competindo pelo papel de "navegação principal") confundem — o usuário não sabe qual é a verdade. Cada nível complementa o de cima, nunca o duplica: a Sidebar diz *em que seção*, o Breadcrumb diz *quão fundo*, as Tabs dizem *qual vista* (`DESKTOP` §4).

**EN** — The hierarchy's golden rule: **one primary navigation system at a time.** Two competing systems (a sidebar *and* a top tab bar both fighting to be the "main navigation") confuse — the user doesn't know which is the truth. Each level complements the one above, never duplicates it: the Sidebar says *which section*, the Breadcrumb says *how deep*, the Tabs say *which view* (`DESKTOP` §4).

---

## 4. Sidebar — navegação primária do Desktop · Sidebar — Desktop primary navigation

**PT** — A **Sidebar** (peça: `COMPONENT_LIBRARY`; arquitetura: `DESKTOP` §2) é a espinha de navegação do Desktop: lista os destinos de primeiro nível, agrupados em seções rotuladas, sempre visível à esquerda. **Papel:** dizer *onde o usuário pode ir* e *onde ele está* (um único item ativo por vez, destacado por mais que cor). **Quando usar:** todo app Desktop de produtividade. **Quando NÃO usar:** no Mobile (lá é BottomNavigation — trazer a sidebar para o Mobile rouba a tela e sai do alcance do polegar, `MOBILE` §2). É colapsável (só ícones com tooltip), com o estado lembrado, e tem o **rodapé de dois blocos** — usuário e indicador **passivo** de versão (`DESKTOP` §2). Profundidade rasa: mais de um nível de aninhamento profundo vira labirinto.

**EN** — The **Sidebar** (piece: `COMPONENT_LIBRARY`; architecture: `DESKTOP` §2) is the Desktop's navigation spine: it lists first-level destinations, grouped in labeled sections, always visible on the left. **Role:** say *where the user can go* and *where they are* (a single active item at a time, highlighted by more than color). **When to use:** every Desktop productivity app. **When NOT to use:** on Mobile (there it's BottomNavigation — bringing the sidebar to Mobile steals the screen and leaves thumb reach, `MOBILE` §2). It is collapsible (icons only with tooltip), with a remembered state, and has the **two-block footer** — user and a **passive** version indicator (`DESKTOP` §2). Shallow depth: more than one deep nesting level becomes a maze.

---

## 5. TopBar — contexto e ação global · TopBar — context and global action

**PT** — A **TopBar** (peça: `COMPONENT_LIBRARY`; arquitetura: `DESKTOP` §3) é a faixa superior estável do Desktop. **Papel:** concentrar o que é **global à sessão**, não à tela — contexto atual (seletor de workspace/ambiente), busca global (que abre a Command Palette) e poucas ações globais (notificações, ajuda, menu do usuário). **Quando usar:** todo shell. **Quando NÃO usar:** como casa de conteúdo ou de ação específica da *tela* (essa vive na própria tela — cabeçalho de página, barra de ações da tabela). Regra: a ação primária da tela nunca mora na TopBar. No **Mobile**, a Top Bar é outra coisa (§8): minimalista, local e trocável por tela — a diferença de propósito, não de nome.

**EN** — The **TopBar** (piece: `COMPONENT_LIBRARY`; architecture: `DESKTOP` §3) is the Desktop's stable top strip. **Role:** concentrate what is **global to the session**, not the screen — current context (workspace/environment selector), global search (which opens the Command Palette) and a few global actions (notifications, help, user menu). **When to use:** every shell. **When NOT to use:** as a home for screen-specific content or action (that lives in the screen itself — page header, table action bar). Rule: the screen's primary action never lives in the TopBar. On **Mobile**, the Top Bar is another thing (§8): minimalist, local and swappable per screen — a difference of purpose, not name.

---

## 6. Breadcrumb e Tabs — navegação secundária · Breadcrumb and Tabs — secondary navigation

**PT** — O **Breadcrumb** (peça: `COMPONENT_LIBRARY`; `DESKTOP` §4) mostra a **profundidade** dentro de uma seção e permite subir níveis; cada nível é um `Link`, o atual não. **Quando usar:** hierarquias reais com três ou mais níveis (Desktop). **Quando NÃO usar:** fluxo linear de etapas (é `Stepper`); telas rasas (um título de página basta); Mobile profundo (lá o padrão é o botão **voltar** e a pilha de telas, `MOBILE` §3). Ele complementa a Sidebar — não a substitui: a Sidebar diz a seção, o Breadcrumb diz a profundidade.

**EN** — The **Breadcrumb** (piece: `COMPONENT_LIBRARY`; `DESKTOP` §4) shows **depth** within a section and lets you go up levels; each level is a `Link`, the current one isn't. **When to use:** real hierarchies with three or more levels (Desktop). **When NOT to use:** a linear step flow (that is `Stepper`); shallow screens (a page title suffices); deep Mobile (there the pattern is the **back** button and the screen stack, `MOBILE` §3). It complements the Sidebar — it doesn't replace it: the Sidebar says the section, the Breadcrumb says the depth.

**PT** — As **Tabs** (peça: `COMPONENT_LIBRARY`) alternam entre **vistas irmãs de um mesmo contexto** sem sair da tela (Detalhes | Histórico | Configurações de uma entidade). **Quando usar:** dividir o conteúdo de uma entidade em vistas paralelas. **Quando NÃO usar:** para navegar entre seções do app (isso é papel da navegação primária — usar Tabs como navegação global cria o "segundo sistema concorrente" do §3); para etapas sequenciais (é `Stepper`). Aba ativa clara por mais que cor (P17). No Mobile, muitas abas rolam horizontalmente ou viram `Select`.

**EN** — **Tabs** (piece: `COMPONENT_LIBRARY`) switch between **sibling views of the same context** without leaving the screen (Details | History | Settings of an entity). **When to use:** split an entity's content into parallel views. **When NOT to use:** to navigate between app sections (that's primary navigation's job — using Tabs as global navigation creates §3's "competing second system"); for sequential steps (that is `Stepper`). Active tab clear by more than color (P17). On Mobile, many tabs scroll horizontally or become a `Select`.

---

## 7. Menus, Context Menu e Quick Actions — navegação terciária · Menus, Context Menu and Quick Actions — tertiary navigation

**PT** — O **Menu/Dropdown** (peça: `COMPONENT_LIBRARY`) reúne ações ou opções contextuais sob um gatilho ("mais opções" de uma linha da tabela). **Papel:** agrupar o secundário sem poluir a tela. **Quando usar:** ações contextuais frequentes que não merecem um botão permanente. **Quando NÃO usar:** para selecionar valor de formulário (é `Select`); para navegação principal (é Sidebar). Ações destrutivas dentro do menu ficam separadas e sinalizadas (P13). O **Context Menu** (menu por clique-direito/long-press) é uma variante para usuários avançados — sempre com uma alternativa visível (nunca a *única* via para uma ação; P19), porque clique-direito não é descobrível por todos.

**EN** — The **Menu/Dropdown** (piece: `COMPONENT_LIBRARY`) gathers contextual actions/options under a trigger (a table row's "more"). **Role:** group the secondary without cluttering the screen. **When to use:** frequent contextual actions that don't merit a permanent button. **When NOT to use:** to select a form value (that is `Select`); for main navigation (that is Sidebar). Destructive actions inside the menu are separated and signaled (P13). The **Context Menu** (right-click/long-press menu) is an advanced variant — always with a visible alternative (never the *sole* route to an action; P19), because right-click isn't discoverable by everyone.

**PT** — **Quick Actions** são atalhos para as ações mais prováveis de um contexto, expostos onde a ação é natural (um botão "Novo" no cabeçalho da lista, uma ação primária no topo de um Card). Não são um sistema de navegação — são aceleradores de ação. A régua: expor as **poucas** ações mais prováveis; o resto vai para o Menu. Permissão molda o que aparece (P23): quem não pode não vê a ação habilitada.

**EN** — **Quick Actions** are shortcuts to a context's most likely actions, exposed where the action is natural (a "New" button in the list header, a primary action atop a Card). They are not a navigation system — they are action accelerators. The rule: expose the **few** most likely actions; the rest goes to the Menu. Permission shapes what appears (P23): those who can't don't see the action enabled.

---

## 8. Search, Command Palette e Shortcuts — os aceleradores · Search, Command Palette and Shortcuts — the accelerators

**PT** — A **Search** (fluxo: `PATTERNS` §8) é um caminho de navegação por *conteúdo*: encontrar um registro numa base grande. No Desktop, a busca global vive na TopBar; no Mobile, é uma **tela de busca dedicada** (`MOBILE` §7) — frequentemente o atalho principal para achar algo, já que não há Command Palette. A **Command Palette** (peça: `COMPONENT_LIBRARY`; `DESKTOP` §5) é o acelerador central do Desktop: um overlay por atalho que combina **navegação** (ir a qualquer tela), **busca de conteúdo** (achar um registro) e **execução de comandos** (disparar ações) num campo. É o que dá ao Desktop a sensação de velocidade — o usuário experiente quase não clica na Sidebar. Mostra o atalho de cada comando ao lado, ensinando o usuário a ir mais rápido.

**EN** — **Search** (flow: `PATTERNS` §8) is a navigation path by *content*: find a record in a large base. On Desktop, global search lives in the TopBar; on Mobile it is a **dedicated search screen** (`MOBILE` §7) — often the main shortcut to find something, since there's no Command Palette. The **Command Palette** (piece: `COMPONENT_LIBRARY`; `DESKTOP` §5) is the Desktop's central accelerator: a shortcut-invoked overlay combining **navigation** (go to any screen), **content search** (find a record) and **command execution** (fire actions) in one field. It gives Desktop its speed feel — the expert user barely clicks the Sidebar. It shows each command's shortcut beside it, teaching the user to go faster.

**PT** — Os **Shortcuts** (atalhos de teclado, P19) aceleram o repetitivo no Desktop: abrir busca, criar novo, salvar, navegar entre registros. São **estáveis e consistentes** (não mudam de tela para tela — a memória muscular do operador é protegida) e nunca sequestram atalhos do navegador/SO de forma surpreendente. **Regra que une os três:** são aceleradores, **nunca o único caminho** (P19; `DESKTOP` §5). Toda ação da Command Palette e de todo atalho é também alcançável pela UI visível — a descoberta acontece pela Sidebar/tela, a velocidade pelo atalho.

**EN** — **Shortcuts** (keyboard shortcuts, P19) accelerate the repetitive on Desktop: open search, create new, save, move between records. They are **stable and consistent** (they don't change screen to screen — the operator's muscle memory is protected) and never hijack browser/OS shortcuts surprisingly. **The rule uniting all three:** they are accelerators, **never the sole path** (P19; `DESKTOP` §5). Every Command Palette action and every shortcut is also reachable via the visible UI — discovery happens via the Sidebar/screen, speed via the shortcut.

---

## 9. Bottom Navigation e gestos — o modelo Mobile · Bottom Navigation and gestures — the Mobile model

**PT** — No Mobile, o modelo inteiro muda (P4). A navegação primária é a **BottomNavigation** (peça: `COMPONENT_LIBRARY`; `MOBILE` §2): uma barra fixa na base com **3 a 5 destinos** ao alcance do polegar, o atual destacado por mais que cor. É deliberadamente enxuta — só os destinos mais importantes cabem; o excedente vai para dentro das seções ou um "Mais", nunca uma segunda barra. A **Top Bar** do Mobile (`MOBILE` §3) é minimalista e **local**: título da tela (o "onde estou"), botão **voltar** quando há tela anterior na pilha, e no máximo uma ou duas ações daquela tela.

**EN** — On Mobile, the whole model changes (P4). Primary navigation is the **BottomNavigation** (piece: `COMPONENT_LIBRARY`; `MOBILE` §2): a fixed bottom bar with **3 to 5 destinations** within thumb reach, the current one highlighted by more than color. It is deliberately lean — only the most important destinations fit; the overflow goes inside sections or a "More", never a second bar. The Mobile **Top Bar** (`MOBILE` §3) is minimalist and **local**: the screen title (the "where am I"), a **back** button when there's a previous screen in the stack, and at most one or two actions for that screen.

**PT** — O fluxo Mobile é uma **pilha de telas**: o usuário entra num detalhe e volta, em vez de ver tudo lado a lado como no Desktop. Os **gestos** (swipe, long-press, edge-swipe para voltar, pull-to-refresh) são a linguagem nativa do toque, mas **atalhos, nunca o único caminho** (`MOBILE` §5) — todo gesto tem alternativa visível e acessível, porque gesto é invisível e não descobrível por todos. Nunca se sequestra o gesto de voltar do sistema. Não há Command Palette nem atalhos de teclado no Mobile; o acelerador é o gesto e a busca por toque.

**EN** — The Mobile flow is a **stack of screens**: the user enters a detail and goes back, rather than seeing everything side by side as on Desktop. **Gestures** (swipe, long-press, edge-swipe back, pull-to-refresh) are the native language of touch, but **shortcuts, never the only path** (`MOBILE` §5) — every gesture has a visible, accessible alternative, because a gesture is invisible and not discoverable by everyone. The system back gesture is never hijacked. There is no Command Palette nor keyboard shortcuts on Mobile; the accelerator is the gesture and touch search.

---

## 10. O fluxo entre telas · The flow between screens

**PT** — Mover-se entre telas preserva o contexto. No **Desktop**, o **shell é estável** (`DESKTOP` §1): Sidebar e TopBar não recarregam ao navegar — só a área de conteúdo troca. Isso mantém o mapa mental do usuário e permite os padrões que preservam contexto: **master–detail** (a lista fica à vista enquanto se opera o item), **inspetor** lateral, **split view** (`DESKTOP` §6). O usuário raramente "sai" de uma tela; ele muda o foco dentro de um contexto persistente. Transições são breves e explicam a continuidade (P15) — de onde algo veio —, nunca entretêm.

**EN** — Moving between screens preserves context. On **Desktop**, the **shell is stable** (`DESKTOP` §1): Sidebar and TopBar don't reload on navigation — only the content area swaps. This keeps the user's mental map and enables the context-preserving patterns: **master–detail** (the list stays in view while operating on the item), a side **inspector**, **split view** (`DESKTOP` §6). The user rarely "leaves" a screen; they shift focus within a persistent context. Transitions are brief and explain continuity (P15) — where something came from — never entertain.

**PT** — No **Mobile**, o fluxo é o **empilhamento** de telas focadas (`MOBILE` §1): entra-se numa tela por tarefa e volta-se por gesto ou botão. Como cada tela é uma tarefa por vez (P6), a transição de entrar/voltar carrega a direção (a tela nova desliza de onde vem, volta para de onde veio), reforçando onde o usuário está na pilha. A profundidade da pilha é rasa por design — enterrar o usuário sob dez telas empilhadas é o equivalente mobile da hierarquia profunda demais.

**EN** — On **Mobile**, the flow is the **stacking** of focused screens (`MOBILE` §1): enter a screen per task and go back by gesture or button. As each screen is one task at a time (P6), the enter/back transition carries direction (the new screen slides in from where it comes, back to where it came), reinforcing where the user is in the stack. Stack depth is shallow by design — burying the user under ten stacked screens is the mobile equivalent of over-deep hierarchy.

---

## 11. Desktop vs Mobile — síntese do modelo · Desktop vs Mobile — model synthesis

**PT** — Os dois produtos têm **modelos de navegação distintos**, não um esticado no outro (P4):

- **Desktop:** Sidebar rica e permanente (primária) + TopBar global estável + Breadcrumb/Tabs (secundária) + Menu/Context Menu (terciária) + Command Palette e atalhos (aceleradores). Navegação por **apontar e clicar**, com o teclado como via de primeira classe e o shell sempre presente.
- **Mobile:** BottomNavigation enxuta (primária) + Top Bar local com voltar + Tabs roláveis quando cabem + Menu por toque/long-press (terciária) + Search dedicada e gestos (aceleradores). Navegação por **toque e empilhamento**, na zona do polegar, uma tarefa por vez.

**EN** — The two products have **distinct navigation models**, not one stretched into the other (P4):

- **Desktop:** a rich, permanent Sidebar (primary) + a stable global TopBar + Breadcrumb/Tabs (secondary) + Menu/Context Menu (tertiary) + Command Palette and shortcuts (accelerators). Navigation by **point and click**, with the keyboard as first-class and the shell always present.
- **Mobile:** a lean BottomNavigation (primary) + a local Top Bar with back + scrollable Tabs when they fit + touch/long-press Menu (tertiary) + dedicated Search and gestures (accelerators). Navigation by **touch and stacking**, in the thumb zone, one task at a time.

**PT** — O que os une: a mesma hierarquia de três níveis, o mesmo "onde estou sempre claro" (P6), a mesma profundidade rasa e previsibilidade, e a mesma regra de que **atalho nunca é o único caminho** (P19). O que muda é a *forma física* de cada nível — e essa forma é decidida por produto, do zero.

**EN** — What unites them: the same three-level hierarchy, the same "where am I always clear" (P6), the same shallow depth and predictability, and the same rule that **a shortcut is never the sole path** (P19). What changes is the *physical form* of each level — and that form is decided per product, from scratch.

---

## 12. Anti-padrões · Anti-patterns

**PT / EN**

- **Navegação profunda demais** — cinco cliques para uma função comum; labirinto (viola profundidade rasa). / **Over-deep navigation** — five clicks to a common function; a maze.
- **Dois sistemas de navegação concorrentes** — sidebar *e* abas de topo disputando o papel de navegação principal. / **Two competing navigation systems** — a sidebar *and* top tabs both claiming main navigation.
- **Esconder a localização atual** — nenhum item ativo, sem título, sem breadcrumb; o usuário se perde (viola P6). / **Hiding the current location** — no active item, no title, no breadcrumb; the user gets lost.
- **Ativo só por cor** — a posição atual sem segundo sinal (viola P17). / **Active by color only** — the current position with no second cue.
- **Atalho como único caminho** — uma ação que só existe na Command Palette, no context menu ou num gesto (viola P19). / **A shortcut as the sole path** — an action that only exists in the palette, context menu or a gesture.
- **Tabs como navegação global** — usar abas para trocar de seção do app em vez de vistas irmãs. / **Tabs as global navigation** — using tabs to switch app sections instead of sibling views.
- **Ação da tela na TopBar / ação global na tela** — trocar os papéis (viola `DESKTOP` §3). / **Screen action in the TopBar / global action in the screen** — swapping the roles.
- **Rótulo técnico na navegação** — `user_settings` em vez de "Perfil" (viola P11). / **Technical label in navigation** — a raw identifier instead of a human label.
- **Bloco de versão clicável** — o indicador de versão passivo virando gatilho que reboca o usuário (viola `DESKTOP` §2). / **A clickable version block** — the passive version indicator becoming a trigger.
- **Sidebar no Mobile / BottomNavigation no Desktop** — importar a peça do produto errado (viola P4). / **Sidebar on Mobile / BottomNavigation on Desktop** — importing the wrong product's piece.
- **Sequestrar o gesto de voltar do SO** — quebrar a convenção da plataforma no Mobile. / **Hijacking the OS back gesture** — breaking the platform convention on Mobile.
- **Moldura de navegação que recarrega por rota** — o shell piscando a cada navegação (viola a estabilidade do shell). / **A navigation frame reloading per route** — the shell flickering on every navigation.

---

*Documento vivo. Descreve o modelo e o fluxo de navegação que existem hoje; referencia as peças (dono: COMPONENT_LIBRARY) e as regiões físicas (dono: LAYOUT_SYSTEM) sem reescrevê-las, e nunca redefine componente, região ou valor. Toda mudança nas duas línguas na mesma leva. · Living document. Describes today's navigation model and flow; it references the pieces and physical regions without rewriting them, and never redefines a component, region or value. Every change in both languages in the same commit.*
