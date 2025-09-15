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
      <div className="mainBody">
        <div className={styles.content}>
                  <SectionTitle title={title} />
        
        {subtitle && (
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        )}
        
        <div className={styles.accreditationsGrid}>
          {/* Icons row */}
          {accreditations.map((accreditation, index) => {
            // Check if this should be a simple icon (smaller) or detailed logo (bigger)
            // Simple icons: 501(c)(3) Organization, Licensed & Insured, and Font Awesome icons
            const isSimpleIcon = accreditation.label.includes('501(c)(3)') || 
                               accreditation.label.includes('Licensed & Insured') ||
                               accreditation.label.includes('Sober Living Network Member') ||
                               accreditation.label.includes('CCAPP Credentialing');
            
            return (
              <div key={`icon-${index}`} className={`${styles.iconContainer} ${isSimpleIcon ? styles.simpleIcon : styles.detailedLogo}`}>
                {accreditation.icon}
              </div>
            );
          })}
          
          {/* Labels row */}
          {accreditations.map((accreditation, index) => (
            <p key={`label-${index}`} className={styles.label}>
              {accreditation.label}
            </p>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
