# ui-patterns.md

## 1. Objetivo deste arquivo

Definir os padrões de interface do site da Abravely para garantir consistência visual, clareza estrutural e sustentabilidade de implementação.

Este arquivo deve orientar:

- composição de seções
- comportamento de componentes
- hierarquia visual
- repetição de padrões
- uso de espaço
- relação entre conteúdo, interface e motion

O objetivo não é criar um design system completo.  
O objetivo é criar uma base clara para que agentes e times construam o site sem gerar blocos incoerentes entre si.

---

## 2. Princípios gerais de UI

### A interface da Abravely deve transmitir
- sofisticação
- clareza
- precisão
- atualidade
- profundidade
- consistência
- controle
- tecnologia aplicada ao negócio

### A interface não deve transmitir
- improviso
- excesso visual
- template genérico
- estética de dashboard comum
- experimentalismo gratuito
- poluição
- exagero decorativo
- inconsistência entre páginas

### Regra central
Toda interface deve parecer parte de um mesmo sistema visual, mesmo quando houver seções mais expressivas.

---

## 3. Linguagem estrutural da interface

### Características principais
- grids organizados
- respiro generoso
- contraste alto
- blocos com presença
- hierarquia nítida
- poucos elementos competindo ao mesmo tempo
- densidade controlada
- componentes com acabamento premium

### Sensação desejada
A UI deve parecer calculada, não espontânea.  
Nada deve parecer “jogado” na tela.

---

## 4. Padrão global de layout

## 4.1 Estrutura geral
O site deve trabalhar com seções amplas, alinhamento consistente e variação de ritmo entre blocos.

### Regras
- usar largura de conteúdo controlada
- combinar blocos mais contidos com momentos de expansão visual
- manter alinhamentos previsíveis
- evitar desalinhamentos decorativos sem função
- usar espaço vertical como ferramenta de sofisticação

## 4.2 Ritmo entre seções
O site deve alternar:

- blocos de mensagem forte
- blocos de explicação
- blocos de prova visual
- blocos de conversão

### Regra
Não repetir o mesmo padrão de seção muitas vezes em sequência.

---

## 5. Padrão de container

### Direção
Os containers devem criar ordem e permitir leitura confortável em telas grandes.

### Regras
- conteúdo principal centralizado
- largura máxima consistente
- conteúdo textual mais estreito que conteúdo de showcase
- blocos muito largos só quando houver motivo visual forte
- padding horizontal cuidadoso em tablet e mobile

### Evitar
- texto ocupando largura excessiva
- conteúdo encostado demais nas bordas
- variações arbitrárias de largura entre seções semelhantes

---

## 6. Padrão de grid

### Grid base recomendada
Usar uma estrutura modular que facilite:

- texto + visual
- blocos em 2 colunas
- cards em 3 colunas
- listas em 4 itens, quando necessário
- adaptações elegantes para tablet e mobile

### Regras
- grids devem priorizar clareza
- grids não devem parecer dashboard administrativo
- usar simetria como base e quebra controlada como exceção
- layouts assimétricos só quando reforçarem narrativa

### Evitar
- mosaicos excessivos
- excesso de cards pequenos
- blocos demais por viewport
- grids densos sem respiro

---

## 7. Padrão de seção

## 7.1 Estrutura base de seção
Quase toda seção deve ter esta lógica:

1. identificação da seção
2. headline
3. suporte textual curto
4. bloco principal de conteúdo
5. CTA ou continuação narrativa

### Elementos possíveis
- eyebrow
- heading
- subheading
- corpo curto
- grid, lista, mockup ou visual principal
- CTA opcional

## 7.2 Regras
- cada seção precisa de objetivo claro
- a headline deve dizer algo relevante, não apenas decorar
- textos devem ser curtos e escaneáveis
- o visual deve reforçar a mensagem da seção
- o CTA só entra quando houver maturidade de contexto

---

## 8. Padrão de hero

## 8.1 Objetivo
Criar impacto imediato, apresentar a proposta da Abravely e estabelecer o tom premium do site.

