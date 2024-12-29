import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import { Building2, MapPin, Phone, Mail, Sparkles } from "lucide-react";

export default function OurGlobalPresence() {
  const offices = [
    {
      image: "/img/office1.png",
      locations: [
        {
          title: "Lahore Head Office",
          company: "Devbitties (Private) Limited",
          address:
            "Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab",
          phone: "(042) 35700161-2",
        },
        {
          title: "Islamabad Office",
          company: "Devbitties (Private) Limited",
          address:
            "102 China Rd, I-10/3 I-10, Islamabad, Islamabad Capital Territory",
          phone: "(042) 35700161-2",
        },
      ],
    },
    {
      image: "/img/office2.png",
      locations: [
        {
          title: "United States Office",
          company: "Devbitties (Private) Limited",
          address: "18 S 2nd Street #120, San Jose, CA, 95113, United States",
          email: "sales@reddev.com",
        },
      ],
    },
    {
      image: "/img/office3.png",
      locations: [
        {
          title: "Dubai, United Arab Emirates Office",
          company: "Devbitties Global Technologies LLC",
          address:
            "19 floor Damac Executive Heights, Jebel Ali Race Course Rd, Dubai, UAE",
          phone: "(042) 35700161-2",
        },
      ],
    },
  ];

  return (
    <FullContainer className="bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -right-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-4 bottom-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-gray-200/50 shadow-sm mb-6">
            <Sparkles className="text-primary w-5 h-5" />
            <span className="text-primary text-sm font-medium">
              Global Presence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Global Presence
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We support clients in 23+ countries and drive continued growth
            through innovation and transformation.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <Image
                  src={office.image}
                  alt="Office location"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {office.locations.map((location, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2
                        className="w-5 h-5 text-primary mt-1"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-xl font-semibold text-secondary">
                        {location.title}
                      </h3>
                    </div>

                    <div className="space-y-3 pl-8">
                      <p className="text-gray-600">{location.company}</p>

                      <div className="flex items-start gap-3">
                        <MapPin
                          className="w-5 h-5 text-gray-400 shrink-0"
                          strokeWidth={1.5}
                        />
                        <p className="text-gray-600 text-sm">
                          {location.address}
                        </p>
                      </div>

                      {location.phone && (
                        <div className="flex items-center gap-3">
                          <Phone
                            className="w-5 h-5 text-gray-400"
                            strokeWidth={1.5}
                          />
                          <p className="text-gray-600 text-sm">
                            {location.phone}
                          </p>
                        </div>
                      )}

                      {location.email && (
                        <div className="flex items-center gap-3">
                          <Mail
                            className="w-5 h-5 text-gray-400"
                            strokeWidth={1.5}
                          />
                          <p className="text-gray-600 text-sm">
                            {location.email}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
