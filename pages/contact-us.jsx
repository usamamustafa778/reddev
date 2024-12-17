import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/contactUs/Banner";
import FAQ from "@/components/contactUs/FAQ";
import FeedBack from "@/components/contactUs/FeedBack";
import Form from "@/components/contactUs/Form";

import React from "react";
export default function  contactUs() {
  return (
    <>
      <Navbar className="lg:fixed" />
      <Banner/>
      <Form/>
      <Footer />
    </>
  );
}
