import Service from "../components/json/home.json";
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
import Head from "next/head";

export default function ServicePage() {
  
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
