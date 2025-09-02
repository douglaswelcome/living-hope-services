import React from "react";
import styles from "./ServicesPreview.module.scss";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesPreview = () => {
  const services: ServiceCard[] = [
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--color-bright-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Residential Treatment",
      description: "24/7 care in a supportive, home-like environment with professional staff."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--color-bright-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Individual Therapy",
      description: "One-on-one counseling sessions tailored to your specific needs and recovery goals."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[var(--color-bright-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Group Support",
      description: "Connect with others on similar recovery journeys in a safe, supportive group setting."
    }
  ];

  return (
    <section className={`${styles.servicesSection} py-16 bg-white`}>
      <div className={styles.servicesContainer}>
        <h2 className={`${styles.sectionTitle} text-3xl font-bold text-center text-gray-900 mb-12`}>
          Our Services
        </h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.serviceCard} text-center p-6 rounded-lg bg-gray-50`}>
              <div className={`${styles.iconContainer} w-16 h-16 bg-[var(--color-light-teal)] rounded-full flex items-center justify-center mx-auto mb-4`}>
                {service.icon}
              </div>
              <h3 className={`${styles.serviceTitle} text-xl font-semibold mb-2`}>
                {service.title}
              </h3>
              <p className={`${styles.serviceDescription} text-gray-600`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview; 