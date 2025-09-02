import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} bg-[var(--color-dark-green)] text-white py-12`}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={`${styles.footerTitle} text-xl font-bold mb-4`}>
              Living Hope Services
            </h3>
            <p className={`${styles.footerDescription} text-[var(--color-light-teal)]`}>
              Providing compassionate addiction recovery services in a supportive environment.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={`${styles.footerSubtitle} font-semibold mb-4`}>Services</h4>
            <ul className={`${styles.footerList} space-y-2 text-[var(--color-light-teal)]`}>
              <li>Residential Treatment</li>
              <li>Individual Therapy</li>
              <li>Group Support</li>
              <li>Aftercare Planning</li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={`${styles.footerSubtitle} font-semibold mb-4`}>Resources</h4>
            <ul className={`${styles.footerList} space-y-2 text-[var(--color-light-teal)]`}>
              <li>Recovery Resources</li>
              <li>Family Support</li>
              <li>Educational Materials</li>
              <li>Emergency Contacts</li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={`${styles.footerSubtitle} font-semibold mb-4`}>Contact</h4>
            <ul className={`${styles.footerList} space-y-2 text-[var(--color-light-teal)]`}>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@livinghopeservices.com</li>
              <li>24/7 Crisis Line: (555) 999-8888</li>
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