## 8.2 Estrutura ideal
- eyebrow opcional
- headline principal
- subheadline curta
- CTA principal
- CTA secundário opcional
- visual central ou composição de interface
- ambientação de fundo controlada

## 8.3 Regras
- a headline deve ser clara em poucos segundos
- subheadline deve complementar, não repetir
- CTA principal precisa aparecer cedo
- o visual do hero deve parecer sofisticado e tecnológico
- o hero não pode depender de animação para ser compreendido

## 8.4 O que evitar
- headline vaga
- subheadline longa demais
- muitos elementos acima da dobra
- hero parecendo peça publicitária genérica
- excesso de badges, chips e métricas falsas
- visual abstrato sem conexão com a proposta

---

## 9. Padrão de headline e texto

## 9.1 Headline
A headline precisa ser curta, forte e orientada à proposta de valor.

### Deve parecer
- confiante
- inteligente
- clara
- contemporânea

### Não deve parecer
- marketeira demais
- inflada
- genérica
- excessivamente técnica

## 9.2 Subheadline
Deve explicar melhor a proposta sem perder ritmo.

### Regra
No site da Abravely, subtítulos devem ser objetivos e sem excesso de frases longas.

## 9.3 Corpo de texto
- usar blocos curtos
- evitar parágrafos longos
- privilegiar escaneabilidade
- limitar densidade por seção

---

## 10. Padrão de eyebrow / label de seção

### Função
Sinalizar contexto e organizar a narrativa.

### Características
- discreto
- elegante
- pequeno
- visualmente consistente
- sem excesso de ornamento

### Uso
- nome da seção
- categoria de conteúdo
- pequeno marcador institucional

### Evitar
- usar eyebrow em todos os blocos sem necessidade
- transformar eyebrow em elemento chamativo demais

---

## 11. Padrão de CTA

## 11.1 CTA primário
Deve comunicar decisão e confiança.

### Características
- contraste forte
- leitura imediata
- presença visual
- microinteração refinada
- posição estratégica

## 11.2 CTA secundário
Deve oferecer aprofundamento sem competir com o principal.

### Características
- menor peso visual
- aparência complementar
- boa legibilidade

## 11.3 Regras
- evitar muitos CTAs primários na mesma seção
- CTA deve refletir estágio da jornada
- toda página deve ter CTA final claro
- CTAs não devem parecer componentes genéricos de dashboard

---

## 12. Padrão de cards

## 12.1 Função
Organizar conteúdo em blocos claros e premium.

## 12.2 Características desejadas
- boa separação interna
- acabamento visual refinado
- contraste equilibrado
- bordas ou superfícies controladas
- profundidade sutil
- boa legibilidade

## 12.3 Variações principais

### Card de serviço
Deve conter:
- título
- descrição curta
- possível ícone
- benefício ou contexto

### Card de diferencial
Deve conter:
- afirmação principal
- explicação curta
- possível detalhe visual de apoio

### Card de case
Deve conter:
- contexto
- tipo de solução
- resultado ou ganho
- link para aprofundamento

### Card de capability / feature
Deve conter:
- nome da capacidade
- explicação curta
- relação com resultado de negócio

## 12.4 Regras
- cards devem parecer parte do mesmo sistema
- usar poucas variações visuais principais
- card não deve virar depósito de informação
- grids de card precisam respirar

## 12.5 Evitar
- cards muito parecidos com SaaS genérico
- excesso de glassmorphism
- muitos estilos de card coexistindo
- muitos ícones decorativos sem função

---

## 13. Padrão de blocos de serviço

### Estrutura recomendada
- nome do serviço
- descrição clara
- problema que resolve
- contexto de aplicação
- benefício principal

### Formatos possíveis
- grid de cards
- lista em colunas
- blocos alternados com visual
- showcase com preview de interface

### Regra
A apresentação de serviços deve parecer consultiva e premium, não catálogo genérico.

---

## 14. Padrão de blocos de problema → solução

### Objetivo
Conectar a dor do cliente com a proposta da Abravely.

### Estrutura
- problema claro
- impacto operacional
- abordagem da Abravely
- resultado esperado

### Regras
- linguagem simples
- sem dramatização exagerada
- focar em contexto empresarial real
- evitar abstração excessiva

