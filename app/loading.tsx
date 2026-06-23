import styles from "./route-surface.module.css";

export default function Loading() {
  return (
    <main className={styles.screen}>
      <div className={styles.ambient} />
      <section className={styles.panel} aria-label="Carregando portfólio premium">
        <span className={styles.eyebrow}>Premium experience</span>
        <h1 className={styles.title}>Carregando um portfólio feito para transmitir valor.</h1>
        <p className={styles.text}>
          Preparando a interface, o motion e as seções dinâmicas para uma navegação com sensação de produto SaaS.
        </p>

        <div className={styles.loader} aria-hidden="true">
          <div className={styles.loaderTrack}>
            <div className={styles.loaderBar} />
          </div>
          <div className={styles.loaderMeta}>
            <span>Motion, profundidade e glass premium</span>
            <span>Pronto em instantes</span>
          </div>
        </div>

        <div className={styles.metaRow}>
          <span className={styles.metaChip}>Fast load</span>
          <span className={styles.metaChip}>Motion first</span>
          <span className={styles.metaChip}>Responsive</span>
          <span className={styles.metaChip}>Premium UI</span>
        </div>
      </section>
    </main>
  );
}
