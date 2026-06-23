import Link from "next/link";
import styles from "./route-surface.module.css";

export default function NotFound() {
  return (
    <main className={styles.screen}>
      <div className={styles.ambient} />
      <section className={styles.panel}>
        <span className={styles.eyebrow}>404 / Surface missing</span>
        <div className={styles.code}>PAGE NOT FOUND</div>
        <h1 className={styles.title}>Essa rota saiu do mapa, mas o portfólio continua aqui.</h1>
        <p className={styles.text}>
          Use o botão abaixo para voltar à experiência principal ou iniciar uma nova conversa sobre landing pages,
          sistemas web e desenvolvimento sob demanda.
        </p>

        <div className={styles.buttonRow}>
          <Link href="/" className={styles.buttonPrimary}>
            Voltar ao início
          </Link>
          <Link href="/landings" className={styles.buttonSecondary}>
            Ver landing pages
          </Link>
        </div>

        <div className={styles.metaRow}>
          <span className={styles.metaChip}>Premium fallback</span>
          <span className={styles.metaChip}>Navigation safe</span>
          <span className={styles.metaChip}>Return path</span>
        </div>
      </section>
    </main>
  );
}