---

## 15. Padrão de showcase visual

## 15.1 Objetivo
Materializar percepção de qualidade e capacidade.

## 15.2 Formatos recomendados
- mockup central com camadas
- tela em destaque com elementos orbitando
- composição de múltiplos painéis
- interface + legenda de capacidade
- fluxo visual entre módulos

## 15.3 Regras
- showcase deve parecer software premium
- sempre priorizar leitura da composição
- não usar mockups fake sem coerência
- o visual deve ajudar a vender competência técnica

## 15.4 Evitar
- carrosséis excessivos
- sobrecarga de telas pequenas
- mockups puramente decorativos
- excesso de brilho e efeitos

---

## 16. Padrão de prova social

## 16.1 Formatos possíveis
- logos
- depoimentos curtos
- mini-cases
- resultados resumidos
- setores atendidos
- tipos de projeto realizados

## 16.2 Regras
- nunca inventar prova
- evitar números sem contexto
- usar linguagem sóbria
- a prova social deve aumentar confiança, não parecer autopromoção vazia

## 16.3 Caso ainda não existam provas maduras
Usar:
- cenários de solução
- exemplos de aplicação
- tipos de operação atendida
- diferenciais de abordagem

---

## 17. Padrão de estatísticas e números

### Uso
Somente quando houver dado real ou métrica institucional confiável.

### Características
- números grandes
- contexto claro
- explicação curta
- visual limpo

### Evitar
- métricas decorativas
- números inflados
- seções de KPI fake
- excesso de contadores animados

---

## 18. Padrão de ícones e elementos gráficos

### Direção
Ícones e elementos gráficos devem parecer técnicos, limpos e discretos.

### Regras
- usar ícones consistentes entre si
- evitar estilos misturados
- usar linhas ou superfícies com controle
- ícone deve apoiar a leitura, não virar enfeite principal

### Elementos gráficos possíveis
- linhas finas
- grids discretos
- marcadores
- divisores premium
- halos suaves
- conectores visuais sutis

### Evitar
- ícones ilustrativos infantis
- excesso de ícones por bloco
- ornamentos sem função

---

## 19. Padrão de navegação

## 19.1 Header
### Deve ser
- limpo
- premium
- leve
- fixo ou semificxo com comportamento elegante
- fácil de ler em qualquer fundo

### Deve conter
- logo
- links principais
- CTA principal

### Evitar
- header muito alto
- itens demais
- navegação complexa cedo demais

## 19.2 Menu mobile
### Deve ser
- rápido
- claro
- elegante
- simples de operar

### Pode usar
- overlay escuro refinado
- stagger sutil
- CTA destacado

### Evitar
- menu “espetáculo”
- excesso de níveis
- navegação lenta

---

## 20. Padrão de footer

### Objetivo
Fechar o site com consistência institucional e navegação complementar.

### Estrutura sugerida
- resumo curto da Abravely
- links principais
- contato
- redes sociais relevantes
- copyright / informação institucional

### Regras
- footer deve parecer extensão do sistema visual
- não usar visual abandonado ou genérico
- manter clareza e boa densidade

---

## 21. Padrão de formulário

### Objetivo
Converter com clareza e confiança.

### Características
- visual limpo
- campos bem espaçados
- labels claras
- estados de foco elegantes
- validação objetiva

### Regras
- reduzir atrito
- não exagerar em campos
- manter seriedade visual
- estados de erro e sucesso devem ser discretos e claros

### Evitar
- formulários densos demais
- placeholders substituindo labels
- excesso de animações
- UI chamativa demais em contexto de conversão

---

## 22. Padrão de seções alternadas

### Quando usar
Em páginas longas, para manter ritmo e interesse visual.

### Formatos recomendados
- texto à esquerda, visual à direita
- visual à esquerda, texto à direita
- bloco centralizado
- grid de cards
- showcase expandido

### Regra
Alternância deve parecer planejada, não aleatória.

---

## 23. Padrão de densidade visual

### Regra principal
Nem toda seção precisa impressionar.  
Algumas devem apenas organizar e sustentar o ritmo.

