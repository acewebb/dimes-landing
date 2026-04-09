"use client";

/**
 * VHS Grain Overlay
 * Brand Guidelines §5.2
 * CSS-based for performance — no canvas rendering.
 */
export default function GrainOverlay() {
  return (
    <>
      {/* Grain noise layer */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* CRT Scanlines */}
      <div className="crt-scanlines" aria-hidden="true" />

      {/* Vignette */}
      <div className="vignette" aria-hidden="true" />
    </>
  );
}
