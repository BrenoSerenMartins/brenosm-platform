"use client";

import Link from "next/link";
import { FadeInSection } from "@/src/components/motion/fade-in-section";
import { RevealGroup } from "@/src/components/motion/reveal-group";
import { RevealItem } from "@/src/components/motion/reveal-item";
import { footerLinks } from "@/src/content/site/home-content";
import styles from "@/src/features/home/home-page.module.css";

export function ClosingBanner() {
  return (
    <FadeInSection id="contact" className={styles.closingBanner}>
      <RevealGroup>
        <RevealItem variant="soft">
          <div>
            <p className={styles.eyebrow}>Next expansion</p>
            <h2>Subdomains can become products, showcases, or labs without rethinking the brand.</h2>
          </div>
        </RevealItem>
      </RevealGroup>
      <RevealGroup className={styles.closingLinks}>
        {footerLinks.map((link) => {
          const isInternal = link.href.startsWith("/");
          if (isInternal) {
            return (
              <RevealItem key={link.label} variant="soft">
                <Link href={link.href}>{link.label}</Link>
              </RevealItem>
            );
          }

          return (
            <RevealItem key={link.label} variant="soft">
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                {link.label}
              </a>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </FadeInSection>
  );
}
