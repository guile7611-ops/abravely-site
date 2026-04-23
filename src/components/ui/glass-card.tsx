import * as React from "react";
import { cn } from "@/lib/utils";

export const GlassCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "card-glow-group rounded-3xl p-8 transition-all duration-500 relative",
      "border border-white/5 bg-white/[0.02] backdrop-blur-xl",
      "hover:bg-white/[0.05] hover:border-white/10 hover:shadow-2xl",
      className
    )}
    style={{
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)"
    }}
    {...props}
  >
    {/* Liquid highlight reflections */}
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
    <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
    
    <span className="card-border-glow" aria-hidden="true" />
    {children}
  </div>
));
GlassCard.displayName = "GlassCard";
