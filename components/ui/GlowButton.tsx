"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
  pulse?: boolean;
  disabled?: boolean;
}

export default function GlowButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  pulse = true,
  disabled = false,
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer";

  const variants = {
    primary: `
      px-8 py-4 rounded-lg text-sm
      bg-amber text-void
      hover:bg-hot-core hover:shadow-[0_0_24px_rgba(255,182,39,0.7),0_0_64px_rgba(255,107,0,0.3)]
      active:bg-deep-edge active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
    `,
    secondary: `
      px-8 py-4 rounded-lg text-sm
      bg-transparent text-amber border border-amber/40
      hover:border-amber hover:bg-amber/5 hover:shadow-[0_0_16px_rgba(255,182,39,0.3)]
      active:bg-amber/10 active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${pulse && !disabled ? "glow-pulse" : ""} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Inner glow highlight */}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/20 to-transparent opacity-60 pointer-events-none" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
