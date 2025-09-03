import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} mainBody`} aria-label="Main navigation">
      <div className={styles.navigationContainer}>
        <div className={styles.navigationContent}>
          <div className={styles.logoContainer}>
            <Logo variant="text" className="h-8 w-auto" color="var(--color-green)" />
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