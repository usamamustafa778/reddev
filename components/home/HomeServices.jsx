import React from "react";
import Image from "next/image";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Link from "next/link";

export default function HomeServices() {
  const data = [
    {
      img: "/img/serviceicon3.png",
      title: "Mobile App Development",
      src: "/app-development",
      des: "Make your mobile app stand out from the crowd with Devsinc's Android and iOS development.",
    },
    {
      img: "/img/serviceicon1.png",
      title: "Web Development",
      src: "/web-development",
      des: "Deliver high-quality web development, design and functionality tailored for your business.",
    },
    {
      img: "/img/serviceicon2.png",
      title: "Digital Transformation",
      des: "Digitize, automate and accelerate your business operations through digital transformation.",
    },
    {
      img: "/img/serviceicon4.png",
      title: "DevOps",
      des: "Speed up your development process with automation services that streamline deployment.",
    },
  ];

  return (
    <>
      <FullContainer className="py-24">
        <Container>
          <h1 className="text-4xl font-bold text-heading text-center">
            Our Services
          </h1>
          <h3 className="text-gray-500 font-semibold text-center">
            From Idea to Completion, we bring Full-Stack Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 py-12">
            {data.map((item, index) => (
              <Link
                href={item.src ? item.src : "#"} // Ensures link is functional
                key={index}
                className="text-heading border-b-4 border-white hover:border-black transition-all duration-1000 hover:text-primary hover:bg-gray-50 flex flex-row gap-4 py-8"
              >
                <div className="flex items-center justify-center text-center w-[150px]">
                  <Image
                    src={item.img}
                    alt="service image"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col justify-between gap-6">
                  <h4 className="text-3xl font-bold">{item.title}</h4>
                  <span className="text-lg text-gray-500 font-semibold">
                    {item.des}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
