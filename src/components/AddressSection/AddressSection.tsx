import React from "react";
import styles from "./AddressSection.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";

interface AddressCard {
  id: string;
  title: string;
  address: string; // City, State format
  imageSrc: string;
  imageAlt: string;
}

const AddressSection = () => {
  const addressCards: AddressCard[] = [
    {
      id: "bessie",
      title: "Bessie House",
      address: "Tracy, California",
      imageSrc: "/images/bessie.jpg",
      imageAlt: "Bessie Avenue House"
    },
    {
      id: "clover",
      title: "Clover House",
      address: "Tracy, California",
      imageSrc: "/images/clover.jpg",
      imageAlt: "Clover Street House"
    },
    {
      id: "manteca",
      title: "Manteca House",
      address: "Manteca, California",
      imageSrc: "/images/manteca.jpg",
      imageAlt: "Manteca House"
    }
  ];

  return (
    <section className={`${styles.addressSection} mainBody`}>
      <div className={styles.addressContainer}>
        <SectionTitle title="Our Locations" />
        <p className={styles.subtitle}>
          Each of our homes is thoughtfully maintained to be clean, safe, and supportive, creating an environment where men can focus on healing, stability, and hope.
        </p>
        <div className={styles.cardsGrid}>
          {addressCards.map((card) => (
            <Card
              key={card.id}
              variant="image"
              title={card.title}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            >
              <p className={styles.address}>
                {card.address}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
