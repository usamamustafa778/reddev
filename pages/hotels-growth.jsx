import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import FirstNavbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import {
  TrendingUp,
  BookOpen,
  BarChart3,
  Handshake,
  EyeOff,
  CreditCard,
  ImageIcon,
  Target,
  ArrowRight,
  Check,
  X,
  Search,
  Rocket,
  LineChart,
  Layers,
  MessageCircle,
} from "lucide-react";

const BENEFITS = [
  { icon: TrendingUp, label: "Higher Occupancy" },
  { icon: BookOpen, label: "Direct Bookings" },
  { icon: BarChart3, label: "Revenue Analytics" },
  { icon: Handshake, label: "Long-Term Tech Partner" },
];

const STRUGGLE_CARDS = [
  {
    icon: EyeOff,
    title: "Low Visibility",
    text: "Hotel does not rank on Google Maps, poor listings, no photos.",
  },
  {
    icon: CreditCard,
    title: "OTA Dependence",
    text: "15–20% commission, price wars, no guest ownership.",
  },
  {
    icon: ImageIcon,
    title: "Weak Branding",
    text: "Outdated visuals, few reviews, low trust.",
  },
  {
    icon: Target,
    title: "No Revenue Strategy",
    text: "Flat pricing, empty weekdays, no campaigns.",
  },
];

const FLOW_ITEMS = [
  "Invisible Online",
  "OTA Only",
  "Low Trust",
  "Empty Rooms",
  "Lost Revenue",
];

const PRICING_PLANS = [
  {
    name: "Basic",
    price: "PKR 35k–50k",
    period: "/ month",
    popular: false,
    features: [
      "Google & Maps Optimization",
      "Social Setup",
      "8 Posts / Month",
      "OTA Listings",
      "Reports",
      "WhatsApp Funnel",
    ],
  },
  {
    name: "Standard",
    price: "PKR 75k–120k",
    period: "/ month",
    popular: true,
    features: [
      "Brand Refresh",
      "20 Posts + Reels",
      "Ads Management",
      "Landing Page",
      "OTA Optimization",
      "Review Strategy",
      "Revenue Dashboard",
    ],
  },
  {
    name: "Premium",
    price: "PKR 150k–250k",
    period: "/ month",
    popular: false,
    features: [
      "Full Website + Booking Engine",
      "SEO",
      "Influencer Campaigns",
      "Funnels",
      "Email / WhatsApp",
      "Pricing Strategy",
      "Competitor Tracking",
      "Dedicated Manager",
    ],
  },
];

const ROI_CARDS = [
  {
    plan: "Basic",
    result: "2–3 extra rooms/day = PKR 360k+/month",
  },
  {
    plan: "Standard",
    result: "5 rooms/day or OTA savings = PKR 900k+/month",
  },
  {
    plan: "Premium",
    result: "ADR +1000 = PKR 1.8M/month",
  },
];

const HOW_WE_WORK = [
  { step: "Audit", icon: Search },
  { step: "Launch", icon: Rocket },
  { step: "Optimize", icon: LineChart },
  { step: "Scale & SaaS", icon: Layers },
];

const COMPARISON_ROWS = [
  { feature: "Google & Maps Optimization", basic: true, standard: true, premium: true },
  { feature: "Social Media Marketing", basic: true, standard: true, premium: true },
  { feature: "Paid Ads Management", basic: false, standard: true, premium: true },
  { feature: "Website / Booking Engine", basic: false, standard: false, premium: true },
  { feature: "SEO", basic: false, standard: false, premium: true },
  { feature: "Revenue Strategy", basic: false, standard: true, premium: true },
  { feature: "Dedicated Manager", basic: false, standard: false, premium: true },
];

const CASE_STUDIES = [
  {
    city: "Lahore",
    metric: "+32% Occupancy",
    desc: "Optimized Google Maps + ads funnel",
  },
  {
    city: "Islamabad",
    metric: "+41% Direct Bookings",
    desc: "Website + OTA strategy",
  },
  {
    city: "Karachi",
    metric: "+22% ADR",
    desc: "Repositioned brand + pricing",
  },
];

const SAAS_ITEMS = [
  "Booking Engine",
  "Digital Check-In/Out",
  "Housekeeping Ops",
  "Revenue Dashboard",
  "Channel Manager",
  "Staff Analytics",
];

const WHATSAPP_URL = "https://wa.me/923XXXXXXXXX";

