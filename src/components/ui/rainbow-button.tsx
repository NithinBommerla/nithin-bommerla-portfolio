
import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function RainbowButton({
  children,
  className,
  variant = "primary",
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-12 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 px-8 py-2 font-semibold transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        // Rainbow shadow effect
        "shadow-[0_0_20px_rgba(0,0,0,0.2),0_0_0px_rgba(240,46,170,0.2),0_0_0px_rgba(240,46,170,0.2),0_0_0px_rgba(240,46,170,0.2)]",
        "hover:shadow-[0_0_20px_rgba(0,0,0,0.4),0_0_5px_rgba(var(--color-1),0.4),0_0_10px_rgba(var(--color-5),0.2),0_0_15px_rgba(var(--color-3),0.1)]",

        // Before styles - rainbow glow effect
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

        // Primary variant (dark background in light mode, light background in dark mode)
        variant === "primary" && "bg-foreground text-background dark:bg-background dark:text-foreground",
        
        // Secondary variant (light background in light mode, dark background in dark mode)
        variant === "secondary" && "bg-background text-foreground dark:bg-foreground dark:text-background",

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
