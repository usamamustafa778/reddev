import Service from "../components/json/home.json";
import Footer from "@/components/common/Footer";
import FirstNavbar from "@/components/common/Navbar";
import Hero from "@/components/services/Hero";
import PricingSection from "@/components/services/PricingSection";
import ClientLogos from "@/components/services/ClientLogos";
import WhatWeBuild from "@/components/services/WhatWeBuild";
import TrustSection from "@/components/services/TrustSection";
import StreamlinedProcess from "@/components/services/StreamlinedProcess";
import ProofSection from "@/components/services/ProofSection";
import WhyUs from "@/components/services/WhyUs";
import FinalCTA from "@/components/services/FinalCTA";
import Head from "next/head";

export default function Home() {
  const { detail } = Service;

  return (
    <>
      <Head>
        <title>AI Agent Development & Web Solutions for B2B Companies | RedDev</title>
        <meta
          name="description"
          content="We build AI agents for customer support, lead qualification, and workflow automation—plus high-performance web and mobile apps. Enterprise-grade AI development with human oversight and safety guardrails."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="AI agent development, custom AI chatbot for business, RAG chatbot development, LLM integration services, AI workflow automation, enterprise chatbot development, Next.js development, B2B AI solutions"
        />

        <meta
          property="og:title"
          content="AI Agent Development & Web Solutions for B2B Companies"
        />
        <meta
          property="og:description"
          content="We build AI agents for customer support, lead qualification, and workflow automation—plus high-performance web and mobile apps."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Agent Development & Web Solutions for B2B" />
        <meta
          name="twitter:description"
          content="We build AI agents for customer support, lead qualification, and workflow automation—plus high-performance web and mobile apps."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        />

        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <FirstNavbar />
      <Hero 
        heading1={detail.heroheading1}
        heading2={detail.heroheading2}
        description={detail.herodescription}
      />
      <ClientLogos />
      <WhatWeBuild />
      <ProofSection testimonialData={detail.testimonial} />
      <TrustSection />
      <StreamlinedProcess />
      <PricingSection />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </>
  );
}
