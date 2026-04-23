# tech-decisions.md

## 1. Objetivo deste arquivo

Definir as decisões técnicas base do site da Abravely para garantir:

- consistência de implementação
- boa performance
- sustentabilidade do projeto
- compatibilidade com motion avançado
- escalabilidade de páginas e componentes
- facilidade de execução com agentes no Antigravity

Este arquivo deve guiar decisões de stack, bibliotecas, estrutura de projeto, renderização, conteúdo, animação, performance, acessibilidade, SEO e captura de leads.

---

## 2. Escopo técnico do projeto

### Tipo de projeto
Website institucional premium com forte direção visual e motion avançado.

### Objetivos técnicos principais
- entregar experiência visual de alto nível
- manter excelente percepção de performance
- sustentar animações e scroll premium sem comprometer usabilidade
- garantir boa base para SEO
- permitir evolução futura para novas páginas, cases e landing pages
- facilitar manutenção por agentes e times híbridos

### Restrições principais
- motion não pode destruir performance
- mobile precisa continuar utilizável e elegante
- acessibilidade não pode ser ignorada
- stack não deve ficar complexa sem necessidade real
- evitar dependência de soluções visuais difíceis de manter

---

## 3. Stack principal recomendada

### Framework
**Next.js**

### Linguagem
**TypeScript**

### Estilização
**Tailwind CSS**

### Biblioteca de animação principal
**Framer Motion**

### Biblioteca complementar para motion avançado
**GSAP** apenas se necessário para cenas específicas

### Smooth scroll
**Lenis**, apenas se o comportamento final justificar

### Deploy
**Vercel**

### Formulários
Validação no cliente + validação obrigatória no servidor

### Analytics
GA4 ou solução equivalente + eventos customizados

### CMS
Inicialmente opcional  
Pode começar sem CMS e evoluir depois

---

## 4. Justificativa da stack

## 4.1 Next.js
Escolhido porque oferece:
- excelente base para SEO
- performance sólida
- roteamento maduro
- boa integração com React
- ecossistema compatível com sites premium
- facilidade de deploy
- escalabilidade para páginas futuras

## 4.2 TypeScript
Escolhido para:
- reduzir inconsistências
- melhorar previsibilidade com agentes
- facilitar manutenção
- tornar componentes reutilizáveis mais seguros

## 4.3 Tailwind CSS
Escolhido para:
- acelerar construção de UI
- manter consistência visual
- facilitar iteração com IA
- reduzir dispersão de estilos
- criar componentes reutilizáveis com mais controle

## 4.4 Framer Motion
Escolhido como base porque:
- integra bem com React
- funciona muito bem para motion declarativo
- é suficiente para grande parte do site
- ajuda a manter consistência
- reduz necessidade de soluções mais pesadas

## 4.5 GSAP
Deve ser usado apenas quando houver:
- timelines realmente complexas
- cenas scroll-linked mais sofisticadas
- necessidade clara que o Framer Motion não resolva bem

### Regra
Não usar GSAP como padrão global se o Framer Motion já resolver.

---

## 5. Estratégia de animação

### Decisão principal
A base do site deve usar **uma abordagem simples e consistente**.

### Regra recomendada
- Framer Motion como padrão
- GSAP apenas em blocos especiais
- CSS transitions para estados simples
- evitar mistura caótica de técnicas

### Hierarquia de uso
1. CSS para estados básicos
2. Framer Motion para reveal, hover, entrance e transições de interface
3. GSAP para cenas especiais e storytelling mais complexo

### Objetivo
Manter motion avançado com previsibilidade de implementação.

---

## 6. Smooth scroll

### Decisão
Smooth scroll não é obrigatório desde o início.

### Recomendação
Implementar **somente se**:
- melhorar claramente a sensação premium
- não afetar acessibilidade
- não degradar mobile
- não gerar conflito com animações e navegação

### Biblioteca sugerida
**Lenis**

