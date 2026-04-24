"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ui/theme-provider";
import { SectionTitle } from "@/components/ui/section-title";
import { GlassCard } from "@/components/ui/glass-card";

/* ── Nó de circuito animado ─────────────────────────────────────── */
function CircuitNode({
  x, y, size = 4, delay = 0, isLight,
}: {
  x: string; y: string; size?: number; delay?: number; isLight: boolean;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: x, top: y, width: size, height: size,
        background: "var(--accent-brand)",
        willChange: "opacity, transform",
      }}
      animate={{
        opacity: isLight ? [0.25, 0.7, 0.25] : [0.15, 0.6, 0.15],
      }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "linear" }}
    />
  );
}


/* ── Grade de circuito (SVG inline) ─────────────────────────────── */
function CircuitGrid({ isLight }: { isLight: boolean }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      /* Light: mais visível (0.18) — Dark: sutil (0.065) */
      style={{ opacity: isLight ? 0.18 : 0.065 }}
    >
      <defs>
        <pattern id="proofSmallGrid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="var(--accent-brand)" strokeWidth="0.5" />
        </pattern>
        <pattern id="proofCircuitGrid" width="128" height="128" patternUnits="userSpaceOnUse">
          <rect width="128" height="128" fill="url(#proofSmallGrid)" />
          <path d="M 32 0 L 32 40 M 32 40 L 80 40 M 80 40 L 80 0" fill="none" stroke="var(--accent-brand)" strokeWidth="0.9" />
          <path d="M 96 128 L 96 88 M 96 88 L 48 88 M 48 88 L 48 128" fill="none" stroke="var(--accent-brand)" strokeWidth="0.9" />
          <path d="M 0 64 L 40 64 M 40 64 L 40 96 M 128 96 L 88 96 M 88 96 L 88 64 M 88 64 L 128 64" fill="none" stroke="var(--accent-brand)" strokeWidth="0.9" />
          {/* Junções */}
          <circle cx="32" cy="40" r="2.5" fill="var(--accent-brand)" />
          <circle cx="80" cy="40" r="2.5" fill="var(--accent-brand)" />
          <circle cx="96" cy="88" r="2.5" fill="var(--accent-brand)" />
          <circle cx="48" cy="88" r="2.5" fill="var(--accent-brand)" />
          <circle cx="40" cy="64" r="2.5" fill="var(--accent-brand)" />
          <circle cx="88" cy="64" r="2.5" fill="var(--accent-brand)" />
          <circle cx="40" cy="96" r="2.5" fill="var(--accent-brand)" />
          <circle cx="88" cy="96" r="2.5" fill="var(--accent-brand)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#proofCircuitGrid)" />
    </svg>
  );
}

/* ── Partículas de dados flutuantes ─────────────────────────────── */
const DATA_PARTICLES = [
  { x: "8%",  y: "15%", d: 0.0 }, { x: "22%", y: "70%", d: 0.6 },
  { x: "38%", y: "28%", d: 1.2 }, { x: "55%", y: "82%", d: 0.3 },
  { x: "70%", y: "18%", d: 0.9 }, { x: "85%", y: "55%", d: 1.5 },
  { x: "15%", y: "48%", d: 0.4 }, { x: "92%", y: "32%", d: 0.7 },
  { x: "48%", y: "60%", d: 1.8 }, { x: "63%", y: "42%", d: 0.2 },
];

export function ProofSection() {
  const isLight = false;

  /* Intensidade do brilho radial */
  const glowOpacity = "0.06";
  const cardGlowOpacity = "0.08";

  const proofs = [
    {
      kpi: "+150%",
      metric: "Volume de Pedidos B2B",
      context: "Automação total de entrada de dados e roteamento no distribuidor focado em agro.",
    },
    {
      kpi: "3x Mais Rápido",
      metric: "Fechamento de Caixa",
      context: "Substituição de planilhas locais por portal cloud-native com sync em tempo real.",
    },
    {
      kpi: "Zero",
      metric: "Custos com Licenças Excedentes",
      context: "App proprietário liberou 40 funcionários de usarem licenças caríssimas de ERP.",
    },
  ];

  return (
    <section
      id="cases"
      className="relative py-24 md:py-40 overflow-hidden bg-[var(--color-hero-bg)] text-foreground"
    >
      {/* Background Animated Green Light like SentinelHero */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[0] animate-sweep" 
        style={{ willChange: "transform, opacity" }}
      />

      {/* ── Textura tecnológica ── */}

      {/* Grade de circuito SVG */}
      <div className="z-[1] absolute inset-0 pointer-events-none">
        <CircuitGrid isLight={isLight} />
      </div>

      {/* Nós de circuito animados - Ocultos no mobile para performance */}
      <div className="z-[1] absolute inset-0 pointer-events-none hidden md:block">
        {DATA_PARTICLES.map((p, i) => (
          <CircuitNode
            key={i}
            x={p.x} y={p.y}
            size={i % 3 === 0 ? 5 : 3}
            delay={p.d}
            isLight={isLight}
          />
        ))}
      </div>

      {/* Gradiente de fade nas bordas top/bottom */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-gradient-to-b from-[var(--color-hero-bg)] to-transparent z-[1]"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-[var(--color-hero-bg)] to-transparent z-[1]"
      />

      {/* ── Conteúdo ── */}
      <div className="container relative z-20 mx-auto px-6 max-w-7xl">
        <SectionTitle
          align="center"
          eyebrow="Impacto Real"
          title="Casos não contados, mas sentidos."
          description="Atuamos nos bastidores para que a linha de frente dos nossos parceiros nunca pare."
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofs.map((proof, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full text-center flex flex-col justify-center gap-4 py-12 relative overflow-hidden">
                {/* mini brilho de circuito dentro do card */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--accent-brand) ${isLight ? "12%" : "8%"}, transparent) 0%, transparent 60%)`,
                  }}
                />
                <div
                  className="text-5xl font-bold tracking-tighter relative z-10"
                  style={{ color: "var(--accent-brand)" }}
                >
                  {proof.kpi}
                </div>
                <div className="text-lg font-medium text-[var(--foreground)] relative z-10">{proof.metric}</div>
                <div className="text-[var(--foreground-muted)] text-sm mt-2 relative z-10">{proof.context}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
