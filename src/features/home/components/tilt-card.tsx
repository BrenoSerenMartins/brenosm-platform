"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { useEffect, useRef, type PropsWithChildren } from "react";
import styles from "@/src/features/home/portfolio-page.module.css";
import { useSupportsHover } from "@/src/lib/use-supports-hover";

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
  const supportsHover = useSupportsHover();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const hoverEnabledRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const pendingPointRef = useRef({ x: 0.5, y: 0.5 });

  const smoothX = useSpring(pointerX, { stiffness: 220, damping: 26, mass: 0.25 });
  const smoothY = useSpring(pointerY, { stiffness: 220, damping: 26, mass: 0.25 });

  const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1], [-12, 12]);
  const mobileRotateY = {
    cyan: -8,
    violet: 8,
    indigo: -6,
    gold: 6,
  }[tone];

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    hoverEnabledRef.current = media.matches;

    const handleChange = (event: MediaQueryListEvent) => {
      hoverEnabledRef.current = event.matches;
    };

    media.addEventListener("change", handleChange);

    return () => {
      hoverEnabledRef.current = false;
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      media.removeEventListener("change", handleChange);
    };
  }, [prefersReducedMotion]);

  const schedulePoint = (nextX: number, nextY: number) => {
    pendingPointRef.current.x = nextX;
    pendingPointRef.current.y = nextY;

    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      pointerX.set(pendingPointRef.current.x);
      pointerY.set(pendingPointRef.current.y);
      frameRef.current = null;
    });
  };

  return (
    <motion.article
      {...props}
      className={`${styles.tiltCard} ${toneClassMap[tone]} ${className ?? ""}`}
      data-tone={tone}
      style={
        prefersReducedMotion
          ? undefined
          : supportsHover
            ? { rotateX, rotateY, willChange: "transform, opacity" }
            : { rotateX: 5, rotateY: mobileRotateY, transformStyle: "preserve-3d", perspective: 1000, willChange: "transform, opacity" }
      }
      whileHover={prefersReducedMotion || !supportsHover ? undefined : { y: -6, scale: 1.01 }}
      onPointerMove={(event) => {
        if (prefersReducedMotion || !supportsHover || !hoverEnabledRef.current) {
          return;
        }

        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        schedulePoint((event.clientX - rect.left) / rect.width, (event.clientY - rect.top) / rect.height);
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
