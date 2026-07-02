"use client";

import { motion, useScroll, useVelocity, useSpring, useTransform, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/src/config/site";
import { MagneticWrapper } from "@/src/components/motion/magnetic-wrapper";
import { ArrowIcon } from "@/src/components/icons/arrow-icon";
import styles from "@/src/features/home/portfolio-page.module.css";

const baseMarquee = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
  "Supabase", "Framer Motion", "Figma", "Docker", "AWS",
];

const techMarquee = [...baseMarquee, ...baseMarquee, ...baseMarquee, ...baseMarquee];

const heroEntrance = {
  initial: { opacity: 0, y: 20, scale: 0.985, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const wordVariant = {
  hidden: { opacity: 0, y: 30, rotateX: -30, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" },
};

function VelocityMarquee({ items, direction = 1, speed = 10 }: { items: string[], direction?: number, speed?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skew = useTransform(smoothVelocity, [-1000, 1000], [-3, 3]);

  useAnimationFrame((t, delta) => {
    let moveBy = direction * speed * (delta / 1000);
    moveBy += direction * (smoothVelocity.get() / 80) * (delta / 1000) * 2;
    
    let newX = baseX.get() + moveBy;
    if (newX <= -50) newX += 50;
    else if (newX > 0) newX -= 50;
    
    baseX.set(newX);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <motion.div className={styles.marqueeTrack} style={{ x, skewX: skew }}>
      {items.map((tech, i) => {
        const isOutline = i % 2 !== 0;
        return (
          <span key={i} className={`${styles.marqueeItem} ${isOutline ? styles.marqueeOutline : ""}`}>
            <span className={styles.marqueeBullet}>•</span> {tech}
          </span>
        );
      })}
    </motion.div>
  );
}

export function HeroSection() {
  const titleWords = ["Transformamos", "ideias", "em"];

  return (
    <>
      <section id="inicio" className={styles.heroWrapper}>
        <div className={styles.glassGrid} />
        
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
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
            }}
          >
            {titleWords.map((word, i) => (
              <span key={i}>
                <motion.span
                  variants={wordVariant}
                  transition={{ type: "spring", damping: 20, stiffness: 200 }}
                  className={styles.heroWord}
                >
                  {word}
                </motion.span>
                {" "}
              </span>
            ))}
            <br className={styles.heroBreak} />
            <motion.span
              variants={wordVariant}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className={styles.heroTitleAccent}
            >
              Sistemas de Alta Conversão.
            </motion.span>
          </motion.h1>

          <motion.p
            className={styles.heroLead}
            initial={heroEntrance.initial}
            animate={heroEntrance.animate}
            transition={{ ...heroEntrance.transition, delay: 0.6 }}
          >
            Velocidade e escala para o seu negócio. Construímos MVPs, SaaS e Landing Pages premium para quem quer validar rápido e gerar caixa de verdade.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={heroEntrance.initial}
            animate={heroEntrance.animate}
            transition={{ ...heroEntrance.transition, delay: 0.7 }}
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

      <div className={styles.marqueeWrapper}>
        <VelocityMarquee items={techMarquee} direction={-1} speed={4} />
        <VelocityMarquee items={techMarquee} direction={1} speed={4} />
      </div>
    </>
  );
}
