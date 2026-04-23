"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, BarChart2, Zap, ShoppingBag } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

const ORBIT_RADIUS = 155;
const ORBIT_DURATION = 22000;

const SERVICES = [
  { icon: Globe,       label: "Web",        color: "#3b82f6", bg: "rgba(59,130,246,0.10)"  },
  { icon: Smartphone,  label: "Mobile",     color: "#10b981", bg: "rgba(16,185,129,0.10)"  },
  { icon: Palette,     label: "Design",     color: "#ec4899", bg: "rgba(236,72,153,0.10)"  },
  { icon: BarChart2,   label: "Analytics",  color: "#8b5cf6", bg: "rgba(139,92,246,0.10)"  },
  { icon: Zap,         label: "Automação",  color: "#f59e0b", bg: "rgba(245,158,11,0.10)"  },
  { icon: ShoppingBag, label: "E-commerce", color: "#2563eb", bg: "rgba(37,99,235,0.10)"   },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function DifferentialsSection() {
  const [angle, setAngle] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      setAngle((elapsed / ORBIT_DURATION) * 360);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 bg-[var(--color-hero-bg)] text-foreground"
    >
      {/* Background Animated Green Light like SentinelHero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[0] animate-sweep" />

      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.2' fill='rgba(120%2C120%2C160%2C0.15)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT: copy */}
          <div>
            <SectionTitle
              eyebrow="Nossas Soluções"
              title={
                <>
                  Entregamos tudo que o{" "}
                  <span className="text-primary">seu negócio</span> precisa.
                </>
              }
              description="Web, mobile, design e automações — tudo integrado em um único parceiro. Sem fragmentação, sem retrabalho. Você foca no que importa, a gente cuida de todo o resto."
            />
          </div>

          {/* RIGHT: orbital */}
          <div className="flex items-center justify-center">
            <div className="relative" style={{ width: 380, height: 380 }}>
              {/* Orbit track */}
              <div
                className="absolute rounded-full border-2 border-dashed"
                style={{
                  width: ORBIT_RADIUS * 2,
                  height: ORBIT_RADIUS * 2,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderColor: "var(--border-strong)",
                }}
              />

              {/* Center */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] backdrop-blur-sm shadow-[var(--glass-shadow)]"
                >
                  <span className="text-2xl font-black leading-none text-[var(--foreground)]">
                    AB
                  </span>
                  <span className="mt-0.5 text-[11px] font-medium text-[var(--foreground-faint)] tracking-widest uppercase">
                    ravely
                  </span>
                </motion.div>
              </div>

              {/* Orbiting icons */}
              {SERVICES.map((svc, i) => {
                const itemAngle = angle + (i / SERVICES.length) * 360;
                const rad = (itemAngle * Math.PI) / 180;
                const x = Math.cos(rad) * ORBIT_RADIUS;
                const y = Math.sin(rad) * ORBIT_RADIUS;

                return (
                  <div
                    key={svc.label}
                    className="absolute z-20 flex flex-col items-center gap-1"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full shadow-md"
                      style={{
                        background: svc.bg,
                        border: `2px solid ${svc.color}40`,
                      }}
                    >
                      <svc.icon size={22} color={svc.color} strokeWidth={1.8} />
                    </div>
                    <span
                      className="whitespace-nowrap text-[11px] font-semibold"
                      style={{ color: svc.color }}
                    >
                      {svc.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
