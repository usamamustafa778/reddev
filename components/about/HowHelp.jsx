import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import {
  LuArrowRight,
  LuUsers,
  LuFolderCheck,
  LuGlobe,
  LuSparkles,
} from "react-icons/lu";
import Image from "next/image";

export default function HowHelp() {
  return (
    <FullContainer className="relative overflow-hidden bg-gradient-to-br from-gray-50/50 to-gray-100/50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-2xl border border-gray-200/20 mb-6">
            <LuSparkles className="text-primary w-5 h-5" />
            <span className="text-primary text-sm font-medium">About Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold  leading-[1.2] mb-8">
            reddev helps start-ups, SMEs and enterprises{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">
                grow their business
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/10 rounded-full"></div>
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            We&apos;ve been helping customers since 2009 and take pride in
            delivering high-quality custom services designed to help you build,
            grow, and revolutionize your business.
          </p>

          <button className="group inline-flex items-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-primary to-secondary hover:bg-secondary/90 rounded-full transition-all duration-300">
            <span className="font-medium">Discover More</span>
            <LuArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              number: "236+",
              label: "Active Clients",
              icon: LuUsers,
              color: "from-blue-500 to-blue-600",
            },
            {
              number: "3,000+",
              label: "Projects Delivered",
              icon: LuFolderCheck,
              color: "from-primary to-blue-500",
            },
            {
              number: "23+",
              label: "Countries Supported",
              icon: LuGlobe,
              color: "from-purple-500 to-primary",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 border border-gray-200/20 hover:border-primary/20"
            >
              <div className="flex items-start gap-6">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
          <Image
            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            src="/img/calltoaction.webp"
            alt="Call to action image"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 max-w-xl">
              Ready to transform your business with innovative solutions?
            </h3>
            <button className="group flex items-center gap-2 px-6 py-3 bg-white text-secondary rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              <span className="font-medium">Get Started</span>
              <LuArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
