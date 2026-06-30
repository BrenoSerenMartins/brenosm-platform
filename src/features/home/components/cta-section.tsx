"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/src/config/site";
import { ArrowIcon } from "@/src/components/icons/arrow-icon";
import styles from "@/src/features/home/portfolio-page.module.css";

export function CtaSection() {
  return (
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
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryButton}
          aria-label="Chamar a BSM Studio no WhatsApp"
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
  );
}
