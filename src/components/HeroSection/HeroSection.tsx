import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.scss";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} relative py-20 mainBody`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.textColumn}>
            <h1 className={`${styles.title} display2 mb-6`}>
              Find Your Path to
              <span className="hero-highlight"> Recovery</span>
            </h1>
            <p className={`${styles.subtitle} mb-8 max-w-3xl`}>
              Living Hope Services offers safe and structured sober living environments where men find strength and stability to thrive.
            </p>
            <div className={`${styles.buttonContainer} flex flex-col sm:flex-row gap-4`}>
              <Button
                variant="primary"
                href="#contact"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/hero.jpg"
                alt="Peaceful garden and recovery environment at Living Hope Services"
                className={styles.heroImage}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 