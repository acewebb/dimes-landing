"use client";

import { motion } from "framer-motion";
import { staggerContainer, cardReveal, viewportConfig } from "@/lib/animations";
import CRTEffect from "@/components/ui/CRTEffect";
import SectionReveal from "@/components/ui/SectionReveal";

const steps = [
  {
    number: "01",
    title: "SIGN UP FREE",
    description:
      "Download the app and get unlimited free dimes. No deposits. No credit card. Just tap play and you're in.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="18" r="8" stroke="#FFB627" strokeWidth="2" />
        <path d="M10 40C10 33.4 16.3 28 24 28S38 33.4 38 40" stroke="#FFB627" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 14L34 10M34 14L30 10" stroke="#FFD460" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="24" cy="18" r="3" fill="#FFB627" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "PLAY",
    description:
      "Match tiles in fast 1v1 games. Every round is free. Win and climb the 20-level ladder — your prize doubles each level.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect
          x="8"
          y="12"
          width="32"
          height="24"
          rx="2"
          stroke="#FFB627"
          strokeWidth="2"
        />
        <rect x="12" y="16" width="24" height="16" rx="1" stroke="#FFB627" strokeWidth="1" opacity="0.4" />
        <polygon points="20,20 20,28 28,24" fill="#FFB627" />
        <line x1="4" y1="40" x2="44" y2="40" stroke="#FFB627" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "CASH OUT",
    description:
      "Hit a milestone level and bank your winnings. Real gift cards, real cash. No points, no tokens, no tricks.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect
          x="8"
          y="14"
          width="32"
          height="22"
          rx="3"
          stroke="#FFB627"
          strokeWidth="2"
        />
        <line x1="8" y1="22" x2="40" y2="22" stroke="#FFB627" strokeWidth="1.5" />
        <circle cx="24" cy="30" r="3" stroke="#FFB627" strokeWidth="1.5" />
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fill="#FFB627"
          fontSize="5"
          fontWeight="bold"
        >
          $
        </text>
        <line x1="16" y1="12" x2="16" y2="14" stroke="#FFB627" strokeWidth="1.5" />
        <line x1="32" y1="12" x2="32" y2="14" stroke="#FFB627" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32 px-6" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <SectionReveal className="text-center mb-4">
          <span className="dimes-label text-dim-amber">
            — How It Works —
          </span>
        </SectionReveal>

        {/* Section title */}
        <SectionReveal className="text-center mb-16 md:mb-20" delay={0.1}>
          <h2 className="font-headline text-3xl md:text-5xl uppercase text-cream">
            THREE STEPS TO REAL REWARDS
          </h2>
        </SectionReveal>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {steps.map((step, i) => (
            <motion.div key={step.number} variants={cardReveal}>
              <CRTEffect delay={i * 0.15}>
                <div className="relative group bg-charcoal/50 border border-smoke/50 rounded-xl p-8 md:p-10 hover-glow transition-all duration-300 hover:border-amber/20 hover:bg-charcoal/80 h-full">
                  {/* Step number */}
                  <span className="font-numeric text-sm text-dim-amber mb-6 block tracking-wider">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-headline text-2xl md:text-3xl text-amber mb-4 uppercase">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-cream/60 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </CRTEffect>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
