import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { IoStar } from "react-icons/io5";

function Testimonials({heading,des,data}) {
  return (
    <FullContainer className=" bg-primary py-24 ">
      <Container className="text-white flex flex-col">
        <h3 className="text-5xl text-left sm:text-center font-semibold  ">
          {heading}
        </h3>
        <p className="py-4 text-lg font-semibold text-left  sm:text-center">
          {des}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5 py-6  ">
          {data.map((item, index) => (
            <div  key={index}  data-aos={item.fade}
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
                {item.first} 
              </p>
              <p className="text-sm font-semibold text-center">
                {item.second} 
              </p>
              <p className="text-sm font-semibold text-center">
                {item.clientname} 
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
