import Link from "next/link";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} bg-white shadow-lg`} aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className={`${styles.logo} text-2xl font-bold text-indigo-600`}>
              Living Hope Services
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8" role="navigation">
            <Link href="/" className={`${styles.navLink} text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium`}>
              Home
            </Link>
            <Link href="/services" className={`${styles.navLink} text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium`}>
              Services
            </Link>
            <Link href="/about" className={`${styles.navLink} text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium`}>
              About
            </Link>
            <Link href="/contact" className={`${styles.navLink} text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium`}>
              Contact
            </Link>
            <Link href="/resources" className={`${styles.navLink} text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium`}>
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 