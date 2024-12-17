import React, { useState, useEffect } from "react";
import Container from "./Container";
import FullContainer from "./FullContainer";
import Link from "next/link";
import { MdOutlineHorizontalRule } from "react-icons/md";
import Form from "./Form";
import { RxCross2 } from "react-icons/rx";
import { GoArrowDownRight } from "react-icons/go";
import { LuMenu } from "react-icons/lu";

export default function Navbar({ className }) {
  const [sidebar, openSidebar] = useState(false);
  const [isServicesHovered, setServicesHovered] = useState(false);
  const [app, setApp] = useState(false);
  const [web, setweb] = useState(false);
  const [ui, setui] = useState(false);
  const [soft, setsoft] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSidebar = () => {
    openSidebar(!sidebar);
    if (!sidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Disable scrolling and touch on the body when form is open
  // useEffect(() => {
  //   if (form) {
  //     document.body.classList.add("overflow-hidden"); // Disable scrolling
  //   } else {
  //     document.body.classList.remove("overflow-hidden"); // Enable scrolling
  //   }
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, [form]);

  return (
    <>
      <FullContainer
        className={`z-20 sticky top-0 transition-all duration-300 backdrop-blur-md bg-white/90 text-black ${
          scrolled ? "shadow-md" : `${className}`
        }`}
      >
        <Container className="bg-transparent flex justify-between text-center">
          <Link
            className="navLink flex flex-col justify-center hover:scale-105 transition-transform duration-300"
            href="/"
          >
            <img
              src="/logo-slogan.png"
              alt="Devbitties Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <ul className="hidden lg:flex items-center gap-8 py-6">
            <li
              className="group relative"
              onMouseEnter={() => setServicesHovered(true)}
              onMouseLeave={() => setServicesHovered(false)}
            >
              <span className="cursor-pointer hover:text-primary transition-colors duration-300 flex items-center gap-1">
                Services
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <ul
                className={`absolute ${
                  isServicesHovered
                    ? "block opacity-100 translate-y-0"
                    : "hidden opacity-0 -translate-y-2"
                } bg-white/90 backdrop-blur-md mt-2 w-72 space-y-2 p-4 shadow-lg rounded-xl transition-all duration-300 border border-gray-100`}
              >
                <li>
                  <Link
                    href="/services/ui-design"
                    className="flex flex-row gap-3 items-center p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    onMouseEnter={() => setui(true)}
                    onMouseLeave={() => setui(false)}
                  >
                    <MdOutlineHorizontalRule
                      className={`transition-all duration-300 ease-in-out ${
                        ui ? "flex opacity-100" : "hidden opacity-0"
                      } text-primary`}
                    />
                    <span className="hover:text-primary">UX/UI Design</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-development"
                    className="flex flex-row gap-3 items-center p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    onMouseEnter={() => setweb(true)}
                    onMouseLeave={() => setweb(false)}
                  >
                    <MdOutlineHorizontalRule
                      className={`transition-all duration-300 ease-in-out ${
                        web ? "flex opacity-100" : "hidden opacity-0"
                      } text-primary`}
                    />
                    <span className="hover:text-primary">Web Development</span>
                  </Link>
                </li>
              </ul>
            </li>
            <Link className="navLink hover:text-primary" href="/our-work">
              Our Work
            </Link>
            <Link className="navLink hover:text-primary" href="/about">
              About us
            </Link>
            {/* <Link className="navLink hover:text-primary" href="/contact-us">
              Contact us
            </Link> */}
          </ul>
          <div className="hidden lg:flex items-center justify-items-end">
            <button
              className="navLink bg-primary px-6 py-4 h-fit rounded-full flex gap-4 hover:bg-secondary transition-all duration-500 text-lg justify-center text-white items-center"
              onClick={() => setShowForm(true)}
            >
              Get Free Consultation
              <GoArrowDownRight className="animate-bounce w-6 h-6" />
            </button>
          </div>
          <div className="lg:hidden text-2xl">
            <button
              onClick={handleSidebar}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            >
              <LuMenu className="text-primary h-7" />
            </button>
          </div>
        </Container>

        {/* NavBar Phone */}
        {sidebar && (
          <div className="lg:hidden fixed z-20 top-0 left-0 h-screen bg-white/95 backdrop-blur-md text-black w-full flex flex-col p-6 animate-slideIn">
            <div className="flex items-center justify-between">
              <RxCross2
                onClick={handleSidebar}
                className="text-primary h-7 cursor-pointer"
              />
              <Link href="/" className="font-bold text-black text-xl">
                Devbitties
              </Link>
            </div>
            <ul className="flex flex-col mt-8 space-y-4">
              <Link className="navLink" href="/our-work">
                Our Work
              </Link>
              <Link className="navLink" href="/about">
                About us
              </Link>
              <Link className="navLink" href="/contact-us">
                Contact us
              </Link>
              <li
                className="group relative"
                onMouseEnter={() => setServicesHovered(true)}
                onMouseLeave={() => setServicesHovered(false)}
              >
                <span className="cursor-pointer hover:text-primary">
                  Services
                </span>
                <ul
                  className={`absolute ${
                    isServicesHovered ? "block" : "hidden"
                  } bg-white mt-0 w-72 space-y-2 p-3 shadow-md rounded-md`}
                >
                  <li>
                    <Link
                      href="/app-development"
                      className="flex flex-row gap-3 items-center"
                      onMouseEnter={() => setApp(true)}
                      onMouseLeave={() => setApp(false)}
                    >
                      <MdOutlineHorizontalRule
                        className={`transition-all duration-300 ease-in-out ${
                          app ? "flex opacity-100" : "hidden opacity-0"
                        } text-primary`}
                      />
                      <span className="hover:text-primary">
                        App Development
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/software-development"
                      className="flex flex-row gap-3 items-center"
                      onMouseEnter={() => setsoft(true)}
                      onMouseLeave={() => setsoft(false)}
                    >
                      <MdOutlineHorizontalRule
                        className={`transition-all duration-300 ease-in-out ${
                          soft ? "flex opacity-100" : "hidden opacity-0"
                        } text-primary`}
                      />
                      <span className="hover:text-primary">
                        Software Development
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ui-design"
                      className="flex flex-row gap-3 items-center"
                      onMouseEnter={() => setui(true)}
                      onMouseLeave={() => setui(false)}
                    >
                      <MdOutlineHorizontalRule
                        className={`transition-all duration-300 ease-in-out ${
                          ui ? "flex opacity-100" : "hidden opacity-0"
                        } text-primary`}
                      />
                      <span className="hover:text-primary">UX/UI Design</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/web-developement"
                      className="flex flex-row gap-3 items-center"
                      onMouseEnter={() => setweb(true)}
                      onMouseLeave={() => setweb(false)}
                    >
                      <MdOutlineHorizontalRule
                        className={`transition-all duration-300 ease-in-out ${
                          web ? "flex opacity-100" : "hidden opacity-0"
                        } text-primary`}
                      />
                      <span className="hover:text-primary">
                        Web Development
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <button
                className="navLink w-[250px] bg-primary px-5 text-white rounded-md"
                onClick={() => setform(true)}
              >
                Schedule Strategy Call
              </button>
            </ul>
          </div>
        )}
      </FullContainer>

      {/* Form Modal */}
      <div
        className={`fixed top-0 z-50 w-full h-screen bg-gray-700/70 transition-all duration-300 ${
          showForm ? "flex flex-col opacity-100" : "hidden opacity-0"
        }`}
      >
        {/* Form Content */}
        <Form form={showForm} setform={setShowForm} />
      </div>
    </>
  );
}
