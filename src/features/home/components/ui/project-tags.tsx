import styles from "@/src/features/home/portfolio-page.module.css";

export function ProjectTags({
  technologies,
  leadLabel,
}: {
  technologies: string[];
  leadLabel?: string;
}) {
  const visibleTechnologies = technologies.length > 0 ? technologies.slice(0, 3) : ["Produto digital"];
  const remainingCount = technologies.length > visibleTechnologies.length
    ? technologies.length - visibleTechnologies.length
    : 0;

  return (
    <div className={styles.projectTags}>
      {leadLabel ? (
        <span className={`${styles.projectTag} ${styles.projectTagAccent}`}>{leadLabel}</span>
      ) : null}
      {visibleTechnologies.map((technology) => (
        <span key={technology} className={styles.projectTag}>{technology}</span>
      ))}
      {remainingCount > 0 ? (
        <span className={styles.projectTag}>+{remainingCount}</span>
      ) : null}
    </div>
  );
}
