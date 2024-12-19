import React from "react";
import FullContainer from "./FullContainer";
import Container from "./Container";
import Image from "next/image";
import { LuDot } from "react-icons/lu";

export default function OurLatestProjects() {
  const data = [
    {
      img: "/img/project1.png",
      title: "Empowering XQUIC for Automated Financial Accuracy",
      description:
        "XQUIC revolutionized the hospitality industry with AI-driven reconciliation and seamless integration, saving hotels time and money while automating 95% of revenue management processes.",
    },
    {
      img: "/img/project-2.png",
      title: "Automating People Operations with 30+ integrations",
      description:
        "reddev helped Sapling rapidly expanded their team, improve integrations and support some of the world's fastest growing companies.",
    },
    {
      img: "/img/project-3.png",
      title: "How reddev helped HoneyBricks expand investment accessibility",
      description:
        "HoneyBricks used blockchain for secure real estate investment, supporting 3,500 investors and managing over $5 million.",
    },
    {
      img: "/img/project4.png",
      title: "How Recurate Unlocks ReCommerce",
      description:
        "Provides the perfect solution for the resale marketplace covering the E-Commerce P2P model.",
    },
  ];
  return (
    <FullContainer>
      <Container className="py-24 ">
        <div className="grid grid-cols-1 gap-6 md:gap-2 md:grid-cols-3  ">
          <div className="col-span-1 flex flex-col justify-center gap-10">
          <h2 className="text-5xl font-bold text-start text-secondary">Our Latest Projects</h2>
          <h1 className="flex flex-row justify-between p-3 text-lg text-white font-semibold  hover:text-secondary w-48 hover:bg-white hover:border hover:border-primary rounded-full pl-4 bg-primary ">
              <span>View All </span>
              <LuDot className="text-3xl" />
            </h1>
          </div>
          <div className="col-span-2 gap-6 flex overflow-x-scroll ">
            {data.map((item, index) => (
              <div key={index} className="min-w-[90%] sm:min-w-[50%] ">
                <div className="pb-4 overflow-hidden">
                  <Image
                    src={item.img}
                    className=" transition-transform duration-500 hover:scale-105"
                    alt="image"
                    width={700}
                    height={700}
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <h5 className="text-2xl text-secondary hover:text-primary transition-all duration-1500 font-bold">
                    {item.title}
                  </h5>
                  <p className="text-base text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
