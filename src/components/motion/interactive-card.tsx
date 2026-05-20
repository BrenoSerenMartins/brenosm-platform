"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type InteractiveCardProps = PropsWithChildren<{
  className?: string;
}>;

export function InteractiveCard({ children, className }: InteractiveCardProps) {
  return (
    <motion.article
      className={className}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  );
}
