import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AppShowcase from "@/components/AppShowcase";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/effects/GrainOverlay";

export default function Home() {
  return (
    <main className="relative">
      {/* Global CRT effects layer */}
      <GrainOverlay />

      {/* Page sections */}
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
