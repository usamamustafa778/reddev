import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Banner from "@/components/portfolio/Banner";
import Data from "@/components/portfolio/Data";

export default function Portfolio() {
  return (
    <>
      <Navbar className="lg:fixed" />
      <Banner />
      <Data />
      <Footer />
    </>
  );
}
