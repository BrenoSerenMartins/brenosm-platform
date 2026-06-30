"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RailStage } from "@/src/components/motion/rail-stage";
import styles from "@/src/features/home/portfolio-page.module.css";

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

export function BentoGridSection() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(null);
  const featureModalRef = useRef<HTMLDivElement | null>(null);
  const featureModalCloseRef = useRef<HTMLButtonElement | null>(null);

  const activeFeature = activeFeatureIndex === null ? null : bentoFeatures[activeFeatureIndex] ?? null;

  useEffect(() => {
    if (!activeFeature) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const focusFrame = window.requestAnimationFrame(() => {
      featureModalCloseRef.current?.focus({ preventScroll: true });
    });

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveFeatureIndex(null);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const modal = featureModalRef.current;
      if (!modal) {
        return;
      }

      const focusableElements = modal.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus({ preventScroll: true });
    };
  }, [activeFeature]);

  return (
    <>
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
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}
              >
                <div className={styles.bentoSpotlight} />
                <div className={styles.bentoNoise} />
                <div className={styles.bentoInner}>
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
              ref={featureModalRef}
              className={styles.featureModal}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="feature-modal-title"
              aria-describedby="feature-modal-description"
            >
              <button
                ref={featureModalCloseRef}
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
              <p id="feature-modal-description" className={styles.featureModalText}>{activeFeature.details}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
