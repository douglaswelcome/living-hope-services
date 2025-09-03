import React from "react";
import styles from "./HeroSection.module.scss";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} relative py-20 mainBody`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.textColumn}>
            <h1 className={`${styles.title} text-4xl md:text-6xl font-bold text-gray-900 mb-6`}>
              Find Your Path to
              <span className={styles.highlight}> Recovery</span>
            </h1>
            <p className={`${styles.subtitle} text-xl text-gray-600 mb-8 max-w-3xl`}>
            Living Hope Services operates men’s homes that are more than just housing. Our faith-based program provides a clean, structured, and supportive environment where men can heal in recovery and find resources for lasting stability and hope.            </p>
            <div className={`${styles.buttonContainer} flex flex-col sm:flex-row gap-4`}>
              <Button 
                variant="primary"
                href="/contact"
              >
                Contact Us
              </Button>
              <Button 
                variant="secondary"
                href="/services"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              <img 
                src="/images/hero.jpg" 
                alt="Peaceful garden and recovery environment at Living Hope Services"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 