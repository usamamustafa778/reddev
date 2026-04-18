import React from "react";
import FullContainer from "../../components/common/FullContainer"; 
import Container from "../../components/common/Container";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { motion } from "framer-motion"; // Framer motion import kiya
import {
  LuArrowRight,
  LuCode2,
  LuLayout,
  LuZap,
  LuShieldCheck,
  LuSparkles,
} from "react-icons/lu";
import Image from "next/image";

export default function WebDevelopment() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      <Navbar scrolled={true} />
      
      <FullContainer className="relative overflow-hidden bg-gradient-to-br from-gray-50/50 to-gray-100/50 pt-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -left-4 -top-24 w-96 h-96 bg-red-600/5 rounded-full filter blur-3xl"
          />
          <motion.div 
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute right-0 bottom-0 w-96 h-96 bg-red-600/5 rounded-full filter blur-3xl"
          />
        </div>

        <Container className="relative py-16 md:py-20">
          {/* Header Section with Fade In Up */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-2xl border border-gray-200/20 mb-6">
              <LuSparkles className="text-red-600 w-5 h-5" />
              <span className="text-red-600 text-sm font-medium">Service Details</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] mb-8">
              Empowering Brands with{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-600">Scalable Web Solutions</span>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-3 bg-red-600/10 rounded-full"
                />
              </span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              We specialize in creating high-performance, responsive, and SEO-friendly websites. 
              From complex enterprise systems to elegant portfolio sites.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-full shadow-lg"
            >
              <span className="font-medium">Start Your Project</span>
              <LuArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Staggered Features Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {[
              { title: "Custom Development", desc: "Clean code tailored to your needs.", icon: LuCode2, color: "from-red-500 to-red-600" },
              { title: "UI/UX Focused", desc: "Beautiful designs that convert users.", icon: LuLayout, color: "from-orange-500 to-red-500" },
              { title: "Fast Performance", desc: "Optimized for speed and accessibility.", icon: LuZap, color: "from-red-600 to-orange-600" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl transition-all border border-gray-200/20 hover:border-red-600/20 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Banner with Zoom on InView */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent mix-blend-overlay z-10"></div>
            <Image
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              alt="Web Development Process"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-30">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 mb-4"
              >
                <LuShieldCheck className="text-red-500 w-6 h-6" />
                <span className="text-white/80 uppercase tracking-widest text-xs font-bold">Trusted Process</span>
              </motion.div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 max-w-xl">
                Ready to build something extraordinary? Our developers are just a click away.
              </h3>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-2 px-6 py-3 bg-white text-red-600 rounded-full font-medium"
              >
                Get Expert Consultation
                <LuArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
          {/* Process Section - New added */}
<motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
  className="py-16 border-t border-gray-100"
>
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Development Process</h3>
    <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {[
      { step: "01", title: "Discovery", desc: "Understanding your goals and target audience." },
      { step: "02", title: "Planning", desc: "Creating wireframes and technical architecture." },
      { step: "03", title: "Development", desc: "Turning designs into high-quality, clean code." },
      { step: "04", title: "Deployment", desc: "Final testing and launching your project." },
    ].map((item, index) => (
      <motion.div
        key={index}
        variants={fadeInUp}
        className="relative p-6 text-center group"
      >
        {/* Step Number Background */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 text-7xl font-black text-slate-100 group-hover:text-red-50 transition-colors -z-10">
          {item.step}
        </span>
        
        <div className="pt-8">
          <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
        
        {/* Connector Line (Desktop only) */}
        {index < 3 && (
          <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-red-200 to-transparent"></div>
        )}
      </motion.div>
    ))}
  </div>
</motion.div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}