### Regras
- não usar scroll artificial pesado
- não comprometer precisão do input
- não dificultar navegação por teclado
- desabilitar ou reduzir impacto em contextos problemáticos

---

## 7. Uso de WebGL / 3D

### Decisão inicial
**Não adotar WebGL ou 3D como base do projeto.**

### Regra
Só considerar React Three Fiber ou shaders se existir uma necessidade narrativa clara e justificável.

### Motivos
- aumenta complexidade
- aumenta custo de manutenção
- aumenta risco de queda de performance
- costuma ser desnecessário para alcançar percepção premium

### Prioridade antes de 3D
- tipografia
- composição
- motion 2D refinado
- profundidade visual
- mockups bem dirigidos
- ambientação controlada

---

## 8. Estratégia de renderização

### Recomendação principal
Usar o que for mais simples e performático para cada página.

### Páginas institucionais
Priorizar renderização estática quando possível.

### Páginas com conteúdo mais dinâmico
Usar renderização híbrida conforme necessidade.

### Estratégia inicial recomendada
- Home: estática
- Serviços: estática
- Sobre: estática
- Contato: estática
- Cases: estática ou incremental, se crescer muito

### Objetivo
Maximizar performance, SEO e simplicidade operacional.

---

## 9. Estratégia de conteúdo

### Fase inicial
Conteúdo pode começar **hardcoded**, desde que organizado.

### Regra
Mesmo sem CMS, o conteúdo deve ficar separado da lógica visual.

### Estrutura recomendada
- textos organizados em arquivos dedicados
- objetos por página ou seção
- conteúdo centralizado por domínio
- evitar texto espalhado em muitos componentes

### Evolução futura
Se o site passar a ter:
- muitos cases
- blog / insights
- páginas por segmento
- landing pages frequentes

então faz sentido evoluir para CMS.

### CMS recomendados para futuro
- Sanity
- Contentful
- Payload
- alternativa leve orientada ao time

---

## 10. Organização de projeto

### Estrutura conceitual recomendada
- app
- components
- sections
- content
- lib
- styles
- public
- config

### Separação desejada
- componentes base
- seções de página
- animações reutilizáveis
- conteúdo
- tokens visuais
- helpers
- integrações

### Regra
Evitar misturar:
- copy
- lógica de animação
- markup
- configuração visual
- integrações externas

Tudo deve ser encontrável e previsível.

---

## 11. Estratégia de componentes

### Decisão
Construir componentes com foco em:
- reuso
- previsibilidade
- composição
- clareza para agentes

### Camadas recomendadas
- componentes primitivos
- componentes compostos
- seções de página
- layouts
- wrappers de motion
- elementos de conteúdo

### Regra
Não criar abstração demais cedo demais.

### Regra complementar
Se um componente não será reutilizado ou não ajuda manutenção, não precisa nascer superabstrato.

---

## 12. Estratégia de estilos

### Decisão
Usar Tailwind como base principal.

### Complementos permitidos
- classes utilitárias centralizadas
- variantes para componentes
- tokens de spacing, radius, shadows, colors e typography
- helpers de composição

### Evitar
- estilos espalhados sem padrão
- múltiplos sistemas concorrentes
- CSS gigante sem organização
- exceções demais por seção

### Recomendação
Criar uma camada clara de design tokens, mesmo que simples.

---

## 13. Design tokens recomendados

### Grupos mínimos
- cores
- tipografia
- espaçamento
- radius
- border
- shadow
- z-index
- breakpoints
- durations
- easings

### Objetivo
Permitir consistência visual e motion consistente entre páginas.

### Regra
Tokens devem refletir os documentos:
- brand-core
- motion-system
- visual-references
- ui-patterns

---

## 14. Performance budget

### Regra principal
Performance é requisito de produto, não otimização tardia.

### Objetivos desejáveis
- carregamento rápido da home
- boa resposta interativa
- motion fluido em desktop
- experiência aceitável em mobile
- assets controlados

