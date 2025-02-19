import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";

function OurWork() {
  const data = [
    {
      img: "/img/openproject1.png",
      title: "STARLIGHTxSOCIETY (SXS)",
      company: "STARLIGHTxSOCIETY-(SXS)",
      description:
        "reddev helped STARLIGHTxSOCIETY scale its NFT platform, enhance its music integration, and support collaborations with global musicians, creating unique experiences for collectors and fans.",
    },
    {
      img: "/img/openproject2.png",
      title: "United-Insurance",
      company: "United-Insurance",
      description:
        "reddev collaborated with United-Insurance to innovate their insurance solutions, streamline policy management, and enhance customer experience through technology, ensuring comprehensive coverage for all clients.",
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
        "reddev helped STARLIGHTxSOCIETY scale its NFT platform, enhance its music integration, and support collaborations with global musicians, creating unique experiences for collectors and fans.",
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
    <FullContainer className="" >
      <Container className="py-24">
        <h3 className="text-[45px] text-left sm:text-center font-semibold  ">
          {" "}
          Explore some of our latest projects
        </h3>
        <p className="py-4 text-lg font-semibold text-left sm:text-center">
          reddev empowers hundreds of clients globally to embrace modern
          technology and elevate customer experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
  {data.map((item, index) => (
    <div key={index} className="w-full">
      <Link href="/our-work"
            alt="...."
       className="p-6 overflow-hidden">
        <Image
          src={item.img}
          className="rounded-xl transition-transform duration-500 hover:scale-105"
          alt="image"
          width={700}
          height={700}
        />
      </Link>
      <div className="flex flex-col gap-6">
        <h5 className="text-2xl text-secondary hover:text-primary transition-all duration-1500 font-bold">
          {item.title}
        </h5>
        <p className="text-base text-gray-500">{item.description}</p>
      </div>
    </div>
  ))}
</div>
      </Container>
    </FullContainer>
  );
}

export default OurWork;
