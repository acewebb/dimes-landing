"use client";

import { motion, AnimatePresence } from "framer-motion";
import { heroSequence, easings } from "@/lib/animations";
import TypewriterText from "@/components/ui/TypewriterText";
import GlowButton from "@/components/ui/GlowButton";
import AmbientGlow from "@/components/effects/AmbientGlow";
import { useState, useRef, useCallback } from "react";

/**
 * Two-phase Hero:
 * Phase 1 — Cinematic video intro (plays once, ~8s)
 * Phase 2 — Video fades out, original static hero with logo + typewriter text appears
 */
export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [typewriterDone, setTypewriterDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = useCallback(() => {
    setVideoEnded(true);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* ===== PHASE 1: Video Intro ===== */}
      <AnimatePresence>
        {!videoEnded && (
          <motion.div
            className="absolute inset-0 z-30"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: easings.smooth }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/dimes-hero.mp4" type="video/mp4" />
            </video>
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Skip button */}
            <button
              onClick={handleVideoEnd}
              className="absolute bottom-8 right-8 z-40 text-cream/40 hover:text-cream/70 text-xs font-body uppercase tracking-widest transition-colors duration-300"
            >
              Skip →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== PHASE 2: Static Hero (always rendered, revealed when video fades) ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pb-16">
        {/* Ambient glow orbs */}
        <AmbientGlow top="30%" left="50%" size="xl" color="amber" delay={0.5} />
        <AmbientGlow top="60%" left="30%" size="lg" color="ember" delay={1.5} />
        <AmbientGlow top="40%" left="70%" size="md" color="dim" delay={2.5} />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          {videoEnded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "brightness(0) blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" }}
              transition={{ duration: 1.2, ease: easings.smooth }}
              className="mb-5 md:mb-6"
            >
              <div
                className="relative overflow-hidden w-[460px] md:w-[600px] lg:w-[750px]"
                style={{ marginTop: "-10%" }}
              >
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] rounded-full blur-3xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(255, 182, 39, 0.6) 0%, rgba(255, 107, 0, 0.3) 40%, transparent 70%)",
                  }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/dimes-logo-hero.png"
                  alt="Dimes Matchplay"
                  width={1792}
                  height={2400}
                  className="relative z-10 w-full h-auto mix-blend-lighten"
                  style={{ marginTop: "-18%", marginBottom: "-18%" }}
                />
              </div>
            </motion.div>
          )}

          {/* Headline — Typewriter */}
          {videoEnded && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="relative z-20 font-headline text-4xl md:text-6xl lg:text-7xl uppercase text-cream mb-5 md:mb-6"
            >
              <TypewriterText
                text="YOUR PHONE FINALLY PAYS"
                speed={55}
                delay={1200}
                onComplete={() => setTypewriterDone(true)}
              />
            </motion.h1>
          )}

          {/* Subheadline */}
          {videoEnded && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2, ease: easings.enter }}
              className="relative z-20 text-cream/70 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed mb-10 md:mb-12 font-body"
            >
              Free to play. Unlimited dimes. Real gift cards from brands you love.
            </motion.p>
          )}

          {/* CTA */}
          {videoEnded && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.6, ease: easings.enter }}
              className="relative z-20"
            >
              <GlowButton onClick={scrollToWaitlist} pulse>
                Get Early Access
              </GlowButton>
            </motion.div>
          )}
        </div>

        {/* Scroll indicator */}
        {videoEnded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.2 }}
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
        )}
      </div>
    </section>
  );
}
