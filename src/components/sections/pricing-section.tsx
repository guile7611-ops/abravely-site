"use client";

import { motion, Variants } from "framer-motion";
import { Check, Star, MessageCircle, Monitor, Settings2, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { waLink } from "@/lib/whatsapp";
import { SectionTitle } from "@/components/ui/section-title";
const plans = [
  {
    id: "frontend",
    icon: Monitor,
    tag: "Frontend & Design",
    name: "Sites de Alta Conversão",
    description:
      "Criamos experiências digitais que impressionam e convertem. Design foda, código limpo e foco total em resultado.",
    features: [
      "Landing pages e sites institucionais",
      "Design UI/UX premium e responsivo",
      "Animações e micro-interações",
      "Otimização de performance (Core Web Vitals)",
      "SEO técnico integrado",
      "Entrega em até 15 dias",
    ],
    buttonText: "Consultar Valor",
    buttonMessage: "Olá! Gostaria de uma consulta sobre Sites de Alta Conversão da Abravely.",
    popular: false,
  },
  {
    id: "sistemas",
    icon: Settings2,
    tag: "Sistemas & Plataformas",
    name: "CRM, SaaS & Sistemas",
    description:
      "Desenvolvemos sistemas sob medida: CRM, SaaS, painéis administrativos e tudo que sua operação precisa para escalar.",
    features: [
      "Sistemas web customizados",
      "CRM e gestão de clientes",
      "Plataformas SaaS completas",
      "Integrações com APIs e serviços",
      "Dashboards e Business Intelligence",
      "Suporte e manutenção contínua",
    ],
    buttonText: "Consultar Valor",
    buttonMessage: "Olá! Tenho interesse no plano de CRM / SaaS / Sistemas da Abravely. Podemos conversar?",
    popular: true,
  },
  {
    id: "personalizado",
    icon: Puzzle,
    tag: "Pacote Personalizado",
    name: "Plano Sob Medida",
    description:
      "Não sabe por onde começar? Monte um pacote personalizado com exatamente o que você precisa, sem pagar por extras.",
    features: [
      "Consultoria inicial gratuita",
      "Escopo definido junto com você",
      "Combine front, back e design",
      "Prazos e entregas flexíveis",
      "Dedicação exclusiva ao projeto",
      "Proposta sem compromisso",
    ],
    buttonText: "Montar Meu Pacote",
    buttonMessage: "Olá! Quero montar um pacote personalizado com a Abravely. Pode me ajudar?",
    popular: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

export function PricingSection() {
  return (
    <section
      className="relative py-24 overflow-hidden bg-[var(--color-hero-bg)] text-foreground"
      id="pricing"
    >
      {/* Luz verde varrendo o fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[0] animate-sweep" />


      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        {/* Header */}
        <SectionTitle 
          align="center"
          eyebrow="Planos"
          title="Simples assim. Sem surpresas."
          description="Escolha a solução ideal para o seu negócio. Valor sob consulta — cada projeto tem o seu escopo."
          className="mb-16"
        />

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        >
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.div key={plan.id} variants={itemVariants} className="h-full">
                <GlassCard
                  className={`relative flex flex-col h-full transition-all duration-300 group ${
                    plan.popular ? "lg:-translate-y-3" : ""
                  }`}
                  style={
                    plan.popular
                      ? {
                          borderColor: "var(--accent-brand-border)",
                          boxShadow: "var(--accent-brand-shadow)",
                        }
                      : {}
                  }
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div
                        className="flex items-center gap-1.5 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg"
                        style={{ backgroundColor: "var(--accent-brand)" }}
                      >
                        <Star className="w-3 h-3 fill-current" /> Mais procurado
                      </div>
                    </div>
                  )}

                  {/* Icon + Tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="p-2.5 rounded-xl"
                      style={{
                        backgroundColor: "var(--accent-brand-muted)",
                        color: "var(--accent-brand)",
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--accent-brand)" }}
                    >
                      {plan.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 leading-snug">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price placeholder */}
                  <div className="mb-6 flex items-center gap-2">
                    <MessageCircle
                      className="w-4 h-4"
                      style={{ color: "var(--accent-brand)" }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--accent-brand)" }}
                    >
                      Valor sob consulta
                    </span>
                  </div>

                  <div className="w-full h-px bg-[var(--border)] mb-6" />

                  {/* Features */}
                  <ul className="space-y-3.5 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-[var(--foreground-muted)]"
                      >
                        <div
                          className="mt-0.5 shrink-0"
                          style={{
                            color: plan.popular
                              ? "var(--accent-brand)"
                              : "var(--foreground-faint)",
                          }}
                        >
                          <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={waLink(plan.buttonMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center font-semibold transition-all rounded-md h-11 px-8 text-base ${
                      plan.popular
                        ? "text-white"
                        : "bg-[var(--surface-2)] hover:bg-[var(--border-strong)] text-[var(--foreground)] border border-[var(--border)]"
                    }`}
                    style={
                      plan.popular
                        ? {
                            backgroundColor: "var(--accent-brand)",
                            boxShadow: "var(--accent-brand-shadow)",
                          }
                        : {}
                    }
                  >
                    {plan.buttonText}
                  </a>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-[var(--foreground-muted)] mt-10"
        >
          Precisa de algo diferente?{" "}
          <a
            href={waLink("Olá! Preciso de algo diferente do que os planos da Abravely oferecem. Pode me ajudar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "var(--accent-brand)" }}
          >
            Fale com a gente
          </a>{" "}
          e criamos uma proposta exclusiva para você.
        </motion.p>
      </div>
    </section>
  );
}
