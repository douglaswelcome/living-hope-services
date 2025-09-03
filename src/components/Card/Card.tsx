import React from "react";
import Link from "next/link";
import styles from "./Card.module.scss";

interface CardProps {
  variant: 'image' | 'icon';
  title: string;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

interface ImageCardProps extends CardProps {
  variant: 'image';
  imageSrc: string;
  imageAlt: string;
}

interface IconCardProps extends CardProps {
  variant: 'icon';
  icon: React.ReactNode;
}

type CardComponentProps = ImageCardProps | IconCardProps;

const Card: React.FC<CardComponentProps> = (props) => {
  const { variant, title, children, className = "", href, onClick } = props;
  
  const isClickable = !!href || !!onClick;
  const cardClasses = `${styles.card} ${isClickable ? styles.clickable : ''} ${className}`.trim();

  const cardContent = (
    <>
      {variant === 'image' && 'imageSrc' in props && (
        <div className={styles.imageContainer}>
          <img 
            src={props.imageSrc} 
            alt={props.imageAlt}
            className={styles.cardImage}
          />
        </div>
      )}
      
      {variant === 'icon' && 'icon' in props && (
        <div className={styles.iconContainer}>
          {props.icon}
        </div>
      )}
      
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardBody}>
          {children}
        </div>
      </div>
    </>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button onClick={onClick} className={cardClasses} type="button">
        {cardContent}
      </button>
    );
  }

  // Otherwise render as div
  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
};

export default Card;
