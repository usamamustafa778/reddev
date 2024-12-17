import { Disclosure } from "@headlessui/react";
import FullContainer from "./FullContainer";
import Container from "./Container";
import Link from "next/link";


export default function FAQ() {
  return (
    <FullContainer>
      <Container>
        <div className="w-full px-4 py-16 ">
          <div className="mx-auto max-w-full rounded-2xl bg-white p-2">
            <h2 className="elementHeading2 my-6 ">
              {" "}
              <span className=" border-b-2 border-yellow-600 ">Freq</span>
              uently Asked Questions
            </h2>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>Software Development</span>
                   
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4  text-gray-500">
                    A software development company with a legacy of business
                    excellence, we can develop reliable, scalable and secure
                    software solutions for any OS, browser and device. We bring
                    together deep industry expertise and the latest IT
                    advancements to deliver custom solutions and products that
                    perfectly fit the needs and behavior of their users.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>UX/UI Design</span>
                   
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4  text-gray-500">
                    User experience and user interface design for all types of
                    websites, SaaS, and web/mobile apps. We combine the latest
                    UI/UX trends with our customers’ individual goals and needs
                    to deliver intuitive, vibrant, and impactful designs that
                    power up businesses.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>Web Development Services</span>
                  
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4  text-gray-500">
                  Elevate your online presence with our comprehensive web development solutions. We specialize in crafting engaging and efficient websites, ensuring a seamless user experience and optimal functionality. Our services cover a wide spectrum, from creating responsive designs to implementing robust backend solutions.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>


            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>Content Management Systems (CMS)</span>
                   
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4  text-gray-500">
                
                <Link href="/" >EXPLORE FURTHER</Link>

                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
