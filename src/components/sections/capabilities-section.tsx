"use client";

import { motion } from "framer-motion";
import {
  Server, LayoutDashboard, Bot, BarChart3, Plug, Cloud,
} from "lucide-react";

const capabilities = [
  {
    icon: Server,
    title: "Sistemas Sob Medida",
    description: "Arquitetura personalizada para o seu processo, com foco em performance, escala e controle absoluto de dados.",
  },
  {
    icon: LayoutDashboard,
    title: "Plataformas SaaS Robustas",
    description: "Produtos SaaS de alta escala com multitenancy, checkout, faturamento recorrente e painel administrativo completo.",
  },
  {
    icon: Bot,
    title: "Automação & IA Aplicada",
    description: "Agentes inteligentes e fluxos automatizados que eliminam trabalho manual e escalam sua operação sem aumentar headcount.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description: "Painéis estratégicos em tempo real que transformam dados dispersos em decisões rápidas e precisas.",
  },
  {
    icon: Plug,
    title: "Integrações & APIs",
    description: "Conectamos sistemas legados, ERPs, CRMs e marketplaces com integrações robustas e monitoradas 24/7.",
  },
  {
    icon: Cloud,
    title: "Infraestrutura Cloud",
    description: "Deploy escalável, seguro e de alta disponibilidade com observabilidade completa e custo otimizado.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2,
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export function CapabilitiesSection() {
  return (
    <section
      id="especialidades"
      className="relative py-32 md:py-48 overflow-hidden bg-[var(--color-hero-bg)] text-foreground"
    >
      {/* Background Animated Green Light like SentinelHero */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[0] animate-sweep" 
        style={{ willChange: "transform, opacity" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 md:mb-28 flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-sm border border-primary/20 bg-primary/5 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Nossas Especialidades
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-6 uppercase"
          >
            Tecnologia que <span className="text-primary">pensa</span>
            <br />
            e entrega resultado.
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground text-[clamp(1rem,1.5vw,1.25rem)] font-light max-w-2xl mx-auto leading-relaxed"
          >
            Do código à estratégia — construímos soluções digitais orientadas ao
            crescimento real do seu negócio.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div key={idx} variants={itemVariants} className="group h-full">
                <div
                  className="relative h-full rounded-xl p-6 md:p-8 flex flex-col gap-6 transition-all duration-300 overflow-hidden bg-foreground/[0.03] border border-foreground/[0.08] hover:border-primary/40 hover:bg-foreground/[0.04] backdrop-blur-sm md:group-hover:-translate-y-2 hover:shadow-[0_0_30px_-15px_var(--primary)]"
                >
                  {/* Subtle hover gradient inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-background/50 border border-foreground/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500">
                    <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>

                  {/* Text */}
                  <div className="relative z-10 flex flex-col gap-3">
                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 uppercase text-sm">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {cap.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="w-6 h-6 border-t border-r border-primary/30" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Premium bottom fade divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
