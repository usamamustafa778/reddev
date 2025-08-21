import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import FirstNavbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import serviceData from "@/components/json/servicedata.json";

// Individual service funnel components
import ServiceHero from "@/components/services/ServiceHero";
import ProblemSolution from "@/components/services/ProblemSolution";
import BenefitsSection from "@/components/services/BenefitsSection";
import SocialProof from "@/components/services/SocialProof";
import ProcessSection from "@/components/services/ProcessSection";
import PricingSection from "@/components/services/PricingSection";
import FAQSection from "@/components/services/FAQSection";
import UrgencySection from "@/components/services/UrgencySection";
import CallToAction from "@/components/services/CallToAction";

// Service mapping to match footer links with service data
const serviceMapping = {
  ecommerce: "ecommerce",
  "mobile-apps": "app development",
  "web-development": "web development",
  "custom-solutions": "software development",
};

export default function ServiceDetail() {
  const router = useRouter();
  const { service } = router.query;
  const [serviceDetails, setServiceDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (service) {
      const mappedService = serviceMapping[service];
      const foundService = serviceData.find((s) => s.service === mappedService);

      if (foundService) {
        setServiceDetails(foundService.detail);
      } else {
        setServiceDetails(null);
      }
      setLoading(false);
    }
  }, [service]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!serviceDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The requested service could not be found.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{serviceDetails.title} Services | Professional Solutions</title>
        <meta name="description" content={serviceDetails.herodescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`${serviceDetails.title.toLowerCase()}, professional services, development, consulting`}
        />

        <meta
          property="og:title"
          content={`${serviceDetails.title} Services | Professional Solutions`}
        />
        <meta
          property="og:description"
          content={serviceDetails.herodescription}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/services/${service}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${serviceDetails.title} Services`}
        />
        <meta
          name="twitter:description"
          content={serviceDetails.herodescription}
        />

        <link
          rel="canonical"
          href={`https://yourwebsite.com/services/${service}`}
        />
      </Head>

      <FirstNavbar />
      
      {/* SALES FUNNEL STRUCTURE */}
      
      {/* 1. HOOK - Service Hero with compelling value proposition */}
      <ServiceHero 
        service={service}
        title={serviceDetails.title}
        heading1={serviceDetails.heroheading1}
        heading2={serviceDetails.heroheading2}
        description={serviceDetails.herodescription}
        image={serviceDetails.heroimage}
      />
      
      {/* 2. SOCIAL PROOF - Early testimonials to build trust */}
      <SocialProof 
        testimonials={serviceDetails.testimonial.slice(0, 3)}
        heading="Trusted by Leading Companies"
      />
      
      {/* 3. PROBLEM/SOLUTION - Identify pain points and position service as solution */}
      <ProblemSolution 
        service={service}
        title={serviceDetails.title}
      />
      
      {/* 4. BENEFITS - Clear value proposition and benefits */}
      <BenefitsSection 
        service={service}
        processData={serviceDetails.processcard}
      />
      
      {/* 5. HOW IT WORKS - Process to reduce uncertainty */}
      <ProcessSection 
        heading={serviceDetails.processheading}
        description={serviceDetails.processdescription}
        processData={serviceDetails.processcard}
      />
      
      {/* 6. MORE SOCIAL PROOF - Additional testimonials */}
      <SocialProof 
        testimonials={serviceDetails.testimonial.slice(3)}
        heading="What Our Clients Say"
        variant="secondary"
      />
      
      {/* 7. PRICING - Clear investment options */}
      <PricingSection service={service} />
      
      {/* 8. OBJECTION HANDLING - FAQ to address concerns */}
      <FAQSection data={serviceDetails.faq} />
      
      {/* 9. URGENCY - Limited time or bonus offers */}
      <UrgencySection service={service} />
      
      {/* 10. FINAL CTA - Strong call to action */}
      <CallToAction 
        service={service}
        title={serviceDetails.title}
      />

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(serviceMapping).map((service) => ({
    params: { service },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      service: params.service,
    },
  };
}