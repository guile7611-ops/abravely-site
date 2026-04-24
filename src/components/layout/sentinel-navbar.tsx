"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { label: "Cases", href: "/#cases" },
    { label: "Planos", href: "/#pricing" },
    { label: "Receber Sugestão", href: "/gargalos" },
  ];



  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 relative ${
          isScrolled
            ? "w-[95%] max-w-6xl mt-4 rounded-full bg-white/95 backdrop-blur-md px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20"
            : "w-full mt-0 px-8 lg:px-16 py-5 bg-transparent"
        }`}
      >
        {/* Left: Logo image */}
        <Link href="/" className="flex items-center gap-2 relative z-[60]">
          <div className={`relative transition-all duration-300 ${isScrolled ? "brightness-0" : ""}`}>
            <Image 
              src={logoImg} 
              alt="Abravely" 
              height={40} 
              className="h-8 w-auto" 
              priority 
            />
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? "text-black" : "text-white"}`}>
            Abravely
          </span>
        </Link>

        {/* Center: Desktop Nav links */}
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

        {/* Right: Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-[60]">
          <a
            href={waLink("Olá! Gostaria de falar com a Abravely.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button
              className={cn(
                navCtaVariants({ variant: "navCta", size: "lg" }),
                "gap-2 border-2 border-primary/20 hover:border-primary shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all"
              )}
            >
              Contato <ArrowRight className="w-4 h-4" />
            </Button>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? "text-black" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown (Standard Style) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-black/95 backdrop-blur-xl rounded-3xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 duration-300 pointer-events-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-lg font-medium px-4 py-2 rounded-xl hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-white/10 my-2" />
            <a
              href={waLink("Olá! Gostaria de falar com a Abravely.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-primary text-primary-foreground rounded-full py-6 text-base font-bold shadow-[0_0_15px_var(--primary)]">
                Falar com Especialista
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>


  );
}
