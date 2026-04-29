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
        <title>Custom Software Development Agency | RedDev — 15+ Products Built</title>
        <meta name="description" content="RedDev is a custom software development agency with 6+ years and 15+ products shipped. We build SaaS platforms, CRMs, mobile apps & lead gen systems for startups and businesses worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="custom software development agency, software development company, web application development, mobile app development, SaaS development, CRM development, lead generation systems" />

        <meta property="og:title" content="Custom Software Development Agency | RedDev — 15+ Products Built" />
        <meta property="og:description" content="RedDev is a custom software development agency. 15+ products shipped across 8 industries — SaaS, CRMs, mobile apps, lead gen systems & more. 6 years, clients worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reddevsystems.com" />
        <meta property="og:image" content="https://reddevsystems.com/reddev.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="RedDev" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Software Development Agency | RedDev" />
        <meta name="twitter:description" content="15+ software products shipped. SaaS, CRMs, mobile apps, lead gen systems. 6 years, 8 industries, clients worldwide." />
        <meta name="twitter:image" content="https://reddevsystems.com/reddev.png" />

        <link rel="canonical" href="https://reddevsystems.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://reddevsystems.com/#organization",
                  "name": "RedDev",
                  "url": "https://reddevsystems.com",
                  "logo": "https://reddevsystems.com/reddev.png",
                  "description": "Custom software development agency specialising in SaaS platforms, mobile apps, CRMs, and lead generation systems.",
                  "email": "info@reddevsystems.com",
                  "foundingDate": "2018",
                  "numberOfEmployees": { "@type": "QuantitativeValue", "value": "10" },
                  "areaServed": ["US", "GB", "CA", "RO", "UG", "ZA"],
                  "sameAs": [],
                  "knowsAbout": ["SaaS Development", "Web Development", "Mobile App Development", "CRM Development", "E-commerce Development", "Lead Generation Systems"]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://reddevsystems.com/#website",
                  "url": "https://reddevsystems.com",
                  "name": "RedDev",
                  "publisher": { "@id": "https://reddevsystems.com/#organization" }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://reddevsystems.com/#service",
                  "name": "RedDev — Custom Software Development Agency",
                  "url": "https://reddevsystems.com",
                  "description": "We build custom software products — SaaS platforms, CRMs, mobile apps, lead generation systems, and e-commerce stores — for startups and businesses worldwide.",
                  "provider": { "@id": "https://reddevsystems.com/#organization" },
                  "serviceType": ["Software Development", "Web Development", "Mobile App Development", "SaaS Development", "CRM Development"],
                  "areaServed": ["United States", "United Kingdom", "Canada", "Romania", "Uganda", "South Africa"]
                }
              ]
            })
          }}
        />
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
