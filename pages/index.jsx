import Service from "../components/json/home.json";
import Footer from "@/components/common/Footer";
import FirstNavbar from "@/components/common/Navbar";
import Hero from "@/components/services/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionFramework from "@/components/home/SolutionFramework";
import OutcomesSection from "@/components/home/OutcomesSection";
import WhoWeWorkWith from "@/components/home/WhoWeWorkWith";
import ProofAuthority from "@/components/home/ProofAuthority";
import Leadership from "@/components/home/Leadership";
import FinalCTA from "@/components/home/FinalCTA";
import Head from "next/head";

export default function Home() {
  const { detail } = Service;

  return (
    <>
      <Head>
        <title>AI-Powered Revenue Infrastructure | Built to Scale | RedDev</title>
        <meta
          name="description"
          content="Custom platforms and automation that turn traffic into predictable, scalable revenue. Selective partnerships with lead-gen, booking, and high-volume operations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="revenue infrastructure, AI automation, lead generation systems, booking platforms, high-ticket development, enterprise automation, scalable platforms"
        />

        <meta
          property="og:title"
          content="AI-Powered Revenue Infrastructure | Built to Scale"
        />
        <meta
          property="og:description"
          content="Custom platforms and automation that turn traffic into predictable, scalable revenue."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reddev.vercel.app" />
        <meta
          property="og:image"
          content="https://reddev.vercel.app/reddev.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Revenue Infrastructure | Built to Scale" />
        <meta
          name="twitter:description"
          content="Custom platforms and automation that turn traffic into predictable, scalable revenue."
        />
        <meta
          name="twitter:image"
          content="https://reddev.vercel.app/reddev.png"
        />

        <link rel="canonical" href="https://reddev.vercel.app" />
      </Head>
      <FirstNavbar />
      <Hero 
        heading1={detail.heroheading1}
        heading2={detail.heroheading2}
        description="Custom platforms and automation that turn traffic into predictable, scalable revenue."
      />
      <ProblemSection />
      <SolutionFramework />
      <OutcomesSection />
      <ProofAuthority />
      <WhoWeWorkWith />
      <Leadership />
      <FinalCTA />
      <Footer />
    </>
  );
}
