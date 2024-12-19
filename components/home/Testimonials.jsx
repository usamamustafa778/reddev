import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { IoStar } from "react-icons/io5";

function Testimonials() {
  const data1 = [
    { 
      id: 1,
      img: "/img/tes1.jpg",
      title1: "reddev has stood out for their promptness and responsiveness.",
      title2: "Parham, President, Kudo Westervelt",
      description:
        "The client is extremely satisfied with their performance and technical skills. All in all, they&apos;re a reliable and committed partner",
        fade:"fade-right"
    },
    {
      id: 2,
      img: "/img/tes2.jpg",
      title1:
        "It is an absolute honor to work with such hard working and dedicated folks.",
      title2: "Nimesh Shah, CEO, Orbrick",
      description:
        "The effort that you give every month is a lot but you really surpassed it to achieve this new record.",
         fade:"fade-down"
    },
    {
      id: 3,
      img: "/img/tes3.png",
      title1: "reddev helped us hit the ground running on our MVP development.",
      title2: "Ramesh Doddi, CTO, HoneyBricks",
      description:
        "They helped us build out a number of important integrations across payments, authentication and blockchain integrations.",
         fade:"fade-up"
    },
    {
      id: 4,
      img: "/img/tes4.png",
      title1: "Responsive and committed, reddev provides quality work in a timely manner.  ",
      title2: "Eric Hurst, Co-Founder Intellirent",
      description:
        "They also ensure that the developers they provide meet the client&apos;s needs, leading to an ongoing partnership.",
         fade:"fade-down"
    },
    {
      id: 5,
      img: "/img/tes5.png",
      title1: "After we raised our seed round, we needed to scale our engineering team quickly to deliver on a growing number of integrations.",
      title2: "Andy Crebar, CEO, Sapling",
      description:
        "Their embedded team offering quickly become a core part of our company",
         fade:"fade-left"
    },
  ];


  return (
    <FullContainer className=" bg-primary py-24 ">
      <Container className="text-white flex flex-col">
        <h3 className="text-5xl text-left sm:text-center font-semibold  ">
          {" "}
          Hear Directly from Our Clients: Real Stories, Real Results
        </h3>
        <p className="py-4 text-lg font-semibold text-left  sm:text-center">
          Over the last 15 years, we&apos;ve been driven by our passion for helping
          global clients achieve their goals.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5 py-6  ">
          {data1.map((item, index) => (
            <div key={index}  data-aos={item.fade}
            data-aos-duration="800"
            data-aos-delay="200" className={`border-2 ${index===4?"hidden lg:flex ":"flex"} rounded-md border-white bg-white bg-opacity-15 flex flex-col gap-5 px-3 justify-between py-8`}>
            <div className=" flex flex-row  text-yellow-400 text-lg justify-center ">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>
              <p className="text-sm font-semibold text-center">
                {item.title1} 
              </p>
              <p className="text-sm font-semibold text-center">
                {item.description} 
              </p>
              <p className="text-sm font-semibold text-center">
                {item.title2} 
              </p>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
  g;
}

export default Testimonials;
