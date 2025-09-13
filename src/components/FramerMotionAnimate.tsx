'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

interface IFramerMotionAnimateProps {
  children: React.ReactNode;
  className?: string;
}

export function FramerMotionAnimate({ children, className }: IFramerMotionAnimateProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== 'undefined' ? window.location.pathname : 'page'}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={clsx(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
