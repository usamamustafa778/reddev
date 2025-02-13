import React, { useState, useEffect } from "react";
import Container from "./Container";
import FullContainer from "./FullContainer";
import Link from "next/link";
import Form from "./Form";
import { RxCross2 } from "react-icons/rx";
import { GoArrowDownRight } from "react-icons/go";
import { LuMenu } from "react-icons/lu";
import {
  ChevronDown,
  Layout,
  Users,
  Smartphone,
  Code,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Navbar({ className }) {
  const [sidebar, openSidebar] = useState(false);
  const [isServicesHovered, setServicesHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const services = [
    {
      title: "UX/UI Design",
      description: "Create beautiful interfaces",
      href: "/services/ui-design",
      icon: Layout,
    },
    {
      title: "Web Development",
      description: "Full-stack web solutions",
      href: "/services/web-development",
      icon: Code,
    },
    {
      title: "App Development",
      description: "Develop mobile applications",
      href: "/services/app-development",
      icon: Smartphone,
    },
    {
      title: "Software Development",
      description: "Develop software applications",
      href: "/services/software-development",
      icon: Users,
    },
  ];

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

  return (
    <>
      <FullContainer
        className={`z-20 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "text-white pt-3 fixed top-0"
        }`}
      >
        <Container className="flex items-center justify-between h-fit py-1.5 md:py-2.5">
          <Link
            className="relative z-10 hover:opacity-75 transition-opacity duration-300"
            href="/"
          >
            <Image
              src="/logo.png"
              alt="Devbitties Logo"
              width={180}
              height={48}
              className="h-11 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {/* <li
              className="group relative"
              onMouseEnter={() => setServicesHovered(true)}
              onMouseLeave={() => setServicesHovered(false)}
            >
              <span className="inline-flex items-center gap-1 py-2 font-medium hover:text-primary cursor-pointer transition-colors">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesHovered ? "rotate-180" : ""
                  }`}
                />
              </span>

              <div
                className={`absolute top-full -left-4 transform ${
                  isServicesHovered
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-4 invisible"
                } transition-all duration-300 ease-out`}
              >
                <div className="pt-4">
                  <ul className="bg-white rounded-xl shadow-xl border border-gray-100 p-3 min-w-[280px] grid gap-2">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.href}
                          className="flex items-center gap-3 px-2.5 py-1.5 rounded-lg hover:bg-gray-50 group/item"
                        >
                          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <service.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover/item:text-primary">
                              {service.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li> */}

            <Link
              className="py-2 font-medium hover:text-primary transition-colors"
              href="/our-work"
            >
              Our Work
            </Link>
            <Link
              className="py-2 font-medium hover:text-primary transition-colors"
              href="/about"
            >
              About us
            </Link>
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center px-5 py-3 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 rounded-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="mr-3">Get Free Consultation</span>
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <LuMenu className="w-6 h-6 text-gray-700" />
          </button>
        </Container>
      </FullContainer>

      {/* Mobile Menu Overlay */}
      {sidebar && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={handleSidebar}
          />
          <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl p-6 animate-slideIn">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/logo.png"
                alt="Devbitties Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
              <button
                onClick={handleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <RxCross2 className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-6">
              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-500">
                  Services
                </div>
                <ul className="space-y-2 pl-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="block py-2 hover:text-primary transition-colors"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Link
                  href="/our-work"
                  className="block py-2 font-medium hover:text-primary transition-colors"
                >
                  Our Work
                </Link>
                <Link
                  href="/about"
                  className="block py-2 font-medium hover:text-primary transition-colors"
                >
                  About us
                </Link>
              </div>

              <button
                onClick={() => {
                  setShowForm(true);
                  handleSidebar();
                }}
                className="w-full px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Get Free Consultation
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
