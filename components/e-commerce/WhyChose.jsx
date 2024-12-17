import React from "react";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import Image from "next/image";
import Link from "next/link";

export default function WhyChose() {
  return (
    <>
      <FullContainer>
        <Container>
          <h2 className="elementHeading2 my-6 ml-14 ">
            {" "}
            <span className=" border-b-2 border-yellow-600 ">Why</span>
            Choose GILKYSON Solutions
          </h2>

          <div className="grid gap-5 mx-14 lg:grid-cols-2  text-center mt-14 mb-6  ">
            <div className="first   p-4  text-start shadow-xl border-2 border-purple-400 ">
              <div className="flex flex-col md:flex-row">
                <Image src="/img/i1.png" height="100" width="80" alt="" />
                <div>
                  <p className="  font-bold my-4">Proven Experience</p>
                  <p className=" text-gray-500 text-xs ">
                    Gilkyson brings five years of experience to software
                    development, ensuring reliability and expertise in crafting
                    innovative solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="second   p-4  text-start shadow-xl border-2 border-purple-400 ">
              <div className="flex flex-col md:flex-row ">
                <Image src="/img/i4.png" height="100" width="80" alt="" />
                <div>
                  <p className="  font-bold my-4">Always Learning</p>
                  <p className=" text-gray-500 text-xs ">
                    With half a decade of know-how, our team stays sharp by
                    embracing new trends, adapting to changes, and continuously
                    enhancing our skills.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 mx-14 lg:grid-cols-2  text-center mb-14  ">
            <div className="first   p-4  text-start shadow-xl border-2 border-purple-400 ">
              <div className="flex flex-col md:flex-row">
                <Image src="/img/i5.png" height="100" width="80" alt="" />
                <div>
                  <p className="  font-bold my-4"> Global Support</p>
                  <p className=" text-gray-500 text-xs ">
                    Despite our relatively short journey, Gilkyson extends its
                    reach globally - from the USA and UK to the UAE - providing
                    comprehensive support for your software needs.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="second   p-4  text-start shadow-xl border-2 border-purple-400 ">
              <div className="flex flex-col md:flex-row">
                <Image src="/img/i7.png" height="100" width="80" alt="" />
                <div>
                  <p className="  font-bold my-4">Passionate Touch</p>
                  <p className=" text-gray-500 text-xs ">
                    Our team, fueled by five years of passion, is here to add a
                    personal touch to your software journey, combining
                    experience with enthusiasm for your project`&apos;`s success.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
