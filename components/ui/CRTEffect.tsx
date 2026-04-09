"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface CRTEffectProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * CRT Warm-up Effect
 * Wraps children in a "powering on" animation with scan-line sweep.
 * Brand Guidelines §5.1, §5.6
 */
export default function CRTEffect({
  children,
  className = "",
  delay = 0,
}: CRTEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Content with CRT warm-up */}
      <motion.div
        initial={{ opacity: 0, filter: "brightness(0)" }}
        animate={
          isInView
            ? {
                opacity: 1,
                filter: "brightness(1)",
                transition: {
                  duration: 0.8,
                  delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  filter: {
                    duration: 1.0,
                    delay,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  },
                },
              }
            : undefined
        }
      >
        {children}
      </motion.div>

      {/* Scan-line sweep overlay */}
      {isInView && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        >
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber/60 to-transparent"
            style={{ boxShadow: "0 0 16px 4px rgba(255, 182, 39, 0.3)" }}
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{
              duration: 0.6,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
