import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

export default function OurGlobalPresence() {
  return (
    <FullContainer>
      <Container>
        <h1 className="text-5xl text-secondary font-bold text-start sm:text-center">
          Our Global Presence
        </h1>
        <p className="text-gray-500 text-start sm:text-center">
          We support clients in 23+ countries and drive continued growth through
          innovation and transformation.
        </p>
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-8 md:grid-cols-3 py-12">
          {/* first */}
          <div className="flex flex-col gap-3">
            <div className="">
              <Image
                src="/img/office1.png"
                alt="image"
                height="250"
                width="250"
              />
            </div>
            <h3 className="text-secondary font-semibold">Lahore Head Office</h3>
            <div className="text-gray-500 text-sm">
              <p>Devbitties (Private) Limited</p>
              <p>
                Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore,
                Punjab
              </p>
              <p>(042) 35700161-2</p>
            </div>
            <h3 className="text-secondary font-semibold">Islamabad Office </h3>
            <div className="text-gray-500 text-sm">
              <p>Devbitties (Private) Limited</p>
              <p>
              102 China Rd, I-10/3 I-10, Islamabad, Islamabad Capital Territory
              </p>
              <p>(042) 35700161-2</p>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col gap-3">
            <div className="">
              <Image
                src="/img/office2.png"
                alt="image"
                height="250"
                width="250"
              />
            </div>
            <h3 className="text-secondary font-semibold">United States Office</h3>
            <div className="text-gray-500 text-sm">
              <p>Devbitties (Private) Limited</p>
              <p>
              18 S 2nd Street #120, San Jose, CA, 95113, United States
              sales@reddev.com
              </p>
            </div>
          </div>
          {/* third */}
          <div className="flex flex-col gap-3">
            <div className="">
              <Image
                src="/img/office3.png"
                alt="image"
                height="250"
                width="250"
              />
            </div>
            <h3 className="text-secondary font-semibold">Dubai, United Arab Emirates Office</h3>
            <div className="text-gray-500 text-sm">
              <p>Devbitties Global Technologies LLC</p>
              <p>
              19 floor Damac Executive Heights, Jebel Ali Race Course Rd, Dubai, UAE.
              </p>
              <p>(042) 35700161-2</p>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
