import React from "react";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = "" }) => {
  return (
    <div className={`${styles.sectionTitle} ${className}`}>
      {/* Left decorative elements */}
      <div className={styles.leftDecoration}>
        
        <div className={styles.decorativeLine}></div>
      </div>
      
      {/* Title */}
      <h5 className={styles.title}>
        {title}
      </h5>
      
      {/* Right decorative elements */}
      <div className={styles.rightDecoration}>
        <div className={styles.decorativeLine}></div>
       
      </div>
    </div>
  );
};

export default SectionTitle;
