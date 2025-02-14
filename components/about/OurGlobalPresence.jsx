import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import { Building2, MapPin, Phone, Mail, Globe2 } from "lucide-react";

export default function OurGlobalPresence() {
  const offices = [
    {
      country: "Pakistan",
      city: "Islamabad",
      image:
        "https://cdn.prod.website-files.com/653a706d0796f8d2a3e0559f/65b348c81f55e4b2d620bafc_caption.jpg",
      details: {
        title: "Pakistan Headquarters",
        company: "Devbitties (Private) Limited",
        address: "Islamabad",
        phone: "+92 331 557 988",
        email: "reddev0@gmail.com",
      },
    },
    {
      country: "Portugal",
      city: "Lisbon",
      image:
        "https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&q=80",
      details: {
        title: "European Office",
        company: "Devbitties LDA",
        address: "Lisbon",
        phone: "+351 920 323 764",
        email: "reddev0@gmail.com",
      },
    },
  ];

  return (
    <FullContainer className="bg-gray-50 relative py-24 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute -right-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute -left-4 bottom-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      </div>

      <Container className="relative">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-primary font-semibold mb-4 block uppercase tracking-wider">
            Global Presence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our Global
            <span className="relative ml-3">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Offices
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
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located in Asia and Europe, we bridge technology and
            innovation across continents to serve our global clients.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offices.map((office, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Country Tag */}
              <div className="absolute top-6 right-6 z-10">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                  <span className="font-medium text-gray-900">
                    {office.country}
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 rounded-t-3xl overflow-hidden">
                <Image
                  src={office.image}
                  alt={office.city}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white">
                    {office.city}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2
                      className="w-5 h-5 text-primary mt-1"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-secondary">
                        {office.details.title}
                      </h4>
                      <p className="text-gray-600 mt-1">
                        {office.details.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-5 h-5 text-gray-400 mt-1"
                      strokeWidth={1.5}
                    />
                    <p className="text-gray-600">{office.details.address}</p>
                  </div>

                  {office.details.phone && (
                    <div className="flex items-center gap-3">
                      <Phone
                        className="w-5 h-5 text-gray-400"
                        strokeWidth={1.5}
                      />
                      <p className="text-gray-600">{office.details.phone}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    <p className="text-gray-600">{office.details.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
