import Link from "next/link";
import { RevealGroup } from "@/src/components/motion/reveal-group";
import { RevealItem } from "@/src/components/motion/reveal-item";
import type { LandingDefinition } from "@/src/types/content";
import styles from "@/src/features/home/home-page.module.css";

type LandingShowcasePageProps = {
  landing: LandingDefinition;
};

export function LandingShowcasePage({ landing }: LandingShowcasePageProps) {
  return (
    <main className={styles.showcasePage}>
      <RevealGroup className={styles.showcaseHeading}>
        <RevealItem variant="soft">
          <p className={styles.eyebrow}>Landing showcase</p>
        </RevealItem>
        <RevealItem>
          <h1>{landing.title}</h1>
        </RevealItem>
        <RevealItem variant="soft">
          <p>{landing.description}</p>
        </RevealItem>
      </RevealGroup>

      <RevealGroup className={styles.showcaseMeta}>
        <RevealItem variant="soft">
          <span>{landing.domain}</span>
        </RevealItem>
        <RevealItem variant="soft">
          <span>{landing.category}</span>
        </RevealItem>
        <RevealItem variant="soft">
          <span>{landing.status}</span>
        </RevealItem>
      </RevealGroup>

      {landing.render()}

      <RevealGroup className={styles.closingLinks}>
        <RevealItem variant="soft">
          <Link href="/landings" className={styles.directoryLink}>
            Back to directory
          </Link>
        </RevealItem>
      </RevealGroup>
    </main>
  );
}
