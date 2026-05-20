"use client";

import { InteractiveCard } from "@/src/components/motion/interactive-card";
import { RevealGroup } from "@/src/components/motion/reveal-group";
import { RevealItem } from "@/src/components/motion/reveal-item";
import { FadeInSection } from "@/src/components/motion/fade-in-section";
import { SectionHeading } from "@/src/components/site/section-heading";
import { selectedWork } from "@/src/content/site/home-content";
import styles from "@/src/features/home/home-page.module.css";

export function WorkSection() {
  return (
    <FadeInSection id="experience" className={styles.sectionGrid}>
      <RevealGroup>
        <SectionHeading
          eyebrow="Delivery focus"
          title="Useful for teams hiring a builder and for clients needing someone who can actually execute."
          className={styles.sectionHeading}
        />
      </RevealGroup>
      <RevealGroup className={styles.workGrid}>
        {selectedWork.map((item, index) => (
          <RevealItem key={item.title}>
            <InteractiveCard className={styles.workCard}>
              <span className={styles.workIndex}>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <small>{item.detail}</small>
            </InteractiveCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </FadeInSection>
  );
}
