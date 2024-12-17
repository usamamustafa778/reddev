import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Link from "next/link";

export default function FeedBack() {
  return (
    <>
      <FullContainer>
        <Container className=" px-6 lg:px-24">
          <h4 className="elementHeading4 py-6">FeedBack</h4>
          <p className="  py-10 ">
          We value your feedback! Please take a moment to share your thoughts with us. Your input helps us improve our website and services.{" "}
          </p>
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

              <div className=" gap-y-6  lg:py-6 ">
                <div>
                  <label className="text-lg font-semibold">
                    FeedBack <span className="text-red-500 font-bold">*</span>{" "}
                  </label>
                  <select
                    className="py-2 w-full bg-slate-100 px-4 mt-2"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      FeedBack Type
                    </option>
                    <option value="+1">General Feedback</option>
                    <option value="+1">Bug Report</option>
                    <option value="+44">Feature Request</option>
                    <option value="+49">Other</option>
                  </select>
                </div>
              </div>

              <div className="py-6">
                <label className="text-lg font-semibold">
                  Message <span className="text-red-500 font-bold">*</span>{" "}
                </label>
                <textarea
                  placeholder="Please provide details about your feedback."
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
