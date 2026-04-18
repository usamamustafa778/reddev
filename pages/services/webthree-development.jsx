import React from "react";
import FullContainer from "../../components/common/FullContainer"; 
import Container from "../../components/common/Container";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuLink,
  LuCpu,
  LuGlobe,
  LuFileJson,
  LuShieldCheck,
  LuNetwork
} from "react-icons/lu";
import Image from "next/image";

export default function Web3Development() {
  // Common animation constants used across your working pages
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <>
      {/* Navbar prop fixed as per your standard pages */}
      <Navbar forceWhite={true} />
      
      <FullContainer className="relative overflow-hidden bg-white pt-24">
        {/* Standard Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <Container className="relative py-16 md:py-24">
          {/* Hero Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6">
              <LuLink className="text-red-600 w-4 h-4" />
              <span className="text-red-600 text-xs font-bold uppercase tracking-widest">Decentralized Web</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Enterprise Grade <br />
              <span className="text-red-600">Web3 & Blockchain</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We build secure dApps and smart contracts that bridge the gap between traditional business and the decentralized world.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-full font-bold shadow-xl shadow-red-600/20 transition-all"
            >
              Start Building
              <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Service Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          >
            {[
              { title: "Smart Contracts", desc: "Automated, secure, and fully audited contracts for Ethereum and beyond.", icon: LuFileJson },
              { title: "DeFi Solutions", desc: "Customized decentralized finance protocols tailored for your ecosystem.", icon: LuNetwork },
              { title: "dApp Development", desc: "Scalable decentralized applications with seamless user experiences.", icon: LuGlobe }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Splash Image Section - Same as other pages */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070" 
              alt="Blockchain Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight">
                Securely scaling the <br /> next generation of the web.
              </h2>
              <div className="flex items-center gap-4 text-red-500 font-bold uppercase text-sm tracking-widest">
                <LuShieldCheck />
                Fully Audited Systems
              </div>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}