import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Banner from "@/components/ourPackages/Banner";
import PackageData from "@/components/ourPackages/PackageData";
import Form from "@/components/ourPackages/Form";

export default function packages() {
  return (
    <>
      <Navbar className="lg:fixed" />

      <Banner />
      <PackageData />
      <Form/>
      <Footer />
    </>
  );
}
