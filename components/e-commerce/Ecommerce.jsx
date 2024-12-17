import React from "react";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import Image from "next/image";
import Link from "next/link";

export default function Ecommerce() {
  return (
    <>
      <FullContainer className=" py-16 ">
        <Container>
         
          <h2 className="elementHeading2 my-6 ml-14 ">
            {" "}
            <span className=" border-b-2 border-yellow-600 ">Sof</span>
            
            tware Development Service Process
          </h2>

          <div className="grid gap-0    mx-7 space-y-6  lg:grid-cols-4 text-center  my-14  ">
            <div className="first mx-0 lg:mx-6  p-4 bg-white shadow-xl  text-start ">
              <div className="flex justify-center lg:justify-start items-center">
                <Image src="/img/i9.png" height="100" width="80" alt="" />
              </div>
              <div className="text-center  lg:text-start">
                <p className=" text-purple-700 text-xl font-semibold  my-4 ">
                  Step 1
                </p>
                <p className="  font-bold my-4">Share Ideas</p>
                <p className=" text-gray-500 text-xs ">
                 

                Tell us what you want. We`&apos;`ll chat about your software and understand who will use it and what it needs to do.
                </p>
              </div>
            </div>

            <div className="Second mx-0 lg:mx-6   bg-white shadow-xl   p-4 text-start 4">
              <div className="flex justify-center lg:justify-start items-center">
                <Image src="/img/i2.png" height="100" width="80" alt="" />
              </div>
              <div className="text-center  lg:text-start">
                <p className=" text-purple-700 text-xl font-semibold  my-4 ">
                  Step 2
                </p>

                <p className=" font-bold  my-4"> Plan and Build Together</p>
                <p className=" text-gray-500 text-xs ">
                 
                We create a plan, design how it works, and use the latest tech to build your software. It`&apos;`s a team effort!                </p>
              </div>
            </div>
            <div className="Third mx-0 lg:mx-4 bg-white shadow-xl   p-4 l text-start ">
              <div className="flex  justify-center lg:justify-start items-center">
                <Image src="/img/i6.png" height="100" width="90" alt="" />
              </div>
              <div className="text-center  lg:text-start">
                <p className=" text-purple-700 text-xl font-semibold  my-4 ">
                  Step 3
                </p>

                <p className=" font-bold my-4">Test, Fix, Enjoy</p>
                <p className=" text-gray-500 text-xs ">
               
                We test everything, fix any issues, and then your software is good to go. Now you can enjoy using it!                </p>
              </div>
            </div>

            <div className="Third  mx-0 lg:mx-6   bg-white shadow-xl p-4  text-start ">
              <div className="flex justify-center lg:justify-start items-center">
                <Image
                  src="/img/maintenance.png"
                  height="100"
                  width="80"
                  alt=""
                />
              </div>
              <div className="text-center  lg:text-start">
                <p className=" text-purple-700 text-xl font-semibold  my-4 ">
                  Step 4
                </p>

                <p className=" font-bold my-4 ">Support Always</p>
                <p className=" text-gray-500 text-xs ">
                 
                Even after launch, we`&apos;`re here. We keep your software safe and updated. Have questions? Just reach out anytime!                </p>
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
