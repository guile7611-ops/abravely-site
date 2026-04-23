"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Sparkles, Cpu, Zap, Workflow, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
function ActiveGlow() {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: [0, 0.7, 0.4, 0.7, 0],
          scale: [0.9, 1.08, 1.04, 1.08, 0.9],
        }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse at center, var(--accent-brand-pulse) 0%, var(--accent-brand-glow) 40%, transparent 75%)",
          filter: "blur(18px)",
        }}
      />
    </AnimatePresence>
  );
}

export function CoreFeatureSection() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="relative py-28 overflow-hidden bg-[var(--color-hero-bg)] text-foreground" id="features">
      {/* Luz verde varrendo o fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[0] animate-sweep" />
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .mask-center-top {
            mask-image: radial-gradient(circle at 50% calc(100% + 8px), transparent 150px, black 151px);
            -webkit-mask-image: radial-gradient(circle at 50% calc(100% + 8px), transparent 150px, black 151px);
          }
          .mask-bottom-left {
            mask-image: radial-gradient(circle at calc(100% + 8px) -8px, transparent 150px, black 151px);
            -webkit-mask-image: radial-gradient(circle at calc(100% + 8px) -8px, transparent 150px, black 151px);
          }
          .mask-bottom-right {
            mask-image: radial-gradient(circle at -8px -8px, transparent 150px, black 151px);
            -webkit-mask-image: radial-gradient(circle at -8px -8px, transparent 150px, black 151px);
          }
        }
      `}} />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">

        {/* Mobile Title */}
        <SectionTitle 
          align="center"
          title="Tecnologia que entrega resultado"
          description="Sistemas, automações e plataformas sob medida."
          className="md:hidden mb-10"
        />

        {/* Bento Grid */}
        <div className="relative mx-auto w-full md:h-[820px] flex flex-col md:grid md:grid-cols-4 md:grid-rows-4 gap-5">

          {/* Floating Orb Desktop */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-30 items-center justify-center pointer-events-none">
            <video
              autoPlay loop muted playsInline
              className="w-full h-full object-cover mix-blend-screen scale-110"
              style={{
                filter: "drop-shadow(0 0 50px var(--accent-brand-glow))",
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 68%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 68%)'
              }}
            >
              <source src="/videos/orb.mp4" type="video/mp4" />
            </video>
          </div>

          {/* ====== LEFT COLUMN ====== */}

          {/* Card 1: Proposta de valor */}
          <GlassCard className="md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-2 flex flex-col p-7 group">
            <h3 className="text-2xl font-bold text-[var(--foreground)] leading-snug mb-4">
              Sua operação funcionando do jeito que deveria.
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed flex-1">
              A gente entende o que trava o seu negócio e constrói a solução certa — sem enrolação.
            </p>
            <div className="mt-5 space-y-2.5">
              {["Sistema feito pra sua empresa", "Automatize o que é manual", "Conecte suas ferramentas"].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--accent-brand)" }} />
                  <span className="text-sm text-[var(--foreground-muted)]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 text-[10px] uppercase font-mono tracking-widest text-[var(--foreground-faint)]">
              Sem fórmula genérica
            </div>
          </GlassCard>

          {/* Card 2: Prova social */}
          <GlassCard className="md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1 flex flex-col justify-center items-center text-center p-7">
            <h4 className="text-4xl font-black text-transparent bg-clip-text" style={{
              backgroundImage: "linear-gradient(to right, var(--accent-brand-light), var(--accent-brand))"
            }}>
              3× mais
            </h4>
            <p className="text-sm text-[var(--foreground-muted)] mt-2 leading-tight">
              rápido que agências tradicionais para sair do zero ao sistema pronto
            </p>
            <div className="flex -space-x-2 mt-4">
              {["bg-blue-800", "bg-blue-600", "bg-blue-900"].map((color, i) => (
                <div key={i} className={`w-6 h-6 rounded-full ${color} border border-[var(--surface)] shadow-sm`} />
              ))}
            </div>
          </GlassCard>

          {/* Card 3: CTA principal */}
          <div className="md:col-start-1 md:col-span-1 md:row-start-4 md:row-span-1 relative flex rounded-2xl overflow-visible h-full min-h-[80px]">
            {isActive && <ActiveGlow />}
            <Button
              className="relative z-10 w-full h-full text-white font-bold text-lg transition-all hover:scale-[1.02] rounded-2xl flex flex-col gap-1 py-4"
              style={{
                backgroundColor: "var(--accent-brand)",
                boxShadow: isActive ? "var(--accent-brand-shadow)" : undefined,
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--accent-brand-hover)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--accent-brand)")}
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Quero um projeto
              </span>
              <span className="text-xs font-normal opacity-70 tracking-wide">
                a gente responde em até 24h
              </span>
            </Button>
          </div>

          {/* ====== CENTER COLUMNS ====== */}

          {/* Card 4: Hero central */}
          <div className="md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-2 relative rounded-2xl overflow-visible">
            {isActive && <ActiveGlow />}
            <GlassCard
              className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-10 pt-10 pb-20 mask-center-top overflow-hidden border-none hover:shadow-none"
              style={{
                backgroundColor: "var(--accent-brand)",
                boxShadow: isActive ? "var(--accent-brand-shadow)" : undefined,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              <div className="relative z-10 w-full flex flex-col items-center justify-center h-full gap-5">
                <Image
                  src="/images/abralogo.png"
                  alt="Abravely"
                  width={180}
                  height={52}
                  className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                />
                <h2 className="text-[2.4rem] md:text-[2.75rem] font-black text-white tracking-tight drop-shadow-md leading-[1.15] whitespace-nowrap">
                  Pare de improvisar.<br/>Automatize já.
                </h2>
              </div>
            </GlassCard>
          </div>

          {/* Mobile Orb */}
          <div className="md:hidden relative w-full h-[300px] flex items-center justify-center overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]"
            style={{ boxShadow: "0 0 40px var(--accent-brand-muted)" }}
          >
            <video
              autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen scale-125 pointer-events-none"
              style={{
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 68%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 68%)'
              }}
            >
              <source src="/videos/orb.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Card 5: Automação */}
          <GlassCard className="md:col-start-2 md:col-span-1 md:row-start-3 md:row-span-2 flex flex-col justify-end p-7 mask-bottom-left relative group" style={{ isolation: 'isolate' }}>
            <div
              className="mb-5 w-10 h-10 rounded-full flex items-center justify-center border"
              style={{
                background: "var(--accent-brand-muted)",
                border: "1px solid var(--accent-brand-border)",
                color: "var(--accent-brand)",
              }}
            >
              <Workflow size={18} />
            </div>
            <h3 className="font-bold text-[var(--foreground)] text-lg leading-snug">Seu time para de fazer a mesma coisa duas vezes</h3>
            <p className="text-sm text-[var(--foreground-muted)] mt-2 leading-relaxed">
              Toda tarefa repetitiva que existe hoje pode ser automatizada. Simples assim.
            </p>
            <a
              href="#metodo"
              className="mt-4 flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: "var(--accent-brand)" }}
            >
              Ver como funciona <ArrowRight className="w-4 h-4" />
            </a>
          </GlassCard>

          {/* Card 6: Integração */}
          <GlassCard className="md:col-start-3 md:col-span-1 md:row-start-3 md:row-span-2 flex flex-col justify-end p-7 mask-bottom-right relative group" style={{ isolation: 'isolate' }}>
            <div
              className="mb-5 w-10 h-10 rounded-full flex items-center justify-center border"
              style={{
                background: "var(--accent-brand-muted)",
                border: "1px solid var(--accent-brand-border)",
                color: "var(--accent-brand-hover)",
              }}
            >
              <Zap size={18} />
            </div>
            <h3 className="font-bold text-[var(--foreground)] text-lg leading-snug">Funciona junto com o que você já tem</h3>
            <p className="text-sm text-[var(--foreground-muted)] mt-2 leading-relaxed">
              Não precisa jogar tudo fora. A gente conecta o novo com o que já existe na sua empresa.
            </p>
            <a
              href="#solucoes"
              className="mt-4 flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: "var(--accent-brand-hover)" }}
            >
              Ver como conectamos <ArrowRight className="w-4 h-4" />
            </a>
          </GlassCard>

          {/* ====== RIGHT COLUMN ====== */}

          {/* Card 7: Toggle */}
          <motion.div
            className="md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-1 relative rounded-2xl overflow-hidden cursor-pointer select-none border"
            onClick={() => setIsActive((prev) => !prev)}
            animate={{
              backgroundColor: isActive ? "var(--accent-brand)" : "var(--surface)",
              borderColor: isActive ? "var(--accent-brand-border)" : "var(--border)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              boxShadow: isActive ? "var(--accent-brand-shadow)" : "none",
            }}
          >
            {isActive && <ActiveGlow />}
            <div className="relative z-10 flex items-center justify-center w-full h-full p-6">
              <div className="relative flex items-center" style={{ width: 84, height: 42 }}>
                <motion.div
                  className="absolute inset-0 rounded-full border"
                  animate={{
                    backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.05)",
                    borderColor: isActive ? "rgba(255,255,255,0.25)" : "var(--border)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-[5px] w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    left: isActive ? "calc(100% - 37px)" : "5px",
                    background: isActive
                      ? "linear-gradient(135deg, var(--accent-brand-hover), var(--accent-brand))"
                      : "linear-gradient(135deg, var(--surface-2), var(--surface))",
                    boxShadow: isActive
                      ? "var(--accent-brand-shadow)"
                      : "0 0 8px var(--accent-brand-muted)",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                >
                  <motion.div animate={{ rotate: isActive ? 360 : 0, scale: isActive ? 1 : 0.8 }} transition={{ duration: 0.5 }}>
                    <Sparkles
                      className="w-4 h-4"
                      style={{ color: isActive ? "white" : "var(--accent-brand-border)" }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="absolute bottom-3 left-0 right-0 flex justify-center"
              animate={{ opacity: isActive ? 1 : 0.4 }}
            >
              <span
                className="text-xs font-mono uppercase tracking-widest"
                style={{ color: isActive ? "white" : "var(--accent-brand)" }}
              >
                {isActive ? "sistema ativo" : "ativar sistema"}
              </span>
            </motion.div>
          </motion.div>

          {/* Card 8: Dado de impacto */}
          <GlassCard className="md:col-start-4 md:col-span-1 md:row-start-2 md:row-span-1 flex flex-col justify-center text-center p-7">
            <h4 className="text-4xl font-black text-[var(--foreground)] drop-shadow-md">+47</h4>
            <div className="flex items-center justify-center gap-2 mt-2 w-full">
              <div className="h-px bg-[var(--border)] flex-1" />
              <p className="text-sm shrink-0" style={{ color: "var(--accent-brand)" }}>empresas atendidas</p>
              <div className="h-px bg-[var(--border)] flex-1" />
            </div>
            <p className="text-xs text-[var(--foreground-faint)] mt-2">de pequenas a grandes operações</p>
          </GlassCard>

          {/* Card 9: CTA urgência */}
          <GlassCard className="md:col-start-4 md:col-span-1 md:row-start-3 md:row-span-2 flex flex-col p-7 overflow-hidden relative">
            {/* Glow de fundo */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 blur-[60px] pointer-events-none"
              style={{ backgroundColor: "var(--accent-brand-muted)" }}
            />

            <h3 className="font-bold text-[var(--foreground)] text-base leading-snug mb-2 relative z-10">
              Cansado de apagar incêndio todo dia?
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed relative z-10">
              Quem organiza os processos agora cresce sem contratar o dobro de pessoas amanhã.
            </p>

            {/* Pills decorativos */}
            <div className="mt-auto relative h-36 w-full">

              {/* Pill superior — "Vagas abertas agora" */}
              <div
                className="absolute w-[115%] -left-[7%] h-12 rounded-full transform -rotate-[14deg] top-2 z-10 flex items-center gap-2.5 px-5 shadow-[0_4px_24px_rgba(0,0,0,0.18)] border backdrop-blur-md"
                style={{
                  background: "var(--surface-2)",
                  borderColor: "var(--border-strong)",
                }}
              >
                {/* Dot pulsante */}
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ backgroundColor: "var(--accent-brand)" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2.5 w-2.5"
                    style={{ backgroundColor: "var(--accent-brand)" }}
                  />
                </span>
                <span className="text-xs font-semibold tracking-wide text-[var(--foreground-muted)]">
                  Vagas abertas agora
                </span>
              </div>

              {/* Pill inferior — "Conversa grátis" */}
              <div
                className="absolute w-[108%] -left-[4%] h-12 rounded-full transform rotate-[10deg] bottom-6 z-20 flex items-center justify-center gap-2.5 px-5 shadow-[0_4px_28px_rgba(0,0,0,0.25)] border backdrop-blur-xl"
                style={{
                  background: "linear-gradient(135deg, var(--accent-brand-muted), var(--surface-2))",
                  borderColor: "var(--accent-brand-border)",
                  boxShadow: "0 0 24px var(--accent-brand-glow), 0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                <span
                  className="text-sm font-bold tracking-wide"
                  style={{ color: "var(--accent-brand)" }}
                >
                  Conversa grátis
                </span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--accent-brand)" }} />
              </div>

              {/* Círculo flutuante com ícone */}
              <motion.div
                className="absolute bottom-1 right-1 w-11 h-11 rounded-full z-30 flex items-center justify-center shadow-xl border"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "var(--accent-brand)",
                  borderColor: "var(--accent-brand-border)",
                  boxShadow: "0 0 16px var(--accent-brand-glow)",
                }}
              >
                <Cpu className="w-4 h-4 text-white" />
              </motion.div>

            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
}
