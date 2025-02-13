import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Form from "../common/Form";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function CallToAction() {
  const [showForm, setShowForm] = useState(false);

  return (
    <FullContainer className="py-24 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-100/50" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-purple-100/50" />
      </div>

      <Container className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm">
                  Start Growing Today
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Ready to take your business to the next level?
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Join thousands of businesses that trust us to deliver exceptional digital solutions that drive real results.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Rapid Development",
                  "Expert Consultation",
                  "Dedicated Support",
                  "Results Driven",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white shadow-sm rounded-lg p-4 border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Learn More
                </a>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src="/img/calltoaction.webp"
                  alt="Digital Solutions"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                      ))}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">Join our clients</div>
                      <div className="text-gray-600">Start your success story</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white text-gray-500 rounded-full flex items-center justify-center hover:bg-gray-100 shadow-lg"
            >
              ✕
            </button>
            <Form form={showForm} setform={setShowForm} />
          </div>
        </div>
      )}
    </FullContainer>
  );
}

export default CallToAction;
