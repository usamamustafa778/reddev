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

export default function Home() {
  const { detail } = Service;

  return (
    <>
      <Head>
        <title>Web Development Services | Professional Web Solutions</title>
        <meta
          name="description"
          content="Professional web development services offering custom solutions, responsive design, and modern web applications. Transform your online presence today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="web development, web design, custom websites, responsive design, web applications, professional web services"
        />

        <meta
          property="og:title"
          content="Web Development Services | Professional Web Solutions"
        />
        <meta
          property="og:description"
          content="Professional web development services offering custom solutions, responsive design, and modern web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Services" />
        <meta
          name="twitter:description"
          content="Professional web development services offering custom solutions."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        />

        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <FirstNavbar />
      <Hero />
      <Testimonials
        heading={detail.testimonialheading}
        des={detail.testimonialdescription}
        data={detail.testimonial}
      />
      <GuaranteeSection />
      <PricingSection />
      <ValueStack />
      <UrgencySection />
      <BonusesSection />
      <Portfolio />
      <FAQSection data={detail.faq} />
      <CallToAction />
      <Footer />
    </>
  );
}
