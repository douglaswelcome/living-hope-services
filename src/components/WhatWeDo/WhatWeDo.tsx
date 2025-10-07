import React from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./WhatWeDo.module.scss";

interface WhatWeDoProps {
  title?: string;
  className?: string;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ 
  title = "What We Do",
  className = "" 
}) => {
  return (
    <section className={`${styles.whatWeDo} ${className} mainBody`}>
      <div className={styles.container}>
        <SectionTitle title={title} className={styles.sectionTitle} />
        
        <div className={styles.contentCard}>
          <div className={styles.backgroundImage}>
            <Image
              src="/images/jungle.jpeg"
              alt="Bessie House - A place of hope and recovery"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className={styles.image}
            />
            <div className={styles.overlay}></div>
          </div>
          
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2 className={styles.heading}>
                A Place to <span className="hero-highlight">Thrive</span>
              </h2>
              <p className={styles.description}>
                At Living Hope Services, we provide a comprehensive approach to addiction recovery 
                that goes beyond traditional treatment. Our mission is to create a supportive 
                environment where individuals can rebuild their lives with dignity, purpose, and hope.
              </p>
              <p className={styles.description}>
                We offer structured sober living accommodations, personalized mentorship programs, 
                and community-based support systems that address the physical, emotional, and 
                spiritual aspects of recovery. Our experienced team works closely with each 
                resident to develop individualized recovery plans that promote long-term success 
                and sustainable life changes.
              </p>
              <p className={styles.description}>
                Through our network of certified professionals and peer support groups, we create 
                opportunities for meaningful connections, skill development, and personal growth. 
                Our goal is not just sobriety, but helping each person discover their potential 
                and build a foundation for a fulfilling, substance-free life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
