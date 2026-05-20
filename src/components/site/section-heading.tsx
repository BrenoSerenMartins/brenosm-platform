"use client";

import { motion } from "framer-motion";
import { revealSoftItem } from "@/src/lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <motion.p variants={revealSoftItem}>{eyebrow}</motion.p>
      <motion.h2 variants={revealSoftItem}>{title}</motion.h2>
    </div>
  );
}
