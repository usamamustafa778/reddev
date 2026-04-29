import Footer from "@/components/common/Footer";
import FirstNavbar from "@/components/common/Navbar";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  Calendar,
  LayoutDashboard,
  Smartphone,
  MapPin,
  CheckCircle2,
  Clock,
  Shield,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const steps = [
  {
    number: "1",
    title: "Tell Us About Your Restaurant",
    desc: "Fill in a quick form or book a free call. We learn about your restaurant, your menu, your market, and what you need online.",
  },
  {
    number: "2",
    title: "We Design & Build Everything",
    desc: "Our team handles the full build — design, development, online ordering, integrations, and content setup. You don't touch a line of code.",
  },
  {
    number: "3",
    title: "Go Live This Week",
    desc: "Your restaurant goes live, fully functional, mobile-optimized and ready to take orders. Training call included. You own everything.",
  },
];

const features = [
  {
    icon: Globe,
    title: "Professional Website",
    desc: "Built specifically for restaurants. Menu display, photo gallery, location and hours — looks stunning on every device.",
  },
  {
    icon: ShoppingCart,
    title: "Online Ordering",
    desc: "Customers order directly from your site. No commissions. Orders go straight to your kitchen. More revenue, zero middlemen.",
  },
  {
    icon: Calendar,
    title: "Reservations System",
    desc: "Online table booking with automated confirmations and waitlist management. Never lose a reservation again.",
  },
  {
    icon: LayoutDashboard,
    title: "Restaurant Dashboard",
    desc: "Manage orders, tables, staff and inventory from one central dashboard. Full visibility into your operations, zero chaos.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Over 70% of restaurant searches happen on mobile. Every site we build loads fast and looks perfect on any screen size.",
  },
  {
    icon: MapPin,
    title: "Google Maps & Local SEO",
    desc: "Show up when nearby customers search for places to eat. We set up your Google profile, maps embed and local SEO basics.",
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "Delivered on Time",
    desc: "We commit to a delivery date before we start. Standard builds are live in 7 days — or we keep working until it's done at no extra cost.",
  },
  {
    icon: Shield,
    title: "30-Day Support Included",
    desc: "Every project comes with 30 days of post-launch support. Questions, tweaks, small changes — we handle it. No extra charge.",
  },
  {
    icon: HeartHandshake,
    title: "You Own Everything",
    desc: "Your website, your domain, your CRM. No lock-in, no monthly hostage fees. We hand over full ownership on day one.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "$800",
    delivery: "Delivered in 5 days",
    features: [
      "Professional website",
      "Menu display",
      "Contact form + location",
      "Mobile optimized",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$1,200",
    delivery: "Delivered in 7 days",
    features: [
      "Everything in Starter",
      "Online ordering system",
      "Reservations system",
      "Google Maps + SEO basics",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    delivery: "Timeline agreed upfront",
    features: [
      "Everything in Standard",
      "Custom integrations & APIs",
      "Multi-location setup",
      "Staff & inventory management",
      "Dedicated project manager",
      "60-day support",
    ],
    highlighted: false,
    isEnterprise: true,
  },
];

export default function Restaurants() {
  return (
    <>
      <Head>
        <title>Restaurant Websites & Online Ordering | RedDev</title>
        <meta
          name="description"
          content="Professional restaurant websites, online ordering, and management systems — built in 7 days. Plus EatsDesk integration to run your entire restaurant from one dashboard."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Restaurant Websites & Online Ordering | RedDev" />
        <meta property="og:description" content="Professional restaurant websites, online ordering, and management systems — built in 7 days." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://reddevsystems.com/restaurants" />
      </Head>

      <FirstNavbar />

      {/* ========== HERO ========== */}
      <FullContainer className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.2),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(234,88,12,0.15),rgba(0,0,0,0))]"></div>

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-orange-600/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-[500px] h-[500px] bg-rose-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <Container className="relative z-10 overflow-hidden">
          <div className="w-full flex flex-col text-center py-16 md:py-20 pt-28 md:pt-36 items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative h-2.5 w-2.5 bg-red-500 rounded-full"></span>
              </span>
              <span className="text-xs font-bold text-white/90 uppercase">
                Restaurant Tech · Powered by RedDev
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black max-w-5xl"
            >
              <span className="block text-white">We Help Restaurants</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                Get More Customers Online.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl"
            >
              Professional restaurant websites, online ordering, and management systems — built in 7 days. Plus EatsDesk integration to run your entire restaurant from one dashboard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <ArrowRight />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border border-white/20 rounded-xl text-white text-center font-semibold"
              >
                See Our Work
              </Link>
            </motion.div>

            {/* Quick stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 md:gap-16">
              {[
                { number: "7", label: "Day Delivery" },
                { number: "30", label: "Day Support" },
                { number: "100%", label: "You Own It" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>

        <style jsx global>{`
          @keyframes blob {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(30px,-30px); }
          }
          .animate-blob { animation: blob 8s infinite ease-in-out; }
        `}</style>
      </FullContainer>

      {/* ========== HOW IT WORKS — 3 STEPS ========== */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-4">
              Done by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                This Week.
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Three steps. Zero stress. Your restaurant online in days, not months.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Connector line between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-red-200 to-orange-200 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-red-500/20">
                    <span className="text-3xl font-black text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* ========== EVERYTHING YOUR RESTAURANT NEEDS ========== */}
      <FullContainer className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,rgba(220,38,38,0.1),rgba(0,0,0,0))]"></div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white mb-4">
              Everything Your Restaurant{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                Needs Online.
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Delivered in one streamlined solution — no juggling multiple vendors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                    <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
              <Shield className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span className="text-white/80 font-semibold text-sm">
                Backed by our 7-Day Delivery Guarantee + 30-Day Post-Launch Support
              </span>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* ========== 3 GUARANTEES ========== */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Guarantees
              </span>{" "}
              to You.
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              We only take on projects we know we can deliver. Here&apos;s what that means for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {guarantees.map((g, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="h-full p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-red-200 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg mx-auto mb-6">
                    <g.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{g.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* ========== WHY REDDEV ========== */}
      <FullContainer className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(234,88,12,0.1),rgba(0,0,0,0))]"></div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                  <span className="text-sm font-bold text-white/90">Why RedDev</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black leading-tight text-white mb-6">
                  We&apos;ve Actually{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    Built Restaurant Tech.
                  </span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-8 text-lg">
                  We didn&apos;t just make a template and call it a restaurant website. We&apos;ve built full restaurant management systems, online ordering platforms, and POS integrations for real clients. That experience is what we bring to your project.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/30"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </motion.button>
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  "Built full restaurant SaaS products from scratch",
                  "Online ordering & POS integrations",
                  "Table management & reservation systems",
                  "Staff scheduling & inventory tracking",
                  "Customer data & marketing integrations",
                  "Multi-location restaurant support",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* ========== PRICING ========== */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-4">
              Simple,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Transparent
              </span>{" "}
              Pricing.
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              No hidden fees. No recurring subscriptions. One price, full delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className={`relative h-full p-8 rounded-2xl border-2 transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-gradient-to-br from-red-600 to-orange-600 border-transparent shadow-2xl shadow-red-500/30 scale-105"
                    : pkg.isEnterprise
                    ? "bg-slate-900 border-slate-700 hover:border-red-500/50 hover:shadow-xl"
                    : "bg-white border-slate-200 hover:border-red-200 hover:shadow-xl"
                }`}>
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-red-600 text-xs font-black shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  {pkg.isEnterprise && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-black shadow-lg">
                        Enterprise
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={`text-lg font-black mb-1 ${pkg.highlighted || pkg.isEnterprise ? "text-white" : "text-slate-900"}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm ${pkg.highlighted ? "text-white/80" : pkg.isEnterprise ? "text-white/60" : "text-slate-500"}`}>
                      {pkg.delivery}
                    </p>
                  </div>

                  <div className={`font-black mb-8 ${
                    pkg.highlighted ? "text-4xl text-white" :
                    pkg.isEnterprise ? "text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400" :
                    "text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600"
                  }`}>
                    {pkg.isEnterprise ? "Let's Talk" : pkg.price}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlighted ? "text-white" : "text-red-500"}`} />
                        <span className={`text-sm ${pkg.highlighted ? "text-white/90" : pkg.isEnterprise ? "text-white/70" : "text-slate-700"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                        pkg.highlighted
                          ? "bg-white text-red-600 hover:bg-white/90"
                          : pkg.isEnterprise
                          ? "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:opacity-90"
                          : "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:opacity-90"
                      }`}
                    >
                      {pkg.isEnterprise ? "Get a Custom Quote" : "Get a Free Quote"}
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* ========== BOTTOM CTA ========== */}
      <FullContainer className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_80%,rgba(220,38,38,0.2),rgba(0,0,0,0))]"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute -bottom-40 right-20 w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
              Get Your Restaurant Online{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                This Week.
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-3xl mx-auto">
              We&apos;ve built restaurant systems across multiple markets. Tell us about your restaurant — we&apos;ll handle the rest.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/30"
              >
                <span>Get a Free Quote</span>
                <ArrowRight
                  className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                  strokeWidth={2.5}
                />
              </motion.button>
            </Link>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}
