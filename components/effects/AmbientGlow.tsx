"use client";

interface AmbientGlowProps {
  top?: string;
  left?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "amber" | "ember" | "dim";
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
 * Ambient glow orb — now pure CSS for performance.
 * No Framer Motion infinite loops eating up JS frames.
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
    <div
      className={`absolute rounded-full pointer-events-none blur-3xl ${sizeMap[size]} ${className}`}
      style={{
        top,
        left,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
        animation: `ambient-pulse 8s ease-in-out ${delay}s infinite alternate`,
      }}
      aria-hidden="true"
    />
  );
}
