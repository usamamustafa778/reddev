import React from 'react'
import Banner from '@/components/ux-uiDesign/Banner'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Process from '@/components/ux-uiDesign/Process'
import Benefits from '@/components/ux-uiDesign/Benefits'
import ServiceDescription from '@/components/ux-uiDesign/ServiceDescription'
import CallToAction from '@/components/ux-uiDesign/CallToAction'
import OurLatestProjects from '@/components/common/OurLatestProjects'
export default function ux_uiDesign() {
  return (
    <>
      <Navbar className="lg:fixed" />
      <Banner/>
      <ServiceDescription/>
      <Benefits/>
      <Process/>
      <OurLatestProjects/>
      <CallToAction/>
      <Footer />
    </>
  )
}
