import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <FullContainer className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-28 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="font-bold font-roboto text-4xl lg:text-5xl xl:text-6xl text-secondary leading-tight">
              Our Journey to a leading{" "}
              <span className="text-primary relative">
                Software Development Partner
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 -z-10"></div>
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Transforming ideas into innovative solutions through cutting-edge
              technology and exceptional expertise.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg 
                         hover:shadow-primary/20 transition-all duration-300 
                         w-fit text-lg font-medium"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="absolute -z-10 w-[80%] h-[80%] bg-primary/5 rounded-full 
                          blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></div>
            <Image
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              src="/img/aboutbanner.png"
              alt="Software Development Journey"
              width={800}
              height={800}
              layout="intrinsic"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </FullContainer>
  );
}
