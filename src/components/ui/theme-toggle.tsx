"use client";

import * as React from "react";
import { useTheme } from "@/components/ui/theme-provider";

// Sun icon
function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

// Moon icon
function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      className="
        relative flex items-center justify-center w-9 h-9 rounded-lg
        text-[var(--foreground-muted)] hover:text-[var(--foreground)]
        border border-[var(--border-strong)]
        bg-[var(--surface)] hover:bg-[var(--surface-2)]
        transition-all duration-200 cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]
      "
    >
      <span
        className="transition-all duration-300"
        style={{ opacity: theme === "light" ? 1 : 0, position: "absolute" }}
      >
        <MoonIcon />
      </span>
      <span
        className="transition-all duration-300"
        style={{ opacity: theme === "dark" ? 1 : 0, position: "absolute" }}
      >
        <SunIcon />
      </span>
    </button>
  );
}
