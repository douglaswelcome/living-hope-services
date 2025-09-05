import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <FontAwesomeIcon 
          icon={["far", "heart"]} 
          style={{ fontSize: '120px', color: 'currentColor' }}
        />
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
        <FontAwesomeIcon 
          icon={["far", "circle-check"]} 
          style={{ fontSize: '120px', color: 'currentColor' }}
        />
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
