import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <FullContainer className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900 mb-6">
            Ready to Scale Bookings{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Without Operational Chaos
              </span>
            </span>
            ?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            We&apos;ll review your PMS + channel stack, identify the bottleneck, and outline a practical build plan 
            for smoother operations and better guest experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/30"
              >
                <span>Get a Free Hospitality Tech Audit</span>
                <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </motion.button>
            </Link>

            <Link href="/our-work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 text-lg font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 border-2 border-slate-200 shadow-sm"
              >
                View Hospitality Work
              </motion.button>
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-10 text-sm text-slate-500">
            No high-pressure sales — we evaluate fit before engagement
          </p>
        </motion.div>
      </Container>
    </FullContainer>
  );
}
