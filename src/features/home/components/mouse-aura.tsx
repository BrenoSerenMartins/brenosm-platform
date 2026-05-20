"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import styles from "@/src/features/home/home-page.module.css";

export function MouseAura() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, { stiffness: 120, damping: 24, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 24, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (media.matches) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [x, y]);

  return <motion.div className={styles.mouseAura} style={{ left: smoothX, top: smoothY }} />;
}
