"use client";

import { motion } from "framer-motion";

interface AmbientGlowProps {
  /** Position from top as percentage */
  top?: string;
  /** Position from left as percentage */
  left?: string;
  /** Size of the glow orb */
  size?: "sm" | "md" | "lg" | "xl";
  /** Color variant */
  color?: "amber" | "ember" | "dim";
  /** Animation delay */
  delay?: number;
  className?: string;
}

const sizeMap = {
  sm: "w-[200px] h-[200px]",
  md: "w-[400px] h-[400px]",
  lg: "w-[600px] h-[600px]",
  xl: "w-[900px] h-[900px]",
};

const colorMap = {
  amber: "rgba(255, 182, 39, 0.08)",
  ember: "rgba(255, 107, 0, 0.06)",
  dim: "rgba(139, 90, 0, 0.04)",
};

/**
 * Floating ambient glow orb
 * Creates atmospheric depth with subtle movement.
 */
export default function AmbientGlow({
  top = "50%",
  left = "50%",
  size = "lg",
  color = "amber",
  delay = 0,
  className = "",
}: AmbientGlowProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none blur-3xl ${sizeMap[size]} ${className}`}
      style={{
        top,
        left,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0, 1, 0.7, 1],
        scale: [0.8, 1, 1.05, 1],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}
