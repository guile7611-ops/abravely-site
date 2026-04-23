# motion-system.md

## 1. Objetivo deste arquivo

Definir as regras de motion do site da Abravely para garantir consistência visual, percepção premium, boa performance e clareza narrativa.

Este arquivo deve orientar todas as animações, transições, microinterações e comportamentos de scroll do projeto.

O motion da Abravely não existe para “enfeitar”.  
Ele existe para:

- reforçar sofisticação
- criar ritmo
- melhorar percepção de qualidade
- conduzir leitura
- organizar atenção
- fortalecer a identidade da marca

---

## 2. Princípio central

### Regra principal
Toda animação deve servir pelo menos uma destas funções:

- orientar
- revelar
- conectar
- enfatizar
- dar feedback
- reforçar percepção premium

Se uma animação não melhora nenhuma dessas funções, ela deve ser removida.

---

## 3. Filosofia de motion da marca

### Como o motion da Abravely deve ser percebido
- elegante
- fluido
- preciso
- contemporâneo
- tecnológico
- controlado
- cinematográfico na medida certa
- responsivo ao contexto
- refinado

### Como o motion da Abravely não deve ser percebido
- caótico
- excessivo
- barulhento
- ornamental demais
- gamer
- experimental sem propósito
- agressivo
- pesado
- cansativo
- lento por vaidade visual

### Direção conceitual
O motion do site deve lembrar uma tecnologia viva, mas estável.  
A sensação deve ser de sistema sofisticado em movimento, não de playground visual.

---

## 4. Papel do motion por camada de experiência

### Motion de marca
Usado para criar assinatura visual e percepção premium.

**Exemplos:**
- entrada do hero
- transições entre blocos principais
- animações de títulos e linhas de destaque
- composição de camadas visuais
- comportamento de elementos de background

### Motion de narrativa
Usado para conduzir leitura e progressão da página.

**Exemplos:**
- revelação de seções no scroll
- entrada progressiva de conteúdo
- mudança de estado entre blocos
- destaque de argumentos e diferenciais

### Motion funcional
Usado para feedback e usabilidade.

**Exemplos:**
- hover de botões
- foco de inputs
- transição de menu
- abertura de accordion
- mudança de tabs
- loading states

### Motion de ambientação
Usado com moderação para manter sensação de profundidade e sofisticação.

**Exemplos:**
- partículas discretas
- glow suave
- parallax leve
- gradientes animados lentos
- camadas com movimento contínuo sutil

---

## 5. Intensidade geral do motion

### Nível desejado
Alto impacto visual com controle rigoroso.

### Regra prática
- o site pode parecer rico em movimento
- mas o usuário nunca deve sentir esforço para navegar
- o conteúdo sempre tem prioridade sobre o efeito

### Escala de intensidade
- **Hero:** alta
- **Transições de seção:** média
- **Cards e grids:** baixa a média
- **Textos longos:** baixa
- **CTAs:** baixa e precisa
- **Menu e navegação:** baixa
- **Formulários:** mínima
- **Footer:** mínima

---

## 6. Ritmo e timing

### Sensação de tempo
A Abravely deve transmitir rapidez com refinamento.  
As animações não devem parecer nem apressadas nem arrastadas.

### Faixas recomendadas

#### Microinterações
- 120ms a 220ms

#### Hover states
- 160ms a 240ms

#### Entradas simples
- 300ms a 500ms

#### Entradas de blocos com mais presença
- 500ms a 900ms

#### Sequências narrativas
- 900ms a 1600ms

#### Loops ambientais
- lentos, discretos e sem chamar mais atenção que o conteúdo

### Regra de ritmo
Quanto mais importante for a leitura do conteúdo, mais discreta deve ser a animação.

---

## 7. Curvas de easing

### Curvas desejadas
- suaves
- orgânicas
- premium
- com desaceleração controlada
- sem sensação mecânica exagerada

### Perfil de easing
Preferir curvas que transmitam:
- leveza
- precisão
- continuidade
- estabilidade

### Evitar
- bounce exagerado
- elastic excessivo
- overshoot chamativo
- easing caricatural
- movimentos que pareçam brinquedo ou app casual

---

## 8. Tipos de animação permitidos

### Permitidos e recomendados

#### Fade
Uso para:
- entrada de textos
- revelação de cards
- transição de overlays
- mudanças sutis de estado

#### Translate leve
Uso para:
- revelar elementos no scroll
- destacar hierarquia
- suavizar entrada de blocos

#### Scale sutil
Uso para:
- hover em cards
- destaque de mídia
- ênfase controlada em elementos-chave

#### Blur-in ou sharpen reveal
Uso para:
- hero
- títulos principais
- transições de apresentação premium

#### Mask reveal
Uso para:
- títulos grandes
- imagens destaque
- blocos com narrativa cinematográfica

