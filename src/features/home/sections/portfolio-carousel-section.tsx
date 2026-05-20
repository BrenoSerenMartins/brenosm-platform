"use client";

import { useRef } from "react";
import { FadeInSection } from "@/src/components/motion/fade-in-section";
import { RevealGroup } from "@/src/components/motion/reveal-group";
import { RevealItem } from "@/src/components/motion/reveal-item";
import { portfolioItems } from "@/src/content/site/home-content";
import styles from "@/src/features/home/home-page.module.css";

export function PortfolioCarouselSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollTrack = (direction: "prev" | "next") => {
    const element = trackRef.current;

    if (!element) {
      return;
    }

    const offset = Math.max(element.clientWidth * 0.82, 320);

    element.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: "smooth",
    });
  };

  return (
    <FadeInSection id="work" className={styles.carouselSection}>
      <div className={styles.carouselHeader}>
        <RevealGroup className={styles.carouselIntro}>
          <RevealItem variant="soft">
            <p className={styles.eyebrow}>Selected work</p>
          </RevealItem>
          <RevealItem>
            <h2>What I deliver across products, business systems, and client-facing experiences.</h2>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className={styles.carouselControls}>
          <RevealItem variant="soft">
            <button type="button" className={styles.carouselButton} onClick={() => scrollTrack("prev")}>
              Prev
            </button>
          </RevealItem>
          <RevealItem variant="soft">
            <button type="button" className={styles.carouselButton} onClick={() => scrollTrack("next")}>
              Next
            </button>
          </RevealItem>
        </RevealGroup>
      </div>

      <div ref={trackRef} className={styles.carouselTrack}>
        {portfolioItems.map((item) => (
          <article key={item.title} className={styles.carouselCard}>
            <div className={styles.carouselMeta}>
              <span>{item.category}</span>
              <span>{item.status}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <div className={styles.carouselOutcomeList}>
              {item.outcomes.map((outcome) => (
                <span key={outcome} className={styles.carouselOutcome}>
                  {outcome}
                </span>
              ))}
            </div>
            <div className={styles.carouselStack}>
              {item.stack.map((stackItem) => (
                <span key={stackItem}>{stackItem}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </FadeInSection>
  );
}
