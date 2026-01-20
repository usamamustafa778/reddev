import React, { useState, useEffect } from "react";
import Container from "./Container";
import FullContainer from "./FullContainer";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Navbar({ className }) {
  const [sidebar, openSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/leadership", label: "Leadership" },
    { href: "/careers", label: "Careers" },
  ];

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
            className="relative z-10"
            href="/"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="reddev Logo"
                width={180}
                height={48}
                className="h-11 md:h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className={`py-2 font-semibold transition-colors ${
                    scrolled ? "hover:text-red-600" : "hover:text-red-300"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
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
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled 
                ? "hover:bg-gray-100 text-gray-700" 
                : "hover:bg-white/10 text-white"
            }`}
          >
            <LuMenu className="w-6 h-6" />
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
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 font-medium hover:text-primary transition-colors"
                    onClick={handleSidebar}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={handleSidebar}
                className="block w-full px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
