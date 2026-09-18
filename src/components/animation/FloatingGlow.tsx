"use client";

import { motion } from "motion/react";

type FloatingGlowProps = {
  className?: string;
  delay?: number;
};

export function FloatingGlow({
  className,
  delay = 0,
}: FloatingGlowProps) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{
        x: [0, -60, 40, 0],
        y: [0, 50, -30, 0],
        scale: [1, 1.15, 0.9, 1],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className={className}
    />
  );
}