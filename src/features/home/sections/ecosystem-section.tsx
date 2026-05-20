"use client";

import { InteractiveCard } from "@/src/components/motion/interactive-card";
import { RevealGroup } from "@/src/components/motion/reveal-group";
import { RevealItem } from "@/src/components/motion/reveal-item";
import { FadeInSection } from "@/src/components/motion/fade-in-section";
import { SectionHeading } from "@/src/components/site/section-heading";
import { platformNodes } from "@/src/content/site/home-content";
import styles from "@/src/features/home/home-page.module.css";

export function EcosystemSection() {
  return (
    <FadeInSection id="stack" className={styles.sectionGrid}>
      <RevealGroup>
        <SectionHeading
          eyebrow="What I deliver"
          title="A stronger portfolio should show the kinds of work I can ship, not just the jobs I had."
          className={styles.sectionHeading}
        />
      </RevealGroup>
      <RevealGroup className={styles.nodeGrid}>
        {platformNodes.map((node) => (
          <RevealItem key={node.title}>
            <InteractiveCard className={styles.nodeCard}>
              <span>{node.label}</span>
              <h3>{node.title}</h3>
              <p>{node.description}</p>
            </InteractiveCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </FadeInSection>
  );
}
