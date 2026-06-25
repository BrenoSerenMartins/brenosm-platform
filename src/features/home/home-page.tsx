"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "@/src/features/home/portfolio-page.module.css";
import projectsData from "@/src/content/projects.json";
import { useSupportsHover } from "@/src/lib/use-supports-hover";

const baseMarquee = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
  "Supabase", "Framer Motion", "Figma", "Docker", "AWS",
];

// Repetimos 4 vezes para preencher bem a tela em 4K e metade (50%) ser exatamente 2 repetições completas.
const techMarquee = [...baseMarquee, ...baseMarquee, ...baseMarquee, ...baseMarquee];

type BentoFeature = {
  title: string;
  summary: string;
  details: string;
  icon: ReactNode;
  large?: boolean;
};

const bentoFeatures: BentoFeature[] = [
  {
    title: "Velocidade de Entrega",
    summary: "MVPs e LPs prontos para validar rápido.",
    details: "Sua ideia não pode esperar. Priorizamos escopo enxuto, clareza de entrega e uma base que permite evoluir sem refazer o produto inteiro.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    large: true,
  },
  {
    title: "Design Premium",
    summary: "Interfaces que elevam a percepção de valor.",
    details: "Interfaces com estética de alto nível, micro-interações e atenção aos detalhes para transmitir mais confiança e produto mais maduro.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Escalabilidade",
    summary: "Arquitetura pronta para crescer sem retrabalho.",
    details: "Código limpo e arquitetura pensada para suportar mais tráfego, integrações e evolução sem virar uma bomba técnica.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45m.311-.06a15.247 15.247 0 012.448 2.45M20.676 8.25l-2.448 2.45M6.028 15.75l-2.45 2.45M20.676 8.25l-2.448-2.45" />
      </svg>
    ),
  },
  {
    title: "Alta Performance & SEO",
    summary: "Velocidade que ajuda conversão e ranking.",
    details: "Cada camada é pensada para carregar rápido, responder com fluidez e fortalecer sinais de performance e SEO.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    large: true,
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

function RailArrow({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className={styles.railArrow}
      aria-hidden="true"
      initial={false}
      animate={{
        opacity: visible ? 0.78 : 0,
        x: visible ? 0 : 2,
        scale: visible ? 1 : 0.96,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <ArrowIcon />
    </motion.div>
  );
}

function useRailArrowVisibility() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [showArrow, setShowArrow] = useState(false);
  const visibleRef = useRef(false);
  const reachedEndRef = useRef(false);

  useEffect(() => {
    const node = railRef.current;
    if (!node) {
      return;
    }

    const showThreshold = 20;
    const hideThreshold = 4;
    let frameId: number | null = null;

    const update = () => {
      const remaining = Math.max(0, node.scrollWidth - node.clientWidth - node.scrollLeft);
      const hasOverflow = node.scrollWidth > node.clientWidth + 4;

      if (remaining <= hideThreshold) {
        reachedEndRef.current = true;
      }

      if (reachedEndRef.current) {
        if (visibleRef.current) {
          visibleRef.current = false;
          setShowArrow(false);
        }
        return;
      }

      const nextVisible = hasOverflow
        ? (visibleRef.current ? remaining > hideThreshold : remaining > showThreshold)
        : false;

      if (nextVisible !== visibleRef.current) {
        visibleRef.current = nextVisible;
        setShowArrow(nextVisible);
      }
    };

    const scheduleUpdate = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        update();
      });
    };

    visibleRef.current = false;
    setShowArrow(false);
    scheduleUpdate();
    node.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    let resizeObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(scheduleUpdate);
      resizeObserver.observe(node);
    }

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      node.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
    };
  }, []);

  return { railRef, showArrow };
}

