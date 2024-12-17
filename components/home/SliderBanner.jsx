import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set the speed (in milliseconds) for each slide
  };

  return (
    <div className=" overflow-hidden lg:h-screen w-full ">
      <Slider {...settings}>
        <div className=" bg-banner relative   bg-cover bg-center">
          <div className="bg-black/70  lg:min-h-screen">
            <div className=" py-20 ">
              <h2 className="elementHeading2 text-center text-white  lg:pt-60">
                Software Consulting and Development
              </h2>
              <p className=" text-3xl text-yellow-600 font-semibold text-center ">
                We are digital success
              </p>
            </div>
          </div>
        </div>
        <div className="bg-banner1 relative  bg-cover bg-center">
          <div className=" bg-black/70  lg:min-h-screen ">
            <div className=" py-20 ">
              <h2 className="elementHeading2 text-center text-white  lg:pt-60">
                Software Consulting and Development
              </h2>
              <p className=" text-3xl text-yellow-600 font-semibold text-center ">
                We are digital success
              </p>
            </div>
          </div>
        </div>

        <div className="bg-banner2 relative  bg-cover bg-center">
          <div className="  bg-black/70  lg:min-h-screen">
            <div className=" py-20 ">
              <h2 className="elementHeading2 text-center text-white lg:pt-60">
                Software Consulting and Development
              </h2>
              <p className=" text-3xl text-yellow-600 font-semibold text-center ">
                We are digital success
              </p>
            </div>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default SliderBanner;
