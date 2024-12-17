import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <FullContainer className="w-full h-screen">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="flex  items-center justify-center ">
              <h2 className="=   font-bold font-roboto py-10 text-left  text-5xl text-secondary leading-snug">
                Our Journey to a leading{" "}
                <span className="text-primary">
                  Software Development Partner
                </span>
              </h2>
            </div>
            <div className=" justify-center">
                <Image
                  className=""
                  src="/img/aboutbanner.png                                                                                                                                                                                                                                                                                                                                                                                                                             "
                  alt="image"
                  width={800}
                  height={800}
                  layout="intrinsic"
                />
            </div>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
