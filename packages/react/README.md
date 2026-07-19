# @studio-ux-ds/react — Camada React · React layer

> **PT** — Adapter React sobre o Studio UX. Estes componentes **não reimplementam** nada: eles apenas embrulham as classes `.su-*` de `packages/components/components.css` (e os tokens de `packages/tokens/tokens.css`) numa API de props. Por `STUDIO_UX_RUNTIME.md`, esta camada é um **runtime descartável** — a Specification (tokens + regras) é a fonte da verdade; se um produto usar Vue, Flutter ou HTML puro, troca-se o adapter, não o design system.
>
> **EN** — A React adapter over Studio UX. These components **reimplement nothing**: they only wrap the `.su-*` classes from `packages/components/components.css` (and the tokens from `packages/tokens/tokens.css`) in a props API. Per `STUDIO_UX_RUNTIME.md`, this layer is a **disposable runtime** — the Specification (tokens + rules) is the source of truth; swap the adapter for Vue/Flutter/plain HTML without touching the design system.

## Como usar · Usage

```jsx
import "@studio-ux-ds/tokens/tokens.css";
import "@studio-ux-ds/components/components.css";
import { Button, Badge, Card, Field, Tabs, Modal, ConfirmDialog, ToastProvider, useToast, DataTable } from "@studio-ux-ds/react";

function Exemplo() {
  return (
    <Card>
      <Field label="Nome"><input className="su-input" placeholder="Nome do cliente" /></Field>
      <Button variant="primary" icon="plus">Novo cliente</Button>
      <Badge status="success">Ativo</Badge>
    </Card>
  );
}
```

## Princípios do adapter · Adapter principles

**PT**
- **Zero estilo novo.** O componente só compõe classes `.su-*`. Se precisar de um estilo que não existe, o pedido é para o **CSS/catálogo** (MINOR no design system), não para o React.
- **Props traduzem para classes/estados**, nunca para valores literais (P1): `variant="danger"` → `su-btn--danger`; nunca cor crua.
- **Acessibilidade herdada do CSS** (foco, contraste) + reforçada aqui (aria, foco preso em modal, teclado).
- **Tree-shakeable**; cada componente é um arquivo; `index.js` só reexporta.

**EN**
- **No new styles.** Components only compose `.su-*` classes. A missing style is a request to the **CSS/catalog** (MINOR in the design system), not to React.
- **Props map to classes/states**, never literal values (P1).
- **Accessibility inherited from the CSS** + reinforced here (aria, modal focus trap, keyboard).
- **Tree-shakeable**; one file per component; `index.js` only re-exports.

## Fronteira · Boundary
Este pacote é **runtime**, não Specification. Ele nunca é o dono de uma regra de design — só a aplica em React. O Mobile React (React Native) seria um adapter irmão e separado (P4), nunca o mesmo componente responsivo.

*Documento vivo. Adapter descartável sobre a Specification. · Living document. Disposable adapter over the Specification.*
