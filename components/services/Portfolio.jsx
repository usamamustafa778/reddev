import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

export default function Portfolio() {
  const data = [
    {
      title: "SXS",
      description: "Music-focused NFT platform",
      img: "/img/openproject1.png",
      category: "Web3",
      fade: "fade-right",
      featured: true,
    },
    {
      title: "United-Insurance",
      description: "Insurance for NFTs, metaverse",
      img: "/img/openproject2.png",
      category: "DeFi",
      fade: "fade-up",
    },
    {
      title: "Beastables",
      description: "NFT metaverse experiences",
      img: "/img/openproject3.png",
      category: "NFT",
      fade: "fade-left",
    },
    {
      title: "Tekruiter",
      description: "Tech recruitment platform",
      img: "/img/openproject4.png",
      category: "Web App",
      fade: "fade-right",
    },
    {
      title: "QuickShipCars",
      description: "Auto shipping services",
      img: "/img/openproject5.png",
      category: "Enterprise",
      fade: "fade-up",
      featured: true,
    },
    {
      title: "RELIK",
      description: "Web3 and metaverse studio",
      img: "/img/openproject6.png",
      category: "Metaverse",
      fade: "fade-left",
    },
  ];

  return (
    <FullContainer className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our Recent <span className="text-primary ml-1">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of our innovative solutions and digital experiences.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Featured Projects - Full Width */}
          {data
            .filter((item) => item.featured)
            .map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                className="mb-16 group"
              >
                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

                  <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-2xl">
                    <span className="text-primary mb-4">{item.category}</span>
                    <h3 className="text-4xl font-bold text-white mb-6 transform group-hover:translate-x-4 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-lg mb-8 transform group-hover:translate-x-4 transition-transform duration-500 delay-100">
                      {item.description}
                    </p>
                    <Link
                      href="/our-work"
                      className="inline-flex items-center text-white text-lg font-semibold transform group-hover:translate-x-4 transition-transform duration-500 delay-200"
                    >
                      <span>View Case Study</span>
                      <LuMoveRight className="ml-2 text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          {/* Other Projects - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data
              .filter((item) => !item.featured)
              .map((item, index) => (
                <div
                  key={index}
                  data-aos={item.fade}
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"></div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-primary mb-2">{item.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.description}
                    </p>
                    <Link
                      href="/our-work"
                      className="inline-flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-200"
                    >
                      <span>View Project</span>
                      <LuMoveRight className="ml-2 text-xl group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
