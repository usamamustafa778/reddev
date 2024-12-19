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
      company:"QuickShipCars",
      description:
        "Provides the perfect solution for the resale marketplace covering the E-Commerce P2P model.",
    },
    {
      img: "/img/openproject6.png",
      title: "Relik",
      company:"relik",
      description:
        "  RELIK provides top-notch solutions for NFT marketplaces, ensuring smooth transactions within the metaverse ecosystem.",
    },
  ];
  return (
    <FullContainer>
      <Container className=" ">
        <div className=" py-8 md:h-[40vh] flex flex-col justify-center  gap-4 ">
          <h1 className="text-5xl  font-bold text-start sm:text-center">
            Case Studies
          </h1>
          <p className="text-2xl text-start sm:text-center">
            Explore some of the transformative journeys of reddev`&apos;s
            global clients.
          </p>
        </div>
        {/* Projects */}
        <div className="flex flex-col  gap-12 pb-24">
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
function Project({ index, title, des, img ,company}) {
  return (
    <div
      key={index}
      className="bg-secondary rounded-3xl grid grid-cols-1 md:grid-cols-2 md:px-12 px-4 pt-4 lg:pt-0 overflow-hidden "
    >
      <div className="text-white flex flex-col justify-center gap-3 pr-6">
        <h5 className="text-2xl font-bold">{title}</h5>
        <p className="text-base ">{des}</p>
        <Link className="bg-primary py-2 text-center " href={`/our-work/${company}`} alt="page not found">
        Open Project
      </Link>
      </div>
      <Image
        className="hover:scale-105 transition-all duration-1000 pt-12"
        src={img}
        alt="image"
        width={1200}
        height={1200}
      />
      
    </div>
  );
}