#### Stagger
Uso para:
- listas
- grids
- palavras ou linhas de destaque
- sequências de argumentos

#### Parallax leve
Uso para:
- camadas de background
- mídia decorativa
- reforço de profundidade

#### Opacity + transform combinado
Uso padrão para a maior parte das entradas.

#### Scroll-linked progress
Uso para:
- storytelling do hero
- progressão de seções específicas
- destaques narrativos

---

## 9. Tipos de animação proibidos ou restritos

### Proibidos
- bounce decorativo
- zoom agressivo
- rotação gratuita
- glitch excessivo
- flicker forte
- partículas intensas
- distorções que prejudiquem leitura
- transições com cara de template promocional
- efeitos chamativos em todos os elementos interativos
- scroll hijacking que retire controle do usuário

### Restritos
- texto animado letra por letra em blocos longos
- blur excessivo
- parallax pesado
- sticky sections longas demais
- transições full-screen em excesso
- efeitos 3D sem justificativa clara
- WebGL decorativo pesado
- animações simultâneas demais no viewport

---

## 10. Comportamento de scroll

### Direção geral
O scroll deve ser suave, preciso e premium, mas nunca artificial a ponto de comprometer usabilidade.

### Regras
- o usuário deve sentir continuidade
- as seções devem entrar com progressão clara
- o motion deve responder ao scroll sem parecer travado
- a página deve manter leitura confortável em trackpad, mouse e touch

### Permitido
- reveal no scroll
- progress indicators discretos
- sticky sections curtas e estratégicas
- transições orientadas à narrativa
- parallax leve em camadas secundárias

### Evitar
- travar conteúdo por tempo demais
- obrigar o usuário a “assistir” a animação
- prender o scroll em quase todas as seções
- criar dependência total de animação para entendimento da página

---

## 11. Motion por tipo de elemento

## 11.1 Hero

### Objetivo
Criar impacto inicial e apresentar a Abravely como uma marca premium de tecnologia.

### Regras
- entrada marcante, mas clara
- headline deve ter prioridade total
- visual pode ter composição em camadas
- ambiente pode ter movimento contínuo sutil
- CTA deve aparecer com confiança e boa legibilidade

### Permitido
- reveal de headline
- entrada sequencial de texto
- background com parallax leve
- elementos com blur sharpen
- máscaras suaves
- visual central com sensação de profundidade

### Evitar
- excesso de elementos disputando atenção
- animação longa demais antes de exibir a mensagem
- loops chamativos atrás do texto

---

## 11.2 Seções de conteúdo

### Objetivo
Conduzir leitura e organizar narrativa.

### Regras
- entradas simples e consistentes
- animações devem destacar hierarquia
- cada seção deve ter um padrão previsível
- texto deve permanecer legível do início ao fim

### Padrão sugerido
- título entra primeiro
- subtítulo entra em seguida
- cards ou mídia entram por stagger
- CTA entra por último

---

## 11.3 Cards

### Objetivo
Transmitir refinamento, interatividade e qualidade.

### Regras
- hover discreto
- profundidade sutil
- sem parecer componente de dashboard comum
- manter boa performance em grids

### Permitido
- leve translateY
- leve scale
- sombra ou glow controlado
- transição de border/background
- destaque interno de ícone ou linha

### Evitar
- tilt exagerado
- rotação no hover
- múltiplos efeitos simultâneos pesados

---

## 11.4 Botões e CTAs

### Objetivo
Dar sensação de precisão e confiança.

### Regras
- resposta rápida
- sem efeito espalhafatoso
- contraste claro
- estados previsíveis

### Permitido
- mudança suave de cor
- brilho interno sutil
- leve elevação
- micro deslocamento
- animação discreta de ícone

### Evitar
- pulos
- glow excessivo
- ripple agressivo
- animações longas para clique ou hover

---

## 11.5 Menu e navegação

### Objetivo
Ser funcional, elegante e silencioso.

### Regras
- navegação não deve competir com o hero
- transições devem ser rápidas
- menu mobile deve parecer premium, não genérico

### Permitido
- slide/fade controlado
- overlay elegante
- stagger discreto de links
- mudança de estado no header conforme scroll

### Evitar
- menus teatrais demais
- delays excessivos para abrir/fechar
- navegação que dificulte acesso rápido às páginas

---

## 11.6 Formulários

### Objetivo
Clareza, confiança e conversão.

### Regras
- motion mínimo
- foco em legibilidade
- feedback funcional e instantâneo

### Permitido
- highlight de foco
- feedback de erro/sucesso
- transição simples entre estados

### Evitar
- animação decorativa dentro dos campos
- excesso de microefeitos
- qualquer coisa que pareça diminuir seriedade

---

## 12. Motion em texto

### Função
Dar peso e ritmo à comunicação principal.

