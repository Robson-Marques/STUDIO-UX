# STUDIO_UX_FORMS.md — Composição e Comportamento de Formulários · Form Composition and Behavior

> Documento normativo vivo. Responde a: **como se compõe e como se comporta um formulário no Studio UX — como os campos se agrupam, quando e como se valida, como se sinaliza erro e sucesso, e como pedir o mínimo com o máximo de clareza?**
> Living normative document. Answers: **how is a form composed and how does it behave in Studio UX — how fields group, when and how to validate, how error and success are signaled, and how to ask the minimum with maximum clarity?**
> Governança: `STUDIO_UX.md`. Princípios-âncora: P6, P11, P12, P14, P16, P19, P23. Peças: `components/STUDIO_UX_COMPONENT_LIBRARY.md` (Grupo B). Fluxos: `patterns/STUDIO_UX_PATTERNS.md` (§1 CRUD, §5 Wizard, §7 Signup). Níveis: `STUDIO_UX_GRAMMAR.md`.

```
Architecture Boundary Check — STUDIO_UX_FORMS
Resolve · Solves:            como COMPOR um formulário e reger seu COMPORTAMENTO — agrupamento de campos,
                             layout de coluna, momento e forma da validação, sinalização de erro/sucesso,
                             auto-save, e as regras de ouro de UX de formulário.
                             / how to COMPOSE a form and govern its BEHAVIOR — field grouping, column layout,
                             the timing and form of validation, error/success signaling, auto-save, and the
                             golden UX rules of forms.
Não pertence a outro porque · Not elsewhere because:
                             COMPONENT_LIBRARY define os campos (FormField, TextInput, Select…) mas não como
                             agrupá-los nem quando validar; PATTERNS define fluxos (CRUD, Wizard, Signup) que
                             USAM formulários mas não esgotam a composição/comportamento do formulário em si.
                             Faltava o dono do FORMULÁRIO como composição e comportamento.
                             / COMPONENT_LIBRARY defines the fields but not how to group them or when to validate;
                             PATTERNS defines flows that USE forms but don't exhaust form composition/behavior itself.
                             The owner of the FORM as composition and behavior was missing.
Complementa · Complements:   COMPONENT_LIBRARY, PATTERNS, GRAMMAR, VISUAL_RHYTHM, LAYOUT_SYSTEM, ACCESSIBILITY, DESKTOP, MOBILE.
Nunca substitui · Never replaces: COMPONENT_LIBRARY (os campos e seu comportamento interno), PATTERNS (os fluxos
                             CRUD/Wizard/Signup/Login), LAYOUT_SYSTEM (grid/colunas), TOKENS (valores).
Dono · Owner:                este doc, para o domínio "composição e comportamento de formulários".
                             / this doc, for the "form composition and behavior" domain.
```

---

## 1. O que um formulário resolve · What a form solves

**PT** — Um formulário é o principal ponto de contato entre a intenção do usuário e o sistema: é onde ele *entrega* dados. Cada campo é um pedido; cada pedido custa esforço e atenção. A filosofia do Studio UX para formulários é a do respeito: **pedir o mínimo, na ordem mais natural, com a menor chance de erro**, e deixar sempre claro o que foi entendido. Um bom formulário some — o usuário preenche sem pensar na interface (`VISUAL_DNA` §3). Um mau formulário faz o usuário trabalhar para o sistema, quando deveria ser o contrário.

**EN** — A form is the main contact point between the user's intent and the system: it is where they *hand over* data. Each field is a request; each request costs effort and attention. Studio UX's form philosophy is one of respect: **ask the minimum, in the most natural order, with the least chance of error**, and always make clear what was understood. A good form disappears — the user fills it without thinking about the interface (`VISUAL_DNA` §3). A bad form makes the user work for the system, when it should be the reverse.

**PT** — Este documento é dono da **composição e do comportamento**: como os campos se organizam e como o formulário reage. Os campos em si (FormField, TextInput, Select, PhoneInput…) são do `COMPONENT_LIBRARY`; os fluxos que embrulham formulários (CRUD, Wizard, Signup, Login) são do `PATTERNS`; o grid é do `LAYOUT_SYSTEM`; os valores são dos tokens. Aqui: **agrupar, validar, sinalizar, dosar.**

