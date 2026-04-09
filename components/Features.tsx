"use client";

import { motion } from "framer-motion";
import { staggerContainer, cardReveal, viewportConfig } from "@/lib/animations";
import SectionReveal from "@/components/ui/SectionReveal";

const features = [
  {
    title: "REAL REWARDS, NOT POINTS",
    description:
      "Win actual gift cards from brands you use. No conversion rates. No fine print. Rewards you can spend today.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="8" width="32" height="24" rx="4" stroke="#FFB627" strokeWidth="1.5" />
        <line x1="4" y1="16" x2="36" y2="16" stroke="#FFB627" strokeWidth="1" opacity="0.5" />
        <circle cx="28" cy="24" r="4" stroke="#FFD460" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" stroke="#FFB627" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: "SKILL, NOT LUCK",
    description:
      "Every game is designed to be fair. No random number generators picking winners. Better play equals better results.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <polygon
          points="20,4 24,16 36,16 26,24 30,36 20,28 10,36 14,24 4,16 16,16"
          stroke="#FFB627"
          strokeWidth="1.5"
          fill="none"
        />
        <polygon
          points="20,12 22,18 28,18 23,22 25,28 20,24 15,28 17,22 12,18 18,18"
          fill="#FFB627"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    title: "100% FREE TO PLAY",
    description:
      "No deposits. No entry fees. You get unlimited free dimes every time you hit play on Level 1. Your rewards are funded by sponsors, not your wallet.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="16" stroke="#FFB627" strokeWidth="1.5" />
        <path d="M14 20L18 24L26 16" stroke="#FFD460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="12" stroke="#FFB627" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "THE LADDER DOUBLES",
    description:
      "Start at $0.10. Win and your prize doubles every level. 20 levels. Milestone cash-outs. Risk it or bank it — your call.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="10" y="18" width="20" height="16" rx="2" stroke="#FFB627" strokeWidth="1.5" />
        <path d="M14 18V12C14 8.7 16.7 6 20 6S26 8.7 26 12V18" stroke="#FFB627" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="26" r="2.5" fill="#FFD460" />
        <line x1="20" y1="28.5" x2="20" y2="31" stroke="#FFD460" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="relative py-24 md:py-32 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <SectionReveal className="text-center mb-4">
          <span className="dimes-label text-dim-amber">
            — Why Dimes —
          </span>
        </SectionReveal>

        <SectionReveal className="text-center mb-16 md:mb-20" delay={0.1}>
          <h2 className="font-headline text-3xl md:text-5xl uppercase text-cream">
            NOT ANOTHER POINTS APP
          </h2>
        </SectionReveal>

        {/* Feature grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardReveal}
              className="group relative bg-charcoal/30 border border-smoke/30 rounded-xl p-8 md:p-10 hover-glow transition-all duration-300 hover:border-amber/15 hover:bg-charcoal/50"
            >
              {/* Icon with glow */}
              <div className="mb-6 relative">
                <div className="absolute -inset-2 bg-amber/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3 className="font-headline text-xl md:text-2xl text-amber mb-3 uppercase">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-cream/55 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
