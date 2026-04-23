"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
  duration?: number;
}

export function GlowOrb({
  className,
  color,
  size = 300,
  delay = 0,
  duration = 8,
}: GlowOrbProps) {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full opacity-30 mix-blend-screen blur-[100px] pointer-events-none",
        color,
        className
      )}
      style={{
        width: size,
        height: size,
        // Se não houver classe de cor, usa a variável de acento
        backgroundColor: !color ? "var(--accent-brand)" : undefined,
      }}
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.35, 0.15],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