**EN** — This document owns **composition and behavior**: how fields are organized and how the form reacts. The fields themselves belong to `COMPONENT_LIBRARY`; the flows wrapping forms (CRUD, Wizard, Signup, Login) to `PATTERNS`; the grid to `LAYOUT_SYSTEM`; the values to the tokens. Here: **group, validate, signal, dose.**

---

## 2. Regras de ouro (as inegociáveis) · Golden rules (the non-negotiables)

**PT** — Antes de qualquer composição, cinco regras que valem para todo formulário do Studio UX:

1. **Rótulo sempre visível, nunca placeholder-como-rótulo.** Todo campo tem um rótulo persistente (via `FormField`). O placeholder é um *exemplo* ("ex.: maria@empresa.com"), não o nome do campo — quando o usuário digita, o placeholder some e, se ele era o rótulo, o campo fica órfão e inacessível. É anti-padrão de acessibilidade.
2. **Linguagem do usuário (P11).** Rótulos, dicas e erros falam a língua do dono do negócio ("Telefone de contato", não `contact_phone`). Jargão técnico vai para "Ajustes avançados" ou some.
3. **Pedir o mínimo.** Cada campo extra reduz a taxa de conclusão. Se o dado pode ser inferido, calculado ou pedido depois, não peça agora. Campo opcional que quase ninguém usa é candidato a sair.
4. **Agrupar por afinidade.** Campos que pertencem ao mesmo assunto ficam juntos; a ordem segue o raciocínio do usuário, não a ordem das colunas do banco.
5. **Todo estado é projetado (P14).** Vazio, preenchendo, enviando, sucesso e erro — nenhum é deixado ao acaso.

**EN** — Before any composition, five rules that apply to every Studio UX form:

1. **Label always visible, never placeholder-as-label.** Every field has a persistent label (via `FormField`). The placeholder is an *example* ("e.g. mary@company.com"), not the field's name — when the user types, the placeholder vanishes, and if it was the label, the field becomes orphaned and inaccessible. It is an accessibility anti-pattern.
2. **User's language (P11).** Labels, hints and errors speak the business owner's language, not the developer's. Technical jargon goes to "Advanced settings" or disappears.
3. **Ask the minimum.** Each extra field lowers completion. If a datum can be inferred, computed or asked later, don't ask now. An optional field almost no one uses is a candidate to remove.
4. **Group by affinity.** Fields of the same subject stay together; order follows the user's reasoning, not the database column order.
5. **Every state is designed (P14).** Empty, filling, submitting, success and error — none left to chance.

---

## 3. Composição — campos, seções e Blocks · Composition — fields, sections and Blocks

**PT** — Um formulário compõe-se nos níveis da gramática (`GRAMMAR`): a **Section** de "editar cliente" contém **Blocks** temáticos ("Dados pessoais", "Contato", "Endereço"), cada Block reunindo os **Components** de campo (`FormField` envolvendo `TextInput`, `PhoneInput`, `Select`…), preenchidos com o **Content** do usuário. Cada campo mora sempre dentro de um `FormField` (dono: `COMPONENT_LIBRARY`), que dá o rótulo, a dica, a mensagem de erro e a associação acessível — nunca um input cru solto (P3).

**EN** — A form is composed at the grammar levels (`GRAMMAR`): the "edit customer" **Section** contains thematic **Blocks** ("Personal data", "Contact", "Address"), each Block gathering the field **Components** (`FormField` wrapping `TextInput`, `PhoneInput`, `Select`…), filled with the user's **Content**. Each field always lives inside a `FormField` (owner: `COMPONENT_LIBRARY`), which provides the label, hint, error message and accessible association — never a loose raw input (P3).

