import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { IoStar } from "react-icons/io5";

function Testimonials({ heading, des, data }) {
  return (
    <FullContainer className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-4 block uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight capitalize">
            Hear From Our
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 ml-3">
                Clients
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0L50 7L100 0L100 8L0 8Z"
                  fill="currentColor"
                  className="text-primary/20"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our clients about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              data-aos={item.fade}
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className={`${
                index === 4 ? "hidden xl:flex" : "flex"
              } group relative rounded-2xl transition-all duration-300`}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-100"></div>

              {/* Hover effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl"></div>
              </div>

              {/* Card Content */}
              <div className="relative flex flex-col gap-6 p-8">
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-4xl text-primary/10 font-serif">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex text-yellow-400 text-xl justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <IoStar
                      key={i}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>

                {/* Testimonial content */}
                <div className="flex-1 flex flex-col gap-4">
                  <p className="text-gray-700 text-center leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    &ldquo;{item.first}&rdquo;
                  </p>
                  <p className="text-gray-500 text-center italic group-hover:text-gray-600 transition-colors duration-300">
                    {item.second}
                  </p>
                </div>

                {/* Client name with decorative line */}
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-px bg-primary/20 group-hover:w-20 transition-all duration-300"></div>
                  <p className="text-lg font-medium text-center text-gray-900 pt-4 group-hover:text-primary transition-colors duration-300">
                    {item.clientname}
                  </p>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}

export default Testimonials;
