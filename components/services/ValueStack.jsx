import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function ValueStack() {
  return (
    <FullContainer className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
      <Container className="container mx-auto md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Unmatched Value for Your Investment
          </h2>
          <p className="text-lg md:text-xl mt-4">
            Explore the comprehensive benefits included in our services.
          </p>
        </div>

        {/* Value Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-8  text-black">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:hover:translate-x-7 duration-300 transform hover:scale-105 max-w-xs mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Custom Website Development</h3>
              <p className="text-lg font-bold text-[#0EBAB1]">$6,000 Value</p>
              <p className="text-gray-700 mt-2">
                A website crafted to suit your unique business needs.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden duration-300 md:hover:-translate-x-7 hover:scale-105 max-w-xs mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">SEO Optimization Suite</h3>
              <p className="text-lg font-bold text-[#0EBAB1]">$1,000 Value</p>
              <p className="text-gray-700 mt-2">
                Enhance your online presence with our SEO strategies.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden duration-300 md:hover:translate-x-7 transform hover:scale-105 max-w-xs mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">One-on-One Strategy Session</h3>
              <p className="text-lg font-bold text-[#0EBAB1]">$500 Value</p>
              <p className="text-gray-700 mt-2">
                Personalized consultation to align your vision with our solutions.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:hover:-translate-x-7 duration-300 transform hover:scale-105 max-w-xs mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">30 Days of Dedicated Support</h3>
              <p className="text-lg font-bold text-[#0EBAB1]">$500 Value</p>
              <p className="text-gray-700 mt-2">
                Ongoing support to ensure your site runs smoothly.
              </p>
            </div>
          </div>
        </div>

        {/* Total Value Banner */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold">
            Total Value: <span className="line-through text-red-500">$8,000</span>
          </h3>
          <p className="text-xl font-semibold text-[#0EBAB1]">Special Offer: $5,000</p>
          <button className="mt-4 px-6 py-2 bg-[#0EBAB1] text-white font-semibold  rounded-lg shadow-lg hover:bg-[#042638] transition duration-300">
            Claim Your Offer
          </button>
        </div>
      </Container>
    </FullContainer>
  );
}
