import Link from "next/link";
import { InteractiveCard } from "@/src/components/motion/interactive-card";
import { RevealGroup } from "@/src/components/motion/reveal-group";
import { RevealItem } from "@/src/components/motion/reveal-item";
import { landingRegistry } from "@/src/content/landings/registry";
import styles from "@/src/features/home/home-page.module.css";

export function LandingDirectoryPage() {
  return (
    <main className={styles.directoryPage}>
      <RevealGroup className={styles.directoryHeading}>
        <RevealItem variant="soft">
          <p className={styles.eyebrow}>Landing directory</p>
        </RevealItem>
        <RevealItem>
          <h1>Each landing owns its own folder, route, and future subdomain.</h1>
        </RevealItem>
        <RevealItem variant="soft">
          <p>
            This page is registry-driven. Add a new folder under
            `src/content/landings`, export its definition, register it once, and it
            becomes visible here without touching the homepage structure.
          </p>
        </RevealItem>
      </RevealGroup>

      <RevealGroup className={styles.directoryGrid}>
        {landingRegistry.map((landing) => (
          <RevealItem key={landing.slug}>
            <InteractiveCard className={styles.directoryCard}>
              <div className={styles.directoryMetaRow}>
                <span className={styles.directoryMeta}>{landing.category}</span>
                <span className={styles.directoryMeta}>{landing.status}</span>
              </div>
              <h2>{landing.title}</h2>
              <p>{landing.summary}</p>
              <div className={styles.directoryTags}>
                {landing.tags.map((tag) => (
                  <span key={tag} className={styles.directoryTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/landings/${landing.slug}`} className={styles.directoryLink}>
                Open showcase
              </Link>
            </InteractiveCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </main>
  );
}
