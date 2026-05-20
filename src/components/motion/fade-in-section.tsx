"use client";

import { motion, useAnimation, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";
import { sectionContainer, springEase } from "@/src/lib/motion";

type FadeInSectionProps = PropsWithChildren<{
  className?: string;
  id?: string;
}>;

export function FadeInSection({ children, className, id }: FadeInSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isArmedRef = useRef(true);
  const isInView = useInView(ref, { amount: 0.25 });
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [hiddenY, setHiddenY] = useState(32);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();

    if (previous === undefined || current === previous) {
      return;
    }

    setScrollDirection(current > previous ? "down" : "up");
  });

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (isInView && isArmedRef.current) {
      controls.start("visible");
      isArmedRef.current = false;
      return;
    }

    if (isInView) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const fullyAbove = rect.bottom < -120;
    const fullyBelow = rect.top > viewportHeight + 120;

    if (!fullyAbove && !fullyBelow) {
      return;
    }

    setHiddenY(fullyAbove ? -32 : 32);
    controls.set("hidden");
    isArmedRef.current = true;
  }, [controls, isInView, scrollDirection]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: 32,
      }}
      variants={{
        ...sectionContainer,
        hidden: {
          opacity: 0,
          y: hiddenY,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: springEase,
            staggerChildren: 0.14,
            delayChildren: 0.06,
          },
        },
      }}
      animate={controls}
    >
      {children}
    </motion.section>
  );
}
