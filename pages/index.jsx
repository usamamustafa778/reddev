import Footer from "@/components/common/Footer";
import FirstNavbar from "@/components/common/Navbar";
import Hero from "@/components/services/Hero";
import ProofAuthority from "@/components/home/ProofAuthority";
import FinalCTA from "@/components/home/FinalCTA";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>We Build Digital Products That Grow Your Business | RedDev</title>
        <meta
          name="description"
          content="From SaaS platforms and CRMs to lead generation systems and mobile apps — we've built 15+ real products across 8 industries for clients in the US, UK, Canada, Romania, Uganda and South Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="We Build Digital Products That Grow Your Business | RedDev"
        />
        <meta
          property="og:description"
          content="15+ products built. 8 industries. 6 years. SaaS, CRMs, lead gen systems, mobile apps and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reddevsystems.com" />
        <meta property="og:image" content="https://reddevsystems.com/reddev.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="We Build Digital Products That Grow Your Business | RedDev" />
        <meta name="twitter:description" content="15+ products built. 8 industries. 6 years." />
        <meta name="twitter:image" content="https://reddevsystems.com/reddev.png" />
        <link rel="canonical" href="https://reddevsystems.com" />
      </Head>
      <FirstNavbar />
      <Hero
        heading1="We Build Digital Products"
        heading2="That Grow Your Business."
        description="From SaaS platforms and CRMs to lead generation systems and mobile apps — we've shipped 15+ real products across 8 industries for clients worldwide."
        cta1Text="See Our Work"
        cta1Href="/portfolio"
        cta2Text="Start a Project"
        cta2Href="/contact"
        stats={[
          { number: "15+", label: "Products Built" },
          { number: "8+", label: "Industries Served" },
          { number: "500+", label: "Lead Gen Sites" },
          { number: "6+", label: "Years Experience" },
        ]}
      />
      <ProofAuthority />
      <FinalCTA />
      <Footer />
    </>
  );
}
