import { useRouter } from "next/router";
import servicedata from "../../components/json/servicedata.json";
import React, { useEffect, useState } from "react";
import Testimonials from "@/components/services/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/common/Footer";
import Portfolio from "@/components/services/Portfolio";
import FirstNavbar from "@/components/common/Navbar";
import Hero from "@/components/services/Hero";
import ValueStack from "@/components/services/ValueStack";
import BonusesSection from "@/components/services/BonusesSection";
import GuaranteeSection from "@/components/services/GuaranteeSection";
import PricingSection from "@/components/services/PricingSection";
import UrgencySection from "@/components/services/UrgencySection";
import FAQSection from "@/components/services/FAQSection";
import ProcessSection from "@/components/services/ProcessSection";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import { data } from "autoprefixer";
import Head from "next/head";

export default function ServicePage() {
  const router = useRouter();
  const { servicePage } = router.query;
  const [Service, setService] = useState(null);

  useEffect(() => {
    if (servicePage) {
      const data = servicedata.find(
        (p) => p.service === servicePage?.replaceAll("-", " ")
      );
      setService(data);
      console.log("service", data);
    }
  }, [servicePage]);

  if (!servicePage) {
    return <div>Loading...</div>;
  }

  if (!Service) {
    return (
      <div className="flex h-screen px-auto justify-center pt-[48vh]">
        <div>Service not found for {servicePage}...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Web Development</title>
      </Head>
      <FirstNavbar />
      <Hero
        heading1={Service.detail.heroheading1}
        heading2={Service.detail.heroheading2}
        des={Service.detail.herodescription}
        img={Service.detail.heroimage}
      />
      <Testimonials
        heading={Service.detail.testimonialheading}
        des={Service.detail.testimonialdescription}
        data={Service.detail.testimonial}
      />
      <ProcessSection
        heading={Service.detail.processheading}
        des={Service.detail.processdescription}
        data={Service.detail.processcard}
      />
      <WhyChooseUs />
      <GuaranteeSection />
      <PricingSection />
      <ValueStack />
      <UrgencySection />
      <BonusesSection />
      <Portfolio />
      <FAQSection data={Service.detail.faq} />
      <CallToAction />
      <Footer />
    </>
  );
}
