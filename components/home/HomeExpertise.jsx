import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

export default function HomeExpertise() {
  return (
    <FullContainer className="py-24 ">
      <Container className="  ">
        <h1 className="text-4xl ">
          <span className="text-orange-700">Industries</span> We Work With
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20   py-10 ">
          <div className="flex justify-between flex-col">
            <div>
              <h3 className="text-2xl mb-5 ">IoT / IIoT</h3>
              <span>
                We’ll help you connect devices for smarter operations. Temy’s
                team can develop customized IoT software to enhance efficiency
                and provide data insights for your business.
              </span>
            </div>

            <div className="bg-slate-100 h-[50px] rounded-full flex  place-content-around p-4  mt-5 ">
              <Image
                src="/img/industry1.png"
                alt="image"
                width={40}
                height={40}
              />
              <Image
                src="/img/industry2.png"
                alt="image"
                width={15}
                height={40}
              />
              <Image
                src="/img/industry3.png"
                alt="image"
                width={60}
                height={100}
              />
            </div>
          </div>

          <div className="flex justify-between flex-col">
            <div>
              <h3 className="text-2xl  mb-5 ">E-Commerce</h3>
              <span className="py-3">
                We create and optimize online marketplaces that are scalable,
                user-friendly, and profitable. With our solutions, your sales
                and customer engagement will skyrocket like never before.
              </span>
            </div>

            <div className="bg-slate-100 mt-5 rounded-full  h-[50px] flex justify-center p-4">
              <Image
                className="justify-center"
                src="/img/industry4.png"
                alt="image"
                width={80}
                height={10}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20    py-10  ">
          <div className="flex justify-between flex-col">
            <div>
            <h3 className="text-2xl place-content-between  mb-5">Retail</h3>
            <span>
              {" "}
              As a reliable software development company, we are proficient in
              creating truly innovative shopping experiences.
            </span>
            </div>
           
            <div className="bg-slate-100  mt-5 rounded-full  h-[50px] flex justify-center p-4">
              <Image
                src="/img/industry4.png"
                alt="image"
                width={80}
                height={10}
              />{" "}
            </div>
          </div>

          <div className="flex justify-between flex-col">
            <div>
            <h3 className="text-2xl  mb-5">PropTech</h3>
            <span>
              {" "}
              Innovate real estate operations today!. Our team creates PropTech
              solutions for smarter property management, sales, and
              sustainability.
            </span>
            </div>
           
            <div className="bg-slate-100 mt-5 rounded-full flex place-content-around p-4 px-12 h-[50px]">
              <Image
                src="/img/industry5.png"
                alt="image"
                width={100}
                height={100}
              />
              <Image
                src="/img/industry6.png"
                alt="image"
                width={60}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20    py-10">
          <div className="flex justify-between flex-col">
            <div>
            <h3 className="text-2xl  mb-5">FinTech</h3>
            <span>
              {" "}
              Transform financial services through technology. Our experts build
              secure and reliable FinTech applications for banking, payments,
              and investments.
            </span>
            </div>
            
            <div className="bg-slate-100 mt-5 rounded-full flex place-content-around p-4 px-12 h-[50px]">
              <Image
                src="/img/industry7.png"
                alt="image"
                width={80}
                height={50}
              />
              <Image
                src="/img/industry8.png"
                alt="image"
                width={80}
                height={50}
              />
            </div>
          </div>

          <div className="flex justify-between flex-col">
            <div>
            <h3 className="text-2xl  mb-5">MarTech</h3>
            <span>
              {" "}
              Modern marketing strategies simply can’t function without an
              adequate technological basis. With our services, you’ll get
              powerful MarTech tools for data-driven decision-making and
              personalized marketing campaigns.
            </span>
            </div>
           
            <div className="bg-slate-100 mt-5 rounded-full flex place-content-around p-4 px-12 h-[50px] ">
              <Image
                src="/img/industry5.png"
                alt="image"
                width={100}
                height={100}
              />
              <Image
                src="/img/industry6.png"
                alt="image"
                width={60}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20   py-10 ">
          <div className="flex justify-between flex-col">
            <div>
              <h3 className="text-2xl  mb-5">Cyber security</h3>
              <span>
                {" "}
                If you need assistance in protecting digital assets and
                information, we’ve got you covered. Temy delivers robust
                cybersecurity solutions to protect businesses against attacks
                and breaches.
              </span>
            </div>

            <div className="bg-slate-100 mt-5 rounded-full flex place-content-around p-4 px-12 h-[50px]">
              <Image
                src="/img/industry11.png"
                alt="image"
                width={100}
                height={100}
              />
              <Image
                src="/img/industry12.png"
                alt="image"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl  mb-5">UX/UI design</h3>
              <span>
                We’re not just a website app development company: Temy’s team
                also creates intuitive, engaging digital products with top-tier
                UI/UX designs.
              </span>
            </div>

            <div className="bg-slate-100 mt-5 rounded-full flex place-content-around p-4 px-12 h-[50px]">
              <Image
                src="/img/industry7.png"
                alt="image"
                width={80}
                height={50}
              />
              <Image
                src="/img/industry12.png"
                alt="image"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
