"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { waLink } from "@/lib/whatsapp";

export function SuggestionSection() {
  return (
    <section id="gargalos" className="py-20 md:py-28 bg-[var(--color-hero-bg)] text-foreground relative overflow-hidden">

      {/* Sweep Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[0] animate-sweep" 
        style={{ willChange: "transform, opacity" }}
      />
      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden px-10 py-16 md:px-20 md:py-20 text-center border border-[var(--border)]"
          style={{ backgroundColor: "var(--surface)" }}
        >
          {/* Luz primária varrendo o fundo do card */}
          <div
            className="pointer-events-none absolute -inset-[100%] opacity-20 animate-sweep"
            style={{
              background: "radial-gradient(circle 400px at 50% 50%, var(--primary), transparent 40%)",
              willChange: "transform, opacity",
            }}
          />


          {/* Glows decorativos internos */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none bg-primary/20" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none bg-primary/20" />

          <div className="relative z-10">
            {/* Eyebrow */}
            <p className="text-xs font-mono tracking-widest uppercase mb-6 text-primary">
              Proposta Sob Medida
            </p>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-[1.15] mb-6 max-w-2xl mx-auto">
              Tem dúvidas sobre o que{" "}
              <span className="text-[var(--foreground-muted)]">sua operação precisa?</span>
            </h2>

            {/* Subtext */}
            <p className="text-base md:text-lg text-[var(--foreground-muted)] max-w-xl mx-auto mb-10 leading-relaxed">
              Conte-nos seus gargalos. Nossa equipe técnica analisa seu cenário
              e envia uma proposta personalizada — sem custo e sem compromisso.
            </p>

            {/* CTA */}
            <Link
              href="/gargalos"
              className="inline-flex items-center justify-center h-14 px-10 rounded-full font-semibold text-base transition-all hover:scale-[1.03] active:scale-100 bg-primary text-primary-foreground shadow-[0_0_20px_var(--primary)]"
            >
              Receber Sugestão
            </Link>


            {/* Footnote */}
            <p className="text-xs mt-6 text-[var(--foreground-faint)]">
              Sem vendedores. Você fala direto com quem vai resolver.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
