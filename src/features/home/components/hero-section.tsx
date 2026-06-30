"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/src/config/site";
import { MagneticWrapper } from "@/src/components/motion/magnetic-wrapper";
import { ArrowIcon } from "@/src/components/icons/arrow-icon";
import styles from "@/src/features/home/portfolio-page.module.css";

const baseMarquee = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
  "Supabase", "Framer Motion", "Figma", "Docker", "AWS",
];

// Repetimos 4 vezes para preencher bem a tela em 4K e metade (50%) ser exatamente 2 repetições completas.
const techMarquee = [...baseMarquee, ...baseMarquee, ...baseMarquee, ...baseMarquee];

const heroEntrance = {
  initial: { opacity: 0, y: 20, scale: 0.985, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

export function HeroSection() {
  return (
    <>
      {/* Hero — ocupa 100dvh, sem cortes */}
      <section id="inicio" className={styles.heroWrapper} style={{ position: "relative" }}>
        {/* Auroras Animadas no Fundo do Hero */}
        <motion.div
          className={styles.heroAurora1}
          style={{ willChange: "transform, opacity" }}
          animate={{ x: [0, 300, -100, 0], y: [0, -150, 100, 0], scale: [1, 1.4, 1] }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className={styles.heroAurora2}
          style={{ willChange: "transform, opacity" }}
          animate={{ x: [0, -300, 150, 0], y: [0, 200, -100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, delay: 1 }}
        />

        <div className={styles.heroInner}>
          <motion.h1
            className={styles.heroTitle}
            initial={heroEntrance.initial}
            animate={heroEntrance.animate}
            transition={heroEntrance.transition}
          >
            Transformamos ideias em{" "}
            <span className={styles.heroTitleAccent}>Sistemas de Alta Conversão</span>.
          </motion.h1>

          <motion.p
            className={styles.heroLead}
            initial={heroEntrance.initial}
            animate={heroEntrance.animate}
            transition={{ ...heroEntrance.transition, delay: 0.08 }}
          >
            Velocidade e escala para o seu negócio. Construímos MVPs, SaaS e Landing Pages premium para quem quer validar rápido e gerar caixa de verdade.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={heroEntrance.initial}
            animate={heroEntrance.animate}
            transition={{ ...heroEntrance.transition, delay: 0.16 }}
          >
            <MagneticWrapper>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
                aria-label="Solicitar orçamento pelo WhatsApp"
              >
                Solicitar Orçamento
                <ArrowIcon />
              </a>
            </MagneticWrapper>
            <MagneticWrapper>
              <a
                href="#projetos"
                className={styles.secondaryButton}
                aria-label="Ver cases e projetos desenvolvidos"
              >
                Ver Cases de Sucesso
              </a>
            </MagneticWrapper>
          </motion.div>
        </div>

      </section>

      {/* Marquee (faixa rotativa) fora do Hero para a torção não ser cortada */}
      <div className={styles.marqueeContainer}>
        <motion.div
          className={styles.marqueeTrack}
          style={{ willChange: "transform" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {techMarquee.map((tech, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span style={{ color: "var(--accent-cyan)", fontSize: "1.25rem" }}>•</span> {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}
