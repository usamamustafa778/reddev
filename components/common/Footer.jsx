import React from "react";
import FullContainer from "./FullContainer";
import Container from "./Container";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import BgAnimation from "../BgAnimation";

function Footer() {
  return (
    <FullContainer className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50/50 text-slate-900 overflow-hidden border-t border-slate-200">
      <BgAnimation />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-[50%] h-[50%] bg-orange-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 -left-32 w-[50%] h-[50%] bg-slate-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10 py-16 md:py-24">
        <div className="text-slate-700">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Company Info */}
            <div className="lg:col-span-4 space-y-8">
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
                    className="h-12 w-auto object-contain"
                    priority
                  />
                </div>
              </Link>
              <p className="text-slate-600 max-w-sm text-lg leading-relaxed">
                Building booking platforms, property management systems, and automation solutions for travel and accommodation businesses. We turn operational bottlenecks into scalable systems.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Facebook, link: "#" },
                  {
                    icon: Instagram,
                    link: "https://www.instagram.com/reddev",
                  },
                  { icon: Linkedin, link: "#" },
                  { icon: Twitter, link: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 rounded-xl bg-white border border-slate-200 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 hover:border-transparent text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
              {/* Company Links */}
              <div className="space-y-8">
                <h5 className="text-xl font-bold text-slate-900">Company</h5>
                <div className="flex flex-col space-y-4">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Services", href: "/services" },
                    { name: "Leadership", href: "/leadership" },
                    { name: "Careers", href: "/careers" },
                    { name: "Contact", href: "/contact" },
                  ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-slate-600 hover:text-red-600 transition-colors duration-300 flex items-center group font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-red-600 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Resources */}
              <div className="space-y-8">
                <h5 className="text-xl font-bold text-slate-900">Resources</h5>
                <div className="flex flex-col space-y-4">
                  {[
                    { name: "Privacy Policy", href: "/privacy" },
                    { name: "Terms of Service", href: "/terms" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-slate-600 hover:text-red-600 transition-colors duration-300 flex items-center group font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-600 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div className="space-y-8">
                <h5 className="text-xl font-bold text-slate-900">Connect</h5>
                <div className="flex flex-col space-y-4">
                  <div className="text-slate-600 font-medium">
                    <p>Email</p>
                    <a href="mailto:hello@reddev.com" className="text-red-600 hover:text-red-700 transition-colors">
                      hello@reddev.com
                    </a>
                  </div>
                  <div className="text-slate-600 font-medium">
                    <p>Phone</p>
                    <a href="tel:+923136224778" className="text-red-600 hover:text-red-700 transition-colors">
                      +92 313 6224778
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-xl mt-16 p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
            <h5 className="text-2xl font-bold text-slate-900 mb-2">
              Stay Updated
            </h5>
            <p className="text-slate-600 mb-6 text-lg">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-900 placeholder:text-slate-400 shadow-sm"
              />
              <button className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Subscribe
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-16 pt-8 border-t border-slate-200">
            <p className="text-slate-600">
              © {new Date().getFullYear()} reddev. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="text-slate-600 hover:text-red-600 transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-600 hover:text-red-600 transition-colors duration-300 font-medium"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}

export default Footer;