**PT** — O agrupamento em Blocks é o principal instrumento de clareza: um formulário longo dividido em três grupos rotulados é muito mais leve que uma pilha de vinte campos iguais. Os grupos separam-se por **espaço e ritmo** (`VISUAL_RHYTHM`), com um título discreto por Block, não por caixas com borda ao redor de cada um (P5 — a moldura é o último recurso). Um título de Block ("Endereço de cobrança") orienta e cria pausas para o olho descansar.

**EN** — Grouping into Blocks is the main clarity instrument: a long form split into three labeled groups is far lighter than a stack of twenty identical fields. Groups separate by **space and rhythm** (`VISUAL_RHYTHM`), with a discreet title per Block, not by bordered boxes around each (P5 — the frame is the last resort). A Block title ("Billing address") orients and creates pauses for the eye to rest.

---

## 4. Layout — uma coluna é o padrão · Layout — one column is the default

**PT** — O layout padrão de um formulário é **coluna única**. Motivo: a leitura vertical é a mais natural e a mais rápida de percorrer — o olho desce em linha reta, um campo de cada vez, sem decidir para onde ir. Formulários de duas colunas obrigam o olho a ziguezaguear e criam ambiguidade de ordem de preenchimento (desce ou vai para o lado?). A coluna única também é a que melhor se traduz entre Desktop e Mobile.

**EN** — The default form layout is a **single column**. Reason: vertical reading is the most natural and fastest to traverse — the eye moves straight down, one field at a time, with no decision about where to go. Two-column forms force the eye to zigzag and create ambiguity about fill order (down or across?). The single column also translates best between Desktop and Mobile.

**PT** — **Duas colunas justificam-se** só quando há largura (Desktop) e os campos são **curtos e naturalmente pareados** — cidade/estado, dia/mês/ano, primeiro nome/sobrenome. Aí o pareamento reflete a relação semântica e ajuda em vez de atrapalhar. Nunca se coloca um campo longo (endereço completo, observações) ao lado de um curto só para "encher a linha". No Desktop, o padrão poderoso não é o formulário de duas colunas, e sim **formulário + inspetor/pré-visualização lado a lado** (`DESKTOP` §7.3): o formulário permanece em coluna única, e a largura extra vira contexto (o que está sendo editado, uma prévia do resultado).

**EN** — **Two columns are justified** only when there is width (Desktop) and the fields are **short and naturally paired** — city/state, day/month/year, first/last name. There the pairing reflects the semantic relationship and helps rather than hinders. A long field (full address, notes) is never placed beside a short one just to "fill the line". On Desktop, the powerful pattern is not the two-column form but **form + inspector/preview side by side** (`DESKTOP` §7.3): the form stays single-column, and the extra width becomes context (what is being edited, a result preview).

---

## 5. Formulários longos — abas e wizard · Long forms — tabs and wizard

**PT** — Quando um formulário cresce, há duas saídas, e a escolha depende de o preenchimento ser paralelo ou sequencial:

- **Abas (`Tabs`)** quando as seções são **paralelas e independentes** — o usuário pode preencher em qualquer ordem e revisitar (ex.: um cadastro de produto com "Geral | Preços | Estoque | Fotos"). As abas quebram o comprimento sem impor sequência. Cada aba é um recorte coeso; a validação de uma aba não bloqueia ver as outras, mas o envio checa todas.
- **Wizard (`Stepper`)** quando o preenchimento é **sequencial** e cada etapa depende da anterior, ou quando a tarefa é longa o bastante para se beneficiar de ser fatiada em passos digeríveis (dono do fluxo: `PATTERNS` §5). O Wizard mostra onde o usuário está e quanto falta (P6), valida por etapa, não perde o preenchido ao voltar, e resume antes de confirmar.

**EN** — When a form grows, there are two exits, and the choice depends on whether filling is parallel or sequential:

- **Tabs (`Tabs`)** when sections are **parallel and independent** — the user can fill in any order and revisit (e.g. a product record with "General | Pricing | Stock | Photos"). Tabs break the length without imposing sequence. Each tab is a cohesive slice; validating one tab doesn't block viewing others, but submit checks all.
- **Wizard (`Stepper`)** when filling is **sequential** and each step depends on the previous, or when the task is long enough to benefit from being sliced into digestible steps (flow owner: `PATTERNS` §5). The Wizard shows where the user is and how much remains (P6), validates per step, doesn't lose input on back, and summarizes before confirming.

