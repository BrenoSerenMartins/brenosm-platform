"use client";

import { motion } from "framer-motion";
import { RevealGroup } from "@/src/components/motion/reveal-group";
import { RevealItem } from "@/src/components/motion/reveal-item";
import { deliveryBadges, heroActions, heroContent } from "@/src/content/site/home-content";
import { springEase } from "@/src/lib/motion";
import styles from "@/src/features/home/home-page.module.css";

const heroCards = [
  {
    label: "Delivery",
    title: "Products and systems",
    description: "From operational tools and APIs to public-facing product interfaces and commercial sites.",
  },
  {
    label: "Infrastructure",
    title: "Backend and integrations",
    description: "ERP flows, REST/SOAP, payments, queues, maintenance, and business logic that needs to hold up.",
  },
  {
    label: "Presentation",
    title: "Sites, landing pages, and UI",
    description: "A cleaner product layer for companies that need stronger communication, presence, and delivery quality.",
  },
];

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackdrop} />
      <div className={styles.heroNoise} />
      <div className={styles.heroGlow} />
      <motion.div
        className={`${styles.heroCopy} ${styles.frostedCard}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: springEase }}
      >
        <div className={styles.heroTop}>
          <RevealGroup className={styles.heroLead}>
            <RevealItem variant="soft">
              <div className={styles.statusRow}>
                <span className={styles.statusPill}>Breno Seren Martins</span>
                <span className={styles.statusPillMuted}>Marilia, SP • Brazil</span>
              </div>
            </RevealItem>
            <RevealItem variant="soft">
              <p className={styles.eyebrow}>{heroContent.eyebrow}</p>
            </RevealItem>
            <RevealItem>
              <h1 className={styles.heroTitle}>
                {heroContent.titleLines.map((line) => (
                  <span key={line} className={styles.heroTitleLine}>
                    {line}
                  </span>
                ))}
              </h1>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className={styles.heroSide}>
            <RevealItem variant="soft">
              <p className={styles.heroText}>{heroContent.description}</p>
            </RevealItem>
            <RevealGroup className={styles.heroBadgeRow}>
              {deliveryBadges.map((badge) => (
                <RevealItem key={badge} variant="soft">
                  <span className={styles.heroSignalItem}>{badge}</span>
                </RevealItem>
              ))}
            </RevealGroup>
            <RevealGroup className={styles.heroActions}>
              {heroActions.map((action) => (
                <RevealItem key={action.label} variant="soft">
                  <a
                    href={action.href}
                    className={action.variant === "primary" ? styles.primaryLink : styles.secondaryLink}
                  >
                    {action.label}
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>
          </RevealGroup>
        </div>

        <RevealGroup className={styles.heroCardRail}>
          {heroCards.map((card, index) => (
            <RevealItem key={card.title} variant="soft">
              <article className={`${styles.heroRailCard} ${index === 0 ? styles.heroRailCardFeatured : ""}`}>
                <span className={styles.signalKicker}>{card.label}</span>
                <strong>{card.title}</strong>
                <p>{card.description}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </motion.div>
    </section>
  );
}
