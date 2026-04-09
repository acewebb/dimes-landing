"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { phoneReveal, viewportConfig } from "@/lib/animations";
import SectionReveal from "@/components/ui/SectionReveal";
import AmbientGlow from "@/components/effects/AmbientGlow";

/**
 * Phone mockup with Dimes app UI placeholder
 * Brand Guidelines §7.1 — phone on dark surface, screen glow
 */
export default function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax — phone floats slightly
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-40 px-6 overflow-hidden"
      id="app"
    >
      {/* Background glow */}
      <AmbientGlow top="50%" left="50%" size="xl" color="amber" />
      <AmbientGlow top="45%" left="45%" size="lg" color="ember" delay={2} />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <SectionReveal className="text-center mb-4">
          <span className="dimes-label text-dim-amber">
            — The App —
          </span>
        </SectionReveal>

        <SectionReveal className="text-center mb-16" delay={0.1}>
          <h2 className="font-headline text-3xl md:text-5xl uppercase text-cream mb-4">
            BUILT TO WIN
          </h2>
          <p className="text-cream/50 max-w-md mx-auto text-sm md:text-base">
            Every pixel designed to make your phone time count.
          </p>
        </SectionReveal>

        {/* Phone Mockup */}
        <motion.div
          variants={phoneReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex justify-center"
        >
          <motion.div
            style={{ y, rotateX, perspective: 1200 }}
            className="relative md:block"
          >
            {/* Glow behind phone */}
            <div
              className="absolute -inset-16 md:-inset-24 rounded-full blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255, 182, 39, 0.3) 0%, rgba(255, 107, 0, 0.15) 40%, transparent 70%)",
              }}
            />

            {/* iPhone frame */}
            <div className="relative w-[280px] md:w-[320px] mx-auto">
              {/* Phone body */}
              <div className="relative bg-[#111] rounded-[40px] md:rounded-[48px] p-3 md:p-3.5 border border-smoke/60 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#111] rounded-b-2xl z-20" />

                {/* Screen */}
                <div className="relative bg-void rounded-[28px] md:rounded-[36px] overflow-hidden aspect-[9/19.5]">
                  {/* App UI Placeholder — matches brand aesthetic */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Status bar area */}
                    <div className="h-12 flex items-end justify-between px-5 pb-1">
                      <span className="font-numeric text-[10px] text-cream/40">9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-4 h-2 border border-cream/40 rounded-sm">
                          <div className="w-2.5 h-full bg-cream/40 rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-5 pt-4 pb-3">
                      <span className="dimes-label text-dim-amber text-[8px]">
                        — Dimes Matchplay —
                      </span>
                    </div>

                    {/* Ladder Level Display */}
                    <div className="px-5 py-4">
                      <span className="text-[9px] text-cream/40 uppercase tracking-widest block mb-1">
                        Current Level
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span
                          className="font-numeric text-3xl md:text-4xl font-bold text-amber block"
                          style={{
                            textShadow:
                              "0 0 12px rgba(255, 182, 39, 0.6), 0 0 32px rgba(255, 182, 39, 0.3)",
                          }}
                        >
                          LVL 8
                        </span>
                        <span className="font-numeric text-sm text-payout-green font-bold">$12.80</span>
                      </div>
                    </div>

                    {/* Game cards */}
                    <div className="px-4 space-y-2.5 flex-1">
                      {/* Active match card */}
                      <div className="bg-charcoal/80 rounded-xl p-3 border border-amber/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[9px] text-amber font-semibold uppercase tracking-wider">
                            Live Match
                          </span>
                          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <span className="text-cream text-[11px] font-medium block">
                              Tile Match 1v1
                            </span>
                            <span className="text-cream/40 text-[9px]">
                              Free Entry
                            </span>
                          </div>
                          <span className="font-numeric text-[11px] text-amber font-bold">
                            Win → $25.60
                          </span>
                        </div>
                      </div>

                      {/* Milestone card */}
                      <div className="bg-charcoal/60 rounded-xl p-3 border border-payout-green/30">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-payout-green/10 flex items-center justify-center">
                            <span className="text-payout-green text-[14px]">💰</span>
                          </div>
                          <div className="flex-1">
                            <span className="text-cream text-[10px] font-medium block">
                              Milestone Cash-Out
                            </span>
                            <span className="text-payout-green/70 text-[9px]">
                              Bank $12.80 or risk it
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Recent win */}
                      <div className="bg-charcoal/40 rounded-xl p-3 border border-smoke/30">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-smoke flex items-center justify-center">
                            <span className="text-[14px]">⚡</span>
                          </div>
                          <div className="flex-1">
                            <span className="text-cream/70 text-[10px] font-medium block">
                              Won Level 7
                            </span>
                            <span className="text-cream/30 text-[9px]">
                              12 tiles matched in 19s
                            </span>
                          </div>
                          <span className="font-numeric text-[10px] text-payout-green font-bold">
                            +$6.40
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="mt-auto px-5 py-3 flex justify-around items-center border-t border-smoke/30">
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-5 h-5 rounded-md bg-amber/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-sm bg-amber" />
                        </div>
                        <span className="text-[7px] text-amber">Play</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-5 h-5 rounded-md flex items-center justify-center">
                          <div className="w-3 h-2 border border-cream/30 rounded-sm" />
                        </div>
                        <span className="text-[7px] text-cream/30">Wallet</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <div className="w-5 h-5 rounded-md flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full border border-cream/30" />
                        </div>
                        <span className="text-[7px] text-cream/30">Profile</span>
                      </div>
                    </div>

                    {/* Home indicator */}
                    <div className="flex justify-center py-2">
                      <div className="w-24 h-1 bg-cream/20 rounded-full" />
                    </div>
                  </div>

                  {/* Screen CRT scanline overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      background:
                        "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)",
                    }}
                  />
                </div>
              </div>

              {/* Reflection / glow at bottom */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[60px] rounded-full blur-2xl opacity-15"
                style={{ background: "rgba(255, 182, 39, 0.5)" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