function RailStage({
  children,
  railClassName,
}: {
  children: ReactNode;
  railClassName: string;
}) {
  const { railRef, showArrow } = useRailArrowVisibility();

  return (
    <div className={styles.railShell}>
      <div ref={railRef} className={railClassName}>
        {children}
      </div>
      <RailArrow visible={showArrow} />
    </div>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function TiltCard({ children, className, idx = 0 }: { children: React.ReactNode; className?: string; idx?: number }) {
  const supportsHover = useSupportsHover();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const hoverEnabledRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const pendingPointRef = useRef({ x: 0.5, y: 0.5 });

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    hoverEnabledRef.current = media.matches;

    const handleChange = (event: MediaQueryListEvent) => {
      hoverEnabledRef.current = event.matches;
    };

    media.addEventListener("change", handleChange);

    return () => {
      hoverEnabledRef.current = false;
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      media.removeEventListener("change", handleChange);
    };
  }, []);

  const schedulePoint = (nextX: number, nextY: number) => {
    pendingPointRef.current.x = nextX;
    pendingPointRef.current.y = nextY;

    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      x.set(pendingPointRef.current.x);
      y.set(pendingPointRef.current.y);
      frameRef.current = null;
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEnabledRef.current) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    schedulePoint(mouseX / width - 0.5, mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const mobileTilt = idx % 2 === 0
    ? { rotateX: 5, rotateY: -8 }
    : { rotateX: 5, rotateY: 8 };

  return (
    <motion.article
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      style={{
        rotateX: supportsHover ? rotateX : mobileTilt.rotateX,
        rotateY: supportsHover ? rotateY : mobileTilt.rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
        willChange: "transform, opacity",
      }}
    >
      <div className={styles.projectCardInner} style={{ transform: "translateZ(40px)" }}>
        {/* Efeito de brilho que segue o mouse */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
            pointerEvents: "none",
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            x: useTransform(x, [-0.5, 0.5], ["-50%", "50%"]),
            y: useTransform(y, [-0.5, 0.5], ["-50%", "50%"]),
            opacity: useTransform(mouseXSpring, [-0.5, 0, 0.5], [1, 0, 1]),
          }}
        />
        {children}
      </div>
    </motion.article>
  );
}

function SpotlightCard({ children, className, idx = 0 }: { children: React.ReactNode; className?: string; idx?: number }) {
  const supportsHover = useSupportsHover();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const mobileTilt = idx % 2 === 0
    ? { rotateX: 5, rotateY: -8 }
    : { rotateX: 5, rotateY: 8 };

  return (
    <motion.article
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: supportsHover ? 0 : mobileTilt.rotateX,
        rotateY: supportsHover ? 0 : mobileTilt.rotateY,
        willChange: "transform, opacity",
      }}
    >
      <div className={styles.projectCardInner} style={{ position: "relative" }}>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            pointerEvents: "none",
            background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
          }}
        />
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
          {children}
        </div>
      </div>
    </motion.article>
  );
}

