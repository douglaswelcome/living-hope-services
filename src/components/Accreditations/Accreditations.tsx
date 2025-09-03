import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Accreditations.module.scss";

interface AccreditationItem {
  icon: React.ReactNode;
  label: string;
}

interface AccreditationsProps {
  title?: string;
  subtitle?: string;
  accreditations: AccreditationItem[];
  className?: string;
}

const Accreditations: React.FC<AccreditationsProps> = ({
  title = "Our Accreditations",
  subtitle,
  accreditations,
  className = ""
}) => {
  return (
    <div className={`${styles.accreditations} ${className}`}>
      <div className={styles.mainBody}>
        <div className={styles.content}>
                  <SectionTitle title={title} />
        
        {subtitle && (
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        )}
        
        <div className={styles.accreditationsGrid}>
            {accreditations.map((accreditation, index) => (
              <div key={index} className={styles.accreditationItem}>
                <div className={styles.iconContainer}>
                  {accreditation.icon}
                </div>
                <p className={styles.label}>{accreditation.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