export default function HotelsGrowth() {
  const [formData, setFormData] = useState({
    hotelName: "",
    city: "",
    contactNumber: "",
    email: "",
    roomsChallenges: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g. API or redirect)
  };

  return (
    <>
      <Head>
        <title>Hotel Branding & Revenue Growth | Pakistani Hotels | Reddev</title>
        <meta
          name="description"
          content="We help Pakistani hotels increase bookings, build brand authority, and dominate their city. Branding & Revenue Growth Service with optional hotel SaaS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://reddev.vercel.app/hotels-growth" />
      </Head>

      <FirstNavbar />

      {/* 1) HERO */}
      <FullContainer className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 via-transparent to-transparent" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
              >
                Grow Your Hotel Revenue with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Reddev
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              >
                We help Pakistani hotels increase bookings, build brand authority, and dominate their city — before rolling out smart SaaS operations software.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Book Free Audit
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  View Plans
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-sm p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">What you get</p>
                <ul className="space-y-4">
                  {BENEFITS.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200">
                      <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </FullContainer>

      {/* 2) WHY MOST HOTELS STRUGGLE */}
      <FullContainer className="py-16 md:py-24 bg-white">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Why Most Hotels Struggle
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common gaps that keep occupancy and revenue flat.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {STRUGGLE_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border-2 border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-6 py-6 px-4 rounded-2xl bg-slate-100 border border-slate-200"
          >
            {FLOW_ITEMS.map((item, i) => (
              <React.Fragment key={i}>
                <span className="font-semibold text-slate-700">{item}</span>
                {i < FLOW_ITEMS.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </Container>
      </FullContainer>

      {/* 3) PRICING PLANS */}
      <FullContainer id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the tier that fits your hotel&apos;s stage and goals.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border-2 p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "border-red-500 bg-white shadow-xl shadow-red-500/10 scale-[1.02]"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-2xl md:text-3xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact-form"
                  className={`mt-8 block text-center py-3.5 px-6 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* 4) ROI SECTION */}
      <FullContainer className="py-16 md:py-24 bg-slate-900 text-white">
        <Container className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12"
          >
            Return on Investment
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ROI_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <p className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">{card.plan}</p>
                <p className="text-lg font-bold text-white">{card.result}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* 5) HOW WE WORK */}
      <FullContainer className="py-16 md:py-24 bg-white">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From audit to scale — and eventually SaaS.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {HOW_WE_WORK.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl border-2 border-slate-200 hover:border-red-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.step}</h3>
                {i < HOW_WE_WORK.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200 -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* 6) PRICING COMPARISON TABLE */}
      <FullContainer className="py-16 md:py-24 bg-slate-50">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Pricing Comparison
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border-2 border-slate-200 bg-white shadow-sm"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-4 px-6 font-bold text-slate-900">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">Basic</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">Standard</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">Premium</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 text-slate-700 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.basic ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-slate-300 mx-auto" />}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.standard ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-slate-300 mx-auto" />}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.premium ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-slate-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </Container>
      </FullContainer>

      {/* 7) CASE STUDIES */}
      <FullContainer className="py-16 md:py-24 bg-white">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Results from Pakistani hotels we&apos;ve helped.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border-2 border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">{study.city}</p>
                <p className="text-2xl font-black text-slate-900 mb-2">{study.metric}</p>
                <p className="text-slate-600">{study.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* 8) FUTURE SAAS PREVIEW */}
      <FullContainer className="py-16 md:py-24 bg-slate-900 text-white">
        <Container className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-center mb-4"
          >
            Coming Soon: Reddev Hotel SaaS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-center mb-12 max-w-xl mx-auto"
          >
            Operations software for hotels — booking, check-in, housekeeping, and more.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {SAAS_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center font-medium text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* 9) CONTACT / FREE AUDIT FORM */}
      <FullContainer id="contact-form" className="py-16 md:py-24 bg-slate-50">
        <Container className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Free Hotel Audit
            </h2>
            <p className="text-lg text-slate-600">
              Tell us about your hotel and we&apos;ll get back with a tailored plan.
            </p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-lg space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Hotel Name</label>
              <input
                type="text"
                name="hotelName"
                value={formData.hotelName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                placeholder="e.g. Pearl Continental"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                placeholder="e.g. Lahore"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                  placeholder="03XX XXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                  placeholder="you@hotel.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Rooms & Challenges</label>
              <textarea
                name="roomsChallenges"
                value={formData.roomsChallenges}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all resize-none"
                placeholder="Number of rooms, main challenges (visibility, OTAs, branding, etc.)"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg hover:from-red-700 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Submit Request
            </button>
          </motion.form>
        </Container>
      </FullContainer>

      {/* 10) FINAL CTA */}
      <FullContainer className="py-16 md:py-24 bg-emerald-600">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Ready to Increase Occupancy?
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Get a free hotel branding & revenue audit from Reddev.
            </p>
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-emerald-700 font-bold text-lg rounded-xl hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Request Free Audit
            </Link>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />

      {/* 11) FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 md:w-9 md:h-9" />
      </a>
    </>
  );
}
