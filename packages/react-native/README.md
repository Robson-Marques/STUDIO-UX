# @studio-ux/react-native — Adapter Mobile nativo · Native Mobile adapter

> **PT** — O **irmão** do adapter web (`@studio-ux/react`), para React Native. Por P4 (Art. 2), Mobile é um produto **projetado do zero**: não reutiliza o layout do web nem as classes `.su-*` (RN não tem CSS/DOM). O que ele **compartilha** é a fonte da verdade — os **valores de token congelados na `v1.0.0`** —, aqui entregues como um tema JS (`theme.jsx`). A implementação usa primitivas nativas (`View`/`Text`/`Pressable`/`TextInput`/`Modal`).
>
> **EN** — The **sibling** of the web adapter (`@studio-ux/react`), for React Native. Per P4, Mobile is a product **designed from scratch**: it reuses neither the web layout nor the `.su-*` classes (RN has no CSS/DOM). What it **shares** is the source of truth — the **token values frozen in `v1.0.0`** — delivered here as a JS theme (`theme.jsx`). It's implemented with native primitives.

## Uso · Usage

```jsx
import { ThemeProvider, TopBar, ListItem, BottomNav, Badge, Cta, Sheet, StepBar, Field, Input } from "@studio-ux/react-native";

export default function App() {
  return (
    <ThemeProvider>{/* segue claro/escuro do sistema; accent por tenant opcional */}
      <TopBar title="Clientes" />
      <ListItem avatar="MA" title="Marina Alves" subtitle="Vitalício"
        end={<><Text>R$ 3.240</Text><Badge status="success">Ativo</Badge></>} />
      {/* ... */}
      <BottomNav
        items={[{ key: "home", label: "Início" }, { key: "clientes", label: "Clientes", active: true }]}
        fab={{ icon: "plus", onPress: novo }}
        renderIcon={(name, color) => <MyIcon name={name} color={color} />}
      />
    </ThemeProvider>
  );
}
```

## Regras do adapter · Adapter rules

**PT**
- **Mesmos valores, primitivas próprias.** Cor/espaço/raio vêm de `theme.jsx` (= tokens `v1.0.0`); os componentes são RN nativos, não web.
- **Tema por contexto.** `ThemeProvider` segue `useColorScheme()` (claro/escuro do SO); a cor de ação pode ser sobrescrita por tenant via `accent` (eixo de marca do `THEMES`).
- **Ícones são do produto.** O Studio UX não amarra biblioteca de ícones no RN — passe `renderIcon`.
- **Alvos ≥44px, gestos com alternativa** (P19). Bottom sheet via `Modal` nativo.
- **Runtime descartável** (`RUNTIME`): trocar RN por outro toolkit nativo não toca no design system.

**EN** — Same values, native primitives; theme via context (system light/dark; per-tenant accent); icons provided by the product (`renderIcon`); ≥44px targets, gestures with alternatives; a disposable runtime.

## Componentes · Components
`ThemeProvider`/`useTheme` · `Button`/`Cta` · `Badge` · `Card` · `Stat` · `Chip` · `Divider` · `Field`/`Input` · `TopBar` · `ListItem` · `BottomNav` · `Sheet` · `StepBar`.

*Documento vivo. Adapter Mobile descartável sobre os tokens congelados. · Living document. Disposable Mobile adapter over the frozen tokens.*
