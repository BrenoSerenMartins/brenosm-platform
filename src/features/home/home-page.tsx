"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { companyContexts, deliveryBadges, portfolioItems, profilePhoto } from "@/src/content/site/home-content";
import { MouseAura } from "@/src/features/home/components/mouse-aura";
import styles from "@/src/features/home/home-page.module.css";

const serviceLanes = [
  {
    title: "Products and internal systems",
    text: "Operational tools, dashboards, portals, admin flows, and product surfaces that need structure and clarity.",
  },
  {
    title: "Websites and landing pages",
    text: "Commercial pages with better visual presence, clearer messaging, and enough polish to be used as a real front door.",
  },
  {
    title: "APIs and integrations",
    text: "Payment flows, ERP communication, backend logic, and system-to-system behavior shaped around reliability.",
  },
];

const credibilityPoints = [
  "5+ years building real web systems",
  "Current work in fintech",
  "Strong Magento and backend history",
  "Frontend and product layer growing fast",
];

const experienceFrames = [
  {
    label: "Now",
    title: "Fintech systems",
    text: "Working on financial operations, APIs, product behavior, and backend flows that affect real business logic.",
  },
  {
    label: "Before",
    title: "Commerce and integrations",
    text: "Years building Magento modules, ERP integrations, custom platform behavior, maintenance, and performance work.",
  },
  {
    label: "Why this matters",
    title: "Delivery with context",
    text: "The portfolio is not just visual. It is backed by production history, technical depth, and delivery under constraints.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
};

function AssetPreview({
  src,
  alt,
  className,
  sizes,
  priority = false,
}: {
  src?: string;
  alt: string;
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      priority={priority}
      loading={priority ? "eager" : undefined}
      onError={() => setHasError(true)}
    />
  );
}

export function HomePage() {
  const featuredProject = portfolioItems[0];
  const [projectIndex, setProjectIndex] = useState(0);
  const maxProjectIndex = Math.max(companyContexts.length - 1, 0);

  const showPrevProject = () => {
    setProjectIndex((current) => Math.max(current - 1, 0));
  };

  const showNextProject = () => {
    setProjectIndex((current) => Math.min(current + 1, maxProjectIndex));
  };

  return (
    <main className={styles.pageShell}>
      <MouseAura />

      <section className={styles.heroSection}>
        <div className={styles.heroBackdrop} />

        <header className={styles.topbar}>
          <div className={styles.brandLockup}>
            <span className={styles.brandDot} />
            <span>Breno Seren Martins</span>
          </div>
          <nav className={styles.topnav}>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className={styles.heroGrid}>
          <motion.div
            className={styles.heroLead}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.eyebrow}>Products, websites, systems, and integrations</p>
            <h1 className={styles.heroTitle}>
              Robust digital work
              <br />
              with strong engineering
              <br />
              underneath.
            </h1>
            <p className={styles.heroText}>
              I build web products, client-facing websites, internal systems, and
              backend integrations with a full-stack approach grounded in real
              production work.
            </p>

            <div className={styles.heroActions}>
              <a href="#projects" className={styles.primaryButton}>
                View projects
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Start a project
              </a>
            </div>

            <div className={styles.heroBadgeRow}>
              {deliveryBadges.map((badge) => (
                <span key={badge} className={styles.badge}>
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside
            className={styles.profileCard}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.92, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.profileVisual}>
              <div className={styles.profileOrb} />
              <div className={styles.profilePhotoWrap}>
                <div className={styles.profilePhotoFrame}>
                  <AssetPreview
                    src={profilePhoto.src}
                    alt={profilePhoto.alt}
                    className={styles.profilePhoto}
                    sizes="(max-width: 980px) 100vw, 28vw"
                    priority
                  />
                  <div className={styles.profileImageOverlay}>
                    <div className={styles.profileIdentity}>
                      <span className={styles.profileTitle}>Full-stack engineer</span>
                      <h2>Breno Seren Martins</h2>
                    </div>
                    <div className={styles.profileLocation}>Brazil</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.profileStats}>
              {credibilityPoints.map((point) => (
                <div key={point} className={styles.profileStat}>
                  {point}
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <motion.section id="projects" className={styles.showcaseSection} {...fadeUp}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Selected projects</p>
          <h2>Real work first. Clear context second.</h2>
        </div>

        <article className={styles.featuredProject}>
          <div className={styles.featuredMedia}>
            <AssetPreview
              src={featuredProject?.coverImage}
              alt={`${featuredProject?.title ?? "Project"} cover`}
              className={styles.featuredImage}
              sizes="(max-width: 980px) 100vw, 50vw"
              priority
            />
            <div className={styles.featuredOverlay}>
              <span>Featured real project</span>
              <strong>{featuredProject?.title}</strong>
            </div>
          </div>

          <div className={styles.featuredContent}>
            <span className={styles.featuredStatus}>{featuredProject?.status}</span>
            <h3>{featuredProject?.title}</h3>
            <p>{featuredProject?.summary}</p>

            <div className={styles.outcomeRow}>
              {featuredProject?.outcomes.map((outcome) => (
                <span key={outcome} className={styles.outcomeChip}>
                  {outcome}
                </span>
              ))}
            </div>

            <div className={styles.stackRow}>
              {featuredProject?.stack.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>

            <div className={styles.featuredLinks}>
              {featuredProject?.href ? (
                <a href={featuredProject.href} target="_blank" rel="noreferrer" className={styles.primaryButton}>
                  Open project
                </a>
              ) : null}
              <span className={styles.assetNote}>Live reference and portfolio seed</span>
            </div>
          </div>
        </article>

        {companyContexts.length > 0 ? (
          <div className={styles.projectRailSection}>
            <div className={styles.projectRailHeader}>
              <div>
                <p className={styles.railEyebrow}>Professional contexts</p>
                <h3>Companies and environments where this work was shaped.</h3>
              </div>
              <div className={styles.railControls}>
                <button
                  type="button"
                  className={styles.railButton}
                  onClick={showPrevProject}
                  disabled={projectIndex === 0}
                  aria-label="Previous projects"
                >
                  Prev
                </button>
                <button
                  type="button"
                  className={styles.railButton}
                  onClick={showNextProject}
                  disabled={projectIndex === maxProjectIndex}
                  aria-label="Next projects"
                >
                  Next
                </button>
              </div>
            </div>

            <div className={styles.projectRailViewport}>
              <div
                className={styles.projectRailTrack}
                style={{ transform: `translateX(calc(${projectIndex} * -1 * (min(420px, 82vw) + 18px)))` }}
              >
                {companyContexts.map((entry) => (
                  <article key={entry.slug} className={styles.projectCard}>
                    <div className={styles.projectPreview}>
                      <AssetPreview
                        src={entry.coverImage}
                        alt={`${entry.company} cover`}
                        className={styles.projectPreviewImage}
                        sizes="(max-width: 980px) 82vw, 420px"
                      />
                      <div className={styles.projectPreviewOverlay}>
                        <span>{entry.period}</span>
                      </div>
                      <div className={styles.projectPreviewMeta}>
                        <span className={styles.projectPreviewDomain}>{entry.domain}</span>
                        <strong>{entry.company}</strong>
                      </div>
                    </div>

                    <div className={styles.projectContent}>
                      <span className={styles.projectCategory}>{entry.latestRole}</span>
                      <h3>{entry.company}</h3>
                      <p>{entry.summary}</p>
                      <div className={styles.stackRow}>
                        <span>{entry.domain}</span>
                        <span>{entry.period}</span>
                      </div>
                      {entry.href ? (
                        <div className={styles.featuredLinks}>
                          <a href={entry.href} target="_blank" rel="noreferrer" className={styles.secondaryButton}>
                            Visit company
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </motion.section>

      <motion.section id="services" className={styles.servicesSection} {...fadeUp}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>What I can build</p>
          <h2>Clear offer, cleaner conversation, stronger signal for both hiring and freelance work.</h2>
        </div>

        <div className={styles.serviceGrid}>
          {serviceLanes.map((lane) => (
            <article key={lane.title} className={styles.serviceCard}>
              <h3>{lane.title}</h3>
              <p>{lane.text}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section id="about" className={styles.aboutSection} {...fadeUp}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Background</p>
          <h2>The technical history is here to add trust, not to turn the landing into a resume page.</h2>
        </div>

        <div className={styles.aboutGrid}>
          {experienceFrames.map((frame) => (
            <article key={frame.title} className={styles.aboutCard}>
              <span>{frame.label}</span>
              <h3>{frame.title}</h3>
              <p>{frame.text}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section id="contact" className={styles.ctaSection} {...fadeUp}>
        <div className={styles.ctaCopy}>
          <p className={styles.eyebrow}>Open for work</p>
          <h2>Need a product, website, landing page, system, or integration layer with more structure behind it?</h2>
        </div>

        <div className={styles.ctaLinks}>
          <a href="mailto:hello@brenosm.cloud" className={styles.primaryButton}>
            Contact
          </a>
          <Link href="/landings" className={styles.secondaryButton}>
            Explore landings
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
