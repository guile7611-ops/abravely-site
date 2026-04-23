# Unify Site to Premium Hero Aesthetic

O objetivo desta refatoração é trazer o padrão visual premium, escuro e "glassmórfico" da `SentinelHero` para todas as outras seções do site, criando uma experiência coesa e imersiva.

## User Review Required

> [!IMPORTANT]
> - O fundo geral do site passará a ser predominantemente **escuro profundo** (quase preto), eliminando variações de "surface" mais claras que quebram a imersão.
> - As referências antigas à cor `--accent-brand` (que estavam quebrando/ausentes no CSS atual) serão substituídas pelo verde neon oficial da marca (`var(--primary)`).
> - Animações de luz verde (glow) serão distribuídas estrategicamente pelo site.

## Proposed Changes

### `globals.css`
- Unificar `--background` com `--hero-bg` (fundo extremamente escuro, `0 0% 8%`).
- Remover ou adaptar `--surface-2` e garantir que o CSS reflita o design premium em todo o `body`.
- Adicionar ou mapear variáveis que possam estar faltando nas outras seções (ex: suporte para os gradientes e glows).

---

### Components Refactoring

#### [MODIFY] `proof-section.tsx`
- Alterar fundo para `bg-background` (escuro).
- Substituir referências de `var(--accent-brand)` por Tailwind classes (`text-primary`, `bg-primary`, ou `var(--primary)`).
- Adicionar o brilho verde (glow) condizente com a nova paleta.

#### [MODIFY] `pricing-section.tsx`
- Aplicar o fundo profundo.
- Substituir `var(--accent-brand)` para `var(--primary)` no título, tags, e botões.
- Usar a nova `animate-sweep` como um glow de fundo sutil por trás dos cards de preço.

#### [MODIFY] `core-feature-section.tsx`
- Remover gambiarras inline como `var(--accent-brand-pulse)` e usar o sistema de cores atual (verde primário).
- Remover máscaras pesadas em inline CSS que não encaixam com o design glassmórfico suave.
- Unificar todos os "glows" para usar o estilo da Hero Section (`bg-primary/20 blur-[120px]`).

#### [MODIFY] `suggestion-section.tsx` e `cta-section.tsx`
- Ajustar backgrounds para a mesma paleta dark premium.
- Inserir a `animate-sweep` no background do CTA para criar impacto no fechamento da página.
- Consertar estilos de botões usando a mesma sombra e cor neon do resto do site.

#### [MODIFY] `footer.tsx`
- Escurecer o rodapé e simplificar linhas delimitadoras (borders) para usar `border-white/10`.

## Verification Plan

### Manual Verification
1. Fazer o scroll pela página inteira do topo ao rodapé para verificar se não há quebras abruptas de cor de fundo (seções com blocos mais claros).
2. Confirmar que o verde primário está sendo renderizado corretamente em textos e botões.
3. Checar a performance do site com os múltiplos glows para garantir que `animate-sweep` não esteja pesando no render.
