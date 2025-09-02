import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.scss";
import { BackgroundContainer } from "@/components";

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <BackgroundContainer>
      <Head>
        <title>Living Hope Services - Coming Soon</title>
        <meta name="description" content="Living Hope Services - Professional addiction recovery and rehabilitation services. Website coming soon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src="/logo.svg"
              alt="Living Hope Services Logo"
              width={400}
              height={260}
              priority
              className={styles.heroImage}
            />
          </div>

          <div className={styles.textContent}>
            
            
            <h2 className={`${styles.subtitle} headline-lg-thin`}>Website Coming Soon</h2>
            
            <p className={`${styles.description} body-lg`}>
              Professional addiction recovery and rehabilitation services in a supportive, 
              home-like environment. We believe everyone deserves a second chance and 
              the opportunity to rebuild their lives.
            </p>

            <div className={styles.contactInfo}>
              <p className={`${styles.contactText} body-md-bold`}>
                For immediate assistance, please contact us:
              </p>
              <div className={styles.contactDetails}>
                {/* <p className="body-md">📞 Phone: (555) 123-4567</p> */}
                <p className="body-md">Email: hello.livinghopeservices@gmail.com</p>

              </div>
            </div>

            <div className={styles.footer}>
              <p className="body-sm">&copy; {currentYear} Living Hope Services. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundContainer>
  );
}
