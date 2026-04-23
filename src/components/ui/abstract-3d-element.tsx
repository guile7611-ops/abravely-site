"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Abstract3DElementProps {
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

export function Abstract3DElement({ icon: Icon, className, delay = 0 }: Abstract3DElementProps) {
  return (
    <motion.div
      className={cn(
        "relative flex h-24 w-24 items-center justify-center rounded-2xl backdrop-blur-xl",
        className
      )}
      style={{
        background: "linear-gradient(to bottom right, var(--accent-brand-muted), transparent)",
        border: "1px solid var(--accent-brand-border)",
        boxShadow: "0 0 40px var(--accent-brand-glow)",
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        y: [0, -15, 0],
        rotateX: [10, -10, 10],
        rotateY: [-10, 10, -10],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* Glossy inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
      
      <Icon
        className="h-10 w-10"
        style={{ color: "var(--accent-brand-light)", filter: "drop-shadow(0 0 10px var(--accent-brand-glow))" }}
      />
    </motion.div>
  );
}
