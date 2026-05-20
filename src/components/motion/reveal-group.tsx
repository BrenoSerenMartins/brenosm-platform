"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { staggerContainer } from "@/src/lib/motion";

type RevealGroupProps = PropsWithChildren<{
  className?: string;
}>;

export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <motion.div className={className} variants={staggerContainer}>
      {children}
    </motion.div>
  );
}
