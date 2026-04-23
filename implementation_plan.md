# Atualização Visual: Site Inteiro no Padrão "Sentinel Hero"

Este plano visa padronizar todas as seções do site da Abravely para seguirem o modelo premium, escuro e animado da `sentinel-hero.tsx`. O objetivo é unificar a identidade visual, removendo estilos claros, garantindo que o tema noturno elegante (Sleek Dark / Premium) brilhe em todo lugar.

## User Review Required

> [!WARNING]
> Isso vai **remover qualquer versão clara (Light Mode)** dessas seções e transformar o site em uma experiência consistentemente *Dark/Premium* (Fundo escuro, brilhos dinâmicos em neon/primário, contrastes elegantes). Isso está alinhado com a sua visão de deixar tudo igual à Hero?

## Proposed Changes

Vamos aplicar o padrão `bg-[var(--color-hero-bg)]`, usar os `animate-sweep` e os glows da Hero, além de garantir que a tipografia utilize `text-foreground` e `text-foreground/80` uniformemente, alterando os seguintes arquivos:

### Sections

#### [MODIFY] `core-feature-section.tsx`
- Trocar `bg-[var(--background)]` por `bg-[var(--color-hero-bg)]`.
- Atualizar a luz verde varrendo o fundo para o formato do Hero (`bg-primary/20 blur-[120px] animate-sweep`).

#### [MODIFY] `pricing-section.tsx`
- Trocar `bg-[var(--background)]` por `bg-[var(--color-hero-bg)]`.
- Atualizar os glows radiais estáticos para os glows animados suaves (`animate-sweep`).
- Garantir contraste adequado nos cards de preço.

#### [MODIFY] `differentials-section.tsx`
- Trocar `bg-[var(--background)]` por `bg-[var(--color-hero-bg)]`.
- Deixar a cor de fundo pontilhada coerente com a Hero Section (com um brilho de fundo suave).

#### [MODIFY] `proof-section.tsx`
- Trocar `bg-background` por `bg-[var(--color-hero-bg)]`.
- Remover verificações isoladas de `isLight` ou definir um padrão dark único (mantendo o SVG e animações com o `glow` premium adaptado).

#### [MODIFY] `problem-section.tsx`, `suggestion-section.tsx`, `cta-section.tsx`, `showcase-section.tsx`, `capabilities-section.tsx`
- Padronizar fundo `bg-[var(--color-hero-bg)]`.
- Padronizar overlays escuros e glows no padrão Hero.
- Atualizar gradientes lineares.

## Verification Plan

### Manual Verification
- Ao rodar o `npm run dev`, farei scroll por todo o site e garantirei que o visual não quebra de uma seção para outra, mantendo o fundo invisivelmente contínuo e com os *sweeps* dinâmicos funcionando e não causando overflow indesejado no mobile/desktop.
