import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import data from "../json/pricedata.json";

const PricingSection = () => {
  return (
    <FullContainer className="py-20 bg-gray-100">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#042638]">
            Choose Your Plan
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-600">
            Select the pricing plan that suits your needs.
          </p>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 sm:px-0">
          {data.plan1.map((plan, index) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay="200"
              key={index}
              className={` ${index === 1 ? "scale-105" : ""} h-full`}
            >
              <Card1 className="" plan={plan} index={index} />
            </div>
          ))}
          {data.plan2.map((plan, index) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay="200"
              key={index}
              className={` ${index === 1 ? "scale-105" : ""} flex-grow`}
            >
              <Card2 className="min-h-full" plan={plan} index={index} />
            </div>
          ))}
          {data.plan3.map((plan, index) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay="200"
              key={index}
              className={` ${index === 1 ? "scale-105" : ""} flex-grow`}
            >
              <Card3 className="min-h-full " plan={plan} index={index} />
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
};


const Card1 = ({ plan, index }) => {
  return (
    <div className="h-[95%]  flex flex-col justify-between">
      {/* Plan Details */}
      <div className="text-[#1D3557] h-full  rounded-lg flex flex-col mb-6">
        <div
          className={`p-6  h-full 
             bg-white text-secondary rounded-2xl shadow-lg flex flex-col justify-between `}
        >
          <div>   <h3 className=" flex items-center justify-between">
            <div className="text-2xl font-bold">{plan.name}</div>
            <div className=" ">{plan.pricing}</div>
          </h3>
          <div>
            <div className="text-lg font-bold mb-4">
              Delivery Time: {plan.deliveryTime || "Varies"}
            </div>
            <ul className="list-none list-inside space-y-2">
              {Object.keys(plan.features).map((feature, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-[#A7D51B] text-2xl">✔</span>
                  {plan.features[feature]}
                </li>
              ))}
            </ul>
          </div></div>
       
          <button className=" mt-5 border-2 border-white text-white hover:border-primary bg-primary hover:bg-secondary text-xl rounded-full p-3 transition-all">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};
const Card2 = ({ plan, index }) => {
  return (
    <div className="h-full flex flex-col justify-between">
      {/* Plan Details */}
      <div className="text-[#1D3557] rounded-lg flex flex-col mb-6">
        <div
          className={`p-6 scale-105   text-white to-primary from-secondary bg-gradient-to-t  rounded-2xl shadow-lg flex flex-col justify-between `}
        >
          <h3 className=" flex items-center justify-between">
            <div className="text-2xl font-bold">{plan.name}</div>
            <div className=" ">{plan.pricing}</div>
          </h3>
          <div>
            <div className="text-lg font-bold mb-4">
              Delivery Time: {plan.deliveryTime || "Varies"}
            </div>
            <ul className="list-none list-inside space-y-2">
              {Object.keys(plan.features).map((feature, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-[#A7D51B] text-2xl">✔</span>
                  {plan.features[feature]}
                </li>
              ))}
            </ul>
          </div>
          <button className=" mt-5 border-2 border-white text-white hover:border-primary bg-primary hover:bg-secondary text-xl rounded-full p-3 transition-all">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};
const Card3 = ({ plan, index }) => {
  return (
    <div className="h-[95%]  flex flex-col justify-between">
      {/* Plan Details */}
      <div className="text-[#1D3557] rounded-lg flex flex-col mb-6 h-full">
        <div
          className={`p-6   ${
            index === 1
              ? " text-white to-primary from-secondary bg-gradient-to-t"
              : " bg-white text-secondary"
          }  rounded-2xl shadow-lg flex flex-col justify-between h-full `}
        >
          <h3 className=" flex items-center justify-between">
            <div className="text-2xl font-bold">{plan.name}</div>
            <div className=" ">{plan.pricing}</div>
          </h3>
          <div>
            <div className="text-lg font-bold mb-4">
              Delivery Time: {plan.deliveryTime || "Varies"}
            </div>
            <ul className="list-none list-inside space-y-2">
              {Object.keys(plan.features).map((feature, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-[#A7D51B] text-2xl">✔</span>
                  {plan.features[feature]}
                </li>
              ))}
            </ul>
          </div>
          <button className=" mt-5 border-2 border-white text-white hover:border-primary bg-primary hover:bg-secondary text-xl rounded-full p-3 transition-all">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
