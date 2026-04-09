"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/lib/animations";
import SectionReveal from "@/components/ui/SectionReveal";
import CRTEffect from "@/components/ui/CRTEffect";

const trustBadges = [
  {
    label: "Free To Play",
    sublabel: "No deposits ever",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <path d="M16 2L4 8V16C4 23.2 9.1 29.7 16 31C22.9 29.7 28 23.2 28 16V8L16 2Z" stroke="#FFB627" strokeWidth="1.5" fill="none" />
        <polyline points="10,16 14,20 22,12" stroke="#FFD460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Sponsor-Funded Rewards",
    sublabel: "Brands pay, you play",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <rect x="6" y="14" width="20" height="14" rx="2" stroke="#FFB627" strokeWidth="1.5" />
        <path d="M10 14V10C10 6.7 12.7 4 16 4S22 6.7 22 10V14" stroke="#FFB627" strokeWidth="1.5" />
        <circle cx="16" cy="21" r="2" fill="#FFD460" />
      </svg>
    ),
  },
  {
    label: "Real Rewards",
    sublabel: "Major brand gift cards",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
        <rect x="4" y="8" width="24" height="16" rx="3" stroke="#FFB627" strokeWidth="1.5" />
        <line x1="4" y1="14" x2="28" y2="14" stroke="#FFB627" strokeWidth="1" opacity="0.5" />
        <line x1="16" y1="8" x2="16" y2="24" stroke="#FFB627" strokeWidth="1" opacity="0.5" />
        <circle cx="16" cy="8" r="3" stroke="#FFD460" strokeWidth="1.5" fill="#1A1A1A" />
      </svg>
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 md:py-32 px-6" id="trust">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <SectionReveal className="text-center mb-4">
          <span className="dimes-label text-dim-amber">
            — Built Different —
          </span>
        </SectionReveal>

        <SectionReveal className="text-center mb-16 md:mb-20" delay={0.1}>
          <h2 className="font-headline text-3xl md:text-5xl uppercase text-cream">
            TRUST THE PLATFORM
          </h2>
        </SectionReveal>

        {/* Trust badges row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {trustBadges.map((badge) => (
            <motion.div key={badge.label} variants={fadeInUp}>
              <CRTEffect>
                <div className="flex flex-col items-center text-center p-6 bg-charcoal/30 border border-smoke/30 rounded-xl hover-glow transition-all duration-300 hover:border-amber/15">
                  <div className="mb-4 p-3 rounded-full border border-amber/20 bg-amber/5">
                    {badge.icon}
                  </div>
                  <span className="font-headline text-lg text-cream uppercase mb-1">
                    {badge.label}
                  </span>
                  <span className="text-cream/40 text-sm">{badge.sublabel}</span>
                </div>
              </CRTEffect>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform announcement */}
        <SectionReveal className="text-center" delay={0.3}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-charcoal/40 border border-smoke/40 rounded-2xl px-8 py-6">
            {/* App Store */}
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path
                  d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.41 4.8C17.07 4.83 18.93 5.06 20.12 6.82C20.01 6.89 17.6 8.27 17.63 11.16C17.67 14.63 20.66 15.79 20.7 15.8C20.66 15.9 20.18 17.58 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                  fill="#F5EFE0"
                  opacity="0.6"
                />
              </svg>
              <div className="text-left">
                <span className="text-cream/40 text-[10px] uppercase tracking-wider block">
                  Coming Soon to
                </span>
                <span className="text-cream text-sm font-medium">
                  App Store
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-smoke/50" />
            <div className="sm:hidden w-16 h-px bg-smoke/50" />

            {/* Google Play */}
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M3.61 1.814L13.792 12 3.61 22.186A1.99 1.99 0 013 20.318V3.682c0-.683.233-1.138.61-1.868z" fill="#F5EFE0" opacity="0.6" />
                <path d="M14.855 13.063l2.484 1.449-3.374 3.374-2.484-1.449z" fill="#F5EFE0" opacity="0.4" />
                <path d="M17.339 11.614L14.855 10.165 11.48 13.54l2.484 1.449z" fill="#F5EFE0" opacity="0.5" />
                <path d="M20.18 10.927l-2.841-1.655-2.484 1.449L17.339 12l-2.484 1.449 2.484 1.449 2.841-1.655c.898-.525.898-1.79 0-2.316z" fill="#F5EFE0" opacity="0.6" />
              </svg>
              <div className="text-left">
                <span className="text-cream/40 text-[10px] uppercase tracking-wider block">
                  Coming Soon to
                </span>
                <span className="text-cream text-sm font-medium">
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Waitlist count */}
        <SectionReveal className="text-center mt-8" delay={0.4}>
          <p className="text-cream/40 text-sm">
            Join{" "}
            <span className="font-numeric text-amber font-bold">2,000+</span>{" "}
            players already on the waitlist
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
