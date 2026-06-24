"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import styles from "@/src/features/home/portfolio-page.module.css";

type PanelTone = "cyan" | "violet" | "indigo" | "gold";
type PanelIcon = "magento" | "laravel" | "api" | "erp" | "react" | "database" | "docker" | "saas";
type PanelStyle = CSSProperties & {
  "--panel-x": string;
  "--panel-y": string;
  "--panel-rotate": string;
};

type ScenePanel = {
  title: string;
  note: string;
  icon: PanelIcon;
  x: number;
  y: number;
  rotate: number;
  lineX: number;
  lineY: number;
  tone: PanelTone;
  delay: number;
};

const panels: ScenePanel[] = [
  {
    title: "Magento Commerce",
    note: "E-commerce robusto e personalizável",
    icon: "magento",
    x: -1.08,
    y: -0.96,
    rotate: -5,
    lineX: 355,
    lineY: 265,
    tone: "gold",
    delay: 0,
  },
  {
    title: "Laravel Applications",
    note: "Sistemas web escaláveis e seguros",
    icon: "laravel",
    x: 0.24,
    y: -1.02,
    rotate: 5,
    lineX: 650,
    lineY: 235,
    tone: "violet",
    delay: 0.35,
  },
  {
    title: "REST APIs",
    note: "Integrações e serviços de alta performance",
    icon: "api",
    x: 1.1,
    y: -0.36,
    rotate: 8,
    lineX: 842,
    lineY: 375,
    tone: "cyan",
    delay: 0.7,
  },
  {
    title: "ERP Integrations",
    note: "Sincronização com ERPs, gateways e sistemas externos",
    icon: "erp",
    x: 1.08,
    y: 0.55,
    rotate: 10,
    lineX: 838,
    lineY: 585,
    tone: "indigo",
    delay: 1.05,
  },
  {
    title: "React Interfaces",
    note: "Interfaces modernas e responsivas",
    icon: "react",
    x: 0.35,
    y: 1.08,
    rotate: 4,
    lineX: 590,
    lineY: 794,
    tone: "cyan",
    delay: 1.4,
  },
  {
    title: "Docker & Infra",
    note: "Ambientes estáveis e escaláveis",
    icon: "docker",
    x: -0.2,
    y: 1.08,
    rotate: -2,
    lineX: 435,
    lineY: 788,
    tone: "gold",
    delay: 1.75,
  },
  {
    title: "Database Architecture",
    note: "Modelagem, performance e consistência",
    icon: "database",
    x: -1.08,
    y: 0.72,
    rotate: -8,
    lineX: 240,
    lineY: 642,
    tone: "violet",
    delay: 2.1,
  },
  {
    title: "SaaS Products",
    note: "Produtos digitais focados em valor e escala",
    icon: "saas",
    x: -1.16,
    y: -0.16,
    rotate: -10,
    lineX: 220,
    lineY: 438,
    tone: "gold",
    delay: 2.45,
  },
];

const toneClassMap: Record<PanelTone, string> = {
  cyan: styles.heroScenePanelCyan,
  violet: styles.heroScenePanelViolet,
  indigo: styles.heroScenePanelIndigo,
  gold: styles.heroScenePanelGold,
};

function panelStyle(panel: ScenePanel): PanelStyle {
  return {
    "--panel-x": `${panel.x}`,
    "--panel-y": `${panel.y}`,
    "--panel-rotate": `${panel.rotate}deg`,
  } as PanelStyle;
}

function SceneGlyph({ icon }: { icon: PanelIcon }) {
  switch (icon) {
    case "magento":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4.5 19 8v8l-7 3.5L5 16V8l7-3.5Z" />
          <path d="M9 8v8l3-1.7 3 1.7V8" />
        </svg>
      );
    case "laravel":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 8.2 12 5l6 3.2V15l-6 4-6-4V8.2Z" />
          <path d="M8.4 9.2 12 7.2l3.6 2V13L12 15.2 8.4 13V9.2Z" />
        </svg>
      );
    case "api":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 7 5.5 12 9 17" />
          <path d="M15 7 18.5 12 15 17" />
          <path d="M11 17l2-10" />
        </svg>
      );
    case "erp":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 18V9" />
          <path d="M12 18V6" />
          <path d="M18 18v-7" />
          <path d="M5 18h14" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="8" ry="3" />
          <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(-60 12 12)" />
          <circle cx="12" cy="12" r="1.8" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="6.5" ry="2.5" />
          <path d="M5.5 6v8c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V6" />
          <path d="M5.5 10c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9h3v3H6z" />
          <path d="M9 9h3v3H9z" />
          <path d="M12 9h3v3h-3z" />
          <path d="M8 12h4c1.8 0 3 .7 3.8 1.9.8 1.1 1.1 2.5.9 4.1H9.6C7.4 18 6 17 6 15.2c0-1.7.8-3 2-3.2Z" />
        </svg>
      );
    case "saas":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.5 17.5h10a3.5 3.5 0 0 0 .2-7 4.5 4.5 0 0 0-8.4-1.7A3.5 3.5 0 0 0 7.5 17.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

