"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";

export function ProblemSection() {
  return (
    <section id="problema" className="py-24 md:py-40 bg-[var(--color-hero-bg)] text-foreground relative overflow-hidden">
      {/* Sweep Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[0] animate-sweep" />
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              eyebrow="O Ponto de Ruptura"
              title="Operações complexas quebram em planilhas e sistemas de prateleira."
              description="Quando o faturamento escala, as planilhas congelam e o ERP genérico vira gargalo. O custo da ineficiência operacional silenciosa corrói a sua margem."
            />
            <ul className="mt-10 flex flex-col gap-6">
              {[
                "Dependência de processos manuais e falhos.",
                "Silos de dados entre setores da empresa.",
                "Sistemas lentos que não escalam com as vendas.",
                "Perda de controle analítico em tempo real."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div
                    className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-primary"
                  />
                  <span className="text-[var(--foreground-muted)] text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full aspect-square md:aspect-[4/3] rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center p-8 relative overflow-hidden shadow-[var(--glass-shadow)]"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle at top right, var(--primary), transparent 70%)" }}
            />
            <div className="relative z-10 text-[var(--foreground-faint)] font-mono text-sm tracking-widest text-center flex flex-col items-center gap-4">
              <span className="opacity-50">SISTEMA_LEGADO_ERR_OUT_OF_MEMORY</span>
              <div className="w-full max-w-sm flex items-center gap-2">
                 <div className="h-px bg-[var(--border)] flex-1"/>
                 <span className="text-[var(--foreground-muted)]">CONVERSÃO PARA ABRAVELY</span>
                 <div className="h-px bg-[var(--border)] flex-1"/>
              </div>
              <span className="text-[var(--foreground)] font-semibold">OPERAÇÃO OTIMIZADA = TRUE</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
