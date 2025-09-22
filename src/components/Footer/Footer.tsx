import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} py-12 mainBody`}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={`${styles.footerTitle} mb-4`}>
              <Logo variant="text2" className="h-16 w-auto inline-block" color="var(--color-dark-green)" />
            </h3>
            <div className="divLine"></div>
            <p className={styles.footerDescription}>
              Providing compassionate addiction recovery services in a supportive environment.
            </p>
          </div>
          
          <div className={`${styles.footerSection} ${styles.contactSection}`}>
            <h5 className={`${styles.footerSubtitle} mb-4`}>Contact</h5>
            <ul className={`${styles.footerList} space-y-2`}>
              <li>1657 Bessie Ave, Tracy, CA 95376</li>
              <li>(209) 831-2990</li>
              <li>info@livinghopeservices.org</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Living Hope Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 