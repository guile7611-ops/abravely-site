"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { useScroll, useMotionValueEvent } from "framer-motion";
import logoImg from "@/components/sections/imgens/videos/abralogo.png";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const navCtaVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-semibold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        navCta:
          "bg-white text-black hover:bg-white/90 active:scale-[0.97]",
      },
      size: {
        lg: "h-10 px-6",
      },
    },
    defaultVariants: {
      variant: "navCta",
      size: "lg",
    },
  }
);

export function SentinelNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const links = [
    { label: "Especialidades", href: "/#especialidades" },
    { label: "Roadmap", href: "/#features" },
    { label: "Planos", href: "/#pricing" },
    { label: "Gargalos", href: "/gargalos" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "w-[95%] max-w-6xl mt-4 rounded-full bg-white/95 backdrop-blur-md px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20"
            : "w-full mt-0 px-8 lg:px-16 py-5 bg-transparent"
        }`}
      >
        {/* Left: Logo image */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src={logoImg} 
            alt="Abravely" 
            height={40} 
            className="h-8 w-auto" 
            priority 
          />
          <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? "text-black" : "text-white"}`}>
            Abravely
          </span>
        </Link>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? "text-zinc-600 hover:text-black" 
                  : "text-zinc-400 hover:text-white uppercase tracking-widest"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Get Quote button */}
        <a
          href={waLink("Olá! Gostaria de falar com a Abravely.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className={`${navCtaVariants({ variant: "navCta", size: "lg" })} hidden md:inline-flex gap-2`}
          >
            Contato <ArrowRight className="w-4 h-4" />
          </Button>
        </a>
      </nav>
    </header>
  );
}
