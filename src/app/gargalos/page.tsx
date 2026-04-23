"use client";

import { useState } from "react";
import { SentinelNavbar } from "@/components/layout/sentinel-navbar";
import { Footer } from "@/components/layout/footer";
import { BottleneckForm } from "@/components/forms/bottleneck-form";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BottleneckPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-indigo-500/30">
      <SentinelNavbar />
      
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-hero-bg)]">
        {/* Glow effect matching Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[0] animate-sweep" />
        
        <div className="container relative z-10 mx-auto px-4">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div 
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Diagnóstico Gratuito
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-sm">
                  Nós resolvemos as dores que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">travam o seu crescimento</span>.
                </h1>
                
                <p className="text-lg md:text-xl text-[var(--foreground-muted)] mb-12 max-w-2xl mx-auto leading-relaxed">
                  Todo negócio tem um limite natural. Nosso trabalho é identificar o que está segurando a sua empresa hoje e aplicar sistemas automatizados para quebrar esse teto.
                  Conte-nos os seus maiores desafios e desenharemos o cenário ideal para o seu negócio.
                </p>
                
                <Button 
                  onClick={() => setShowForm(true)}
                  className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[var(--accent-brand-shadow)] rounded-full transition-all hover:scale-105"
                >
                  Contar meus gargalos <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mapeamento de Gargalos</h2>
                  <p className="text-[var(--foreground-muted)]">
                    Preencha as 3 etapas abaixo. Analisaremos seu cenário com cuidado.
                  </p>
                </div>
                <BottleneckForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