### Regras
- otimizar imagens
- comprimir vídeos
- lazy load onde fizer sentido
- limitar loops contínuos
- evitar bibliotecas desnecessárias
- limitar quantidade de elementos animados simultaneamente
- evitar blur pesado em grande escala
- priorizar transform e opacity

### Indicadores a observar
- LCP
- CLS
- INP / responsividade
- peso total da página
- FPS percebido nas áreas mais animadas

---

## 15. Estratégia de mídia

### Imagens
Usar formatos modernos quando possível.

### Vídeos
Somente quando agregarem valor real à percepção do site.

### Regras para vídeo
- curtos
- otimizados
- sem autoplay invasivo com áudio
- com fallback visual adequado
- não depender de vídeo para explicar a proposta principal

### Mockups
Priorizar assets proprietários ou composições coerentes com a linguagem do site.

### Evitar
- bancos de imagem genéricos
- mídia muito pesada
- excesso de vídeos em uma mesma página

---

## 16. Responsividade

### Decisão
Mobile é restrição obrigatória desde o início.

### Regras
- não adaptar mobile no final
- revisar hero para telas menores
- reduzir intensidade de motion
- simplificar composições complexas
- garantir CTA visível
- preservar legibilidade e toque

### Regra de implementação
Cada seção deve nascer com comportamento desktop, tablet e mobile pensado desde o início.

---

## 17. Acessibilidade

### Decisão
Acessibilidade deve fazer parte da implementação base.

### Regras mínimas obrigatórias
- contraste adequado
- estrutura semântica correta
- foco visível
- navegação por teclado
- labels e aria quando necessário
- suporte a `prefers-reduced-motion`
- hierarquia de headings consistente
- botões e links claramente identificáveis

### Regra
Motion nunca pode ser condição obrigatória para entender a interface.

---

## 18. SEO técnico

### Objetivo
Garantir indexação sólida e boa leitura semântica do site institucional.

### Regras
- metadata por página
- titles claros
- descriptions consistentes
- headings bem estruturados
- URLs limpas
- Open Graph
- sitemap
- robots configurado corretamente
- imagens com alt adequado
- conteúdo renderizável e legível

### Páginas prioritárias para SEO
- Home
- Serviços
- Sobre
- Cases
- páginas futuras por segmento ou problema

---

## 19. Analytics e eventos

### Objetivo
Medir interesse, navegação e conversão.

### Mínimo recomendado
- page views
- clique em CTA principal
- envio de formulário
- clique em WhatsApp ou e-mail
- navegação para Serviços
- navegação para Cases

### Eventos adicionais úteis
- interação com hero
- profundidade de scroll
- clique em prova social
- clique em cards de serviço
- abandono de formulário

### Regra
Rastrear só o que vai ajudar decisão real.

---

## 20. Formulários e captura de lead

### Decisão
O formulário deve ser simples, seguro e confiável.

### Regras obrigatórias
- validação client-side
- validação server-side
- proteção anti-spam
- tratamento de erro
- feedback de sucesso
- sanitização de dados
- limitação de abuso

### Integrações possíveis
- e-mail transacional
- CRM
- webhook
- planilha ou banco
- automação comercial

### Regra
Nunca confiar apenas em validação no cliente.

---

## 21. Segurança

### Diretriz geral
Mesmo sendo um site institucional, a segurança deve ser tratada como requisito básico.

### Regras
- validação no servidor
- sanitização de input
- proteção contra spam
- gestão segura de secrets
- headers de segurança quando aplicável
- dependências controladas
- evitar exposição indevida de dados
- cuidado com scripts externos

### Atenção especial
- formulários
- integrações com e-mail
- automações
- analytics de terceiros
- embeds externos

### Regra adicional
Não inserir scripts de terceiros sem justificativa clara de negócio.

---

## 22. Estratégia de integrações

### Integrações iniciais possíveis
- formulário para e-mail
- WhatsApp
- analytics
- pixel, se necessário
- calendário ou agendamento, se fizer sentido

