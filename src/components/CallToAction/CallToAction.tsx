import Link from "next/link";
import styles from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <section className={`${styles.callToAction} py-16 bg-indigo-600`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`${styles.title} text-3xl font-bold text-white mb-4`}>
          Ready to Start Your Recovery Journey?
        </h2>
        <p className={`${styles.subtitle} text-xl text-indigo-100 mb-8`}>
          Take the first step towards a brighter future. Our compassionate team is here to help.
        </p>
        <Link 
          href="/contact" 
          className={`${styles.ctaButton} bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300`}
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default CallToAction; 