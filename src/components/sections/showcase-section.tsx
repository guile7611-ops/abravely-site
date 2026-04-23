"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "@/components/ui/section-title";

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-[var(--color-hero-bg)] text-foreground overflow-hidden relative">
      {/* Sweep Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[0] animate-sweep" />
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1 w-full relative h-[500px]">
          {/* Abstract Mockup Composition */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-[10%] right-[10%] w-[70%] h-[60%] rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl p-4 overflow-hidden"
          >
            <div className="w-full flex gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-zinc-700" />
              <div className="w-2 h-2 rounded-full bg-zinc-700" />
              <div className="w-2 h-2 rounded-full bg-zinc-700" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-1/3 bg-zinc-800 rounded" />
              <div className="h-20 w-full bg-zinc-800/50 rounded" />
              <div className="grid grid-cols-3 gap-3">
                <div className="h-10 bg-zinc-800/50 rounded" />
                <div className="h-10 bg-zinc-800/50 rounded" />
                <div className="h-10 bg-zinc-800/50 rounded" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-[10%] left-[5%] w-[60%] h-[50%] rounded-xl bg-zinc-900/80 backdrop-blur-md border border-zinc-700 shadow-2xl p-4"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 rounded bg-zinc-700" />
              <div className="h-4 w-24 bg-zinc-800 rounded" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-3 w-20 bg-zinc-800 rounded" />
                <div className="h-3 w-12 bg-zinc-700 rounded" />
              </div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-zinc-500" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1">
          <SectionTitle 
            eyebrow="Arquitetura de Alta Performance"
            title="Design invisível. Efeito tangível."
            description="Nós construímos interfaces que as pessoas realmente sabem usar. Sem manuais, sem treinamentos cansativos. Aplicações complexas traduzidas em rotinas otimizadas e design system de ponta."
          />
        </div>

      </div>
    </section>
  );
}
