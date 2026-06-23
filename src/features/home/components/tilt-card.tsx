"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";
import styles from "@/src/features/home/portfolio-page.module.css";

type TiltCardProps = PropsWithChildren<
  HTMLMotionProps<"article"> & {
    tone?: "cyan" | "violet" | "indigo" | "gold";
  }
>;

const toneClassMap = {
  cyan: styles.toneCyan,
  violet: styles.toneViolet,
  indigo: styles.toneIndigo,
  gold: styles.toneGold,
} as const;

export function TiltCard({ children, className, tone = "cyan", ...props }: TiltCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const smoothX = useSpring(pointerX, { stiffness: 220, damping: 26, mass: 0.25 });
  const smoothY = useSpring(pointerY, { stiffness: 220, damping: 26, mass: 0.25 });

  const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1], [-12, 12]);

  return (
    <motion.article
      {...props}
      className={`${styles.tiltCard} ${toneClassMap[tone]} ${className ?? ""}`}
      data-tone={tone}
      style={prefersReducedMotion ? undefined : { rotateX, rotateY }}
      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
      onPointerMove={(event) => {
        if (prefersReducedMotion) {
          return;
        }

        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width);
        pointerY.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        pointerX.set(0.5);
        pointerY.set(0.5);
      }}
    >
      <div className={styles.tiltCardGlow} />
      <div className={styles.tiltCardContent}>{children}</div>
    </motion.article>
  );
}
