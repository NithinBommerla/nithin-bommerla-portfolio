
import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { RainbowButton } from "./rainbow-button";

interface ButtonWithArrowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction?: "right" | "left";
  variant?: "primary" | "secondary";
}

export function ButtonWithArrow({
  children,
  className,
  direction = "right",
  variant = "primary",
  ...props
}: ButtonWithArrowProps) {
  return (
    <RainbowButton
      className={cn("group", className)}
      variant={variant}
      {...props}
    >
      <span className="flex items-center">
        {direction === "left" && (
          <ArrowLeft
            className="mr-2 opacity-70 transition-transform group-hover:-translate-x-0.5"
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
        )}
        {children}
        {direction === "right" && (
          <ArrowRight
            className="ml-2 opacity-70 transition-transform group-hover:translate-x-0.5"
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
        )}
      </span>
    </RainbowButton>
  );
}
