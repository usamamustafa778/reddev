import React from "react";
import { FaRocket, FaLightbulb, FaShieldAlt, FaCogs } from "react-icons/fa";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import BgAnimation from "../BgAnimation";

export default function BonusesSection() {
  const bonuses = [
    {
      icon: <FaRocket />,
      title: "Speed Optimization",
      description:
        "Lightning-fast loading times with advanced caching and CDN setup",
      highlights: [
        "50% faster load time",
        "Mobile optimization",
        "Performance monitoring",
      ],
    },
    {
      icon: <FaLightbulb />,
      title: "Smart Features",
      description: "Intelligent solutions that adapt to your business needs",
      highlights: [
        "AI-powered insights",
        "Smart automation",
        "Custom workflows",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Bundle",
      description:
        "Enterprise-grade security features to protect your platform",
      highlights: ["24/7 monitoring", "Threat detection", "Auto-backups"],
    },
    {
      icon: <FaCogs />,
      title: "Premium Support",
      description: "Direct access to senior developers and priority assistance",
      highlights: ["24h response time", "Dedicated team", "Monthly reviews"],
    },
  ];

  return (
    <FullContainer className="relative bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-950 text-white overflow-hidden">
      <BgAnimation />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 animt bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10 py-32">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-primary font-semibold mb-4 block uppercase tracking-wider">
            Premium Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Exclusive{" "}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">
                Bonuses
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
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock premium features that elevate your digital presence to new
            heights
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Enhanced Glowing Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-rose-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

              {/* Card Content */}
              <div className="relative h-full flex flex-col bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 transition duration-500 group-hover:translate-y-[-8px] border border-gray-700/50">
                {/* Icon */}
                <div className="mb-6">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-rose-500 rounded-xl rotate-0 group-hover:rotate-180 transition-transform duration-700" />
                    <div className="absolute inset-[2px] bg-gray-900 rounded-xl flex items-center justify-center text-white group-hover:text-primary transition-colors duration-300">
                      {React.cloneElement(bonus.icon, {
                        className:
                          "w-8 h-8 group-hover:scale-125 transition duration-500",
                      })}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition duration-300">
                  {bonus.title}
                </h3>
                <p className="text-gray-400 mb-8 group-hover:text-gray-300 transition duration-300">
                  {bonus.description}
                </p>

                {/* Highlights */}
                <div className="mt-auto space-y-3">
                  {bonus.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-rose-500" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Hover Line Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
