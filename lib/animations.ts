/**
 * DIMES — Shared Framer Motion Variants & Easings
 * All animation config lives here for consistency.
 */

// Custom easing curves (never linear, never default ease)
export const easings = {
  enter: [0.25, 0.46, 0.45, 0.94] as const,
  exit: [0.55, 0.085, 0.68, 0.53] as const,
  smooth: [0.43, 0.13, 0.23, 0.96] as const,
  bounce: [0.68, -0.55, 0.27, 1.55] as const,
};

// Fade in from below — primary reveal
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.enter,
    },
  },
};

// Fade in from above
export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.enter,
    },
  },
};

// Simple fade
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easings.enter,
    },
  },
};

// Scale up from center (for logos, icons)
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.enter,
    },
  },
};

// CRT power-on: brightness bloom + scale
export const crtPowerOn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    filter: 'brightness(0)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'brightness(1)',
    transition: {
      duration: 1.0,
      ease: easings.enter,
      filter: { duration: 1.2, ease: easings.smooth },
    },
  },
};

// Stagger container — wrap children for staggered reveals
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Stagger container with slower timing
export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// Card reveal — used in How It Works, Features
export const cardReveal = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easings.enter,
    },
  },
};

// Slide in from left
export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easings.enter,
    },
  },
};

// Slide in from right
export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easings.enter,
    },
  },
};

// Phone mockup — slides up with slight rotation
export const phoneReveal = {
  hidden: {
    opacity: 0,
    y: 120,
    rotateX: 15,
    rotateZ: -2,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateZ: 0,
    transition: {
      duration: 1.0,
      ease: easings.smooth,
    },
  },
};

// Hero sequence — orchestrated entrance
export const heroSequence = {
  logo: {
    hidden: { opacity: 0, scale: 0.9, filter: 'brightness(0) blur(8px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'brightness(1) blur(0px)',
      transition: {
        duration: 1.2,
        ease: easings.smooth,
      },
    },
  },
  headline: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.0,
      },
    },
  },
  subheadline: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 2.2,
        ease: easings.enter,
      },
    },
  },
  cta: {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 2.6,
        ease: easings.enter,
      },
    },
  },
  scrollIndicator: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 3.2,
      },
    },
  },
};

// Viewport trigger settings for whileInView
export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: '-50px',
};
