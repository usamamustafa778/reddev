import React from "react";
import { FaSearch, FaPencilRuler, FaRocket } from "react-icons/fa";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { data } from "autoprefixer";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stepVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function ProcessSection({ heading, des,data }) {
  return (
    <FullContainer className="py-20 bg-[rgb(240,244,248)] text-secondary">
      <Container className="container mx-auto md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#042638]">
            {heading}
          </h2>
          <p className="text-lg md:text-xl mt-4">{des}</p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item,index) => (
            <div
            key={index}
              data-aos="zoom-out-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="p-6 bg-white rounded-lg shadow-xl border-l-4 border-primary hover:shadow-2xl transition-all duration-300"
            >
              <FaSearch className="text-primary text-6xl mb-4 animate-bounce" />
              <h3 className="text-2xl font-semibold mb-2">
                {item.heading}
              </h3>
              <ul className="text-lg space-y-2">
               {item.keypoint.map((item,index)=>(
                <li key={index}>✔ {item}</li>
               ))}               
            </ul>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
