import Navbar from "@/components/common/Navbar";
import Banner from "@/components/softwareDevelopement/Banner";
import Footer from "@/components/common/Footer";
import React from "react";
import Process from "@/components/softwareDevelopement/Process";
import ServiceDescription from "@/components/softwareDevelopement/ServiceDescription";
import Benefits from "@/components/softwareDevelopement/Benefits";
import CallToAction from "@/components/softwareDevelopement/CallToAction";
import OurLatestProjects from "@/components/common/OurLatestProjects";
export default function softwareDevelopment() {
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
