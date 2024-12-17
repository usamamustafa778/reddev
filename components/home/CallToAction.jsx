import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Form from "../common/Form";

function CallToAction() {
  const [showForm, setShowForm] = useState(false);

  return (
    <FullContainer className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Card */}
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-primary/30 rounded-tl-[3rem]"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-secondary/30 rounded-br-[3rem]"></div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Text Content */}
              <div className="lg:col-span-7 relative">
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    Ready to Transform Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-x">
                      Digital Presence?
                    </span>
                  </h2>

                  {/* Feature List */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      "Custom Web Development",
                      "Modern UI/UX Design",
                      "24/7 Expert Support",
                      "Scalable Solutions",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 text-gray-700"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setShowForm(true)}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 rounded-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="mr-3">Get Free Consultation</span>
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:col-span-5">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/img/calltoaction.webp"
                      alt="Digital Transformation"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Floating Stats */}
                  {[
                    { label: "Projects", value: "100+" },
                    { label: "Success Rate", value: "98%" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`absolute ${
                        index === 0 ? "-left-4 top-1/4" : "-right-4 bottom-1/4"
                      } z-30 bg-white rounded-2xl p-4 shadow-xl border border-gray-100`}
                    >
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}

                  {/* Background Decoration */}
                  <div className="absolute inset-0 z-10 translate-x-4 translate-y-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Form Modal */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-all duration-300 ${
          showForm
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center hover:from-primary/90 hover:to-secondary/90 transition-colors duration-300"
            >
              ✕
            </button>
            <Form form={showForm} setform={setShowForm} />
          </div>
        </div>
      </div>
    </FullContainer>
  );
}

export default CallToAction;
