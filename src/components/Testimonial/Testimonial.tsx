import React from "react";
import Image from "next/image";
import styles from "./Testimonial.module.scss";
import testimonialsData from "../../data/testimonials.json";

interface TestimonialData {
  id: number;
  quote: string;
  emphasizedWord: string;
  name: string;
  recoveryTime: string;
  headshotSrc: string;
  headshotAlt: string;
}

interface TestimonialProps {
  id: number;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  id,
  className = ""
}) => {
  // Find the testimonial by ID
  const testimonial = testimonialsData.find((t: TestimonialData) => t.id === id);
  
  if (!testimonial) {
    console.error(`Testimonial with ID ${id} not found`);
    return null;
  }

  const { quote, emphasizedWord, name, recoveryTime, headshotSrc, headshotAlt } = testimonial;

  // Split the quote to insert the emphasized word
  const quoteParts = quote.split(emphasizedWord);
  const beforeWord = quoteParts[0];
  const afterWord = quoteParts[1];

  return (
    <div className={`${styles.testimonial} ${className} mainBody`}>
      <div className={styles.testimonialContent}>
        {/* Headshot */}
        <div className={styles.headshotContainer}>
          <Image
            src={headshotSrc}
            alt={headshotAlt}
            width={80}
            height={80}
            className={styles.headshot}
          />
        </div>

        {/* Quote */}
        <blockquote className={styles.quote}>
          {beforeWord}
          <span className={styles.emphasizedWord}>{emphasizedWord}</span>
          {afterWord}
        </blockquote>

        {/* Attribution */}
        <div className={styles.attribution}>
          <cite className={styles.name}>{name}</cite>
          <span className={styles.recoveryTime}>{recoveryTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