function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const hoverEnabledRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const pendingPointRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    hoverEnabledRef.current = media.matches;

    const handleChange = (event: MediaQueryListEvent) => {
      hoverEnabledRef.current = event.matches;
    };

    media.addEventListener("change", handleChange);

    return () => {
      hoverEnabledRef.current = false;
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      media.removeEventListener("change", handleChange);
    };
  }, []);

  const schedulePoint = (nextX: number, nextY: number) => {
    pendingPointRef.current.x = nextX;
    pendingPointRef.current.y = nextY;

    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      x.set(pendingPointRef.current.x);
      y.set(pendingPointRef.current.y);
      frameRef.current = null;
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEnabledRef.current) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    schedulePoint(mouseX * 0.15, mouseY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springX = useSpring(x, { stiffness: 250, damping: 20, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 250, damping: 20, mass: 0.1 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: "inline-block", willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

export function HomePage() {
  const { scrollYProgress } = useScroll();
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(null);

  const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const activeFeature = activeFeatureIndex === null ? null : bentoFeatures[activeFeatureIndex] ?? null;

  useEffect(() => {
    if (!activeFeature) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveFeatureIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeFeature]);

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

        <motion.div
          className={styles.heroInner}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className={styles.heroTitle} variants={fadeUp}>
            Transformamos ideias em{" "}
            <span className={styles.heroTitleAccent}>Sistemas de Alta Conversão</span>.
          </motion.h1>

          <motion.p className={styles.heroLead} variants={fadeUp}>
            Velocidade e escala para o seu negócio. Construímos MVPs, SaaS e Landing Pages premium para quem quer validar rápido e gerar caixa de verdade.
          </motion.p>

          <motion.div className={styles.heroActions} variants={fadeUp}>
            <MagneticWrapper>
              <a href="#contato" className={styles.primaryButton}>
                Solicitar Orçamento
                <ArrowIcon />
              </a>
            </MagneticWrapper>
            <MagneticWrapper>
              <a href="#projetos" className={styles.secondaryButton}>
                Ver Cases de Sucesso
              </a>
            </MagneticWrapper>
          </motion.div>
        </motion.div>

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

      {/* Bento Grid — Diferenciais */}
      <section className={styles.sectionBlock}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.sectionKicker}>O Nosso Diferencial</p>
            <h2 className={styles.sectionTitle}>Construído para Performance.</h2>
            <p className={styles.sectionLead}>
              Nós não apenas escrevemos código. Nós criamos produtos digitais otimizados para converter visitantes em clientes.
            </p>
          </motion.div>

          <RailStage railClassName={styles.bentoGrid}>
            {bentoFeatures.map((feature, idx) => (
              <motion.article
                key={idx}
                className={`${styles.bentoCard} ${feature.large ? styles.bentoLarge : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className={styles.bentoGlow} />
                <div className={styles.bentoIcon}>{feature.icon}</div>
                <h3 className={styles.bentoTitle}>{feature.title}</h3>
                <p className={styles.bentoDesc}>{feature.summary}</p>
                <div className={styles.bentoActionRow}>
                  <span className={styles.bentoMeta}>Resumo curto</span>
                  <button
                    type="button"
                    className={styles.bentoAction}
                    onClick={() => setActiveFeatureIndex(idx)}
                  >
                    Detalhes
                  </button>
                </div>
              </motion.article>
            ))}
          </RailStage>
        </div>
      </section>

      <AnimatePresence>
        {activeFeature ? (
          <motion.div
            className={styles.featureModalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveFeatureIndex(null)}
          >
            <motion.div
              className={styles.featureModal}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="feature-modal-title"
            >
              <button
                type="button"
                className={styles.featureModalClose}
                onClick={() => setActiveFeatureIndex(null)}
                aria-label="Fechar detalhes"
              >
                Fechar
              </button>
              <div className={styles.featureModalIcon}>{activeFeature.icon}</div>
              <p className={styles.sectionKicker}>Diferencial</p>
              <h3 id="feature-modal-title" className={styles.featureModalTitle}>{activeFeature.title}</h3>
              <p className={styles.featureModalText}>{activeFeature.details}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Projetos */}
      <section id="projetos" className={styles.sectionBlock}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.sectionKicker}>Portfólio</p>
            <h2 className={styles.sectionTitle}>Meus Trabalhos & Templates</h2>
            <p className={styles.sectionLead}>
              Confira alguns dos projetos, sistemas e landing pages que desenvolvi.
            </p>
          </motion.div>

          <RailStage railClassName={`${styles.projectsGrid} ${styles.projectsGridProjects}`}>
              {projectsData.filter(p => p.type === "project").map((project, idx) => (
                <TiltCard key={project.id} className={styles.projectCard} idx={idx}>
                  <div className={styles.projectImageWrapper} style={{ padding: '2rem' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={styles.projectImage}
                        style={{ objectFit: project.id === 'tastly' ? 'contain' : 'cover', borderRadius: '8px' }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <div className={styles.projectTags}>
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className={styles.projectTag}>{tech}</span>
                      ))}
                      {project.technologies.length > 3 ? (
                        <span className={styles.projectTag}>+{project.technologies.length - 3}</span>
                      ) : null}
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.description}</p>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noreferrer" className={styles.projectAction}>
                        Acessar Projeto <ArrowIcon />
                      </a>
                    ) : (
                      <div className={styles.projectAction}>
                        Ver Detalhes <ArrowIcon />
                      </div>
                    )}
                  </div>
                </TiltCard>
              ))}
          </RailStage>
        </div>
      </section>

      {/* Experiências */}
      <section id="experiencias" className={styles.sectionBlock}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.sectionKicker}>Trajetória</p>
            <h2 className={styles.sectionTitle}>Experiência Profissional</h2>
            <p className={styles.sectionLead}>
              Empresas incríveis por onde passei construindo tecnologia de ponta.
            </p>
          </motion.div>

          <RailStage railClassName={styles.projectsGrid}>
              {projectsData.filter(p => p.type === "experience").map((project, idx) => (
                <SpotlightCard key={project.id} className={styles.projectCard} idx={idx}>
                  <div className={styles.projectImageWrapper} style={{ background: '#fff', padding: '3rem' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={styles.projectImage}
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <div className={styles.projectTags}>
                      <span className={styles.projectTag} style={{ borderColor: 'var(--accent-violet)', color: 'var(--accent-violet)' }}>Experiência Profissional</span>
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className={styles.projectTag}>{tech}</span>
                      ))}
                      {project.technologies.length > 3 ? (
                        <span className={styles.projectTag}>+{project.technologies.length - 3}</span>
                      ) : null}
                    </div>
                    <h3 className={styles.projectTitle}>
                      {project.title}
                      {project.period && <span className={styles.projectPeriod}>{project.period}</span>}
                    </h3>
                    {project.role && <div className={styles.projectRole}>{project.role}</div>}
                    <p className={styles.projectDesc}>{project.description}</p>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noreferrer" className={styles.projectAction}>
                        Acessar Empresa <ArrowIcon />
                      </a>
                    ) : (
                      <div className={styles.projectAction}>
                        Ver Detalhes <ArrowIcon />
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              ))}
          </RailStage>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaContent}>
          <motion.h2
            className={styles.ctaTitle}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Vamos construir o seu próximo produto de sucesso?
          </motion.h2>
          <motion.p
            className={styles.ctaDesc}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Agende uma consultoria gratuita conosco e descubra como podemos transformar sua ideia em um SaaS ou Landing Page de altíssima conversão.
          </motion.p>
          <motion.a
            href="https://wa.me/5514988004041"
            target="_blank"
            rel="noreferrer"
            className={styles.primaryButton}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Chamar no WhatsApp
            <ArrowIcon />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>
              <span className={styles.navBrandAccent}>BSM</span> Studio
            </span>
            <p className={styles.footerTagline}>Transformando ideias em sistemas de alta conversão.</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Navegação</h4>
              <a href="#projetos" className={styles.footerLink}>Projetos</a>
              <a href="#experiencias" className={styles.footerLink}>Experiência</a>
              <a href="#contato" className={styles.footerLink}>Contato</a>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Produtos</h4>
              <a href="https://howmuchlove.com.br" target="_blank" rel="noreferrer" className={styles.footerLink}>HowMuchLove</a>
              <a href="https://tastly.com.br" target="_blank" rel="noreferrer" className={styles.footerLink}>Tastly</a>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Social</h4>
              <a href="https://github.com/BrenoSerenMartins" target="_blank" rel="noreferrer" className={styles.footerLink}>GitHub</a>
              <a href="https://linkedin.com/in/brenoserenmartins" target="_blank" rel="noreferrer" className={styles.footerLink}>LinkedIn</a>
              <a href="mailto:contato@brenosm.dev" className={styles.footerLink}>E-mail</a>
              <a href="https://wa.me/5514988004041" target="_blank" rel="noreferrer" className={styles.footerLink}>WhatsApp</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 BSM Studio</p>
        </div>
      </footer>
    </main>
  );
}