function AvatarIllustration() {
  return (
    <svg
      className={styles.heroSceneAvatarSvg}
      viewBox="0 0 360 390"
      role="img"
      aria-label="Avatar de um desenvolvedor no centro da cena"
    >
      <defs>
        <radialGradient id="scene-avatar-halo" cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#3d8dff" stopOpacity="0.42" />
          <stop offset="42%" stopColor="#6d65ff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#05070d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="scene-avatar-hood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a3348" />
          <stop offset="55%" stopColor="#111722" />
          <stop offset="100%" stopColor="#05070d" />
        </linearGradient>
        <linearGradient id="scene-avatar-face" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3d1bf" />
          <stop offset="52%" stopColor="#d09a7f" />
          <stop offset="100%" stopColor="#8b5d49" />
        </linearGradient>
        <linearGradient id="scene-avatar-hair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#242a35" />
          <stop offset="100%" stopColor="#090b12" />
        </linearGradient>
        <linearGradient id="scene-avatar-beard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(20, 28, 42, 0.65)" />
          <stop offset="100%" stopColor="rgba(5, 6, 10, 0.95)" />
        </linearGradient>
        <radialGradient id="scene-avatar-glint" cx="38%" cy="28%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="180" cy="182" rx="112" ry="132" fill="url(#scene-avatar-halo)" opacity="0.9" />
      <ellipse cx="180" cy="318" rx="98" ry="24" fill="#000" opacity="0.34" />

      <g>
        <path
          d="M108 294c12-37 34-60 72-60s60 23 72 60c-13 18-39 28-72 28s-59-10-72-28Z"
          fill="url(#scene-avatar-hood)"
        />
        <path
          d="M135 272c8-17 21-26 45-26s37 9 45 26c-10 7-24 12-45 12s-35-5-45-12Z"
          fill="rgba(255,255,255,0.05)"
        />
        <path
          d="M146 196c0-37 15-66 34-66s34 29 34 66c0 27-12 46-34 46s-34-19-34-46Z"
          fill="url(#scene-avatar-face)"
        />
        <path
          d="M132 182c5-30 20-53 48-53s43 11 50 34c-4 4-12 7-18 9-7-15-17-22-32-22-15 0-26 7-33 22-6-2-11-5-15-9Z"
          fill="url(#scene-avatar-hair)"
        />
        <path
          d="M134 187c7 3 13 6 19 11 3-11 11-20 27-20 15 0 24 9 27 20 6-5 12-8 19-11 0 22-10 42-33 53-7-3-13-5-14-5s-7 2-14 5c-23-11-33-31-33-53Z"
          fill="url(#scene-avatar-beard)"
        />
        <path d="M145 209c6 2 11 3 17 3s12-1 18-3" stroke="rgba(253, 228, 214, 0.35)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M145 209c6 1 11 1 17 1s12 0 18-1" stroke="rgba(0,0,0,0.22)" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="159" cy="193" r="2.8" fill="#191e29" />
        <circle cx="201" cy="193" r="2.8" fill="#191e29" />
        <path d="M162 206c6 4 13 4 20 0" stroke="rgba(54, 34, 26, 0.55)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M178 214c1 4 1 6 0 10" stroke="rgba(57, 38, 28, 0.45)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M133 252c12 12 28 18 47 18s35-6 47-18" stroke="rgba(255,255,255,0.06)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <ellipse cx="160" cy="154" rx="36" ry="22" fill="rgba(255,255,255,0.05)" />
        <ellipse cx="196" cy="154" rx="36" ry="22" fill="rgba(255,255,255,0.03)" />
        <path d="M151 133c10-6 21-8 29-8 11 0 23 3 33 9" stroke="url(#scene-avatar-glint)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
      </g>
    </svg>
  );
}

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const frameRef = useRef<number | null>(null);
  const pendingPointRef = useRef({ x: 0.5, y: 0.5 });

  const smoothX = useSpring(pointerX, { stiffness: 85, damping: 22, mass: 0.45 });
  const smoothY = useSpring(pointerY, { stiffness: 85, damping: 22, mass: 0.45 });

  const rotateX = useTransform(smoothY, [0, 1], [6, -6]);
  const rotateY = useTransform(smoothX, [0, 1], [-8, 8]);
  const glowX = useTransform(smoothX, [0, 1], [-18, 18]);
  const glowY = useTransform(smoothY, [0, 1], [-14, 14]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const element = containerRef.current;
    if (!element) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) {
      return;
    }

    const commitPoint = (x: number, y: number) => {
      pendingPointRef.current.x = x;
      pendingPointRef.current.y = y;

      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        pointerX.set(pendingPointRef.current.x);
        pointerY.set(pendingPointRef.current.y);
        frameRef.current = null;
      });
    };

    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      commitPoint(Math.min(Math.max(x, 0), 1), Math.min(Math.max(y, 0), 1));
    };

    const handleLeave = () => {
      pointerX.set(0.5);
      pointerY.set(0.5);
    };

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", handleLeave);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", handleLeave);
    };
  }, [pointerX, pointerY, prefersReducedMotion]);

  return (
    <div ref={containerRef} className={styles.heroSceneFrame}>
      <motion.div className={styles.heroSceneBackdrop} style={{ x: glowX, y: glowY, willChange: "transform, opacity" }} />
      <div className={styles.heroSceneGrid} />

      <motion.div
        className={styles.heroSceneStage}
        style={
          prefersReducedMotion
            ? undefined
            : {
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
                willChange: "transform",
              }
        }
      >
        <svg className={styles.heroSceneConnections} viewBox="0 0 1000 1000" aria-hidden="true">
          <defs>
            <linearGradient id="hero-scene-line-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3d8dff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#2bb7ff" stopOpacity="0.82" />
            </linearGradient>
            <linearGradient id="hero-scene-line-violet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6d65ff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#916dff" stopOpacity="0.82" />
            </linearGradient>
            <linearGradient id="hero-scene-line-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f7dff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#2b5dff" stopOpacity="0.82" />
            </linearGradient>
            <linearGradient id="hero-scene-line-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7d34" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ff9448" stopOpacity="0.84" />
            </linearGradient>
          </defs>

          {panels.map((panel) => (
            <g key={panel.title}>
              <motion.line
                x1="500"
                y1="500"
                x2={panel.lineX}
                y2={panel.lineY}
                stroke={`url(#hero-scene-line-${panel.tone})`}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="1 11"
                initial={prefersReducedMotion ? false : { pathLength: 0.05, opacity: 0.45 }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        pathLength: 1,
                        opacity: [0.45, 0.88, 0.45],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : {
                        duration: 7 + panel.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: panel.delay,
                      }
                }
              />
              <motion.circle
                cx={panel.lineX}
                cy={panel.lineY}
                r="4.5"
                fill={`url(#hero-scene-line-${panel.tone})`}
                initial={prefersReducedMotion ? false : { opacity: 0.35 }}
                animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.95, 0.35] }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : {
                        duration: 6 + panel.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: panel.delay,
                      }
                }
              />
            </g>
          ))}
        </svg>

        <motion.div className={styles.heroSceneCore}>
          <motion.div className={styles.heroSceneCoreHalo} style={{ x: glowX, y: glowY }} aria-hidden="true" />
          <div className={styles.heroScenePanels}>
            {panels.map((panel, index) => (
              <motion.article
                key={panel.title}
                className={`${styles.heroScenePanel} ${toneClassMap[panel.tone]}`}
                style={panelStyle(panel)}
                whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.01 }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: [0, -5 - index % 3, 0],
                        rotateZ: [panel.rotate - 0.8, panel.rotate + 0.8, panel.rotate - 0.8],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : {
                        duration: 8 + index * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: panel.delay,
                      }
                }
              >
                <div className={styles.heroScenePanelTopRow}>
                  <span className={styles.heroScenePanelIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.heroScenePanelIcon} aria-hidden="true">
                    <SceneGlyph icon={panel.icon} />
                  </span>
                </div>

                <h3 className={styles.heroScenePanelTitle}>{panel.title}</h3>
                <p className={styles.heroScenePanelText}>{panel.note}</p>
              </motion.article>
            ))}
          </div>

          <div className={styles.heroScenePlatform} aria-hidden="true" />
          <div className={styles.heroSceneAvatarShell}>
            <AvatarIllustration />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
