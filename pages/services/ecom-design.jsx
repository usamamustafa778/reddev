import React from "react";
import FullContainer from "../../components/common/FullContainer"; 
import Container from "../../components/common/Container";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuShoppingCart,
  LuLayout,
  LuSmartphone,
  LuSparkles,
  LuCreditCard,
  LuMonitor
} from "react-icons/lu";
import Image from "next/image";

export default function EcomDesign() {
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
      
      <FullContainer className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-orange-50/30 pt-24">
        {/* Subtle E-commerce Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
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
              <LuShoppingCart className="text-red-600 w-5 h-5" />
              <span className="text-red-600 text-sm font-semibold">Conversion-Optimized Stores</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] mb-8 text-slate-900">
              Transform Your Vision into a{" "}
              <span className="relative inline-block text-red-600">
                Profitable Online Store
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 h-1 bg-red-600/20 rounded-full"
                />
              </span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              We create high-performance e-commerce experiences that combine stunning design with seamless checkout flows to maximize your sales.
            </p>

            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={smoothSpring}
              className="group inline-flex items-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-full shadow-lg shadow-red-600/20"
            >
              <span className="font-bold">Build Your Store</span>
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
              { title: "Custom UI/UX", desc: "User-centric designs focused on reducing bounce rates and cart abandonment.", icon: LuLayout, color: "from-red-500 to-red-600" },
              { title: "Mobile Commerce", desc: "Fully responsive shopping experiences optimized for every screen size.", icon: LuSmartphone, color: "from-orange-500 to-red-500" },
              { title: "Secure Checkout", desc: "Integrated payment gateways with industry-standard encryption protocols.", icon: LuCreditCard, color: "from-red-600 to-orange-600" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -12, transition: smoothSpring }}
                className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-red-600/5 cursor-default transition-all"
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

          {/* E-commerce Banner Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mt-16 group isolate"
          >
            {/* Dark Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
            
            <div className="overflow-hidden w-full h-[550px] relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full"
              >
                <Image
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" 
                  alt="Modern E-commerce Storefront"
                  fill
                  priority
                />
              </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-20 pointer-events-none"></div>
            
            <div className="absolute bottom-0 left-0 p-10 md:p-16 z-30 w-full">
              <div className="flex items-center gap-3 mb-6">
                <LuMonitor className="text-red-500 w-5 h-5 shadow-sm" />
                <span className="text-red-500 uppercase tracking-[0.2em] text-xs font-black drop-shadow-md">Omnichannel Experience</span>
              </div>
              
              <h3 className="text-white text-3xl md:text-5xl font-bold mb-8 max-w-2xl leading-[1.1] drop-shadow-lg">
                Sell anywhere, anytime. We build the engine that powers your retail growth.
              </h3>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white text-red-600 rounded-full font-bold shadow-2xl transition-all"
              >
                Launch Your Project
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