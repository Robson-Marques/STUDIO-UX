# STUDIO_UX_HANDOFF.md — Estado & Re-ancoragem · State & Re-anchoring

> **PT** — Este arquivo existe porque a memória de um assistente é compactada em sessões longas e ele perde o fio (principalmente rastreando versão). **A fonte da verdade é o git + `CHANGELOG.md`, NUNCA a memória.** Toda sessão nova começa lendo: (1) `git log --oneline -3` e `git tag`, (2) este arquivo, (3) `STUDIO_UX.md`, (4) o doc da frente atual.
>
> **EN** — This file exists because an assistant's memory is compacted in long sessions and it loses the thread (especially tracking versions). **The source of truth is git + `CHANGELOG.md`, NEVER memory.** Every new session starts by reading: (1) `git log --oneline -3` and `git tag`, (2) this file, (3) `STUDIO_UX.md`, (4) the current front's doc.

> Última atualização · Last updated: 2026-07-15 (Fase 1.5 concluída · Phase 1.5 done).

---

## 🔴 Regra de ouro · Golden rule

**PT** — Nunca cravar número de versão, nome de arquivo/token/componente ou "o que já foi implementado" de cabeça. Rodar `git tag | sort -V | tail` e `git log --oneline -3` ANTES de falar de versão. Tag é imutável — nunca reusar. Confirmar o número da próxima versão com o Robson antes de taggear.

**EN** — Never state a version number, a file/token/component name, or "what's already implemented" from memory. Run `git tag | sort -V | tail` and `git log --oneline -3` BEFORE talking about versions. Tags are immutable — never reuse. Confirm the next version number with Robson before tagging.

---

## ✅ Estado vigente · Current state

- **Versão / Version:** `v0.2.0` (Fase 1.5 — linguagem visual / visual language).
- **Fase / Phase:** Fases 1 e 1.5 concluídas em conteúdo — só documentação. Nenhum código, token final, componente ou tela; **nenhum valor estético final** decidido. / Phases 1 and 1.5 complete in content — documentation only. No code, final tokens, components or screens; **no final aesthetic value** decided.
- **Idioma / Language:** Bilíngue PT-BR + EN, lado a lado por seção, em toda doc normativa. / Bilingual, side by side per section.

### Documentos entregues · Delivered documents

| Grupo · Group | Arquivos · Files | Status |
|---|---|---|
| Governança · Governance | `STUDIO_UX.md` (v1.1.0: +SSOT §11, +Boundary Check §12, +10 anos §13), `README.md`, `CHANGELOG.md` | ✅ |
| Conceito · Concept | `STUDIO_UX_VISION.md`, `STUDIO_UX_PHILOSOPHY.md`, `STUDIO_UX_PRINCIPLES.md`, `context/STUDIO_UX_AI_CONTEXT.md`, `context/AI_RULES.md`, `context/STUDIO_UX_HANDOFF.md` | ✅ |
| Linguagem visual · Visual language | `STUDIO_UX_VISUAL_DNA.md`, `STUDIO_UX_GRAMMAR.md` (ADR-001), `STUDIO_UX_SURFACES.md`, `STUDIO_UX_VISUAL_RHYTHM.md`, `research/REFERENCE_DNA.md` | ✅ |
| Tokens | `tokens/STUDIO_UX_DESIGN_TOKENS.md`, `COLOR_SYSTEM`, `TYPOGRAPHY`, `SPACING` | ✅ |
| Fundação visual · Visual foundation | `STUDIO_UX_THEMES.md`, `STUDIO_UX_ICONOGRAPHY.md`, `STUDIO_UX_ANIMATIONS.md` | ✅ |
| Estrutura · Structure | `layouts/STUDIO_UX_LAYOUT_SYSTEM.md`, `components/STUDIO_UX_COMPONENT_LIBRARY.md`, `patterns/STUDIO_UX_PATTERNS.md`, `STUDIO_UX_ACCESSIBILITY.md` | ✅ |
| Composição · Composition | `STUDIO_UX_DASHBOARD.md`, `STUDIO_UX_FORMS.md`, `STUDIO_UX_TABLES.md`, `STUDIO_UX_NAVIGATION.md` | ✅ |
| Produtos · Products | `desktop/STUDIO_UX_DESKTOP.md`, `mobile/STUDIO_UX_MOBILE.md` | ✅ |
| Qualidade · Quality | `STUDIO_UX_CERTIFICATION.md` | ✅ |
| Evolução · Evolution | `STUDIO_UX_ROADMAP.md` (fases 1.5/1.6), `research/REFERENCES.md` | ✅ |

---

## 🎯 O que vem agora · What comes next

**PT** — Fases 1 e 1.5 concluídas. A próxima frente é a **Fase 1.6 — UI Exploration**: produzir estudos visuais descritivos em `research/ui-exploration/` (todos derivados do `VISUAL_DNA`, nenhum definitivo) **para validar a linguagem visual com o Robson antes de implementar componentes**. Só depois dessa validação começa a **Fase 2 — materialização dos Design Tokens** (valores concretos). **Uma frente por vez, com validação humana entre frentes.** A pasta `research/ui-exploration/` já foi criada com um guia; os estudos aguardam o "vai".

**EN** — Phases 1 and 1.5 complete. The next front is **Phase 1.6 — UI Exploration**: produce descriptive visual studies in `research/ui-exploration/` (all derived from `VISUAL_DNA`, none definitive) **to validate the visual language with Robson before implementing components**. Only after that validation does **Phase 2 — materializing the Design Tokens** (concrete values) begin. **One front at a time, with human validation between fronts.** The `research/ui-exploration/` folder is scaffolded with a guide; the studies await the go-ahead.

---

## 🧠 Lições e decisões travadas · Locked lessons and decisions

**PT / EN**

- **Bilíngue total é decisão do Robson** ("o sistema todo pode ser bilíngue"). PT-BR + EN lado a lado por seção; identificadores de código sempre em inglês. / Full bilingual is Robson's decision.
- **Dois produtos, não um responsivo.** Desktop e Mobile projetados do zero, separados. / Two products, not one responsive.
- **Referências são estudo, nunca cópia.** Flux, Zenith, shadcn, Linear, GitHub, Stripe, Vercel, Notion, Figma → princípios, não layout/código/identidade. / References are study, never copy.
- **Governança herdada do IA Studio:** SemVer + tags imutáveis, CHANGELOG como fonte da verdade, docs vivos sem lixo, "pensar antes de construir", Definição de Pronto, regra máxima de UX (língua do usuário). / Governance inherited from IA Studio.
- **Fase 1 = arquiteto de produto.** Sem código nesta fase. / Phase 1 = product architect. No code.

---

*Ao concluir qualquer frente, ATUALIZAR este arquivo. · When finishing any front, UPDATE this file.*
