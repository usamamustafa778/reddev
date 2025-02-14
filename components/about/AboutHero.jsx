import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Timer, Building2 } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-5 h-5" />,
      number: "150+",
      label: "Awards Won",
    },
    {
      icon: <Timer className="w-5 h-5" />,
      number: "10+",
      label: "Years Experience",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      number: "4",
      label: "Global Offices",
    },
  ];

  return (
    <FullContainer className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Background"
          fill
          className="object-cover object-center brightness-[0.8]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-gray-950/80" />
      </div>

      <Container className="relative pt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-16">
            {/* Hero Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <span className="text-primary font-medium">Our Story</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold text-white leading-tight"
              >
                Crafting Digital Excellence
                <br />
                <span className="relative pt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">
                    Empowering Businesses
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                From humble beginnings to industry leadership, we've dedicated
                ourselves to delivering exceptional digital solutions that
                transform businesses.
              </motion.p>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a
                  href="#story"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-600 transition-all duration-300"
                >
                  Our Journey
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
