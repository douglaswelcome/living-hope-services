import Head from "next/head";
import { 
  Navigation, 
  HeroSection, 
  ServicesPreview,
  AddressSection,
  CallToAction, 
  Footer,
  BackgroundContainer,
  FAQ,
  Accreditations,
  ContactForm,
  FounderStory
} from "../components";

export default function Home() {
  // Sample accreditation data - replace with your actual accreditations
  const accreditations = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        </svg>
      ),
      label: "BBB Accredited"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
        </svg>
      ),
      label: "State Licensed"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9L16.91 13.74L18.18 20.02L12 17.77L5.82 20.02L7.09 13.74L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      label: "Industry Certified"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 12L11 14L15 10M7.835 4.697C8.287 4.257 8.887 4 9.5 4C10.113 4 10.713 4.257 11.165 4.697L12 5.5L12.835 4.697C13.287 4.257 13.887 4 14.5 4C15.113 4 15.713 4.257 16.165 4.697L17 5.5L17.835 4.697C18.287 4.257 18.887 4 19.5 4C20.113 4 20.713 4.257 21.165 4.697L22 5.5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5.5L2.835 4.697C3.287 4.257 3.887 4 4.5 4C5.113 4 5.713 4.257 6.165 4.697L7 5.5L7.835 4.697Z" />
        </svg>
      ),
      label: "Government Approved"
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
            "Living Hope Services began with a simple conversation on the way to a church volunteer event. Brett Cardoza, a pastor, and Louis Grego, a recovering addict, shared their stories. Louis opened up about his recovery journey, how difficult it was to walk the path alone, and how finding community through his church and sober living home gave him strength, accountability, and hope.",
            "He shared that if he ever had the chance, he would walk alongside other men in recovery, offering the kind of support and brotherhood he wished he had earlier. With a foundation built on faith, a commitment to personal mentorship, and a heart for serving others, Louis saw what worked and wanted to help replicate it for others.",
            "Brett listened, inspired by Louis's vision and courage, and recognized the opportunity to join him in building something lasting. Together, they founded Living Hope Services, a place where men can find not only housing but also a supportive network, spiritual guidance, and a pathway toward lasting recovery and stability."
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
