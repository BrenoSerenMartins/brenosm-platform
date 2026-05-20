"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeInSection } from "@/src/components/motion/fade-in-section";
import { RevealGroup } from "@/src/components/motion/reveal-group";
import { RevealItem } from "@/src/components/motion/reveal-item";
import { profileModes } from "@/src/content/site/home-content";
import styles from "@/src/features/home/home-page.module.css";
import { revealSoftItem, springEase } from "@/src/lib/motion";

export function ProfileCommandSection() {
  const [activeModeId, setActiveModeId] = useState(profileModes[0]?.id ?? "recruiter");
  const activeMode = profileModes.find((mode) => mode.id === activeModeId) ?? profileModes[0];

  return (
    <FadeInSection className={styles.commandSection}>
      <RevealGroup className={styles.commandIntro}>
        <RevealItem variant="soft">
          <p className={styles.eyebrow}>Interactive profile</p>
        </RevealItem>
        <RevealItem>
          <h2>Choose how you want to read the work, and the page responds.</h2>
        </RevealItem>
      </RevealGroup>

      <div className={styles.commandGrid}>
        <RevealGroup className={styles.commandRail}>
          {profileModes.map((mode) => {
            const isActive = mode.id === activeMode.id;

            return (
              <RevealItem key={mode.id} variant="soft">
                <button
                  type="button"
                  className={`${styles.commandButton} ${isActive ? styles.commandButtonActive : ""}`}
                  onClick={() => setActiveModeId(mode.id)}
                >
                  <span className={styles.commandButtonIndex}>{mode.shortLabel}</span>
                  <span className={styles.commandButtonLabel}>{mode.label}</span>
                </button>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className={styles.commandPanel}>
          <div className={styles.commandPanelTop}>
            <span>Profile runtime</span>
            <span>{activeMode.label}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode.id}
              className={styles.commandPanelBody}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
              transition={{ duration: 0.42, ease: springEase }}
            >
              <div className={styles.commandHero}>
                <p className={styles.commandEyebrow}>{activeMode.eyebrow}</p>
                <h3>{activeMode.title}</h3>
                <p>{activeMode.summary}</p>
              </div>

              <div className={styles.commandFacts}>
                {activeMode.facts.map((fact) => (
                  <motion.span key={fact} variants={revealSoftItem} initial="hidden" animate="visible">
                    {fact}
                  </motion.span>
                ))}
              </div>

              <div className={styles.commandHighlights}>
                {activeMode.highlights.map((highlight) => (
                  <motion.article
                    key={highlight}
                    className={styles.commandHighlight}
                    variants={revealSoftItem}
                    initial="hidden"
                    animate="visible"
                  >
                    {highlight}
                  </motion.article>
                ))}
              </div>

              <div className={styles.commandFooter}>
                <span>{activeMode.cta}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </FadeInSection>
  );
}
