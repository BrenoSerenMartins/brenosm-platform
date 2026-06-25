"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TiltCard } from "@/src/features/home/components/tilt-card";
import { getProjectPreviewSrc } from "@/src/content/portfolio";
import type { ProjectCard } from "@/src/types/portfolio";
import styles from "@/src/features/home/portfolio-page.module.css";
import { useSupportsHover } from "@/src/lib/use-supports-hover";

type Tone = "cyan" | "violet" | "indigo" | "gold";
type ShowcaseVariant = "hero-primary" | "hero-secondary" | "case";

type ProjectShowcaseProps = {
  project: ProjectCard;
  tone?: Tone;
  variant?: ShowcaseVariant;
  className?: string;
};

const priorityLabelMap = {
  1: "Principal",
  2: "Secundário",
} as const;

function getHostLabel(project: ProjectCard) {
  if (project.category) {
    return project.category;
  }

  if (!project.url) {
    return "Preview visual";
  }

  try {
    return new URL(project.url).hostname.replace(/^www\./, "");
  } catch {
    return "Preview visual";
  }
}

function getPriorityLabel(priority: number) {
  return priorityLabelMap[priority as 1 | 2] ?? `Prioridade ${priority}`;
}

function resolvePrimaryAction(project: ProjectCard) {
  if (project.url) {
    return { href: project.url, label: project.ctaLabel ?? "Acessar projeto", external: true };
  }

  return {
    href: "#contact",
    label: project.ctaLabel ?? "Solicitar projeto parecido",
    external: false,
  };
}

export function ProjectShowcase({ project, tone = "cyan", variant = "case", className }: ProjectShowcaseProps) {
  const supportsHover = useSupportsHover();
  const preview = getProjectPreviewSrc(project);
  const hostLabel = getHostLabel(project);
  const priorityLabel = getPriorityLabel(project.heroPriority);
  const primaryAction = resolvePrimaryAction(project);
  const isHeroPrimary = variant === "hero-primary";
  const isHeroSecondary = variant === "hero-secondary";
  const isCase = variant === "case";

  return (
    <TiltCard
      tone={tone}
      className={[
        styles.projectShowcase,
        isHeroPrimary ? styles.projectShowcaseHeroPrimary : "",
        isHeroSecondary ? styles.projectShowcaseHeroSecondary : "",
        variant === "case" ? styles.projectShowcaseCase : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.projectShowcaseChrome}>
        <div className={styles.projectShowcaseDots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <span className={styles.projectShowcaseHost}>{hostLabel}</span>

        {!isCase ? (
          <span className={styles.projectShowcaseBadge}>
            {project.featured ? `Featured · ${priorityLabel}` : project.category ?? "Case"}
          </span>
        ) : null}
      </div>

      <div className={styles.projectShowcaseMedia}>
        {preview ? (
          <Image
            src={preview}
            alt={project.name}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.projectShowcaseImage}
            unoptimized={!project.image}
          />
        ) : (
          <div className={styles.projectShowcaseFallback} aria-hidden="true">
            <span className={styles.projectShowcaseFallbackLabel}>{project.name}</span>
            <strong>Preview pendente</strong>
            <p>A vitrine aceita novo screenshot ou URL sem alterar o componente.</p>
          </div>
        )}

        <div className={styles.projectShowcaseGlow} aria-hidden="true" />
        {!isCase ? (
          <div className={styles.projectShowcaseOverlay}>
            <span>{project.category ?? "Produto digital"}</span>
            <strong>{project.name}</strong>
          </div>
        ) : null}
      </div>

      <div className={styles.projectShowcaseBody}>
        <div className={styles.projectShowcaseIntro}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>

        {!isCase ? (
          <div className={styles.projectShowcaseMetaGrid}>
            {project.problem ? (
              <div className={styles.projectShowcaseMetaCard}>
                <span>Problema</span>
                <p>{project.problem}</p>
              </div>
            ) : null}
            {project.solution ? (
              <div className={styles.projectShowcaseMetaCard}>
                <span>Solução</span>
                <p>{project.solution}</p>
              </div>
            ) : null}
            {project.result ? (
              <div className={styles.projectShowcaseMetaCard}>
                <span>Resultado</span>
                <p>{project.result}</p>
              </div>
            ) : null}
          </div>
        ) : null}

        {project.technologies.length > 0 ? (
          <div className={styles.projectShowcaseTechRow}>
            {project.technologies.map((technology) => (
              <span key={technology} className={styles.projectShowcaseTechTag}>
                {technology}
              </span>
            ))}
          </div>
        ) : null}

        <div className={styles.projectShowcaseActions}>
          <motion.a
            href={primaryAction.href}
            className={styles.projectShowcasePrimaryAction}
            whileHover={supportsHover ? { y: -2, scale: 1.01 } : undefined}
            whileTap={{ scale: 0.98 }}
            target={primaryAction.external ? "_blank" : undefined}
            rel={primaryAction.external ? "noreferrer" : undefined}
          >
            {primaryAction.label}
          </motion.a>

          {!isCase ? (
            <a href="#contact" className={styles.projectShowcaseSecondaryAction}>
              Falar sobre algo assim
            </a>
          ) : null}
        </div>
      </div>
    </TiltCard>
  );
}
