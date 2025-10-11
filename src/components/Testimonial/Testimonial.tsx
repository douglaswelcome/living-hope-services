import React, { useState } from "react";
import Image from "next/image";
import styles from "./Testimonial.module.scss";
import testimonialsData from "../../data/testimonials.json";
import FullScreenModal from "../FullScreenModal/FullScreenModal";
import Button from "../Button/Button";

interface TestimonialData {
  id: number;
  quote: string;
  emphasizedWords: string[];
  name: string;
  recoveryTime: string;
  headshotSrc: string;
  headshotAlt: string;
  fullStory?: string[];
}

interface TestimonialProps {
  id: number;
  imagePosition?: 'left' | 'right';
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  id,
  imagePosition = 'left',
  className = ""
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Find the testimonial by ID
  const testimonial = testimonialsData.find((t: TestimonialData) => t.id === id);
  
  if (!testimonial) {
    console.error(`Testimonial with ID ${id} not found`);
    return null;
  }

  const { quote, emphasizedWords, name, recoveryTime, headshotSrc, headshotAlt, fullStory } = testimonial;

  // Function to render quote with multiple emphasized words
  const renderQuoteWithEmphasis = (text: string, wordsToEmphasize: string[]) => {
    let result: (string | React.ReactElement)[] = [text];
    
    wordsToEmphasize.forEach((word, wordIndex) => {
      const newResult: (string | React.ReactElement)[] = [];
      
      result.forEach((part, partIndex) => {
        if (typeof part === 'string') {
          const parts = part.split(word);
          parts.forEach((segment, segmentIndex) => {
            newResult.push(segment);
            if (segmentIndex < parts.length - 1) {
              newResult.push(
                <span key={`${wordIndex}-${partIndex}-${segmentIndex}`} className="emphasis">
                  {word}
                </span>
              );
            }
          });
        } else {
          newResult.push(part);
        }
      });
      
      result = newResult;
    });
    
    return result;
  };

  const hasFullStory = fullStory && fullStory.length > 0;

  return (
    <div className={`${styles.testimonialWrapper} mainBody`}>
      <div className={`${styles.testimonial} ${className}`}>
        <div 
          className={`${styles.testimonialCard} ${imagePosition === 'right' ? styles.imageRight : ''}`}
          onClick={hasFullStory ? () => setIsModalOpen(true) : undefined}
          style={{ cursor: hasFullStory ? 'pointer' : 'default' }}
        >
          <div className={styles.testimonialContent}>
            {/* Image Section */}
            <div className={styles.imageSection}>
              <Image
                src={headshotSrc}
                alt={headshotAlt}
                fill
                className={styles.headshot}
              />
            </div>

            {/* Content Section */}
            <div className={styles.contentSection}>
              {/* Attribution */}
              <div className={styles.attribution}>
                <h5>{name}</h5>
                <p>{recoveryTime}</p>
              </div>

              {/* Quote */}
              <div className={styles.quoteContainer}>
                <span className={styles.openQuote}>&ldquo;</span>
                <h2 className={styles.quote}>
                  {renderQuoteWithEmphasis(quote, emphasizedWords)}
                </h2>
                <span className={styles.closeQuote}>&rdquo;</span>
              </div>

              {/* Read More Link */}
              {hasFullStory && (
                <span className={styles.readMoreLink}>
                  Read Full Story
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Story Modal */}
      {hasFullStory && (
        <FullScreenModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
        >
          <div className={styles.modalContent}>
            {/* Header with headshot */}
            <div className={styles.modalHeader}>
              <div className={styles.modalHeadshotContainer}>
                <Image
                  src={headshotSrc}
                  alt={headshotAlt}
                  width={100}
                  height={100}
                  className={styles.modalHeadshot}
                />
              </div>
              <div className={styles.modalHeaderText}>
                <h2>{name}</h2>
                <p>{recoveryTime}</p>
              </div>
            </div>

            {/* Full Story Content */}
            <div className={styles.modalStory}>
              {fullStory?.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FullScreenModal>
      )}
    </div>
  );
};

export default Testimonial;