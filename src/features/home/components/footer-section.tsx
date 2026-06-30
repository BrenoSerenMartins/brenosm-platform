import { siteConfig } from "@/src/config/site";
import styles from "@/src/features/home/portfolio-page.module.css";

const socialLinks = siteConfig.socialLinks;

export function FooterSection() {
  return (
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
            <a href="https://howmuchlove.com.br" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>HowMuchLove</a>
            <a href="https://tastly.com.br" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Tastly</a>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Social</h4>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
            <a href={`mailto:${siteConfig.contactEmail}`} className={styles.footerLink}>E-mail</a>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>WhatsApp</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2026 BSM Studio</p>
      </div>
    </footer>
  );
}
