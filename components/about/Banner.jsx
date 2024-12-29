import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { motion } from "framer-motion";
import BgAnimation from "../BgAnimation";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <FullContainer className="relative bg-[linear-gradient(125deg,#0a0505,#1a0808_40%,#2a0a0a_70%,#0a0505)] text-white overflow-hidden">
      <BgAnimation />

      <Container className="py-24 space-y-8 max-w-screen-md text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl lg:text-6xl leading-10 font-bold leading-[1.1]"
        >
          Our Journey to a leading{" "}
          <motion.span
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              Software Development Partner
            </span>
          </motion.span>{" "}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 leading-relaxed"
        >
          Transforming ideas into innovative solutions through cutting-edge
          technology and exceptional expertise.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(220,38,38,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 rounded-lg text-lg font-semibold"
          >
            Talk to an Expert
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </Container>
    </FullContainer>
  );
}
