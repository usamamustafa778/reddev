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
          <h6 className="text-xl text-center max-w-3xl mx-auto py-10 text-gray-600">
            Share your project details and we&apos;ll respond within 48 hours with a strategic approach.
            For qualified inquiries, we&apos;ll schedule a discovery call to discuss your requirements.
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

                <p className="text-gray-400">hello@reddev.com</p>
              </div>

              <div className="flex  gap-2 ">
                <LuMapPin style={{ color: "lightgray" }} />

                <p className="text-gray-400">Islamabad Pakistan</p>
              </div>
              <p className="text-gray-300">
                Ready to make things happen? Reach out to us and let&apos;s turn your
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
                    className="py-3 w-full bg-slate-100 px-4 mt-2 rounded-lg border border-gray-200 focus:border-primary focus:outline-none"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="text-lg font-semibold">
                    Work Email <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <input
                    type="email"
                    className="py-3 w-full bg-slate-100 px-4 mt-2 rounded-lg border border-gray-200 focus:border-primary focus:outline-none"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-y-6 lg:grid-cols-2 lg:py-6 gap-x-8">
                <div>
                  <label className="text-lg font-semibold">
                    Company <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="py-3 w-full bg-slate-100 px-4 mt-2 rounded-lg border border-gray-200 focus:border-primary focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold">
                    Website
                  </label>
                  <input
                    type="url"
                    className="py-3 w-full bg-slate-100 px-4 mt-2 rounded-lg border border-gray-200 focus:border-primary focus:outline-none"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>

              <div className="grid gap-y-6 lg:grid-cols-2 lg:py-6 gap-x-8">
                <div>
                  <label className="text-lg font-semibold">
                    Budget Range <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <select className="py-3 w-full bg-slate-100 px-4 mt-2 rounded-lg border border-gray-200 focus:border-primary focus:outline-none">
                    <option value="">Select Budget Range</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                    <option value="under-10k">Under $10k</option>
                  </select>
                </div>
                <div>
                  <label className="text-lg font-semibold">
                    Timeline
                  </label>
                  <select className="py-3 w-full bg-slate-100 px-4 mt-2 rounded-lg border border-gray-200 focus:border-primary focus:outline-none">
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              <div className="py-6">
                <label className="text-lg font-semibold block mb-2">
                  What are you building? <span className="text-red-500 font-bold">*</span>
                </label>
                <textarea
                  placeholder="Describe your project, goals, and any specific requirements..."
                  className="w-full py-3 px-4 bg-slate-100 rounded-lg border border-gray-200 focus:border-primary focus:outline-none"
                  id="exampleFormControlTextarea1"
                  rows="4"
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

              <div className="flex flex-col gap-4">
                <button 
                  type="submit"
                  className="bg-primary text-white py-4 px-8 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                >
                  Book Discovery Call
                </button>
                <div className="text-sm text-gray-500 text-center">
                  <p>Projects under $10k: We&apos;ll provide resources and referrals to help you get started.</p>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
export default Form ;