### Regra
Começar com o mínimo necessário.

### Evitar no início
- excesso de ferramentas de marketing
- scripts demais
- chat widgets pesados
- plugins que degradam performance

---

## 23. Estratégia de internacionalização

### Decisão inicial
Não implementar i18n real no início, a menos que exista necessidade comercial clara.

### Regra
Se houver chance futura de versão em outro idioma:
- estruturar conteúdo com alguma separação
- evitar hardcode excessivamente acoplado
- manter arquitetura preparada para expansão

---

## 24. Estratégia de testes

### Recomendação mínima
- validar responsividade manualmente
- validar fluxo de formulário
- validar performance das seções críticas
- validar `prefers-reduced-motion`
- validar SEO básico
- validar navegação por teclado
- validar comportamento de motion em browsers principais

### Recomendação complementar
Adicionar testes nas áreas críticas, sem burocratizar demais a fase inicial.

---

## 25. Estratégia de deploy e ambiente

### Deploy recomendado
**Vercel**

### Ambientes mínimos
- desenvolvimento
- produção

### Ambiente opcional
- preview / staging

### Regras
- variáveis de ambiente bem definidas
- segredos fora do código
- pipeline simples e previsível
- preview para validar motion e layout antes de publicar

---

## 26. Estratégia de evolução futura

### O projeto deve nascer preparado para evoluir para:
- novos cases
- páginas por segmento
- páginas por problema
- landing pages
- blog / insights
- CMS
- automações de lead
- versão internacional
- componentes mais ricos de showcase

### Regra
A base deve ser simples no início, mas sem bloquear crescimento.

---

## 27. Decisões explícitas do projeto

### Decisão 1
Usar **Next.js + TypeScript + Tailwind** como base principal.

### Decisão 2
Usar **Framer Motion** como biblioteca padrão de motion.

### Decisão 3
Usar **GSAP apenas em casos especiais**, não como dependência central de toda a UI.

### Decisão 4
Não usar **WebGL/3D como base inicial**.

### Decisão 5
Tratar **performance como restrição obrigatória**.

### Decisão 6
Começar **sem CMS**, com conteúdo organizado e desacoplado.

### Decisão 7
Priorizar **renderização estática** nas páginas institucionais.

### Decisão 8
Adotar **suporte real a `prefers-reduced-motion`**.

### Decisão 9
Implementar **formulário com validação server-side e proteção anti-spam**.

### Decisão 10
Começar com **integrações mínimas** e evitar excesso de scripts de terceiros.

---

## 28. Critérios de aprovação de escolhas técnicas

Uma decisão técnica só deve ser aprovada se:

1. melhorar ou preservar performance
2. facilitar manutenção com agentes
3. não comprometer acessibilidade
4. reforçar consistência de implementação
5. não aumentar complexidade sem ganho real
6. funcionar bem em mobile
7. sustentar o nível de motion desejado
8. manter SEO sólido
9. preservar segurança básica
10. permitir evolução futura

---

## 29. Critérios de rejeição

Uma escolha técnica deve ser rejeitada se:

- existir apenas por hype
- aumentar complexidade sem necessidade
- comprometer performance
- dificultar manutenção
- depender de hacks constantes
- gerar inconsistência entre páginas
- piorar acessibilidade
- tornar o projeto frágil para agentes
- exigir alto custo para efeito pequeno
- comprometer conversão ou SEO

---

## 30. Resumo executivo

O site da Abravely deve ser implementado com uma stack moderna, previsível e orientada à performance. A base recomendada é Next.js, TypeScript, Tailwind e Framer Motion, com uso muito criterioso de GSAP e smooth scroll. O projeto deve começar simples, com páginas institucionais renderizadas de forma eficiente, conteúdo organizado, componentes reutilizáveis e motion controlado. Segurança, acessibilidade, SEO, responsividade e proteção de dados são requisitos obrigatórios desde o início. A arquitetura deve permitir evolução futura sem sacrificar clareza ou manutenção.
