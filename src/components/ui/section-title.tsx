"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
      }}
      className={cn(
        "flex flex-col gap-6 mb-16",
        align === "center" ? "text-center items-center" : "text-left items-start",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-2 px-5 py-2 rounded-sm border border-primary/20 bg-primary/5 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2 
        variants={itemVariants}
        className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.05] uppercase text-foreground"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          variants={itemVariants}
          className="max-w-[800px] text-[clamp(1rem,1.5vw,1.25rem)] text-muted-foreground font-light leading-relaxed text-balance"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
