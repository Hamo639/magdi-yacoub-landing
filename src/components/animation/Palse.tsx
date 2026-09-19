"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";


type RevealProps = {
  children: ReactNode;

  
};



export function Palse({
  children,
}: RevealProps) {
  return (
    <motion.div
     animate={{
      scale:[1,1.15,1,1.25]
     }}
    
      transition={{
        duration: 1,
        repeat:Infinity,
        ease:"easeIn",
        // repeatDelay:0.5
      }}
    >
      {children}
    </motion.div>
  );
}