### Permitido
- reveal por linha
- mask reveal em headlines
- fade-up sutil
- stagger de palavras em títulos curtos
- gradient shift muito discreto em palavras-chave, se fizer sentido

### Evitar
- texto longo animado palavra por palavra
- typing effect em mensagens principais
- efeitos que atrasem leitura
- distorções ou variações de opacidade que prejudiquem contraste

### Regra
Texto é conteúdo, não palco de performance.

---

## 13. Motion em imagem, mockup e mídia

### Função
Tornar a solução tangível e aumentar percepção de qualidade.

### Permitido
- entrada com scale sutil
- reveal com mask
- parallax leve
- transição de camadas
- hover premium em mockups
- movimento ambiental lento em showcase

### Evitar
- carrosséis excessivamente animados
- zoom constante
- mockups girando sem necessidade
- 3D pesado sem papel narrativo claro

---

## 14. Ambientação visual em movimento

### Elementos possíveis
- glow suave
- partículas muito discretas
- gradientes lentos
- grids tecnológicos suaves
- linhas em movimento controlado
- camadas desfocadas com deslocamento mínimo
- halos e reflexos discretos

### Regra principal
A ambientação deve ser percebida mais como atmosfera do que como elemento principal.

### Limite
Nunca competir com headline, CTA ou leitura principal.

---

## 15. Consistência entre páginas

### Regra geral
Todas as páginas devem parecer parte do mesmo sistema de motion.

### Deve haver consistência em:
- velocidade geral
- tipo de easing
- padrão de reveal
- comportamento de hover
- profundidade visual
- resposta ao scroll
- forma de entrada de headings
- estilo de transição entre estados

### Pode variar em:
- intensidade do hero
- presença de showcase
- tratamento de seção premium ou case
- densidade visual conforme objetivo da página

---

## 16. Performance como regra de motion

### Princípio
Nenhuma animação justifica degradação significativa da experiência.

### Regras
- priorizar transform e opacity
- evitar layout thrashing
- reduzir uso de blur pesado em larga escala
- limitar quantidade de elementos animados simultaneamente
- usar lazy loading em assets visuais pesados
- controlar loops contínuos
- validar mobile com atenção especial

### Objetivos
- sensação fluida em desktop
- boa usabilidade em notebooks comuns
- experiência aceitável e premium em mobile
- evitar quedas bruscas de FPS

---

## 17. Mobile motion

### Direção
No mobile, o motion deve ser mais contido.

### Regras
- menos camadas simultâneas
- menos parallax
- menos blur pesado
- menos sequências longas
- revelar conteúdo com rapidez
- preservar responsividade do toque

### Prioridade
No mobile, clareza e desempenho valem mais do que espetáculo.

---

## 18. Acessibilidade

### Regra obrigatória
Implementar suporte real para `prefers-reduced-motion`.

### Quando `prefers-reduced-motion` estiver ativo
- remover parallax
- remover loops decorativos
- simplificar transições
- eliminar sequências narrativas longas
- manter apenas feedbacks funcionais essenciais
- reduzir duração e intensidade de animações

### Objetivo
Garantir que o site continue sofisticado e utilizável sem depender de movimento.

---

## 19. Critérios de aprovação de uma animação

Uma animação só deve entrar no projeto se atender à maioria destes critérios:

1. melhora a percepção premium
2. reforça a narrativa
3. mantém legibilidade
4. não prejudica conversão
5. funciona bem em mobile
6. mantém boa performance
7. é consistente com o restante do site
8. não parece genérica nem exagerada

---

## 20. Critérios de rejeição

Uma animação deve ser removida se:

- existir apenas para parecer moderna
- dificultar leitura
- atrasar navegação
- gerar queda perceptível de performance
- parecer template
- destoar do restante do sistema
- chamar mais atenção que a mensagem principal
- depender demais de poder gráfico
- ficar ruim em mobile
- ficar ruim com redução de motion

---

## 21. Estratégia técnica recomendada

### Biblioteca principal
Usar uma base consistente para motion de interface e scroll, evitando mistura desnecessária de abordagens.

### Direção sugerida
- biblioteca principal para motion declarativo de interface
- biblioteca complementar apenas para cenas realmente complexas
- smooth scroll com muito critério
- evitar empilhar bibliotecas com responsabilidades sobrepostas

### Regra
Quanto mais simples e previsível a implementação, maior a sustentabilidade do projeto.

---

## 22. Resumo executivo

O motion do site da Abravely deve transmitir sofisticação, precisão e atualidade, sempre com controle. A experiência deve ser rica, mas nunca excessiva. O hero pode ter alto impacto visual, enquanto o restante do site deve sustentar uma linguagem fluida, consistente e funcional. Scroll, reveal, profundidade e microinterações devem trabalhar juntos para criar uma experiência premium, clara e memorável. Performance, mobile e acessibilidade são restrições obrigatórias, não ajustes posteriores.