**PT** — A régua: não fatie o que é curto. Um formulário de seis campos não precisa de wizard nem de abas — vira burocracia. Abas e wizard servem ao longo; forçá-los no curto é overengineering (o inverso do minimalismo, `VISUAL_DNA` §5.1).

**EN** — The rule: don't slice what is short. A six-field form needs neither wizard nor tabs — it becomes bureaucracy. Tabs and wizard serve the long; forcing them on the short is overengineering (the opposite of minimalism, `VISUAL_DNA` §5.1).

---

## 6. Validação — quando e como · Validation — when and how

**PT** — O **quando** da validação é uma decisão de respeito ao usuário. A regra do Studio UX:

- **Não valide a cada tecla.** Marcar um e-mail como "inválido" enquanto a pessoa ainda está no meio de digitá-lo é hostil e ansioso — o campo pisca vermelho antes de o usuário terminar. Isso vibra e distrai, o oposto da calma (`VISUAL_DNA` §4).
- **Valide no blur (ao sair do campo)** para regras que dá para checar isoladamente (formato de e-mail, campo obrigatório vazio). O usuário terminou aquele campo; agora é o momento honesto de avisar.
- **Valide no submit** para o conjunto — regras que dependem de vários campos, e a checagem final antes de enviar. Um campo que já foi corrigido volta ao normal assim que válido (não guarda rancor).
- **Exceção construtiva:** requisitos que ajudam em tempo real (a força/regra de senha aparecendo enquanto se digita) são bem-vindos — mas como *guia que se completa*, não como erro que acusa.

**EN** — The **when** of validation is a decision of respect for the user. The Studio UX rule:

- **Don't validate on every keystroke.** Marking an email "invalid" while the person is still mid-typing is hostile and anxious — the field blinks red before the user finishes. It vibrates and distracts, the opposite of calm (`VISUAL_DNA` §4).
- **Validate on blur (leaving the field)** for rules checkable in isolation (email format, empty required field). The user finished that field; now is the honest moment to warn.
- **Validate on submit** for the whole — rules depending on several fields, and the final check before sending. A corrected field returns to normal as soon as valid (holds no grudge).
- **Constructive exception:** requirements that help in real time (password strength/rule appearing as you type) are welcome — but as a *guide that completes*, not an error that accuses.

**PT** — O **como** separa dois tipos de mensagem, cada um com seu dono:

- **Erro de validação de campo** vive **inline, no próprio `FormField`** (dono: `COMPONENT_LIBRARY`): mensagem junto do campo, sinal no campo (borda/ícone) + texto (P17 — nunca só a cor vermelha), `aria-invalid` para leitores. O usuário precisa saber *qual* campo e *por quê*, ali mesmo.
- **Falha de envio** (o servidor recusou, a rede caiu) vive num **toast** (P12; dono do padrão: `PATTERNS` §14): "Não foi possível salvar. Tente de novo." O toast é para o *resultado da ação*; o erro de campo é para a *correção do dado*. Nunca banner inline improvisado, nunca `alert()` nativo.

**EN** — The **how** separates two message types, each with its owner:

- **Field validation error** lives **inline, in the `FormField` itself** (owner: `COMPONENT_LIBRARY`): a message by the field, a cue on the field (border/icon) + text (P17 — never red color alone), `aria-invalid` for readers. The user must know *which* field and *why*, right there.
- **Submit failure** (the server refused, the network dropped) lives in a **toast** (P12; pattern owner: `PATTERNS` §14): "Couldn't save. Try again." The toast is for the *action's result*; the field error is for the *data's correction*. Never an improvised inline banner, never a native `alert()`.

---

## 7. Textos de ajuda, requisitos e erros construtivos · Help text, requirements and constructive errors

