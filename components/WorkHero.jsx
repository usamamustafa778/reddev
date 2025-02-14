import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./common/Container";
import FullContainer from "./common/FullContainer";
import { ArrowRight, Sparkles } from "lucide-react";

export default function WorkHero() {
  return (
    <FullContainer className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
          alt="Background"
          fill
          className="object-cover object-center brightness-[0.6]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/80 to-gray-950/90" />
      </div>

      {/* Subtle Gradient Accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <Container className="relative pt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-16">
            {/* Hero Content */}
            <div className="space-y-8">
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">Our Portfolio</span>
              </motion.div> */}

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Transforming Ideas Into <br />
                <span className="relative pt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">
                    Digital Excellence
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 0L50 7L100 0L100 8L0 8Z"
                      fill="currentColor"
                      className="text-primary/20"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Explore our collection of successful projects where innovation
                meets execution. Each case study represents our commitment to
                delivering exceptional digital solutions.
              </motion.p>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
              >
                {[
                  { number: "150+", label: "Projects Completed" },
                  { number: "95%", label: "Client Satisfaction" },
                  { number: "10+", label: "Industries Served" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-4"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-600 transition-all duration-300"
                >
                  View Our Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
