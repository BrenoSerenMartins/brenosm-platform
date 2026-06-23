"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeroScene } from "@/src/features/home/components/hero-scene";
import styles from "@/src/features/home/portfolio-page.module.css";
import projectsData from "@/src/content/projects.json";

type ProjectCard = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
};

type BentoFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  large?: boolean;
};

const techMarquee = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", 
  "Supabase", "Framer Motion", "Figma", "Docker", "AWS", "Next.js", "React", "TypeScript"
];

const bentoFeatures: BentoFeature[] = [
  {
    title: "Velocidade de Entrega",
    description: "Sua ideia não pode esperar. Construímos MVPs e LPs de forma ágil para você validar e tracionar no mercado rapidamente.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    large: true,
  },
  {
    title: "Design Premium",
    description: "Interfaces com estética de alto nível, micro-interações e atenção obsessiva aos detalhes para elevar a sua marca.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Escalabilidade",
    description: "Código limpo e arquitetura serverless. O sistema não vai quebrar quando o seu negócio explodir em acessos.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45m.311-.06a15.247 15.247 0 012.448 2.45M20.676 8.25l-2.448 2.45M6.028 15.75l-2.45 2.45M20.676 8.25l-2.448-2.45" />
      </svg>
    ),
  },
  {
    title: "Alta Performance & SEO",
    description: "Cada byte otimizado. Sites rápidos convertem mais, rankeiam melhor no Google e oferecem uma experiência superior.",
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

export function HomePage() {
  return (
    <main className={styles.pageShell}>
      <div className={styles.glowTop} />

      {/* Hero Wrapper */}
      <div className={styles.heroWrapper}>
        {/* Hero Section */}
        <section className={`${styles.container} ${styles.heroSection}`}>
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transformamos ideias em <br/><span className={styles.heroTitleAccent}>Sistemas de Alta Conversão</span>.
        </motion.h1>

        <motion.p
          className={styles.heroLead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Velocidade e escala para o seu negócio. Construímos MVPs, SaaS e Landing Pages premium para quem quer validar rápido e gerar caixa de verdade.
        </motion.p>

        <motion.div
          className={styles.heroActions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#contato" className={styles.primaryButton}>
            Solicitar Orçamento
            <ArrowIcon />
          </a>
          <a href="#projetos" className={styles.secondaryButton}>
            Ver Cases de Sucesso
          </a>
        </motion.div>
      </section>

        <div className={styles.marqueeContainer}>
          <motion.div
            className={styles.marqueeTrack}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span key={i} className={styles.marqueeItem}>
                <span style={{ color: "var(--accent-cyan)", fontSize: "1.5rem" }}>•</span> {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Value Proposition (Bento Grid) */}
      <section className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>O Nosso Diferencial</p>
            <h2 className={styles.sectionTitle}>Construído para Performance.</h2>
            <p className={styles.sectionLead}>
              Nós não apenas escrevemos código. Nós criamos produtos digitais otimizados para converter visitantes em clientes.
            </p>
          </div>

          <div className={styles.bentoGrid}>
            {bentoFeatures.map((feature, idx) => (
              <motion.article
                key={idx}
                className={`${styles.bentoCard} ${feature.large ? styles.bentoLarge : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.bentoGlow} />
                <div className={styles.bentoIcon}>{feature.icon}</div>
                <h3 className={styles.bentoTitle}>{feature.title}</h3>
                <p className={styles.bentoDesc}>{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Projetos de Sucesso</p>
            <h2 className={styles.sectionTitle}>Produtos que Entregamos</h2>
            <p className={styles.sectionLead}>
              Conheça alguns dos sistemas, MVPs e e-commerces que ajudamos a construir e escalar.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projectsData.filter(p => p.type === "project").map((project, idx) => (
              <motion.article
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div 
                  className={styles.projectImageWrapper}
                  style={{ padding: project.id === 'tastly' ? '3rem' : '2rem' }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.projectImage}
                      style={{ 
                        objectFit: project.id === 'tastly' ? 'contain' : 'cover',
                        borderRadius: '8px'
                      }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectTags}>
                    {project.technologies.map(tech => (
                      <span key={tech} className={styles.projectTag}>{tech}</span>
                    ))}
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer" className={styles.projectAction} style={{ textDecoration: 'none' }}>
                      Acessar Projeto <ArrowIcon />
                    </a>
                  ) : (
                    <div className={styles.projectAction}>
                      Ver Detalhes <ArrowIcon />
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experiências Section */}
      <section id="experiencias" className={styles.sectionBlock}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>Trajetória</p>
            <h2 className={styles.sectionTitle}>Experiência Profissional</h2>
            <p className={styles.sectionLead}>
              Empresas incríveis por onde passei construindo tecnologia de ponta.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projectsData.filter(p => p.type === "experience").map((project, idx) => (
              <motion.article
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div 
                  className={styles.projectImageWrapper}
                  style={{ background: '#ffffff', padding: '3rem' }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.projectImage}
                      style={{ 
                        objectFit: 'contain',
                        borderRadius: '0'
                      }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectTags}>
                    <span className={styles.projectTag} style={{ borderColor: 'var(--accent-violet)', color: 'var(--accent-violet)' }}>Experiência Profissional</span>
                    {project.technologies.map(tech => (
                      <span key={tech} className={styles.projectTag}>{tech}</span>
                    ))}
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer" className={styles.projectAction} style={{ textDecoration: 'none' }}>
                      Acessar Empresa <ArrowIcon />
                    </a>
                  ) : (
                    <div className={styles.projectAction}>
                      Ver Detalhes <ArrowIcon />
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        <div className={styles.socialRow}>
          <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/brenoserenmartins" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:contato@brenosm.dev" className={styles.socialBtn} aria-label="E-mail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </a>
        </div>
        <p>© 2024 Breno Seren. Todos os direitos reservados. Foco em conversão e performance.</p>
      </footer>
    </main>
  );
}
