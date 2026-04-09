"use client";

import { motion } from "framer-motion";
import { heroSequence } from "@/lib/animations";
import TypewriterText from "@/components/ui/TypewriterText";
import GlowButton from "@/components/ui/GlowButton";
import AmbientGlow from "@/components/effects/AmbientGlow";
import { useState } from "react";

export default function Hero() {
  const [typewriterDone, setTypewriterDone] = useState(false);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pb-16">
      {/* Ambient glow orbs */}
      <AmbientGlow top="30%" left="50%" size="xl" color="amber" delay={0.5} />
      <AmbientGlow top="60%" left="30%" size="lg" color="ember" delay={1.5} />
      <AmbientGlow top="40%" left="70%" size="md" color="dim" delay={2.5} />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Logo — Hero Mark (speedline variant per brand guidelines §2.2) */}
        <motion.div
          variants={heroSequence.logo}
          initial="hidden"
          animate="visible"
          className="mb-5 md:mb-6"
        >
          <div className="relative overflow-hidden w-[460px] md:w-[600px] lg:w-[750px]" style={{ marginTop: '-10%' }}>
            {/* Logo phosphor bloom — glow backdrop */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] rounded-full blur-3xl opacity-50"
              style={{ background: "radial-gradient(ellipse, rgba(255, 182, 39, 0.6) 0%, rgba(255, 107, 0, 0.3) 40%, transparent 70%)" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dimes-logo-hero.png"
              alt="Dimes Matchplay"
              width={1792}
              height={2400}
              className="relative z-10 w-full h-auto mix-blend-lighten"
              style={{ marginTop: '-18%', marginBottom: '-18%' }}
            />
          </div>
        </motion.div>

        {/* Tagline — Typewriter effect */}
        <motion.h1
          variants={heroSequence.headline}
          initial="hidden"
          animate="visible"
          className="relative z-20 font-headline text-4xl md:text-6xl lg:text-7xl uppercase text-cream mb-5 md:mb-6"
        >
          <TypewriterText
            text="YOUR PHONE FINALLY PAYS"
            speed={55}
            delay={1200}
            onComplete={() => setTypewriterDone(true)}
          />
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={heroSequence.subheadline}
          initial="hidden"
          animate="visible"
          className="relative z-20 text-cream/70 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed mb-10 md:mb-12 font-body"
        >
          Free to play. Unlimited dimes. Real gift cards from brands you love.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={heroSequence.cta}
          initial="hidden"
          animate="visible"
          className="relative z-20"
        >
          <GlowButton onClick={scrollToWaitlist} pulse>
            Get Early Access
          </GlowButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={heroSequence.scrollIndicator}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="dimes-label text-dim-amber text-[10px]">Scroll</span>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="scroll-indicator text-dim-amber"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
