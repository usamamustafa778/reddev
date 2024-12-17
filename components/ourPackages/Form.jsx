import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Link from "next/link";

export default function Form() {
  return (
    <>
      <FullContainer>
        <Container className=" px-6 lg:px-24">
          <h4 className="elementHeading4 py-6">Request a Quote</h4>

          <div className="form">
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
                      Phone <span className="text-red-500 font-bold">*</span>{" "}
                    </label>
                    <select
                      className="py-2 w-full bg-slate-100 px-4 mt-2"
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        Select Country Code
                      </option>
                      <option value="+1">United States (+1)</option>
                      <option value="+1">Canada (+1)</option>
                      <option value="+44">United Kingdom (+44)</option>
                      <option value="+49">Germany (+49)</option>
                      <option value="+33">France (+33)</option>
                      <option value="+61">Australia (+61)</option>
                      <option value="+81">Japan (+81)</option>
                      <option value="+55">Brazil (+55)</option>
                      <option value="+91">India (+91)</option>
                      <option value="+86">China (+86)</option>
                    </select>
                  </div>

                <div>
                  <label className="text-lg font-semibold">
                    Country <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <select
                    className="py-2 w-full bg-slate-100 px-4 mt-2"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select Country
                    </option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="australia">Australia</option>
                    <option value="japan">Japan</option>
                    <option value="brazil">Brazil</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                  </select>
                </div>

                {/* <div>
                  <label className="text-lg font-semibold">
                    Country{" "}
                    <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <select
                    className="py-2 w-full bg-slate-100 px-4 mt-2"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select Country
                    </option>
                  </select>
                </div> */}
              </div>

              <div className="grid gap-y-6 lg:grid-cols-2 lg:py-6 gap-x-8">
                <div>
                  <label className="text-lg font-semibold">
                    Budget <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <input
                    className="py-2 w-full bg-slate-100 px-4 mt-2"
                    type="text"
                    placeholder="Budget"
                  />
                </div>

                <div>
                  <label className="text-lg font-semibold">
                    Address <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="py-2 w-full bg-slate-100 px-4 mt-2"
                    placeholder="Address"
                  />
                </div>
              </div>




              <div>
                  <label className="text-lg font-semibold">
                    Select Plan{" "}
                    <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <select
                    className="py-2 w-full bg-slate-100 px-4 mt-2"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select Plan
                    </option>
                    <option value="new_startup">Basic</option>
                    <option value="business_website">Business Website</option>
                    <option value="ecommerce_store">E-commerce Store</option>
                    <option value="ecommerce_store">Custom Website</option>
                  </select>
                </div>

              <div className="py-6">
                <textarea
                  placeholder="Your Message"
                  className="w-full py-2 px-4 bg-slate-100 decoration-clone"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <Link href="/">
                <button className="btn px-10 my-4 bg-blue-500 text-white py-2">
                  Send Message
                </button>
              </Link>
            </form>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
