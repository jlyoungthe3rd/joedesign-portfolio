'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Respect user prefers-reduced-motion; if true, render children without animation.
const usePrefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export default function ScrollFadeIn({
  children,
  delay = 0,
  duration = 0.5,
}: ScrollFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = usePrefersReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (prefersReducedMotion) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
