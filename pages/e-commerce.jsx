import React from "react";
import FAQ from "@/components/common/FAQ";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/e-commerce/Banner";
import OurOffering from "@/components/e-commerce/OurOffering";
import WhyChose from "@/components/e-commerce/WhyChose";

function Ecommerce() {
  return (
    <div>
      <Navbar className="lg:fixed" />
      <Banner />
      <OurOffering />
      <WhyChose />
      <FAQ />
      <Footer />
    </div>
  );
}
export default Ecommerce;
