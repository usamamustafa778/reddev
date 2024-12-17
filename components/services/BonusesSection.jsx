import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function BonusDetails() {
  const [card1,opencard1]=useState(false)
  const [card2,opencard2]=useState(false)
  const [card3,opencard3]=useState(false)

const handle1 =()=>{
  opencard1(!card1)
}
const handle2 =()=>{
  opencard2(!card2)
}
const handle3 =()=>{
  opencard3(!card3)
}

  return (
    <FullContainer className="py-20 bg-gradient-to-r from-[#0EBAB1] to-[#042638] text-white">
      <Container className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Exclusive Bonus Rewards</h2>
          <p className="text-lg md:text-xl mt-4">Unlock amazing rewards with each milestone you achieve.</p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className=" ">
            <div onMouseEnter={handle1} onMouseLeave={handle1} className="relative  w-full h-full ">
              {/* white */}
              <div className={`relative lg:absolute h-40 backface-hidden bg-white text-secondary p-6 rounded-lg shadow-lg ${card1 ? "scale-110 z-20 transition-all duration-1000" : " "} `}>
                <span className="bg-green-500 text-black px-2 py-1 rounded-full absolute top-2 right-2">Free</span>
                <h3 className="text-2xl font-semibold mb-2"> Website Audit</h3>
                <p>Get a comprehensive audit of your existing website.</p>
              </div>
              {/* dark */}
              <div className={`absolute z-10 w-full top-0  transition-all duration-300 h-40 rotate-y-180 backface-hidden bg-[#0EBAB1] text-white p-6 rounded-lg shadow-lg flex items-center justify-center ${card1?"-translate-x-9 translate-y-28":" "}`}>
                <p className="text-lg">You&aposve unlocked a Free SEO Optimization Package!</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className=" ">
            <div onMouseEnter={handle2} onMouseLeave={handle2} className="relative z-[9] w-full h-full">
              {/* white */}
              <div className={`relative lg:absolute h-40 backface-hidden bg-white text-secondary p-6 rounded-lg shadow-lg ${card2 ? "scale-110 z-20 transition-all duration-1000" : " "} `}>
                <span className="bg-green-500 text-black px-2 py-1 rounded-full absolute top-2 right-2">Free</span>
                <h3 className="text-2xl font-semibold mb-2">1-Hour Strategy</h3>
                <p>We&aposll align your site with your growth goals.</p>
              </div>
              {/* dark */}
              <div className={`absolute z-[11] w-full top-0  transition-all duration-300 h-40 rotate-y-180 backface-hidden bg-[#0EBAB1] text-white p-6 rounded-lg shadow-lg flex items-center justify-center ${card2?" translate-y-28":" "}`}>
                <p className="text-lg">You&aposve unlocked a Free 1-Hour Strategy Consultation!</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className=" ">
            <div onMouseEnter={handle3} onMouseLeave={handle3} className="relative w-full h-full">
              {/* white */}
              <div className={`relative lg:absolute h-40 backface-hidden bg-white text-secondary p-6 rounded-lg shadow-lg ${card3 ? "scale-110 z-20 transition-all duration-1000" : " "} `}>
                <span className="bg-green-500 text-black px-2 py-1 rounded-full absolute top-2 right-2">Free</span>
                <h3 className="text-2xl font-semibold mb-2"> Website Audit</h3>
                <p>Get a comprehensive audit of your existing website.</p>
              </div>
              {/* dark */}
              <div className={`absolute  w-full top-0  transition-all duration-300 h-40 rotate-y-180 backface-hidden bg-[#0EBAB1] text-white p-6 rounded-lg shadow-lg flex items-center justify-center ${card3?"translate-x-9 translate-y-28":" "}`}>
                <p className="text-lg"> You&aposve unlocked 30 Days of Post-Launch Support!</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
