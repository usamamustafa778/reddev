import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const data = [
    {
      img: "/img/openproject1.png",
      title: "STARLIGHTxSOCIETY (SXS)",
      company: "STARLIGHTxSOCIETY-(SXS)",
      description:
        "devbitties helped STARLIGHTxSOCIETY scale its NFT platform, enhance its music integration, and support collaborations with global musicians, creating unique experiences for collectors and fans.",
    },
    {
      img: "/img/openproject2.png",
      title: "United-Insurance",
      company: "United-Insurance",
      description:
        "Devbitties collaborated with United-Insurance to innovate their insurance solutions, streamline policy management, and enhance customer experience through technology, ensuring comprehensive coverage for all clients.",
    },

    {
      img: "/img/openproject3.png",
      title: "Beastables",
      company: "Beastables",
      description:
        "HoneyBricks used blockchain for secure real estate investment, supporting 3,500 investors and managing over $5 million.",
    },
    {
      img: "/img/openproject4.png",
      title: "Tekruiter",
      company: "Tekruiter",
      description:
        "devbitties helped STARLIGHTxSOCIETY scale its NFT platform, enhance its music integration, and support collaborations with global musicians, creating unique experiences for collectors and fans.",
    },
    {
      img: "/img/openproject5.png",
      title: "How Recurate Unlocks ReCommerce",
      company: "QuickShipCars",
      description:
        "Provides the perfect solution for the resale marketplace covering the E-Commerce P2P model.",
    },
    {
      img: "/img/openproject6.png",
      title: "Relik",
      company: "relik",
      description:
        "  RELIK provides top-notch solutions for NFT marketplaces, ensuring smooth transactions within the metaverse ecosystem.",
    },
  ];

  return (
    <FullContainer>
      <Container>
        <div className="py-20 md:py-28 flex flex-col justify-center gap-8">
          <h1
            className="text-5xl md:text-6xl font-bold text-start sm:text-center 
          bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Case Studies
          </h1>
          <p
            className="text-2xl md:text-3xl text-gray-400 text-start sm:text-center max-w-3xl 
          mx-auto leading-relaxed"
          >
            Explore some of the transformative journeys of reddev&apos;s global
            clients.
          </p>
        </div>
        <div className="flex flex-col gap-20 pb-32">
          {data.map((item, index) => (
            <Project
              key={index}
              index={index}
              title={item.title}
              des={item.description}
              img={item.img}
              company={item.company}
            />
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
function Project({ index, title, des, img, company }) {
  return (
    <div
      key={index}
      className="group bg-gradient-to-br from-secondary/90 to-secondary hover:from-secondary hover:to-secondary/90 
      transition-all duration-500 rounded-[2rem] grid grid-cols-1 md:grid-cols-2 md:px-12 px-6 py-8 lg:py-12 
      overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] 
      border border-gray-700/20 backdrop-blur-sm relative"
    >
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 
      opacity-50 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <div className="text-white flex flex-col justify-center gap-7 pr-8 relative">
        <div
          className="absolute -left-6 top-0 h-full w-1 bg-primary/20 group-hover:bg-primary/40 
        transition-colors duration-500"
        ></div>

        <h5
          className="text-3xl font-bold leading-tight bg-clip-text text-transparent 
        bg-gradient-to-r from-white to-gray-300"
        >
          {title}
        </h5>

        <p className="text-lg text-gray-300/90 leading-relaxed">{des}</p>

        <Link
          className="group/btn bg-gradient-to-r from-primary to-primary/80 py-3.5 px-7 
          text-center rounded-xl font-medium text-lg transition-all duration-500 w-fit 
          hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] relative overflow-hidden"
          href={`/our-work/${company}`}
        >
          <span className="relative z-10 flex items-center gap-2">
            View Case Study
            <span className="transform translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-300">
              →
            </span>
          </span>
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 
          translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"
          ></div>
        </Link>
      </div>

      <div className="relative h-full flex items-center">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 
        group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
        ></div>
        <Image
          className="transform transition-all duration-700 rounded-lg shadow-lg 
          group-hover:scale-[1.02] group-hover:shadow-xl"
          src={img}
          alt={`${title} project screenshot`}
          width={1200}
          height={1200}
          priority={index === 0}
        />
      </div>
    </div>
  );
}
