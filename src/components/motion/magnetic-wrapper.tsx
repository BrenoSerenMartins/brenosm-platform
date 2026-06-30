"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const hoverEnabledRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const pendingPointRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
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
  }, []);

  const schedulePoint = (nextX: number, nextY: number) => {
    pendingPointRef.current.x = nextX;
    pendingPointRef.current.y = nextY;

    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      x.set(pendingPointRef.current.x);
      y.set(pendingPointRef.current.y);
      frameRef.current = null;
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEnabledRef.current) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    schedulePoint(mouseX * 0.15, mouseY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springX = useSpring(x, { stiffness: 250, damping: 20, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 250, damping: 20, mass: 0.1 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: "inline-block", willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
