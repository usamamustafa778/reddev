import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { LuDot } from "react-icons/lu";
import Image from "next/image";

export default function HowHelp() {
  return (
    <FullContainer className="">
      <Container className="py-24 ">
        <div className=" grid grid-cols-1 md:grid-cols-4  gap-12">
          <div className="col-span-3 flex flex-col gap-8">
            <div>
              <button className="p-3 rounded-md border-2 border-primary s">
                About us
              </button>
            </div>
            <h1 className="text-5xl font-bold text-secondary ">
              reddev helps start-ups, SMEs and enterprises grow their business
            </h1>
            <p className="text-gray-500 text-lg">
              We&apos;ve been helping customers since 2009 and take pride in
              delivering high-quality custom services designed to help you
              build, grow, and revolutionize your business.
            </p>
          </div>
          <div className=" col-span-1 flex flex-col justify-end">
            <h1 className="flex flex-row justify-between p-3 text-lg text-white font-semibold  hover:text-secondary w-48 hover:bg-white hover:border hover:border-primary rounded-full pl-4 bg-primary ">
              <span>Learn More </span>
              <LuDot className="text-3xl" />
            </h1>
          </div>
        </div>

        {/* second block */}
        <div className=" grid grid-cols-1 md:grid-cols-4  md:gap-12 py-24">
          <div className="col-span-3 justify-center pb-12 md:pb-0">
            <Image
              className=""
              src="/img/calltoaction.webp                                                                                                                                                                                                                                                                                                                                                                                                                           "
              alt="image"
              width={800}
              height={800}
              layout="intrinsic"
            />
          </div>
          <div className="col-span-1 flex  md:grid justify-center gap-6 md:justify-between">
            <div className="flex h-full">
              <div className="flex flex-col justify-center items-start  ">
                <h1 className="text-3xl md:text-5xl text-primary font-bold font-poppins pb-2">
                  236+
                </h1>
                <h5 className="text-gray-500 md:text-lg">Active Clients</h5>
              </div>
            </div>

            <div className="md:border-b-2 md:border-t-2 flex items-center h-full">
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-3xl md:text-5xl text-primary font-bold font-poppins pb-2">
                  3,000+
                </h1>
                <h5 className="text-gray-500 md:text-lg">Projects Delivered</h5>
              </div>
            </div>
            <div className=" flex items-center h-full">
              <div className="flex flex-col justify-center items-start text-start">
                <h1 className="text-3xl md:text-5xl text-primary font-bold font-poppins pb-2">
                  23+
                </h1>
                <h5 className="text-gray-500 md:text-lg">Countries Supported</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
