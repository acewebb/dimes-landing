import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import GrainOverlay from "@/components/effects/GrainOverlay";

// Lazy-load below-fold sections — only load when user scrolls near them
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const AppShowcase = dynamic(() => import("@/components/AppShowcase"));
const Features = dynamic(() => import("@/components/Features"));
const SocialProof = dynamic(() => import("@/components/SocialProof"));
const WaitlistCTA = dynamic(() => import("@/components/WaitlistCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative">
      <GrainOverlay />

      <Hero />

      <div className="section-divider" />
      <HowItWorks />

      <div className="section-divider" />
      <AppShowcase />

      <div className="section-divider" />
      <Features />

      <div className="section-divider" />
      <SocialProof />

      <div className="section-divider" />
      <WaitlistCTA />

      <Footer />
    </main>
  );
}
