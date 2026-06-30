"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useSupportsHover } from "@/src/lib/use-supports-hover";
import styles from "@/src/features/home/portfolio-page.module.css";

export function TiltCard({ children, className, idx = 0 }: { children: React.ReactNode; className?: string; idx?: number }) {
  const supportsHover = useSupportsHover();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const hoverEnabledRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const pendingPointRef = useRef({ x: 0.5, y: 0.5 });

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    schedulePoint(mouseX / width - 0.5, mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const mobileTilt = { rotateX: 0, rotateY: 0 };

  return (
    <motion.article
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      style={{
        rotateX: supportsHover ? rotateX : mobileTilt.rotateX,
        rotateY: supportsHover ? rotateY : mobileTilt.rotateY,
        transformStyle: supportsHover ? "preserve-3d" : undefined,
        perspective: supportsHover ? 1000 : undefined,
        willChange: "transform, opacity",
      }}
    >
      <div className={styles.projectCardInner} style={{ transform: supportsHover ? "translateZ(40px)" : undefined }}>
        {/* Efeito de brilho que segue o mouse */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
            pointerEvents: "none",
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            x: useTransform(x, [-0.5, 0.5], ["-50%", "50%"]),
            y: useTransform(y, [-0.5, 0.5], ["-50%", "50%"]),
            opacity: useTransform(mouseXSpring, [-0.5, 0, 0.5], [1, 0, 1]),
          }}
        />
        {children}
      </div>
    </motion.article>
  );
}
