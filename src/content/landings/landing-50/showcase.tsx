"use client";

import { motion } from "framer-motion";
import { RevealGroup } from "@/src/components/motion/reveal-group";
import { RevealItem } from "@/src/components/motion/reveal-item";
import styles from "@/src/features/landings/landing-showcase.module.css";

export function Landing50Showcase() {
  return (
    <section className={styles.canvas}>
      <motion.div
        className={styles.glow}
        animate={{ x: [0, 18, -12, 0], y: [0, -14, 10, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <RevealGroup className={styles.heroCard}>
        <RevealItem variant="soft">
          <p className={styles.eyebrow}>Landing 50</p>
        </RevealItem>
        <RevealItem>
          <h1 className={styles.title}>Narrative landing concept ready to become a real client page.</h1>
        </RevealItem>
        <RevealItem variant="soft">
          <p className={styles.description}>
            This folder is a standalone landing workspace. It owns its own copy, sections,
            visuals, and evolution path. Register it once and it becomes part of the landing directory.
          </p>
        </RevealItem>
      </RevealGroup>
      <RevealGroup className={styles.metricsGrid}>
        <RevealItem>
          <article className={styles.metricCard}>
            <span>Focus</span>
            <strong>Positioning first</strong>
            <p>Structured for clear messaging, premium presentation, and a conversion-led story arc.</p>
          </article>
        </RevealItem>
        <RevealItem>
          <article className={styles.metricCard}>
            <span>Flow</span>
            <strong>Section ownership</strong>
            <p>Each future landing can have its own local components instead of leaking into the global home.</p>
          </article>
        </RevealItem>
        <RevealItem>
          <article className={styles.metricCard}>
            <span>Scale</span>
            <strong>Directory-driven</strong>
            <p>New entries only need a folder export and a registry addition to appear across the platform.</p>
          </article>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
