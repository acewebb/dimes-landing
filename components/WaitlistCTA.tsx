"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import SectionReveal from "@/components/ui/SectionReveal";
import AmbientGlow from "@/components/effects/AmbientGlow";
import WaitlistForm from "@/components/ui/WaitlistForm";

export default function WaitlistCTA() {
  return (
    <section className="relative py-24 md:py-40 px-6" id="waitlist">
      <AmbientGlow top="50%" left="50%" size="xl" color="amber" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <SectionReveal className="mb-4">
          <span className="dimes-label text-dim-amber">
            — Early Access —
          </span>
        </SectionReveal>

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

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          <WaitlistForm source="footer-cta" />
        </motion.div>

        <SectionReveal delay={0.4}>
          <p className="text-cream/30 text-xs mt-6">
            No spam. No selling your data. Just your invite.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
