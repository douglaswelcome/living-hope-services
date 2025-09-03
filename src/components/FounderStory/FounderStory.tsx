import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./FounderStory.module.scss";

interface FounderStoryProps {
  title: string;
  subtitle?: string;
  story: string | string[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const FounderStory: React.FC<FounderStoryProps> = ({ 
  title, 
  subtitle, 
  story, 
  imageSrc, 
  imageAlt, 
  className = "" 
}) => {
  // Function to highlight specific words with the hero-highlight class
  const highlightWords = (text: string) => {
    const words = text.split(/(\s+)/);
    return words.map((word, index) => {
      const lowerWord = word.toLowerCase();
      if (lowerWord.includes('hope') || lowerWord.includes('recovery')) {
        // Find the exact word to highlight (preserving case)
        if (lowerWord.includes('hope')) {
          const hopeIndex = lowerWord.indexOf('hope');
          const beforeHope = word.slice(0, hopeIndex);
          const hopeWord = word.slice(hopeIndex, hopeIndex + 4);
          const afterHope = word.slice(hopeIndex + 4);
          
          return (
            <React.Fragment key={index}>
              {beforeHope}
              <span className="hero-highlight">{hopeWord}</span>
              {afterHope}
            </React.Fragment>
          );
        } else if (lowerWord.includes('recovery')) {
          const recoveryIndex = lowerWord.indexOf('recovery');
          const beforeRecovery = word.slice(0, recoveryIndex);
          const recoveryWord = word.slice(recoveryIndex, recoveryIndex + 8);
          const afterRecovery = word.slice(recoveryIndex + 8);
          
          return (
            <React.Fragment key={index}>
              {beforeRecovery}
              <span className="hero-highlight">{recoveryWord}</span>
              {afterRecovery}
            </React.Fragment>
          );
        }
      }
      return word;
    });
  };

  return (
    <section className={`${styles.founderStory} ${className} mainBody`}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <SectionTitle title={title} />
        </div>
        
        <div className={styles.content}>
          <div className={styles.gradientBackground}></div>
          
          <div className={styles.textContent}>
            {subtitle && (
              <h2 className={styles.storyTitle}>{highlightWords(subtitle)}</h2>
            )}
            {Array.isArray(story) 
              ? story.map((paragraph, index) => (
                  <p key={index} className={styles.storyText}>
                    {paragraph}
                  </p>
                ))
              : story.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={styles.storyText}>
                    {paragraph.trim()}
                  </p>
                ))
            }
          </div>
          
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className={styles.founderImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
