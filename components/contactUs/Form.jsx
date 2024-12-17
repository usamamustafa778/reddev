import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Link from "next/link";
import { LuMail, LuMapPin, LuPhone, } from "react-icons/lu";



function Form() {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

  return (
    <>
      <FullContainer>
        <Container className="  py-10 px-6 lg:px-24">
          <h6 className="elementHeading6 text-center mx-16 py-10 ">
            Fill out the form and a member from our sales team will get back to
            you within 24 hours , or select more ways to get in touch.{" "}
          </h6>

          <div className="form grid lg:grid-cols-form gap-8 bg-white shadow-2xl p-4 ">
            <div className="bg-secondary p-10 space-y-8 ">
              <h5 className="elementHeading5 text-white  ">
                Already a customer or need help with any issue?
              </h5>

              <div className="flex  gap-2  ">
                <LuPhone  style={{ color: "lightgray" }} />

                <p className="text-gray-400">+923136224778</p>
              </div>
              <div className="flex gap-2  ">
                <LuMail  style={{ color: "lightgray" }} />

                <p className="text-gray-400">+923136224778</p>
              </div>

              <div className="flex  gap-2 ">
                <LuMapPin style={{ color: "lightgray" }} />

                <p className="text-gray-400">Islamabad Pakistan</p>
              </div>
              <p className="text-gray-300">
                Ready to make things happen? Reach out to us and let`&apos;`s turn your
                ideas into reality together!
              </p>
            </div>

            <form>
              <div className="grid gap-y-6 lg:grid-cols-2 lg:py-6 gap-x-8">
                <div>
                  <label className="text-lg font-semibold">
                    Full Name <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <input
                    className="py-2 w-full bg-slate-100 px-4 mt-2"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="text-lg font-semibold">
                    Email <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <input
                    type="email"
                    className="py-2 w-full bg-slate-100 px-4 mt-2"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="grid gap-y-6 lg:grid-cols-2 lg:py-6 gap-x-8">
                <div>
                  <label className="text-lg font-semibold">
                    Phone Num <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    pattern="[0-9]{11}"
                    className="py-2 w-full bg-slate-100 px-4 mt-2"
                    placeholder="Enter 11-digit Phone Number"
                    title="Please enter a valid 11-digit phone number"
                    required
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold">
                    Company <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="py-2 w-full bg-slate-100 px-4 mt-2"
                    placeholder="Company"
                  />
                </div>
              </div>

              <div className="py-6">
                <textarea
                  placeholder="Your Message"
                  className="w-full py-2 px-4 bg-slate-100 decoration-clone"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
                <div  >
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    I agree to have Gilkyson contact me via email, phone,
                    messengers.
                  </label>
                </div>

              <Link href="/">
                <button className="btn px-10 my-4 bg-primary text-white py-2">
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
export default Form ;
