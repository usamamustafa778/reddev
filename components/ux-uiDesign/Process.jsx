import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function Process() {
  const data = [
    {
      title: "discovery call",
      des: "We begin by thoroughly understanding your objectives.",
    },
    {
      title: "hello world call",
      des: "We begin by thoroughly understanding your objectives.",
    },
    {
      title: "discovery call",
      des: "We begin by thoroughly understanding your objectives.",
    },
    {
      title: "discovery call",
      des: "We begin by thoroughly understanding your objectives.",
    },
  ];

  return (
    <FullContainer className="bg-custom-gradient  from-innerbanner to-secondary ">
      <Container className="py-24">
        <div className=" grid grid-cols-1 lg:grid-cols-3 text-white items-center text-center justify-center">
          <div className="col-span-1">
            <h3 className=" text-left text-5xl font-bold">
              The Devbitties Process
            </h3>
            <p className=" text-left text-lg ">
              Our process is a systematic journey comprising four stages:
              Discovery, Proposal, Implementation, and Optimization.
            </p>
          </div>
          <div className="col-span-2 grid grid-col-1 sm:grid-cols-2 gap-6 justify-center">
            {data.map((item, index) => (
              <Circle
                key={index}
                index={index + 1}
                title={item.title}
                des={item.des}
              />
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}

function Circle({ index, title, des }) {
  return (
    <div
      className={`${
        index === 2 || index === 4 ? "mt-8" : ""
      } w-72 h-72 rounded-full p-7 border border-gray-500 text-center flex flex-col gap-2 justify-center bg-white/5`}
    >
      <h1 className="text-3xl font-bold">{index}</h1>
      <h2 className="text-2xl font-bold capitalize">{title}</h2>
      <p className="text-sm">{des}</p>
    </div>
  );
}
