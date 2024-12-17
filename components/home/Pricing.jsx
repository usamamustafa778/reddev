import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { data } from "autoprefixer";
import Image from "next/image";

export default function Pricing() {
  const data = [
    {
      stat: "236+",
      description: "Active Clients",
    },
    {
      stat: "3,000+",
      description: "Projects Delivered",
    },
    {
      stat: "23+",
      description: "Countries Supported",
    },
  ];
  return (
    <FullContainer className=" bg-gradient-to-t from-primary/35 to-white">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-6  py-24">
        <div className=" ">
          <p className="text-primary">Pricing</p>
          <h1 className="text-4xl font-bold my-3">
            We leverage the{" "}
            <span className="text-primary">latest advancements in AI</span> to
            deliver the highest quality technology,{" "}
            <span className="text-primary">on time and on budget.</span>
          </h1>
          <p className="text-gray-500 text-lg">
            We&apos;pve been helping customers since 2009 and take pride in
            delivering high-quality custom services designed to help you build,
            grow, and revolutionize your business.
          </p>

          <button className="px-6 py-4 rounded-full text-xl  hover:bg-secondary text-secondary border-secondary border transition-all duration-500 hover:text-white  my-4">
            See Our Reviews
          </button>
          <ul className="flex gap-5 mt-2">
            {data.map((item, index) => (
              <li key={index} className="flex flex-col  gap-2">
                <div className="text-3xl md:text-30xl text-secondary font-bold ">
                  {item.stat}
                </div>
                <p className="text-lg text-gray-500">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* card */}
        <div className="border-[3px] p-5 bg-white flex flex-col gap-5 rounded-3xl">
          <div className="flex justify-between md:pr-10 ">
            <div>
              <p className="text-primary">Pricing</p>
              <p className="text-4xl font-bold">$22/hr</p>
            </div>
            <button className="px-10 py-4 rounded-full text-xl  hover:bg-white text-white border-primary bg-primary border transition-all duration-500 hover:text-black  my-4">
              Contact us
            </button>
          </div>
          <p className="text-lg text-gray-500">
            With tools like ChatGPT and CoPilot, software development is being
            rapidly enabled by machines. Devsinc engineers are trained with
            these technologies, improving the ROI of your project.
          </p>
          <p className="text-lg text-gray-500 ">
            Experience working with us for 2 weeks completely free of charge.
          </p>
          <p className="text-lg text-gray-500 boreder border-b-2 pb-3">
            We guarantee that we will make a positive impact on your project or
            continue working for free until we do.
          </p>
          <Facilities />
        </div>
      </Container>
    </FullContainer>
  );
}

const data2 = [
  {
    img: "/img/price1.svg",
    title: "Software Outsourcing",
    des: "Let us handle end-to-end delivery with complete software development outsourcing.",
  },
  {
    img: "/img/price2.svg",
    title: "Staff Augmentation",
    des: "Add talent to your existing team through Devsinc and save time on sourcing, recruiting, and training.",
  },
  {
    img: "/img/price3.svg",
    title: "Dedicated Teams",
    des: "Move faster with a dedicated and functional team to your existing software development process.",
  },
];

function Facilities() {
  return (
    <div className="flex flex-col gap-5 ">
      {data2.map((item, index) => (
        <div className="flex items-center gap-4" key={index}>
          <div className="flex-shrink-0">
            <Image
              src={item.img}
              alt="image"
              height={50}
              width={50}
              className="object-cover"
            />
          </div>
          <div className=" p-2">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-500 text-lg">{item.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