### Alternância ideal
- seção de alto impacto
- seção de clareza
- seção de prova
- seção de respiro
- seção de conversão

### Evitar
- todas as seções muito densas
- todas as seções muito minimalistas
- repetir o mesmo padrão dez vezes

---

## 24. Padrão de superfícies

### Superfícies possíveis
- fundo sólido escuro
- painel com leve transparência
- cartão com contraste moderado
- bloco com borda sutil
- camada com glow controlado

### Regra
Superfícies devem ajudar separação e profundidade.

### Evitar
- contraste insuficiente
- excesso de blur
- superfícies demais competindo
- mistura confusa de estilos

---

## 25. Padrão de bordas, raio e profundidade

### Direção
A UI deve ter acabamento contemporâneo e premium.

### Regras
- cantos suavemente arredondados
- sombras muito controladas
- bordas sutis
- profundidade mais sugerida do que explícita
- brilho e glow usados com moderação

### Evitar
- sombras pesadas
- bordas muito grossas
- cantos inconsistentes
- aparência de template genérico

---

## 26. Padrão de contraste e legibilidade

### Regras
- contraste alto entre texto e fundo
- não sacrificar leitura por estética
- títulos precisam aparecer de forma imediata
- textos menores precisam manter excelente leitura
- interfaces e mockups devem continuar legíveis mesmo estilizados

### Evitar
- texto cinza demais
- glow comprometendo leitura
- excesso de transparência
- visual escuro com contraste ruim

---

## 27. Padrão de imagem, mockup e mídia

### Direção
O conteúdo visual deve parecer parte da narrativa da marca.

### Prioridades
- mockups de interface
- composições de sistema
- visualizações de fluxo
- elementos gráficos tecnológicos
- mídia institucional apenas quando realmente útil

### Regras
- evitar banco de imagem genérico
- priorizar visual proprietário
- toda mídia deve parecer consistente com a paleta e a linguagem do site

---

## 28. Padrão de hierarquia visual

### Toda seção deve deixar claro
1. o que é principal
2. o que explica
3. o que comprova
4. o que convida à ação

### Ferramentas de hierarquia
- tamanho
- peso tipográfico
- contraste
- espaço
- posição
- ritmo de layout
- motion controlado

### Evitar
- dois focos principais competindo
- excesso de destaque simultâneo
- blocos sem hierarquia clara

---

## 29. Padrão de consistência entre páginas

### Deve permanecer consistente
- header
- footer
- largura de container
- linguagem de CTA
- comportamento de cards
- estilo de headings
- relação entre texto e visual
- acabamento de superfícies
- profundidade visual

### Pode variar
- intensidade do hero
- composição de showcase
- nível de storytelling
- tratamento especial de cases

---

## 30. Regras de escalabilidade

### Toda nova seção ou componente deve responder
1. isso parece Abravely?
2. isso conversa com os padrões existentes?
3. isso melhora clareza ou só adiciona estilo?
4. isso se sustenta em outras páginas?
5. isso pode ser implementado com boa performance?
6. isso mantém conversão clara?

### Um padrão deve ser rejeitado se
- parecer isolado do restante do site
- depender de efeitos excessivos
- complicar manutenção
- enfraquecer percepção premium
- prejudicar leitura ou uso

---

## 31. Sistema inicial de componentes recomendados

### Componentes-base
- Header
- Footer
- Hero
- Section heading
- CTA block
- Service card
- Case card
- Differential card
- Mockup showcase
- Logo strip
- Stats block
- Contact form
- Testimonial block
- Problem-solution block
- Split section
- Grid section

### Regra
Esses componentes devem cobrir a maior parte das páginas sem exigir reinvenção constante.

---

## 32. Resumo executivo

A interface da Abravely deve combinar clareza estrutural, sofisticação visual e linguagem de software premium. O site precisa funcionar como um sistema visual coerente, no qual hero, seções, cards, CTAs, mockups e formulários compartilham a mesma lógica de composição, profundidade e acabamento. O objetivo é permitir que agentes construam páginas modernas, expressivas e orientadas a conversão sem cair em inconsistência, excesso visual ou estética genérica.
