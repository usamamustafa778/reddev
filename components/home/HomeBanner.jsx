import React, { useEffect, useState } from "react";
import Form from "../common/Form";
import Link from "next/link";
import TypingTextManual from "../common/TypingTextManual";

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="relative  video-container w-full  h-[90vh] sm:h-[60vh] md:h-[750px] ">
        {isClient && (
          <video className="w-full h-full object-cover" loop autoPlay muted>
            <source src="/video/bannerVideoNew.DXW5LSDC.mp4" type="video/mp4" />
          </video>
        )}

        {/* Text Section */}
        <div className="bg-gray-500/40 absolute py-11 inset-0 flex flex-col items-center justify-center px-6 text-left md:text-center">
          <div className="text-white  max-w-[1100px]">
            <div className=" text-center">
              <h1 className="max-w-3xl mx-auto text-left  sm:text-center text-5xl lg:text-[4rem] font-bold leading-tight">
                Be the market leader in your industry
              </h1>
            </div>
            <TypingTextManual
              Class={"h-24 text-2xl md:px-12 "}
              text={
                " Access 2,000+ passionate and experienced software engineers with skillsets in 100+ technologies, in your timezone."
              }
              className=" text-2xl md:text-3xl  mt-4 mb-8 "
            ></TypingTextManual>
            <div className=" flex flex-col  sm:flex-row gap-4 justify-start md:justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="border-2 border-white hover:border-primary bg-primary hover:bg-secondary text-xl rounded-full p-4 transition-all"
              >
                Schedule Free Strategy Call
              </button>
              <Link
                href="/our-work "
                className="border-2 text-center border-white hover:border-primary text-black hover:text-white hover:bg-secondary text-xl rounded-full p-4 transition-all"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Form form={showForm} setform={setShowForm} />
    </>
  );
}
