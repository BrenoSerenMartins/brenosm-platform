"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { revealSoftItem, revealUpItem } from "@/src/lib/motion";

type RevealItemProps = PropsWithChildren<{
  className?: string;
  variant?: "up" | "soft";
  delay?: number;
}>;

export function RevealItem({ children, className, variant = "up", delay }: RevealItemProps) {
  const variants = variant === "soft" ? revealSoftItem : revealUpItem;

  return (
    <motion.div className={className} variants={variants} transition={delay ? { delay } : undefined}>
      {children}
    </motion.div>
  );
}
