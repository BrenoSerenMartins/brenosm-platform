"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { useSupportsHover } from "@/src/lib/use-supports-hover";

type InteractiveCardProps = PropsWithChildren<{
  className?: string;
}>;

export function InteractiveCard({ children, className }: InteractiveCardProps) {
  const supportsHover = useSupportsHover();

  return (
    <motion.article
      className={className}
      style={
        supportsHover
          ? undefined
          : { transformStyle: "preserve-3d", perspective: 900, rotateX: 4, rotateY: -6, willChange: "transform" }
      }
      whileHover={supportsHover ? { y: -8, scale: 1.01 } : undefined}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  );
}
