import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

export default function TeamMembers() {
  const data = [
    {
      img: "/img/member1.webp",
      name: "Usman Asif",
      title: "Founder, CEO",
    },
    {
      img: "/img/member1.webp",
      name: "Usman Asif",
      title: "Founder, CEO",
    },
    {
      img: "/img/member1.webp",
      name: "Usman Asif",
      title: "Founder, CEO",
    },
    {
      img: "/img/member1.webp",
      name: "Usman Asif",
      title: "Founder, CEO",
    },
    {
      img: "/img/member1.webp",
      name: "Usman Asif",
      title: "Founder, CEO",
    },
    {
      img: "/img/member1.webp",
      name: "Usman Asif",
      title: "Founder, CEO",
    },
  ];
  return (
    <FullContainer>
      <Container className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between pb-4 gap-4  ">
          <h1 className="text-3xl md:text-5xl font-bold  text-secondary">Leadership Team</h1>
          <p className="text-gray-500 ">
            Meet the driving force, the dreamers, the minds behind crafting a
            cutting-edge software development company, aka, reddev.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 border ">
              <div>
                <Image src={item.img} height="900" width="900" alt="img" />
              </div>
              <h3 className="text-lg">{item.name}</h3>
              <h4 className="text-base text-gray-500">{item.title}</h4>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
