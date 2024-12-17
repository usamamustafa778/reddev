import Navbar from "@/components/common/Navbar";
import HomeServices from "@/components/home/HomeServices";
import Footer from "@/components/common/Footer";
import HomeBanner from "@/components/home/HomeBanner";
import Testimonials from "@/components/home/Testimonials";
import HomeCompanies from "@/components/home/HomeCompanies";
import OurWork from "@/components/home/OurWork";
import CallToAction from "@/components/home/CallToAction";
import Pricing from "@/components/home/Pricing";
import Head from "next/head";

export default function Draft() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Devbitties</title>
      </Head>
      <Navbar className="lg:fixed" />
      <HomeBanner />
      <HomeCompanies />
      <HomeServices />
      <Pricing />
      <Testimonials />
      <OurWork />
      <CallToAction />
      <Footer />
    </div>
  );
}
