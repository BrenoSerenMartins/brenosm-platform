"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/src/features/home/portfolio-page.module.css";

import { HeroSection } from "@/src/features/home/components/hero-section";
import { BentoGridSection } from "@/src/features/home/components/bento-grid-section";
import { ProjectsSection } from "@/src/features/home/components/projects-section";
import { ExperiencesSection } from "@/src/features/home/components/experiences-section";
import { CtaSection } from "@/src/features/home/components/cta-section";
import { FooterSection } from "@/src/features/home/components/footer-section";

export function HomePage() {
  const { scrollYProgress } = useScroll();

  const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <main className={styles.pageShell}>
      {/* Background animado de paralax */}
      <motion.div
        className={styles.parallaxGlow}
        style={{
          y: yParallax1,
          top: "20%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(2,4,10,0) 70%)",
          willChange: "transform, opacity",
        }}
      />
      <motion.div
        className={styles.parallaxGlow}
        style={{
          y: yParallax2,
          top: "60%",
          right: "-10%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(2,4,10,0) 70%)",
          willChange: "transform, opacity",
        }}
      />

      <div className={styles.glowTop} />

      <HeroSection />
      <BentoGridSection />
      <ProjectsSection />
      <ExperiencesSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
