import Link from "next/link";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} relative py-20`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} text-4xl md:text-6xl font-bold text-gray-900 mb-6`}>
            Find Your Path to
            <span className={`${styles.highlight} text-indigo-600`}> Recovery</span>
          </h1>
          <p className={`${styles.subtitle} text-xl text-gray-600 mb-8 max-w-3xl mx-auto`}>
            Professional addiction recovery services in a supportive, home-like environment. 
            We believe everyone deserves a second chance and the opportunity to rebuild their lives.
          </p>
          <div className={`${styles.buttonContainer} flex flex-col sm:flex-row gap-4 justify-center`}>
            <Link 
              href="/contact" 
              className={`${styles.primaryButton} bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300`}
            >
              Get Help Today
            </Link>
            <Link 
              href="/services" 
              className={`${styles.secondaryButton} border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition duration-300`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 