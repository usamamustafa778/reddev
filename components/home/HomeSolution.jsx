import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function HomeSolution() {
  return (
    <FullContainer className=" bg-custom-color1 ">
      <Container className=" p-6 " >

      <h2 className="elementHeading2 my-6 text-white  ">
            {" "}
            <span className=" border-b-2  border-yellow-600 ">Sol</span>utions We Deliver
            
          </h2>
          <p className="text-white text-lg">
          We IT-enable all kinds of B2B, B2C interactions and internal operations.
          </p>
        {/* FIRST ROW  */}
        <div className="grid grid-cols-2  lg:grid-cols-4 py-8 gap-6 text-center">
          <div className="First bg-white p-2 hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5">Enterprise applications</h5>
          </div>

          <div className="Second bg-white p-2 hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5">ERP</h5>
          </div>

          <div className="Third bg-white p-2 hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5">CRM</h5>
          </div>

          <div className="Fourth bg-white p-2  hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5">HR software</h5>
          </div>
        </div>

        {/* SECOND ROW  */}
           
        <div className="grid grid-cols-2  lg:grid-cols-4 pb-8  gap-6 text-center">
          <div className="First bg-white p-2 hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5">eLearning software</h5>
          </div>

          <div className="Second bg-white p-2 hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5">eCommerce</h5>
          </div>

          <div className="Third bg-white p-2 hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5">Mobile Apps</h5>
          </div>

          <div className="Fourth bg-white p-2  hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5"> productivity solutions</h5>
          </div>
        </div>
        {/* Third ROW  */}


        <div className="grid grid-cols-2  lg:grid-cols-4 mb-8  gap-6 text-center">
          <div className="First bg-white p-2 hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5">Fleet management software</h5>
          </div>

          <div className="Second bg-white p-2 hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5">Data Analytics</h5>
          </div>

          <div className="Third bg-white p-2 hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5">Web Portals</h5>
          </div>

          <div className="Fourth bg-white p-2  hover:bg-blue-700 hover:text-white cursor-pointer  py-8">
            <h5 className="elementHeading5"> ITSM</h5>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
