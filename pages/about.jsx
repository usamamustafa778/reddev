import React from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/about/Banner";
import OurMission from "@/components/about/OurMission";
import HowHelp from "@/components/about/HowHelp";
import OurGlobalPresence from "@/components/about/OurGlobalPresence";
import TeamMembers from "@/components/about/TeamMembers";
import CallToAction from "@/components/home/CallToAction";

export default function about() {
  return (
    <>
      <Navbar className="lg:fixed" />
      <Banner />
      <HowHelp />
      <TeamMembers />
      <OurMission />
      <OurGlobalPresence />
      <CallToAction />
      <Footer />
    </>
  );
}
