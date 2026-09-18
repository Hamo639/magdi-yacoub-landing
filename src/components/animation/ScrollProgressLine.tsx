"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

type ScrollProgressLineProps = {
  children: React.ReactNode;
};

export function ScrollProgressLine({
  children,
}: ScrollProgressLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative">
      {/* الخط الرمادي الأساسي */}
      <div
        aria-hidden="true"
        className="absolute right-5 top-0 h-full w-px bg-border md:right-1/2"
      />

      {/* الخط المتحرك */}
      <motion.div
        aria-hidden="true"
        style={{
          scaleY,
          transformOrigin: "top",
        }}
        className="absolute right-5 top-0 h-full w-px bg-primary md:right-1/2"
      />

      {children}
    </div>
  );
}