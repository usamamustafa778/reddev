import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import FirstNavbar from "@/components/common/Navbar";
import CallToAction from "@/components/home/CallToAction";
import Projects from "@/components/ourWork/Projects";
import WorkHero from "@/components/WorkHero";
import React from "react";

export default function ourwork() {
  return (
    <>
      <Navbar className="lg:fixed" />
      <WorkHero />
      <Projects />
      <CallToAction />
      <Footer />
    </>
  );
}
