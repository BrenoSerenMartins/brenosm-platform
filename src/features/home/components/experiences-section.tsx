"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RailStage } from "@/src/components/motion/rail-stage";
import { TiltCard } from "@/src/components/motion/tilt-card";
import { ArrowIcon } from "@/src/components/icons/arrow-icon";
import { ProjectTags } from "@/src/features/home/components/ui/project-tags";
import { experienceProjects } from "@/src/features/home/data";
import styles from "@/src/features/home/portfolio-page.module.css";

export function ExperiencesSection() {
  return (
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
          {experienceProjects.map((project, idx) => (
            <TiltCard key={project.id} className={styles.projectCard} idx={idx}>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.fluidCardInner}>
                  {/* Fundo desfocado (Ambient Glow) */}
                  <Image src={project.image} alt="" fill className={styles.fluidBgBlur} unoptimized />
                  
                  {/* Imagem principal nítida */}
                  <div className={`${styles.fluidImageContainer} ${styles.edgeToEdge}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.fluidImage}
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>

                  {/* Gradiente escuro protetor */}
                  <div className={styles.fluidOverlay} />

                  {/* Conteúdo sobreposto */}
                  <div className={styles.fluidContent}>
                    <ProjectTags technologies={project.technologies} />
                    <h3 className={styles.fluidTitle}>{project.title}</h3>
                    {(project.role || project.period) && (
                      <div className={styles.fluidMeta}>
                        {project.role && <span className={styles.fluidRole}>{project.role}</span>}
                        {project.period && <span className={styles.fluidPeriod}>{project.period}</span>}
                      </div>
                    )}
                    <p className={styles.fluidDesc}>{project.description}</p>
                    <span className={styles.fluidAction}>
                      Acessar Empresa <ArrowIcon />
                    </span>
                  </div>
                </a>
              ) : (
                <div className={styles.fluidCardInner}>
                  {/* Fundo desfocado (Ambient Glow) */}
                  <Image src={project.image} alt="" fill className={styles.fluidBgBlur} unoptimized />
                  
                  {/* Imagem principal nítida */}
                  <div className={`${styles.fluidImageContainer} ${styles.edgeToEdge}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.fluidImage}
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>

                  {/* Gradiente escuro protetor */}
                  <div className={styles.fluidOverlay} />

                  {/* Conteúdo sobreposto */}
                  <div className={styles.fluidContent}>
                    <ProjectTags technologies={project.technologies} />
                    <h3 className={styles.fluidTitle}>{project.title}</h3>
                    {(project.role || project.period) && (
                      <div className={styles.fluidMeta}>
                        {project.role && <span className={styles.fluidRole}>{project.role}</span>}
                        {project.period && <span className={styles.fluidPeriod}>{project.period}</span>}
                      </div>
                    )}
                    <p className={styles.fluidDesc}>{project.description}</p>
                    <span className={styles.fluidAction}>
                      Ver Detalhes <ArrowIcon />
                    </span>
                  </div>
                </div>
              )}
            </TiltCard>
          ))}
        </RailStage>
      </div>
    </section>
  );
}
