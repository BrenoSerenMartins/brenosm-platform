"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowIcon } from "@/src/components/icons/arrow-icon";
import styles from "@/src/features/home/portfolio-page.module.css";

function RailArrow({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className={styles.railArrow}
      aria-hidden="true"
      initial={false}
      animate={{
        opacity: visible ? 0.85 : 0,
        x: visible ? [0, 6, 0] : 10,
        scale: visible ? 1 : 0.9,
      }}
      transition={{ 
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        x: visible ? {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        } : { duration: 0.3 }
      }}
    >
      <ArrowIcon />
    </motion.div>
  );
}

function useRailArrowVisibility() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [showArrow, setShowArrow] = useState(false);
  const visibleRef = useRef(false);
  const reachedEndRef = useRef(false);

  useEffect(() => {
    const node = railRef.current;
    if (!node) {
      return;
    }

    const showThreshold = 20;
    const hideThreshold = 4;
    let frameId: number | null = null;

    const update = () => {
      const remaining = Math.max(0, node.scrollWidth - node.clientWidth - node.scrollLeft);
      const hasOverflow = node.scrollWidth > node.clientWidth + 4;

      if (remaining <= hideThreshold) {
        reachedEndRef.current = true;
      }

      if (reachedEndRef.current) {
        if (visibleRef.current) {
          visibleRef.current = false;
          setShowArrow(false);
        }
        return;
      }

      const nextVisible = hasOverflow
        ? (visibleRef.current ? remaining > hideThreshold : remaining > showThreshold)
        : false;

      if (nextVisible !== visibleRef.current) {
        visibleRef.current = nextVisible;
        setShowArrow(nextVisible);
      }
    };

    const scheduleUpdate = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        update();
      });
    };

    visibleRef.current = false;
    setShowArrow(false);
    scheduleUpdate();
    node.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    let resizeObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(scheduleUpdate);
      resizeObserver.observe(node);
    }

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      node.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
    };
  }, []);

  return { railRef, showArrow };
}

export function RailStage({
  children,
  railClassName,
}: {
  children: ReactNode;
  railClassName: string;
}) {
  const { railRef, showArrow } = useRailArrowVisibility();

  return (
    <div className={styles.railShell}>
      <div ref={railRef} className={railClassName}>
        {children}
      </div>
      <RailArrow visible={showArrow} />
    </div>
  );
}
