import React from "react";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import Image from "next/image";
import Link from "next/link";

export default function HomeBlog() {
  return (
    <>
      <FullContainer className=" py-16 ">
        <Container className="   ">
          <div className="  ">
            <h4 className="text-xl flex flex-col text-gray-600">OUR BLOG</h4>
            <h1 className="text-5xl pb-5">
              Most <span className="text-blue-700">recent</span> articles
            </h1>
            <p className="text-lg max-w-[600px]">
              The latest news, greatest tutorials and inspiration that’ll make
              you say “I wish I’d done that!”
            </p>
            <h4 className="text-xl text-end text-black font-semibold">
              -View more
            </h4>
          </div>
          <div className="grid gap-3 lg:gap-5 grid-flow-col auto-cols-[92%] md:auto-cols-[53%] lg:auto-cols-[32%] overflow-x-scroll overflow-y-hidden">
            <div className="h-auto  flex flex-col gap-3">
              <Image
                className="rounded-2xl object-cover"
                src="/img/blog1.1.png"
                alt="image"
                width={600}
                height={400}
              />
              <div className="flex flex-row justify-between">
                <p className="bg-blue-200 rounded-full  inline text-blue-700 px-4 py-1">
                  Innovation
                </p>
                <div className="text-gray-500">22 August 2024</div>
              </div>
              <p className="text-xl">
                From Bootstrap to Big Time: Richard White Charts the Evolution
                of Startup Funding and Strategy in the Tech Trenches
              </p>
              <p className="text-gray-500">
                In this week’s episode of Bright Founders Talk at Temy,
              </p>
            </div>
            <div className="h-auto  flex flex-col gap-3">
              <Image
                className="rounded-2xl object-cover"
                src="/img/blog1.2.png"
                alt="image"
                width={600}
                height={400}
              />
              <div className="flex flex-row justify-between">
                <p className="bg-blue-200 rounded-full  inline text-blue-700 px-4 py-1">
                  Innovation
                </p>
                <div className="text-gray-500">22 August 2024</div>
              </div>
              <p className="text-xl">
                From Bootstrap to Big Time: Richard White Charts the Evolution
                of Startup Funding and Strategy in the Tech Trenches
              </p>
              <p className="text-gray-500">
                In this week’s episode of Bright Founders Talk at Temy,
              </p>
            </div>
            <div className="h-auto  flex flex-col gap-3">
              <Image
                className="rounded-2xl object-cover"
                src="/img/blog1.3.png"
                alt="image"
                width={600}
                height={400}
              />
              <div className="flex flex-row justify-between">
                <p className="bg-blue-200 rounded-full  inline text-blue-700 px-4 py-1">
                  Innovation
                </p>
                <div className="text-gray-500">22 August 2024</div>
              </div>
              <p className="text-xl">
                From Bootstrap to Big Time: Richard White Charts the Evolution
                of Startup Funding and Strategy in the Tech Trenches
              </p>
              <p className="text-gray-500">
                In this week’s episode of Bright Founders Talk at Temy,
              </p>
            </div>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
