"use client";

import SectionReveal from "@/components/ui/SectionReveal";

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-16 px-6 border-t border-smoke/20">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and tagline */}
            <div className="flex flex-col items-center md:items-start gap-2 shrink-0">
              <div className="flex items-center gap-3 overflow-visible">
                <span
                  className="font-display text-2xl text-amber pl-1"
                  style={{
                    textShadow:
                      "0 0 8px rgba(255, 182, 39, 0.6), 0 0 24px rgba(255, 182, 39, 0.3)",
                  }}
                >
                  DIMES
                </span>
              </div>
              <span className="dimes-label text-dim-amber text-[10px]">
                — Dimes Matchplay —
              </span>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <a
                href="#"
                className="text-cream/40 text-sm hover:text-cream/70 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-cream/40 text-sm hover:text-cream/70 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-cream/40 text-sm hover:text-cream/70 transition-colors duration-300"
              >
                Contact
              </a>
            </nav>

            {/* Social icons placeholder */}
            <div className="flex items-center gap-4">
              {/* X / Twitter */}
              <a
                href="#"
                className="text-cream/30 hover:text-amber transition-colors duration-300"
                aria-label="Follow us on X"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-cream/30 hover:text-amber transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="text-cream/30 hover:text-amber transition-colors duration-300"
                aria-label="Follow us on TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z" />
                </svg>
              </a>
            </div>
          </div>
        </SectionReveal>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-smoke/10 text-center">
          <p className="text-cream/20 text-xs">
            &copy; 2026 Dimes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
