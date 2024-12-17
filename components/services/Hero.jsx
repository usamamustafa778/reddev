import Image from "next/image";
import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { RxCross2 } from "react-icons/rx";
import Form from "../common/Form";
import TypingTextManual from "../common/TypingTextManual";

export default function Hero({ heading2, heading1, des, img }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <FullContainer className="relative bg-gradient-to-r from-secondary to-primary text-white ">
      <Container className="lg:grid grid-cols-2 gap-10">
        {/* Text Section */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="200"
          className="py-16 h-full flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
            {heading1}
            <span className="text-primary drop-shadow-lg">{heading2} </span>
            Solutions
          </h1>
          <div></div>

          <TypingTextManual
            Class={"h-16 my-2"}
            text={des}
            className="text-lg md:text-xl mb-6 "
          ></TypingTextManual>
          <button
            onClick={() => setShowForm(true)}
            className="btnPrimary w-fit text-xl px-8"
          >
            Get Free Consultation
          </button>
        </div>

        {/* Visual Element */}
        <div
          data-aos="fade-down-left"
          data-aos-duration="800"
          data-aos-delay="200"
          className="  hidden lg:block "
        >
          <Image
            src="/img/landbanner.png"
            height={1000}
            width={1200}
            alt="Website Design on Laptop"
            className="w-full h-auto"
          />
        </div>
      </Container>

      <div
        className={`fixed top-0 z-50 w-full h-screen bg-gray-700/70 ${
          showForm ? "flex flex-col opacity-100" : "hidden opacity-0"
        }`}
      >
        {/* Form Content */}
        <Form form={showForm} setform={setShowForm} />
      </div>
    </FullContainer>
  );
}
