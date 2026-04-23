"use client";

import { motion } from "framer-motion";

export function LogoStrip() {
  const logos = [
    "TechCorp", "InnovateX", "GlobalSys", "NexusData", "AcmeInd", "ProSolve",
    // Duplicated for infinite scroll illusion
    "TechCorp", "InnovateX", "GlobalSys", "NexusData", "AcmeInd", "ProSolve",
  ];

  return (
    <section className="py-20 border-y border-zinc-900/50 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-8 flex items-center justify-center">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest text-center">
          Empresas que confiam na nossa engenharia
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Soft edge blur masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-16 pr-16 whitespace-nowrap"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-zinc-700 select-none tracking-tighter mix-blend-plus-lighter"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
