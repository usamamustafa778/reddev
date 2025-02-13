import React from "react";
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
      tags: ["Blockchain", "NFT", "Music"],
    },
    {
      title: "United-Insurance",
      description: "Insurance for NFTs, metaverse",
      img: "/img/openproject2.png",
      category: "DeFi",
      fade: "fade-up",
      tags: ["DeFi", "Insurance", "Web3"],
    },
    {
      title: "Beastables",
      description: "NFT metaverse experiences",
      img: "/img/openproject3.png",
      category: "NFT",
      fade: "fade-left",
      tags: ["NFT", "Metaverse", "Experiences"],
    },
    {
      title: "Tekruiter",
      description: "Tech recruitment platform",
      img: "/img/openproject4.png",
      category: "Web App",
      fade: "fade-right",
      tags: ["Recruitment", "Tech", "Platform"],
    },
    {
      title: "QuickShipCars",
      description: "Auto shipping services",
      img: "/img/openproject5.png",
      category: "Enterprise",
      fade: "fade-up",
      featured: true,
      tags: ["Auto", "Shipping", "Services"],
    },
    {
      title: "RELIK",
      description: "Web3 and metaverse studio",
      img: "/img/openproject6.png",
      category: "Metaverse",
      fade: "fade-left",
      tags: ["Web3", "Metaverse", "Studio"],
    },
  ];

  return (
    <FullContainer className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full filter blur-3xl animate-slow-spin" />
      </div>

      <Container className="relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-primary font-semibold mb-4 block uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Featured{" "}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Projects
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative solutions and digital experiences that have transformed businesses across industries.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Featured Projects - Enhanced Layout */}
          {data
            .filter((item) => item.featured)
            .map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="mb-24 group"
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent group-hover:from-black/95 transition-all duration-500" />

                  <div className="absolute inset-0 p-16 flex flex-col justify-center max-w-2xl">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium backdrop-blur-sm mb-6 w-fit">
                      {item.category}
                    </span>
                    <h3 className="text-5xl font-bold text-white mb-6 transform group-hover:translate-x-4 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xl mb-8 transform group-hover:translate-x-4 transition-transform duration-500 delay-100">
                      {item.description}
                    </p>
                    {/* Tags */}
                    <div className="flex gap-3 mb-8 transform group-hover:translate-x-4 transition-transform duration-500 delay-150">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/our-work"
                      className="inline-flex items-center text-white text-lg font-semibold transform group-hover:translate-x-4 transition-transform duration-500 delay-200 hover:text-primary"
                    >
                      <span>View Case Study</span>
                      <LuMoveRight className="ml-2 text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          {/* Other Projects - Enhanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data
              .filter((item) => !item.featured)
              .map((item, index) => (
                <div
                  key={index}
                  data-aos={item.fade}
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />

                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium backdrop-blur-sm mb-4 w-fit transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      {item.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {item.title}
                    </h3>
                    <p className="text-white/80 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-150">
                      {item.description}
                    </p>
                    {/* Tags */}
                    <div className="flex gap-2 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/our-work"
                      className="inline-flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-250 hover:text-primary"
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
