import React from "react";
import FullContainer from "./FullContainer";
import Container from "./Container";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <FullContainer className="py-20 bg-gradient-to-br from-secondary via-secondary/90 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="z-10">
        <div className="text-white/80">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Company Info */}
            <div className="lg:col-span-4 space-y-8">
              <Link
                className="relative z-10 hover:opacity-75 transition-opacity duration-300"
                href="/"
              >
                <Image
                  src="/logo-white.png"
                  alt="Devbitties Logo"
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="text-white/90 max-w-sm text-lg">
                Transforming ideas into exceptional digital experiences. Your
                trusted partner in innovative software solutions.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Facebook, link: "#" },
                  {
                    icon: Instagram,
                    link: "https://www.instagram.com/devbitties",
                  },
                  { icon: Linkedin, link: "#" },
                  { icon: Twitter, link: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-primary text-white/80 hover:text-white flex items-center justify-center transition-all duration-300"
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
                <h5 className="text-xl font-semibold text-white">Company</h5>
                <div className="flex flex-col space-y-4">
                  {["Home", "About", "Work", "Client", "Contact us"].map(
                    (item, index) => (
                      <Link
                        key={index}
                        href={`/${item.toLowerCase().replace(" ", "")}`}
                        className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {item}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Industries */}
              <div className="space-y-8">
                <h5 className="text-xl font-semibold text-white">Industries</h5>
                <div className="flex flex-col space-y-4">
                  {[
                    "Healthcare",
                    "FinTech",
                    "E-commerce",
                    "Hospitality",
                    "SaaS",
                    "Gaming",
                    "Public Sector",
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href="/industries"
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="space-y-8">
                <h5 className="text-xl font-semibold text-white">Services</h5>
                <div className="flex flex-col space-y-4">
                  {[
                    "Web Development",
                    "Mobile Apps",
                    "Generative AI",
                    "DevOps",
                    "QA Testing",
                    "Custom Solutions",
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href="/services"
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-xl mt-16">
            <h5 className="text-2xl font-semibold text-white mb-2">
              Stay Updated
            </h5>
            <p className="text-white/70 mb-5 text-lg">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:border-primary text-white placeholder:text-white/50 backdrop-blur-sm"
              />
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-colors duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-16">
            <p className="text-white/70">
              © {new Date().getFullYear()} Devbities. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/70 hover:text-white transition-colors duration-300"
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
