import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Banner from '@/components/appDevelopement/Banner'
import React from 'react'
import ServiceDescription from '@/components/appDevelopement/ServiceDescription'
import Benefits from '@/components/appDevelopement/Benefits'
import Process from '@/components/appDevelopement/Process'
import CallToAction from '@/components/appDevelopement/CallToAction'
import OurLatestProjects from '@/components/common/OurLatestProjects'
export default function appDevelopment() {
  return (
    <>
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
    
    </>
  )
}
