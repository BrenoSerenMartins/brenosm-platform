"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "@/src/components/motion/fade-in-section";
import { RevealGroup } from "@/src/components/motion/reveal-group";
import { RevealItem } from "@/src/components/motion/reveal-item";
import { capabilities, experienceEntries } from "@/src/content/site/home-content";
import styles from "@/src/features/home/home-page.module.css";
import { revealSoftItem } from "@/src/lib/motion";

export function HighlightsSection() {
  return (
    <FadeInSection className={styles.sectionSplit}>
      <RevealGroup className={styles.splitCard}>
        <RevealItem variant="soft">
          <div>
            <p className={styles.eyebrow}>Core stack</p>
            <h2>My work usually sits where business rules, integrations, UI, and maintenance all meet.</h2>
          </div>
        </RevealItem>
        <motion.ul variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
          {capabilities.map((item) => (
            <motion.li key={item} variants={revealSoftItem}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </RevealGroup>

      <RevealGroup className={`${styles.splitCard} ${styles.splitCardAccent}`}>
        <RevealItem variant="soft">
          <div>
            <p className={styles.eyebrow}>Background</p>
            <h2>Enough production history to support delivery decisions, without turning the page into a resume dump.</h2>
          </div>
        </RevealItem>
        <div className={styles.timelineList}>
          {experienceEntries.map((item) => (
            <motion.article key={`${item.company}-${item.role}`} className={styles.timelineItem} variants={revealSoftItem}>
              <div className={styles.timelineMeta}>
                <span>{item.company}</span>
                <span>{item.period}</span>
              </div>
              <h3>{item.role}</h3>
              <strong>{item.domain}</strong>
              <p>{item.summary}</p>
            </motion.article>
          ))}
        </div>
      </RevealGroup>
    </FadeInSection>
  );
}
