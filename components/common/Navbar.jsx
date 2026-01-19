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
  Brain,
} from "lucide-react";
import Image from "next/image";

export default function Navbar({ className }) {
  const [sidebar, openSidebar] = useState(false);
  const [isServicesHovered, setServicesHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const services = [
    {
      title: "Web Development",
      description: "Full-stack web solutions",
      href: "/services/web-development",
      icon: Code,
    },
    {
      title: "Mobile Apps",
      description: "iOS & Android applications",
      href: "/services/mobile-apps",
      icon: Smartphone,
    },
    {
      title: "Ecommerce",
      description: "Online store solutions",
      href: "/services/ecommerce",
      icon: Layout,
    },
    {
      title: "Custom Solutions",
      description: "Tailored software development",
      href: "/services/custom-solutions",
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
        className={`z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg text-slate-900 fixed top-0" 
            : "bg-transparent text-white pt-3 fixed top-0"
        }`}
      >
        <Container className="flex items-center justify-between h-fit py-3 md:py-4">
          <Link
            className="relative z-10 hover:opacity-75 transition-opacity duration-300 group"
            href="/"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="reddev Logo"
                width={180}
                height={48}
                className="h-11 md:h-12 w-auto object-contain brightness-0 opacity-90"
                priority
                style={{
                  filter: 'brightness(0) saturate(100%) invert(17%) sepia(97%) saturate(6213%) hue-rotate(356deg) brightness(91%) contrast(88%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li
              className="group relative"
              onMouseEnter={() => setServicesHovered(true)}
              onMouseLeave={() => setServicesHovered(false)}
            >
              <span             className={`inline-flex items-center gap-1 py-2 font-semibold cursor-pointer transition-colors ${
                scrolled ? "hover:text-red-600" : "hover:text-red-300"
              }`}>
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
            </li>

            <Link
              className={`py-2 font-semibold transition-colors ${
                scrolled ? "hover:text-red-600" : "hover:text-red-300"
              }`}
              href="/ai-solutions"
            >
              AI Solutions
            </Link>
            <Link
              className={`py-2 font-semibold transition-colors ${
                scrolled ? "hover:text-red-600" : "hover:text-red-300"
              }`}
              href="/our-work"
            >
              Our Work
            </Link>
            <Link
              className={`py-2 font-semibold transition-colors ${
                scrolled ? "hover:text-red-600" : "hover:text-red-300"
              }`}
              href="/about"
            >
              About us
            </Link>
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-xl transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="mr-2 relative z-10">Get In Touch</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
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
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="reddev Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto brightness-0 opacity-90"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(17%) sepia(97%) saturate(6213%) hue-rotate(356deg) brightness(91%) contrast(88%)'
                  }}
                />
              </div>
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
                  href="/ai-solutions"
                  className="block py-2 font-medium hover:text-primary transition-colors"
                >
                  AI Solutions
                </Link>
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
                Book Discovery Call
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
