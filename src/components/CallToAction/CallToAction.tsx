import Link from "next/link";
import styles from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <section className={`${styles.callToAction} py-16 bg-[var(--color-bright-green)]`}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <h2 className={`${styles.title} text-3xl font-bold text-white mb-4`}>
            Ready to Start Your Recovery Journey?
          </h2>
          <p className={`${styles.subtitle} text-xl text-[var(--color-light-teal)] mb-8`}>
            Take the first step towards a brighter future. Our compassionate team is here to help.
          </p>
          <Link 
            href="/contact" 
            className={`${styles.ctaButton} bg-white text-[var(--color-bright-green)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-light-teal)] transition duration-300`}
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 