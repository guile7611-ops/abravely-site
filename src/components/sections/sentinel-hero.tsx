"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { waLink } from "@/lib/whatsapp";

export function SentinelHero() {
  const splineWrapperRef = useRef<HTMLDivElement>(null);


  // Framer motion variants for smooth staggered text entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--color-hero-bg)] overflow-hidden">
      {/* Background Animated Green Light */}
      <div 
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[0] animate-sweep" 
        style={{ willChange: "transform, opacity" }}
      />

      {/* Static 3D Background - High Performance for all devices */}
      <div className="absolute inset-0 pointer-events-none" ref={splineWrapperRef}>
        <div className="relative w-full h-full opacity-60">
          <img
            src="/spline-static.png"
            alt="Abravely 3D Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>



      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

      {/* Content container */}
      <motion.div 
        className="relative z-10 pointer-events-none w-full max-w-4xl px-6 md:px-10 pt-20 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-4 uppercase"
        >
          ABRAVELY<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-6"
        >
          Software sob medida & IA aplicada.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-8 max-w-2xl"
        >
          Sistemas e infraestrutura de alta performance para o seu negócio escalar.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 font-bold"
        >
          <a
            href={waLink("Olá! Gostaria de falar com um especialista sobre a minha operação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full font-semibold text-base transition-all hover:scale-[1.03] active:scale-100 bg-primary text-primary-foreground shadow-[0_0_20px_var(--primary)] pointer-events-auto"
          >
            Falar com Especialista
          </a>
          <Link
            href="/gargalos"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full font-semibold text-base transition-all hover:scale-[1.03] active:scale-100 bg-[var(--surface)] text-foreground border border-[var(--border)] hover:bg-[var(--border)] pointer-events-auto"
          >
            Conte seus gargalos
          </Link>


        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground/60 text-xs font-light mt-8"
        >
          Parceiro tecnológico estratégico. Engenharia de ponta focada em resultados.
        </motion.p>
      </motion.div>
    </section>
  );
}
