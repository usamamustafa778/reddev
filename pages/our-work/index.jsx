import CallToAction from "@/components/about/CallToAction";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import FirstNavbar from "@/components/common/Navbar";
import Projects from "@/components/ourWork/Projects";
import React from "react";

export default function ourwork() {
  return (
    <>
      <Navbar className="lg:fixed" />
      <Projects />
      <CallToAction />
      <Footer />
    </>
  );
}
