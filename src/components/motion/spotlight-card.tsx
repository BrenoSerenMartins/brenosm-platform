"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useSupportsHover } from "@/src/lib/use-supports-hover";
import styles from "@/src/features/home/portfolio-page.module.css";

export function SpotlightCard({ children, className, idx = 0 }: { children: React.ReactNode; className?: string; idx?: number }) {
  const supportsHover = useSupportsHover();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const mobileTilt = idx % 2 === 0
    ? { rotateX: 5, rotateY: -8 }
    : { rotateX: 5, rotateY: 8 };

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
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: supportsHover ? 0 : mobileTilt.rotateX,
        rotateY: supportsHover ? 0 : mobileTilt.rotateY,
        willChange: "transform, opacity",
      }}
    >
      <div 
        style={{ 
          position: "relative", 
          borderRadius: "clamp(16px, 2vw, 24px)", 
          overflow: "hidden",
          height: "100%"
        }}
      >
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
          {children}
        </div>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
            pointerEvents: "none",
            background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.12), transparent 80%)`,
          }}
        />
      </div>
    </motion.article>
  );
}
