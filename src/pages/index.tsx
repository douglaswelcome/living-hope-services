import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Living Hope Services - Coming Soon</title>
        <meta name="description" content="Living Hope Services - Professional addiction recovery and rehabilitation services. Website coming soon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Placeholder for your generated image */}
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <p>Image Placeholder</p>
              <p className={styles.imageNote}>Your beautiful image will go here</p>
            </div>
            {/* Uncomment and replace with your actual image when ready:
            <Image
              src="/your-image.jpg"
              alt="Living Hope Services"
              width={400}
              height={300}
              priority
              className={styles.heroImage}
            />
            */}
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span className={styles.brandName}>Living Hope Services</span>
            </h1>
            
            <h2 className={styles.subtitle}>Website Coming Soon</h2>
            
            <p className={styles.description}>
              Professional addiction recovery and rehabilitation services in a supportive, 
              home-like environment. We believe everyone deserves a second chance and 
              the opportunity to rebuild their lives.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🏠</span>
                <span>Residential Treatment</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>💙</span>
                <span>Individual Therapy</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🤝</span>
                <span>Group Support</span>
              </div>
            </div>

            <div className={styles.contactInfo}>
              <p className={styles.contactText}>
                For immediate assistance, please contact us:
              </p>
              <div className={styles.contactDetails}>
                <p>📞 Phone: (555) 123-4567</p>
                <p>📧 Email: info@livinghopeservices.com</p>
                <p>🚨 24/7 Crisis Line: (555) 999-8888</p>
              </div>
            </div>

            <div className={styles.footer}>
              <p>&copy; 2024 Living Hope Services. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
