import React from "react";
import FullContainer from "./FullContainer";
import Container from "./Container";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <FullContainer className="bg-secondary py-12  text-white">
      <Container>
        <div className="grid  py-10 grid-cols-1 gap-10 sm:grid-cols-2  lg:grid-cols-5 ">
          {/* one */}
          <div className=" col-span-1 flex flex-col  justify-between">
            <div className="gap-3 flex flex-col">
              <h5 className="text-lg font-semibold text-center sm:text-left ">Devbities</h5>
              <p className="text-center sm:text-left ">
               1160 Battery St Suite 1111, San Francisco, CA, 94111,
                United States
              </p>
            </div>
            <Link className="navLink text-2xl text-center sm:text-left" href="/">
              logo
            </Link>
            <div className="flex flex-row gap-4 pt-3 justify-center sm:justify-start ">
              <a href="">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/devbitties?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="">
                <FaXTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* two*/}
          <div className=" grid grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-3  col-span-2  ">
            <div className=" col-span-1 flex flex-col gap-3">
              <h5 className="text-lg font-semibold">Company</h5>
              <div className=" transition-all flex flex-col gap-2">
                <Link
                  className="navLink text-white hover:text-primary"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="navLink text-white hover:text-primary"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="navLink text-white hover:text-primary"
                  href="/work"
                >
                  Work
                </Link>
                <Link
                  className="navLink text-white hover:text-primary"
                  href="/client"
                >
                  Client
                </Link>
                <Link
                  className="navLink text-white hover:text-primary"
                  href="/contactUs"
                >
                  Contact us
                </Link>
              </div>
            </div>
            <div className=" flex flex-col col-span-2 gap-3 ">
              <h5 className="text-lg font-semibold">Industries We Serve</h5>
              <div className="grid  gap-2 grid-cols-1 sm:grid-cols-2 ">
                <div className=" flex flex-col gap-2 px-1">
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/work"
                  >
                    Healthcare & Pharmaceutics
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/client"
                  >
                    Banking & FinTech
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/contactUs"
                  >
                    E-commerce
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/contactUs"
                  >
                    Hospitality
                  </Link>
                </div>
                <div className=" gap-2 flex flex-col px-1">
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/work"
                  >
                    Software as a Service (SaaS)
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/client"
                  >
                    Gaming
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/contactUs"
                  >
                    Public Sector
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* three */}
          <div className=" grid sm:grid-cols-3 grid-cols-1 col-span-2 gap-6 sm:gap-0 ">
            <div className=" flex flex-col col-span-2 gap-3 ">
              <h5 className="text-lg font-semibold">Services & Solutions</h5>
              <div className="grid  gap-2 sm:grid-cols-2 grid-cols-1 ">
                <div className=" flex flex-col gap-2 px-1">
                  <Link className="navLink" href="/work">
                    Web Development
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/client"
                  >
                    Mobile App Development
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/contactUs"
                  >
                    Generative AI
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/contactUs"
                  >
                    DevOps
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/contactUs"
                  >
                    QA Testing
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/contactUs"
                  >
                    Custom Development
                  </Link>
                </div>
                <div className=" gap-2 flex flex-col px-1">
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/work"
                  >
                    Microsoft Dynamics 365
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/client"
                  >
                    Cybersecurity Solutions
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/contactUs"
                  >
                    Cloud Migration & Management
                  </Link>
                  <Link
                    className="navLink text-white hover:text-primary"
                    href="/contactUs"
                  >
                    Digital Transformation
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-span-1 flex flex-col gap-3">
              <h5 className="text-lg font-semibold">Resources</h5>
              <div className="text-white hover:text-primary transition-all flex flex-col gap-2">
                <Link
                  className="navLink text-white hover:text-primary"
                  href="/"
                >
                  Case Studies
                </Link>
                <Link
                  className="navLink text-white hover:text-primary"
                  href="/about"
                >
                  Learning
                </Link>

                <Link
                  className="navLink text-white hover:text-primary"
                  href="/work"
                >
                  Work
                </Link>
                <Link
                  className="navLink text-white hover:text-primary"
                  href="/client"
                >
                  Security
                </Link>
                <Link
                  className="navLink text-white hover:text-primary"
                  href="/contactUs"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* four */}
        <div className="flex flex-col gap-3">
          <h5 className="text-lg font-semibold">Subscribe</h5>
          <p>Stay updated with the latest in tech.</p>
          <div className="">
            <label className="block text-xs">
              Email <span className="text-red-600">*</span>{" "}
            </label>
            <input
              type="email"
              name="email"
              className="w-[300px] px-3 py-1 h-8 rounded-sm focus:outline-none "
              required
            />
          </div>
          <div>
            <button className="text-xs bg-gray-600 inline h-8 text-center px-3">
              Submit
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
    
  );
}

export default Footer;
