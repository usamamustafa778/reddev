import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Form from "../common/Form";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function CallToAction() {
  const [showForm, setShowForm] = useState(false);

  return (
    <FullContainer className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Background"
          fill
          className="object-cover object-center brightness-[0.5]"
          priority
          unoptimized
        />
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-16">
            {/* Main Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-white font-medium">
                  Ready for Innovation?
                </span>
              </div>

              <div className="space-y-8">
                <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Read Transform Your <br />
                  <span className="relative inline-block">
                    <span className="relative">
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
                        Digital Future
                      </span>
                      <svg
                        className="absolute -bottom-2 left-0 w-full"
                        height="8"
                        viewBox="0 0 100 8"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 0L50 7L100 0L100 8L0 8Z"
                          fill="currentColor"
                          className="text-primary/20"
                        />
                      </svg>
                    </span>
                    <span className="absolute inset-0 animate-[glitch_3s_infinite]"></span>
                  </span>{" "}
                  ?
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Join industry leaders {"who've"} already revolutionized their
                  digital presence. Start your journey with our expert team
                  today.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  "Custom Development",
                  "Expert Consultation",
                  "24/7 Support",
                  "Proven Results",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setShowForm(true)}
                  className="group inline-flex items-center gap-3 px-12 py-5 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-600 transition-all duration-300 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30"
                >
                  Get Started Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-12 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">500+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="h-12 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">95%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="h-12 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-gray-400">Expert Support</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80",
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=80&h=80",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-gray-900 overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt={`Client ${i + 1}`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        priority={i === 0}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-white font-medium">
                    Join 500+ Clients
                  </div>
                  <div className="text-gray-400">in digital excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-gray-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white text-gray-500 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
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
