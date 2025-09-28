'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
