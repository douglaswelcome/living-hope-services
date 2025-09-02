import React from 'react';
import styles from './BackgroundContainer.module.scss';

interface BackgroundContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={`${styles.backgroundContainer} ${className || ''}`}>
      <div className={styles.backgroundOverlay} />
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  );
};
