import Head from "next/head";
import { 
  Navigation, 
  HeroSection, 
  AddressSection,
  Footer,
  BackgroundContainer,
  FAQ,
  Accreditations,
  ContactForm,
  FounderStory,
  CCAPPIcon,
  SBLIcon
} from "../components";

export default function Home() {
  // Sample accreditation data - replace with your actual accreditations
  const accreditations = [
    {
      icon: (
        <svg viewBox="0 0 120 120" fill="currentColor" width="120" height="120">
          <path d="M60 10L65.45 41.3L100 45L65.45 48.7L60 80L54.55 48.7L20 45L54.55 41.3L60 10Z" />
        </svg>
      ),
      label: "501(c)(3) Organization"
    },
    {
      icon: (
        <SBLIcon width={120} height={120} color="currentColor" />
      ),
      label: "Sober Living Network Member"
    },
    {
      icon: (
        <CCAPPIcon width={120} height={120} color="currentColor" />
      ),
      label: "CCAPP Credentialing - RADT"
    },
    {
      icon: (
        <svg viewBox="0 0 120 120" fill="currentColor" width="120" height="120">
          <path d="M45 60L55 70L75 50M39.175 23.485C41.435 21.285 44.435 20 47.5 20C50.565 20 53.565 21.285 55.825 23.485L60 27.5L64.175 23.485C66.435 21.285 69.435 20 72.5 20C75.565 20 78.565 21.285 80.825 23.485L85 27.5L89.175 23.485C91.435 21.285 94.435 20 97.5 20C100.565 20 103.565 21.285 105.825 23.485L110 27.5V95C110 100.523 105.523 105 100 105H20C14.477 105 10 100.523 10 95V27.5L14.175 23.485C16.435 21.285 19.435 20 22.5 20C25.565 20 28.565 21.285 30.825 23.485L35 27.5L39.175 23.485Z" />
        </svg>
      ),
      label: "Licensed & Insured"
    }
  ];

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
        <AddressSection /> 
  

        <FounderStory 
          title="Our Story"
          subtitle="A Journey of Hope and Recovery"
          story={[
            "Living Hope Services began with a simple conversation on the way to a church volunteer event. Brett, a pastor, and Louis, a recovering addict, shared their stories. Louis opened up about his recovery journey, how difficult it was to walk the path alone, and how finding community through his church and sober living home gave him strength, accountability, and hope.",
            "He shared that if he ever had the chance, he would walk alongside other men in recovery, offering the kind of support and brotherhood he wished he had earlier. With a commitment to personal mentorship and a heart for serving others, Louis saw what worked and wanted to help replicate it for others.",
            "Brett listened, inspired by Louis's vision and courage, and recognized the opportunity to join him in building something lasting. Together, they founded Living Hope Services, a place where men can find not only safe housing, but also a supportive network and a pathway toward lasting recovery and stability."
          ]}
          imageSrc="/images/founder.jpg"
          imageAlt="Founder of Living Hope Services"
        />
              <Accreditations 
          title="Our Accreditations"
          subtitle="We maintain the highest standards of care and professionalism, backed by industry recognition and government approval."
          accreditations={accreditations} 
        />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>

      </BackgroundContainer>
  
    </>
  );
}
