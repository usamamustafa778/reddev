import React from "react";
import FullContainer from "../../components/common/FullContainer"; 
import Container from "../../components/common/Container";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuShieldCheck,
  LuZap,
  LuBugOff,
  LuSparkles,
  LuCheckCircle,
  LuSearchCode
} from "react-icons/lu";
import Image from "next/image";

export default function QualityAssurance() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const smoothSpring = { type: "spring", stiffness: 300, damping: 20 };

  return (
    <>
      <Navbar forceWhite={true} />
      
      <FullContainer className="relative overflow-hidden bg-gradient-to-br from-gray-50/50 to-gray-100/50 pt-24">
        {/* Tech Grid Pattern - Same as DevOps */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <Container className="relative py-16 md:py-20">
          {/* Header Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-gray-200/50 mb-6 shadow-sm">
              <LuSparkles className="text-red-600 w-5 h-5" />
              <span className="text-red-600 text-sm font-semibold">Zero-Defect Policy</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] mb-8 text-slate-900">
              Reliable Testing for{" "}
              <span className="relative inline-block text-red-600">
                Flawless Digital Products
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 h-1 bg-red-600/20 rounded-full"
                />
              </span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              We ensure your software is fast, secure, and bug-free through rigorous manual and automated testing cycles.
            </p>

            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={smoothSpring}
              className="group inline-flex items-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-full shadow-lg shadow-red-600/20"
            >
              <span className="font-bold">Book a QA Audit</span>
              <LuArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {[
              { title: "Automated Testing", desc: "Speed up releases with high-coverage automation scripts.", icon: LuZap, color: "from-red-500 to-red-600" },
              { title: "Security Audits", desc: "Identifying vulnerabilities before they become threats.", icon: LuShieldCheck, color: "from-orange-500 to-red-500" },
              { title: "Performance QA", desc: "Ensuring your application handles heavy loads smoothly.", icon: LuSearchCode, color: "from-red-600 to-orange-600" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -12, transition: smoothSpring }}
                className="group relative bg-white p-8 rounded-3xl transition-shadow duration-300 border border-gray-100 hover:shadow-2xl hover:shadow-red-600/5 cursor-default"
              >
                <div className="flex flex-col gap-6">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg transition-transform duration-500 group-hover:rotate-[10deg]`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Banner Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mt-16 group isolate"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/40 to-transparent mix-blend-overlay z-10 transition-opacity duration-700 ease-in-out group-hover:opacity-60 pointer-events-none"></div>
            
            <div className="overflow-hidden w-full h-[550px] relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                className="w-full h-full will-change-transform"
              >
                <Image
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
                  alt="Quality Assurance"
                  fill
                  priority
                  sizes="100vw"
                />
              </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-20 pointer-events-none"></div>
            
            <div className="absolute bottom-0 left-0 p-10 md:p-16 z-30 w-full">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <LuCheckCircle className="text-red-500 w-5 h-5" />
                <span className="text-red-500 uppercase tracking-[0.2em] text-xs font-black">Quality Guaranteed</span>
              </motion.div>
              
              <h3 className="text-white text-3xl md:text-5xl font-bold mb-8 max-w-2xl leading-[1.1]">
                Deploy with confidence. We test until it{"'"}s perfect.
              </h3>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={smoothSpring}
                className="group flex items-center gap-3 px-8 py-4 bg-white text-red-600 rounded-full font-bold shadow-xl"
              >
                Get a QA Proposal
                <LuArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </motion.button>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}