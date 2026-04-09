"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per character
  delay?: number; // ms before starting
  onComplete?: () => void;
  showCursor?: boolean;
}

export default function TypewriterText({
  text,
  className = "",
  speed = 65,
  delay = 1000,
  onComplete,
  showCursor = true,
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [isInView, delay]);

  useEffect(() => {
    if (!hasStarted) return;
    if (displayedChars >= text.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedChars((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [hasStarted, displayedChars, text.length, speed, onComplete]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {text.slice(0, displayedChars)}
      </span>
      {showCursor && !isComplete && hasStarted && (
        <span className="typewriter-cursor" aria-hidden="true" />
      )}
      {/* Invisible full text for layout stability */}
      <span className="sr-only">{text}</span>
    </span>
  );
}