**PT** — Um bom formulário ensina antes de acusar. Requisitos e restrições aparecem **antes do erro**, não depois: a regra de senha visível junto do campo, os tipos e o tamanho de arquivo ditos antes do upload (anti-erro-silencioso — herança do IA Studio), o formato esperado exemplificado no placeholder. Revelar a regra só quando o usuário já errou é o "erro silencioso" da UX de formulário — plausível de fora, cruel de perto.

**EN** — A good form teaches before it accuses. Requirements and constraints appear **before the error**, not after: the password rule visible by the field, accepted file types and size stated before the upload (anti-silent-error — an IA Studio inheritance), the expected format shown in the placeholder. Revealing the rule only after the user has erred is the "silent error" of form UX — plausible from afar, cruel up close.

**PT** — Dicas (`hint` do `FormField`) são curtas e explicam o que não é óbvio ("Usamos para enviar a fatura", "Somente números"). A mensagem de erro é **construtiva**: diz o que corrigir e como, não só que está errado. "E-mail inválido" é fraco; "Digite um e-mail no formato nome@dominio.com" ajuda. Obrigatoriedade é marcada de forma textual e consistente, não só por um asterisco solto (P17) — e o mais leve é marcar o que é *opcional* quando a maioria é obrigatória.

**EN** — Hints (`FormField`'s `hint`) are short and explain the non-obvious ("We use it to send the invoice", "Digits only"). The error message is **constructive**: it says what to fix and how, not just that it's wrong. "Invalid email" is weak; "Enter an email like name@domain.com" helps. Required-ness is marked textually and consistently, not by a loose asterisk alone (P17) — and the lightest touch is to mark what is *optional* when most fields are required.

---

## 8. Estados do formulário · Form states

**PT** — Os cinco estados projetados (P14, P16), cada um com sinal claro:

- **Vazio/inicial** — o formulário limpo, pronto; rótulos visíveis, foco no primeiro campo (Desktop). Num formulário de edição, "vazio" na verdade é *pré-preenchido* com o dado atual.
- **Preenchendo** — o usuário digita; validação discreta no blur; nada pisca a cada tecla.
- **Enviando (submitting)** — a ação primária entra em **loading** e bloqueia o re-clique (P16), para não enviar duas vezes; o formulário fica temporariamente inerte. Nenhum clique fica "mudo".
- **Sucesso** — feedback via **toast** ("Cliente salvo") e a consequência natural (fecha o modal, volta à lista, avança a etapa). O sucesso é dito, não presumido.
- **Erro** — falha de envio via toast; erro de campo inline. O erro nunca é engolido com um falso sucesso (anti-erro-silencioso): se falhou, o usuário sabe.

**EN** — The five designed states (P14, P16), each with a clear cue:

- **Empty/initial** — the clean form, ready; labels visible, focus on the first field (Desktop). In an edit form, "empty" is actually *pre-filled* with current data.
- **Filling** — the user types; discreet validation on blur; nothing blinks per keystroke.
- **Submitting** — the primary action enters **loading** and blocks re-click (P16), so it doesn't send twice; the form goes temporarily inert. No click stays "mute".
- **Success** — feedback via **toast** ("Customer saved") and the natural consequence (close the modal, return to the list, advance the step). Success is stated, not assumed.
- **Error** — submit failure via toast; field error inline. The error is never swallowed with a false success (anti-silent-error): if it failed, the user knows.

---

## 9. Barra de ações — FormActions · The action bar — FormActions

**PT** — Todo formulário editável termina numa **`FormActions`** (dono: `COMPONENT_LIBRARY`): a barra com **uma única ação primária** (P6 — "Salvar cliente", verbo na língua do usuário) e as secundárias subordinadas (cancelar; "salvar e novo"). Ordem consistente em todo o sistema; ação destrutiva, quando existe, separada visualmente e com os cinco cuidados (P13). O loading no envio bloqueia o re-submit. Nunca dois primários competindo; nunca um "cancelar" com o peso visual de um primário.

**EN** — Every editable form ends in a **`FormActions`** (owner: `COMPONENT_LIBRARY`): the bar with **a single primary action** (P6 — "Save customer", a verb in the user's language) and subordinate secondaries (cancel; "save and new"). Consistent order across the system; a destructive action, when present, visually separated and with the five safeguards (P13). Submit loading blocks re-submit. Never two competing primaries; never a "cancel" with a primary's visual weight.

---

## 10. Auto-save — quando e como sinalizar · Auto-save — when and how to signal

**PT** — Nem todo formulário salva com um botão. O **auto-save** cabe onde o trabalho é contínuo e perder o progresso seria caro (editar um documento longo, configurar um fluxo, preencher um rascunho extenso). Quando existe, ele precisa ser **honesto e visível**: um indicador discreto de status ("Salvando…", "Salvo", "Falha ao salvar — repetir") diz ao usuário o que aconteceu, porque a ausência de um botão de salvar tira a âncora natural de "foi salvo?". O anti-padrão é o auto-save **silencioso**: o usuário fecha achando que salvou, e não salvou (o erro silencioso outra vez).

**EN** — Not every form saves with a button. **Auto-save** fits where work is continuous and losing progress would be costly (editing a long document, configuring a flow, filling an extensive draft). When present, it must be **honest and visible**: a discreet status indicator ("Saving…", "Saved", "Save failed — retry") tells the user what happened, because the absence of a save button removes the natural anchor of "did it save?". The anti-pattern is **silent** auto-save: the user closes thinking it saved, and it didn't (the silent error again).

**PT** — Auto-save e botão de salvar não convivem no mesmo formulário sem confundir (P2 — um jeito só de fazer a mesma coisa). Escolha um por natureza da tarefa: tarefas discretas e confirmáveis usam `FormActions`; edição contínua usa auto-save sinalizado. Onde há dado não salvo e o usuário tenta sair, confirma-se antes de descartar (ver Modal, `COMPONENT_LIBRARY`).

**EN** — Auto-save and a save button don't coexist in the same form without confusion (P2 — one way to do the same thing). Choose one by task nature: discrete, confirmable tasks use `FormActions`; continuous editing uses signaled auto-save. Where there is unsaved data and the user tries to leave, confirm before discarding (see Modal, `COMPONENT_LIBRARY`).

---

## 11. Mensagens na língua do usuário · Messages in the user's language

**PT** — A regra máxima de UX (P11, `STUDIO_UX.md` §6) é especialmente crítica em formulários, porque é onde o sistema mais fala com o usuário. Rótulo é o nome que o dono do negócio daria ("Quem é o responsável?", não `owner_id`). Erro é conselho humano, não código ("Este CPF já está cadastrado", não `duplicate_key_violation`). Escolhas de um `Select` são opções compreensíveis, não enums crus. O identificador técnico por baixo (o id, a chave, o enum) nunca aparece na superfície — o sistema traduz. Onde um ajuste técnico é inevitável, ele mora em "Ajustes avançados", fora do caminho do usuário comum.

**EN** — The supreme UX rule (P11, `STUDIO_UX.md` §6) is especially critical in forms, because that's where the system talks to the user most. A label is the name the business owner would give ("Who is responsible?", not `owner_id`). An error is human advice, not a code ("This ID is already registered", not `duplicate_key_violation`). A `Select`'s choices are understandable options, not raw enums. The technical identifier underneath (the id, the key, the enum) never surfaces — the system translates. Where a technical setting is unavoidable, it lives under "Advanced settings", off the common user's path.

---

## 12. Desktop vs Mobile · Desktop vs Mobile

**PT** — São **duas composições do mesmo formulário** (P4). No **Desktop**, o formulário aproveita a largura com agrupamento denso: seções tituladas, campos curtos pareados quando fazem sentido, e o padrão **formulário + inspetor/pré-visualização** lado a lado (`DESKTOP` §7.3). É operável inteiramente por teclado (P19): tab em ordem lógica, enter submete onde apropriado, esc fecha o overlay. O foco inicial vai ao primeiro campo. `FormActions` alinhada ao rodapé/direita.

**EN** — These are **two compositions of the same form** (P4). On **Desktop**, the form uses width with dense grouping: titled sections, short fields paired when sensible, and the **form + inspector/preview** side-by-side pattern (`DESKTOP` §7.3). It is fully keyboard-operable (P19): tab in logical order, enter submits where appropriate, esc closes the overlay. Initial focus goes to the first field. `FormActions` aligned to the footer/right.

**PT** — No **Mobile**, o formulário é **coluna única, um campo por foco** (`MOBILE`), campos grandes para o toque (≥44px — P19), teclado contextual por campo (numérico para número, telefônico para `PhoneInput`, e-mail para e-mail). A **`FormActions` fica fixa no rodapé** (`COMPONENT_LIBRARY`), largura total, respeitando a área segura — nunca rola para fora e some. Formulários longos viram **Wizard** de etapas, uma por tela cheia, com o botão de avançar ao alcance do polegar. O `PhoneInput` abre o seletor de país num Sheet; o `Select` e o `DatePicker` abrem em Sheet/seletor nativo. Nada de esticar o formulário Desktop e encolher os campos (viola P4).

**EN** — On **Mobile**, the form is **single column, one field per focus** (`MOBILE`), large touch fields (≥44px — P19), a contextual keyboard per field (numeric for numbers, phone for `PhoneInput`, email for email). The **`FormActions` is pinned to the footer** (`COMPONENT_LIBRARY`), full width, respecting the safe area — it never scrolls away and vanishes. Long forms become a stepped **Wizard**, one per full screen, with the advance button within thumb reach. `PhoneInput` opens the country selector in a Sheet; `Select` and `DatePicker` open in a Sheet/native picker. No stretching the Desktop form and shrinking the fields (violates P4).

---

## 13. Anti-padrões · Anti-patterns

**PT / EN**

- **Placeholder como rótulo** — o nome do campo desaparece ao digitar (acessibilidade quebrada). / **Placeholder as label** — the field name vanishes on typing.
- **Validar a cada tecla** — o campo pisca erro antes de o usuário terminar (ansioso, hostil). / **Validating per keystroke** — the field blinks error before the user finishes.
- **Erro só em vermelho, sem texto** — viola P17 (cor não é o único sinal). / **Error in red only, no text** — violates P17.
- **Erro de envio em banner ou alert nativo** — deveria ser toast (P12). / **Submit error in a banner or native alert** — should be a toast.
- **Requisitos revelados só no erro** — a regra de senha/arquivo escondida até estourar (erro silencioso). / **Requirements revealed only on error** — the password/file rule hidden until it breaks.
- **Auto-save silencioso** — salva (ou falha) sem dizer; o usuário não sabe se está seguro. / **Silent auto-save** — saves (or fails) without saying so.
- **Pedir demais** — campos que ninguém preenche, dados que poderiam ser inferidos ou pedidos depois. / **Asking too much** — fields no one fills, data inferable or askable later.
- **Duas colunas em campos longos** — ziguezague e ambiguidade de ordem. / **Two columns for long fields** — zigzag and order ambiguity.
- **Dois primários / cancelar com peso de primário** — viola P6/`FormActions`. / **Two primaries / a cancel with primary weight**.
- **Jargão nos rótulos e erros** — `owner_id`, `duplicate_key` na superfície (viola P11). / **Jargon in labels and errors** — technical identifiers on the surface.
- **Wizard/abas no que é curto** — burocratizar seis campos (overengineering). / **Wizard/tabs on a short form** — bureaucratizing six fields.
- **`FormActions` que rola para fora no Mobile** — o usuário perde o botão de salvar (viola P4/`FormActions`). / **`FormActions` scrolling off on Mobile** — the user loses the save button.

---

*Documento vivo. Descreve a composição e o comportamento de formulários que existem hoje; referencia os donos (COMPONENT_LIBRARY, PATTERNS, LAYOUT_SYSTEM, TOKENS) e nunca redefine campo, fluxo, grid ou valor. Toda mudança nas duas línguas na mesma leva. · Living document. Describes today's form composition and behavior; it references the owners and never redefines a field, flow, grid or value. Every change in both languages in the same commit.*
