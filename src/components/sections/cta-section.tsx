"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";

export function CtaSection() {
  return (
    <section className="py-24 md:py-40 bg-[var(--color-hero-bg)] text-foreground relative overflow-hidden">
      {/* Sweep Glow */}
      <div
        className="pointer-events-none absolute -inset-[100%] opacity-20 animate-sweep"
        style={{
          background: "radial-gradient(circle 600px at 50% 50%, var(--primary), transparent 40%)",
        }}
      />
      
      {/* Glow central fixo inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] blur-[120px] rounded-full pointer-events-none bg-primary/20" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center mx-auto mb-8 shadow-[var(--glass-shadow)]">
            <span className="w-6 h-6 rounded-sm transform rotate-45 bg-primary" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            Sua operação está pronta para o próximo nível?
          </h2>
          
          <p className="text-xl text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto text-balance">
            Agende uma discovery session com nossos líderes técnicos. Vamos mapear seus gargalos atuais e mostrar como a Abravely pode desenhar sua fundação digital.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink("Olá! Gostaria de agendar uma discovery session com a Abravely.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-8 rounded-full transition-all bg-primary text-primary-foreground shadow-[0_0_20px_var(--primary)] hover:scale-[1.03] active:scale-100"
            >
              Agendar Discovery Session
            </a>
          </div>
          
          <p className="text-sm text-[var(--foreground-faint)] mt-8">
            Sem vendedores chatos. Você falará diretamente com desenvolvedores e arquitetos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
