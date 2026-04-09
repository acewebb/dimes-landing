"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import SectionReveal from "@/components/ui/SectionReveal";
import AmbientGlow from "@/components/effects/AmbientGlow";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="relative py-24 md:py-40 px-6" id="waitlist">
      {/* Background ambiance */}
      <AmbientGlow top="50%" left="50%" size="xl" color="amber" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Section label */}
        <SectionReveal className="mb-4">
          <span className="dimes-label text-dim-amber">
            — Early Access —
          </span>
        </SectionReveal>

        {/* Headline */}
        <SectionReveal delay={0.1}>
          <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl uppercase text-cream mb-4">
            GET IN EARLY
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="text-cream/50 text-base md:text-lg mb-10 max-w-md mx-auto">
            First access goes to the waitlist. No spam. Just your invite when we launch.
          </p>
        </SectionReveal>

        {/* Email form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
              >
                {/* Email input with CRT warm-up on focus */}
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="your@email.com"
                    required
                    className={`
                      w-full px-5 py-4 rounded-lg
                      bg-charcoal/60 border text-cream
                      placeholder:text-cream/25
                      font-body text-sm
                      outline-none transition-all duration-300
                      ${
                        isFocused
                          ? "border-amber/60 shadow-[0_0_16px_rgba(255,182,39,0.2),0_0_32px_rgba(255,182,39,0.1)]"
                          : "border-smoke/50 hover:border-smoke"
                      }
                    `}
                  />
                  {/* Focus glow effect */}
                  {isFocused && (
                    <motion.div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        boxShadow:
                          "inset 0 1px 0 rgba(255, 182, 39, 0.1), 0 0 24px rgba(255, 182, 39, 0.08)",
                      }}
                    />
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    px-8 py-4 rounded-lg
                    bg-amber text-void font-semibold text-sm
                    uppercase tracking-wide
                    hover:bg-hot-core hover:shadow-[0_0_24px_rgba(255,182,39,0.5)]
                    active:bg-deep-edge
                    transition-all duration-300
                    glow-pulse cursor-pointer
                  "
                >
                  Join Waitlist
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, filter: "brightness(2)" }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "brightness(1)",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex flex-col items-center gap-4 py-4"
              >
                {/* Success check with glow bloom */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.68, -0.55, 0.27, 1.55],
                  }}
                  className="w-16 h-16 rounded-full bg-amber/10 border-2 border-amber flex items-center justify-center"
                  style={{
                    boxShadow:
                      "0 0 24px rgba(255, 182, 39, 0.5), 0 0 64px rgba(255, 182, 39, 0.2)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-8 h-8 text-amber"
                  >
                    <motion.path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    />
                  </svg>
                </motion.div>

                <span className="font-headline text-2xl md:text-3xl text-amber uppercase">
                  YOU&apos;RE IN
                </span>
                <p className="text-cream/50 text-sm">
                  We&apos;ll send your early access invite to{" "}
                  <span className="text-cream/70">{email}</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Trust copy */}
        {!isSubmitted && (
          <SectionReveal delay={0.4}>
            <p className="text-cream/30 text-xs mt-6">
              No spam. No selling your data. Just your invite.
            </p>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
