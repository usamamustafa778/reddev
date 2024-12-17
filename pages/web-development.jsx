import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import React from "react";
import Banner from "@/components/webDevelopement/Banner";
import ServiceDescription from "@/components/webDevelopement/ServiceDescription";
import Benefits from "@/components/webDevelopement/Benefits";
import Process from "@/components/webDevelopement/Process";
import CallToAction from "@/components/webDevelopement/CallToAction";
import OurLatestProjects from "@/components/common/OurLatestProjects";

export default function webDevelopment() {
  return (
    <>
      <Navbar className="lg:fixed" />
      <Banner />
      <ServiceDescription />
      <Benefits />
      <Process />
      <OurLatestProjects />
      <CallToAction />
      <Footer />
    </>
  );
}
