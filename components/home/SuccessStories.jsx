import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import Image from "next/image";

const SuccessStories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scrolling
    cssEase: "linear", // Ensure smooth scrolling
    pauseOnHover: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024, // Large screens (lg)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens (md)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Small screens (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <FullContainer>
      <Container className="">
        <div className="py-24 ">
          <div className="flex  flex-col justify-center items-center ">
            <h1 className="inline lg:text-4xl md:text-3xl text-xl font-bold">
              Our Success Stories in the Spotlight
            </h1>
            <h3 className="text-lg text-center pt-10 w-full px-2  lg:w-[700px]">
              Discover how Arka Softwares team delivers personalized development
              experiences and creates unforgettable journey to ensure maximum
              satisfaction for all of our clients.
            </h3>
          </div>

          {/* Card slider */}
          <div className="py-12 ">
            <Slider className="  pb-3" {...settings}>
              <div className="px-4 pb-6     ">
                <div className=" rounded-2xl overflow-hidden shadow-xl mb-4">
                  <Image
                    className="rounded-2xl"
                    src="/img/success1.jpg"
                    alt="Dial Usafi"
                    width={500}
                    height={300}
                  />
                  <h2 className="text-center p-4">Dial Usafi</h2>
                </div>
              </div>

              <div className="px-4">
                <div className="border rounded-2xl overflow-hidden shadow-xl mb-4">
                  <Image
                    className="rounded-2xl"
                    src="/img/success2.jpg"
                    alt="Eventrol"
                    width={500}
                    height={300}
                  />
                  <h2 className="text-center p-4">Eventrol</h2>
                </div>
              </div>

              <div className="px-4">
                <div className="border rounded-2xl overflow-hidden shadow-xl mb-4">
                  <Image
                    className="rounded-2xl"
                    src="/img/success3.png"
                    alt="Invest Expert"
                    width={500}
                    height={300}
                  />
                  <h2 className="text-center p-4">Invest Expert</h2>
                </div>
              </div>

              <div className="px-4">
                <div className="border rounded-2xl overflow-hidden shadow-xl mb-4">
                  <Image
                    className="rounded-2xl"
                    src="/img/success4.png"
                    alt="MsingiPACK"
                    width={500}
                    height={300}
                  />
                  <h2 className="text-center p-4">MsingiPACK</h2>
                </div>
              </div>

              <div className="px-4">
                <div className="border rounded-2xl overflow-hidden shadow-xl mb-4">
                  <Image
                    className="rounded-2xl"
                    src="/img/success5.jpg"
                    alt="American Orchid Society"
                    width={500}
                    height={300}
                  />
                  <h2 className="text-center p-4">American Orchid Society</h2>
                </div>
              </div>

              <div className="px-4">
                <div className="border rounded-2xl overflow-hidden shadow-xl mb-4">
                  <Image
                    className="rounded-2xl"
                    src="/img/success6.jpg"
                    alt="Spitar"
                    width={500}
                    height={300}
                  />
                  <h2 className="text-center p-4">Spitar</h2>
                </div>
              </div>
            </Slider>
          </div>
          <div className="text-center">
            <Link
              className="navLink bg-gray-950 text-white rounded-full px-7 py-4 "
              href="/portfolio"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default SuccessStories;
