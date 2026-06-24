"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import styles from "@/src/features/home/portfolio-page.module.css";

export function PremiumCursor() {
  const prefersReducedMotion = useReducedMotion();
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const outerX = useSpring(cursorX, { stiffness: 70, damping: 28, mass: 0.8 });
  const outerY = useSpring(cursorY, { stiffness: 70, damping: 28, mass: 0.8 });
  const coreX = useSpring(cursorX, { stiffness: 240, damping: 32, mass: 0.2 });
  const coreY = useSpring(cursorY, { stiffness: 240, damping: 32, mass: 0.2 });

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => window.removeEventListener("pointermove", handleMove);
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <>
      <motion.div className={styles.cursorOuter} style={{ left: outerX, top: outerY, willChange: "transform" }} />
      <motion.div className={styles.cursorInner} style={{ left: coreX, top: coreY, willChange: "transform" }} />
    </>
  );
}
