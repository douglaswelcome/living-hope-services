import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import faqData from "../../data/faq.json";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className={`${styles.faqSection} mainBody`}>
      <div className={styles.faqContainer}>
        <SectionTitle title="Frequently Asked Questions" />
        <div className={styles.faqList}>
          {faqData.map((item: FAQItem) => {
            const isOpen = openItems.has(item.id);
            return (
              <div key={item.id} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${isOpen ? styles.open : ''}`}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.iconContainer}>
                    {isOpen ? (
                      <svg className={styles.minusIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className={styles.plusIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  className={`${styles.faqAnswer} ${isOpen ? styles.open : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerContent}>
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
