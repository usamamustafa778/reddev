import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <FullContainer className="py-32 bg-gradient-to-br from-red-900 via-slate-900 to-orange-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Shield className="w-4 h-4" />
              Selective Partnerships
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Ready to Build Infrastructure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                That Scales?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              We evaluate fit before engagement. Book a strategy call to discuss your revenue goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="/contact-us"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 text-lg font-bold rounded-xl transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-white/20 transform hover:scale-105"
              >
                <span className="relative z-10">Book Strategy Call</span>
                <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform relative z-10" />
              </a>

              <a
                href="/our-work"
                className="inline-flex items-center justify-center px-10 py-5 bg-white/10 text-white text-lg font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm"
              >
                See Our Work
              </a>
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 font-medium">We evaluate fit before engagement</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </FullContainer>
  );
}
