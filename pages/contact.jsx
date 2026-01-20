import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import BgAnimation from "@/components/BgAnimation";
import { Check, Minus, Mail, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
  };

  const idealInquiries = [
    "Building a new AI-enabled product from the ground up",
    "Replacing manual workflows with intelligent automation",
    "Scaling an existing web or mobile platform for growth",
    "Developing custom SaaS or internal tools for operations"
  ];

  const processSteps = [
    {
      number: "01",
      title: "We review your request",
      description: "Evaluate fit, scope, and alignment with our expertise"
    },
    {
      number: "02",
      title: "Strategy call if there's a fit",
      description: "Deep-dive conversation about your business and technical needs"
    },
    {
      number: "03",
      title: "Clear next step proposed",
      description: "Scope, timeline, and engagement structure—no ambiguity"
    }
  ];

  const projectTypes = [
    "AI-Powered Web Application",
    "AI-Enabled Mobile App",
    "Custom SaaS Platform",
    "Automation & AI Integration",
    "Product Modernization/Scale",
    "Other/Not Sure Yet"
  ];

  const budgetRanges = [
    "$15k - $30k",
    "$30k - $50k",
    "$50k - $100k",
    "$100k+",
    "Not determined yet"
  ];

  return (
    <>
      <Head>
        <title>Start a Conversation | RedDev</title>
        <meta
          name="description"
          content="Ready to build AI-powered infrastructure that scales? Let's discuss your project, challenges, and how we can help."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <FullContainer className="relative bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden pt-32 pb-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-950/70 to-black/60 z-0" />
        
        <BgAnimation />
        <div className="absolute inset-0 opacity-20 -z-10">
          <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/40 rounded-full mix-blend-multiply filter blur-xl" />
          <div className="absolute top-0 -right-4 w-[50%] h-[50%] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Let&apos;s start a
              <span className="relative block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
                  strategic conversation
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              For founders and teams building or scaling products with AI-powered infrastructure. 
              This is where serious projects begin.
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* Who Should Reach Out */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
                Who Should{" "}
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Reach Out
                  </span>
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {idealInquiries.map((inquiry, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border-2 border-slate-200">
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-base md:text-lg text-slate-700">{inquiry}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
              <Minus className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
              <p className="text-base text-slate-600">
                Not a fit for quick fixes, small one-off tasks, or projects under $15k.
              </p>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* What to Expect */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
              What to{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Expect
                </span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Clarity, honesty, and respect for your time at every step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-5xl font-black text-slate-100 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* Contact Form */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-4">
                Tell Us About{" "}
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Your Project
                  </span>
                </span>
              </h2>
              <p className="text-base text-slate-600">
                The more context you provide, the better we can evaluate fit and prepare for our conversation.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 md:p-10 rounded-2xl border-2 border-slate-200 shadow-sm"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-slate-900"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-slate-900"
                  placeholder="john@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-bold text-slate-900 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-slate-900"
                  placeholder="Your Company"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-bold text-slate-900 mb-2">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-slate-900"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budget" className="block text-sm font-bold text-slate-900 mb-2">
                  Budget Range <span className="text-red-500">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-slate-900"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-slate-500">
                  Helps us understand scope and recommend the right engagement model.
                </p>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-bold text-slate-900 mb-2">
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors text-slate-900 resize-none"
                  placeholder="Tell us about your business challenge, what you're building, and what success looks like. The more specific, the better."
                />
                <p className="mt-2 text-xs text-slate-500">
                  Include: business model, current bottlenecks, desired outcomes, and timeline if known.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Request
              </button>

              <p className="text-center text-sm text-slate-500">
                We typically respond within 24-48 hours to qualified inquiries.
              </p>
            </motion.form>
          </div>
        </Container>
      </FullContainer>

      {/* Alternative Contact Info */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-black mb-8">
              Prefer to Reach Out Directly?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border-2 border-white/10">
                <Mail className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <p className="text-sm text-slate-400 mb-2">Email</p>
                <a href="mailto:hello@reddev.com" className="text-lg font-bold text-white hover:text-red-400 transition-colors">
                  hello@reddev.com
                </a>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border-2 border-white/10">
                <Calendar className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <p className="text-sm text-slate-400 mb-2">Phone</p>
                <a href="tel:+923136224778" className="text-lg font-bold text-white hover:text-red-400 transition-colors">
                  +92 313 6224778
                </a>
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* Final Trust Line */}
      <FullContainer className="relative py-12 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              We&apos;re building long-term partnerships with teams that value serious execution over quick wins.
            </p>
          </div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}
