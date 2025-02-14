import React from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import OurMission from "@/components/about/OurMission";
import HowHelp from "@/components/about/HowHelp";
import OurGlobalPresence from "@/components/about/OurGlobalPresence";
import TeamMembers from "@/components/about/TeamMembers";
import CallToAction from "@/components/home/CallToAction";
import AboutHero from "@/components/about/AboutHero";
import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>About Us | Reddev</title>
        <meta
          name="description"
          content="About us | Reddev | Professional web development services offering custom solutions, responsive design, and modern web applications. Transform your online presence today."
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
      <Navbar className="lg:fixed" />
      <AboutHero />
      <HowHelp />
      <TeamMembers />
      <OurMission />
      <OurGlobalPresence />
      <CallToAction />
      <Footer />
    </>
  );
}
