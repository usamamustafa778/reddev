import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

export default function Portfolio() {
  // data array with gradient colors and links
  const data = [
    {
      title: "SXS",
      description: "Music-focused NFT platform",
      img: "/img/openproject1.png",
      color: "bg-gradient-to-r from-pink-200 to-yellow-300",
      link: "/service/web-development", // Example of a project with a link
      fade: "zoom-in-right",
    },
    {
      title: "United-Insurance",
      description: "Insurance for NFTs, metaverse",
      img: "/img/openproject2.png",
      color: "bg-gradient-to-r from-blue-200 to-green-300",
      fade: "zoom-in-left",
    },
    {
      title: "Beastables",
      description: "NFT metaverse experiences",
      img: "/img/openproject3.png",
      color: "bg-gradient-to-r from-purple-200 to-blue-300",
      fade: "zoom-in-right",
    },
    {
      title: "Tekruiter",
      description: "Tech recruitment platform",
      img: "/img/openproject4.png",
      color: "bg-gradient-to-r from-indigo-200 to-purple-300",
      fade: "zoom-in-left",
    },
    {
      title: "QuickShipCars",
      description: "Auto shipping services",
      img: "/img/openproject5.png",
      color: "bg-gradient-to-r from-red-300 to-yellow-200",
      fade: "zoom-in-right",
    },
    {
      title: "RELIK",
      description: "Web3 and metaverse studio",
      img: "/img/openproject6.png",
      color: "bg-gradient-to-r from-teal-300 to-green-200",
      fade: "zoom-in-left",
    },
  ];

  // track hover state for each box based on index
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <FullContainer className="py-24 pt-52">
      <Container className="text-center text-3xl md:text-4xl font-bold text-secondary py-12">
        A showcase of my recent projects and accomplishments.
      </Container>
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[1200px] sm:h-[1300px] md:h-[700px]">
        {data.map((item, index) => (
          <div
            key={index}
            data-aos={item.fade}
            data-aos-duration="800"
            data-aos-delay="200"
            className={` rounded-2xl overflow-hidden px-2 md:px-8 py-6  ${
              item.color
            } ${
              index === 1 || index === 2 || index === 5 || index === 6
                ? "md:col-span-2"
                : "md:col-span-1"
            }`}
          >
            <div className="flex flex-row h-full ">
              {/* Text Section */}
              <div className="w-full flex flex-col justify-between py-2 pr-4">
                <div>
                  <div className="text-lg md:text-2xl font-bold">
                    {item.title}
                  </div>
                  <div className="text-base sm:text-sm md:text-xl">
                    {item.description}
                  </div>
                </div>

                <Link
                  className="btnPrimary w-[160px] flex justify-center items-center gap-2"
                  href="/our-work"
                  alt="loading...."
                >
                  View More
                  <LuMoveRight className="text-2xl" />
                </Link>
              </div>

              {/* Image Section */}
              <div
                className={`basis-4/5 transition-all ease-in-out duration-500 flex py-4 ${
                  index === 1 || index === 2 || index === 5 || index === 6
                    ? "flex"
                    : "md:hidden"
                }`}
              >
                {item.img && (
                  <Image
                    src={item.img}
                    className="object-cover"
                    height={150}
                    width={400}
                    alt="Image loading"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </FullContainer>
  );
}
