import React from "react";
import FullContainer from "../common/FullContainer";
import Image from "next/image";
import Container from "../common/Container";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      <FullContainer className="bg-primary relative">
        <FullContainer className="bg-black/20 lg:min-h-screen  text-white">
          <Container>
            <div className="w-full grid lg:grid-cols-2 lg:gap-10 py-16">
              <div  className=" text-center " >
                <h1 className="elementHeading text-center lg:text-left">
                  Software Development
                </h1>
                <h4 className="elementHeading4 text-center lg:text-left"> 
                Our Passion is to Deliver Software that Helps You Succeed </h4>
                <div className=" lg:items-left my-6">
                  <p className="font-medium text-center lg:text-left  lg:block hidden">
                    {" "}


                    We offer comprehensive software development services, ensuring efficient solutions tailored to your needs. Our expertise spans coding, testing, and continuous support, delivering high-quality software for your success.
                  </p>
                </div>
                <div className=" text-center lg:text-left " >
                   <Link
                  href="/hire"
                  className="btnSecondary  p-4 py-2 bg-yellow-500"
                >
                  Let`&apos;`s Talk
                </Link> 
                </div>
              
              </div>
              <div>
                <Image
                  src="/img/software.png"
                  width="400"
                  height="400"
                  alt="Image"
                />
              </div>
            </div>
          </Container>
        </FullContainer>
      </FullContainer>
    </>
  );
}
