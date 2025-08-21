import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialProof({ 
  testimonials = [], 
  heading = "What Our Clients Say",
  variant = "primary" 
}) {
  if (!testimonials || testimonials.length === 0) return null;

  const bgClass = variant === "primary" 
    ? "bg-white" 
    : "bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-950 text-white";

  return (
    <FullContainer className={`py-24 ${bgClass}`}>
      <Container>
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            variant === "primary" 
              ? "bg-primary/10 text-primary" 
              : "bg-white/10 text-white/80"
          }`}>
            <Star className="w-4 h-4" />
            Trusted by Industry Leaders
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            variant === "primary" ? "text-gray-900" : "text-white"
          }`}>
            {heading}
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className={`ml-2 text-lg font-semibold ${
              variant === "primary" ? "text-gray-900" : "text-white"
            }`}>
              4.9/5 Average Rating
            </span>
          </div>
          
          <p className={`text-lg max-w-2xl mx-auto ${
            variant === "primary" ? "text-gray-600" : "text-white/80"
          }`}>
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                variant === "primary" 
                  ? "bg-white border-gray-200 hover:border-primary/30" 
                  : "bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm"
              }`}
            >
              {/* Quote Icon */}
              <div className={`absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center ${
                variant === "primary" ? "bg-primary text-white" : "bg-white/10 text-white"
              }`}>
                <Quote className="w-4 h-4" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="space-y-4 mb-6">
                <blockquote className={`text-lg font-medium leading-relaxed ${
                  variant === "primary" ? "text-gray-900" : "text-white"
                }`}>
                  &ldquo;{testimonial.first}&rdquo;
                </blockquote>
                <p className={`${
                  variant === "primary" ? "text-gray-600" : "text-white/80"
                }`}>
                  {testimonial.second}
                </p>
              </div>

              {/* Client Info */}
              <div className={`border-t pt-4 ${
                variant === "primary" ? "border-gray-200" : "border-white/10"
              }`}>
                <div className={`font-semibold ${
                  variant === "primary" ? "text-gray-900" : "text-white"
                }`}>
                  {testimonial.clientname}
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute bottom-0 left-0 w-full h-1 rounded-b-2xl ${
                variant === "primary" 
                  ? "bg-gradient-to-r from-primary to-red-600" 
                  : "bg-gradient-to-r from-primary/50 to-red-600/50"
              }`} />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className={`text-3xl font-bold mb-2 ${
                variant === "primary" ? "text-gray-900" : "text-white"
              }`}>
                500+
              </div>
              <div className={`text-sm ${
                variant === "primary" ? "text-gray-600" : "text-white/80"
              }`}>
                Projects Completed
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold mb-2 ${
                variant === "primary" ? "text-gray-900" : "text-white"
              }`}>
                98%
              </div>
              <div className={`text-sm ${
                variant === "primary" ? "text-gray-600" : "text-white/80"
              }`}>
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold mb-2 ${
                variant === "primary" ? "text-gray-900" : "text-white"
              }`}>
                50+
              </div>
              <div className={`text-sm ${
                variant === "primary" ? "text-gray-600" : "text-white/80"
              }`}>
                Industries Served
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold mb-2 ${
                variant === "primary" ? "text-gray-900" : "text-white"
              }`}>
                24/7
              </div>
              <div className={`text-sm ${
                variant === "primary" ? "text-gray-600" : "text-white/80"
              }`}>
                Support Available
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}

