import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Icon } from "../Icon";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useSectionBasedLogo } from "../../hooks/useSectionBasedLogo";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const { logoColor, isDarkBackground } = useSectionBasedLogo();

  return (
    <nav className={`${styles.navigation} mainBody`} aria-label="Main navigation" data-nav="main">
      <div className={styles.navigationContainer}>
        <div className={styles.navigationContent}>
          <div className={styles.logoContainer}>
            <Logo 
              variant="text" 
              className={`h-8 w-auto ${isDarkBackground ? styles.logoWhite : styles.logoGreen}`} 
              color={logoColor} 
            />
          </div>
          <div className={styles.contactButton}>
            <Button 
              variant="primary"
              href="#contact"
              className={styles.desktopButton}
            >
              Contact Us
            </Button>
            <Button 
              variant="icon-only"
              href="#contact"
              className={styles.mobileButton}
            >
              <div className={styles.iconWrapper}>
                <Icon icon={faPhone} color="white" size="sm" />
              </div>
            </Button>
          </div>
          {/* <div className={styles.navLinks} role="navigation">
            <Link href="/" className={`${styles.navLink} px-3 py-2 rounded-md text-sm font-medium`}>
              Home
            </Link>
            <Link href="/services" className={`${styles.navLink} px-3 py-2 rounded-md text-sm font-medium`}>
              Services
            </Link>
            <Link href="/about" className={`${styles.navLink} px-3 py-2 rounded-md text-sm font-medium`}>
              About
            </Link>
            <Link href="/contact" className={`${styles.navLink} px-3 py-2 rounded-md text-sm font-medium`}>
              Contact
            </Link>
            <Link href="/resources" className={`${styles.navLink} px-3 py-2 rounded-md text-sm font-medium`}>
              Resources
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 