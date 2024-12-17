import { Disclosure } from "@headlessui/react";
import FullContainer from "../common/FullContainer";

import Container from "../common/Container";
import Link from "next/link";

export default function FAQ() {
  return (
    <FullContainer>
      <Container >
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
                    <span> How can I contact your customer support team?</span>
                   
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4  text-gray-500">
                 
                    You can reach our customer support team by emailing <span className="text-blue" >usamamustafa393@gmail.com</span>  or calling  +923136224778 during our business hours.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span> What are your business hours?</span>
                   
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4  text-gray-500">
                  Our business hours are Monday to Friday, 9:00 AM to 5:00 PM, local time.
                   
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>How can I submit feedback or suggestions?</span>
                    
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4  text-gray-500">

                  We welcome your feedback and suggestions! You can submit them through our online contact form or by emailing  <span className="text-blue" >usamamustafa393@gmail.com</span>.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>


            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>What is your response time for inquiries?</span>
                   
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4  text-gray-500">
                
                <Link href="/" >We strive to respond to all inquiries within 24 hours. However, response times may vary depending on the volume of inquiries we receive.</Link>

                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>


            
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>Do you offer technical support for your services?</span>
                  
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4  text-gray-500">
                
                  Yes, we provide technical support for our services. Please contact our customer support team for assistance.

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
