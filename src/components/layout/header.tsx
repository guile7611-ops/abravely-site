"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { waLink } from "@/lib/whatsapp";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[var(--surface)]/90 backdrop-blur-md border-[var(--border)] py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/abralogo.png"
            alt="Abravely"
            width={180}
            height={52}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#solucoes" className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
            Soluções
          </a>
          <a href="#cases" className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
            Cases
          </a>
          <a href="#metodo" className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
            O Método
          </a>

          {/* Theme toggle */}
          <ThemeToggle />

          <a
            href={waLink("Olá! Vim pelo site da Abravely e gostaria de falar com vocês.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 rounded-md px-3 text-sm font-medium text-white transition-all shadow-[var(--accent-brand-shadow)]"
            style={{ backgroundColor: "var(--accent-brand)" }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent-brand-hover)")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent-brand)")}
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile: only theme toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
