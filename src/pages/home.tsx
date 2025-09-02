import Head from "next/head";
import { 
  Navigation, 
  HeroSection, 
  ServicesPreview, 
  CallToAction, 
  Footer,
  BackgroundContainer
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Living Hope Services - Addiction Recovery & Rehab Home</title>
        <meta name="description" content="Professional addiction recovery and rehabilitation services. Find hope, healing, and a new beginning with Living Hope Services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundContainer>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <ServicesPreview />
        <CallToAction />
        <Footer />
      </div>

      </BackgroundContainer>
  
    </>
  );
}
