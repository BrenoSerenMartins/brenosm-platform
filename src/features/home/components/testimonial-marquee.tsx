"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { AchievementEntry } from "@/src/types/portfolio";
import styles from "@/src/features/home/portfolio-page.module.css";

type AchievementMarqueeProps = {
  items: AchievementEntry[];
};

export function AchievementMarquee({ items }: AchievementMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const track = [...items, ...items];

  return (
    <div className={styles.testimonialMarquee}>
      <motion.div
        className={styles.testimonialTrack}
        style={{ willChange: "transform" }}
        animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 26,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }
        }
      >
        {track.map((item, index) => (
          <article key={`${item.rank}-${item.event}-${index}`} className={styles.testimonialCard}>
            <span className={styles.testimonialAccent} />
            <p className={styles.testimonialQuote}>{item.rank}</p>
            <div className={styles.testimonialMeta}>
              <strong>{item.event}</strong>
              <span>{item.context}</span>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}
