import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import { LuCheckCheck } from "react-icons/lu";

export default function PackageData() {
  return (
    <>
      <FullContainer>
        <Container className=" px-12 lg:px-32 ">
          <div>
            <h2 className="elementHeading2  text-center  py-8 ">
              Discover Your Ideal Package Here
            </h2>
          </div>

          <div className="grid lg:grid-cols-3  gap-5">
            {/* FIRST */}
            <div className="First border-2 text-center p-4  space-y-3 ">
              <div className="flex justify-center">
                <Image src="/img/p1.webp" width="50" height="70" alt="IMAGE" />
              </div>
              <h5 className="elementHeading5  "> Basic</h5>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Custom</span> Theme
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Optimized</span>{" "}
                  Images
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">05</span> Pages
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Web</span> Type
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Unlimited</span>{" "}
                  Pages
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">SlideShow</span> for
                  Homepage
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Custom</span> Theme
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Basic</span> SEO
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Google</span>{" "}
                  Sitemap
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Contact</span> Us
                  Form
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Social</span> Icons
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Uploading</span> &
                  Configuration
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Server</span>
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Free</span> Support
                  [Life Time]
                </p>
              </div>
              <h4 className="elementHeading4 text-primary py-6 ">
                Price $399.00
              </h4>
            </div>

            {/* SECOND  */}

            <div className="Second border-2 text-center p-4  space-y-3 ">
              <div className="flex justify-center">
                <Image src="/img/p2.webp" width="50" height="70" alt="IMAGE" />
              </div>
              <h5 className="elementHeading5  ">Buisness Website</h5>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Free</span> Domain &
                  Hosting{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg "> Professional</span>{" "}
                  Layout{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> Optimized </span>{" "}
                  Images
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">12 </span> Pages{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> Web </span> Type
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Unlimited </span>{" "}
                  Pages
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> Can </span> be
                  Added
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Slideshowe </span>{" "}
                  for Homepag
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> Full</span> SEO
                  Optimized{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Custom </span> Fonts
                  & Colors{" "}
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Advance </span> CSS
                  Coding
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Google </span>{" "}
                  Sitemap
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg "> Contact </span> Us
                  Form{" "}
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Social </span> Icons
                </p>
              </div>
              <h4 className="elementHeading4 text-primary py-6 ">
                Price $699.00
              </h4>
            </div>

            {/* THIRD  */}

            <div className="Third border-2 text-center p-4  space-y-3 ">
              <div className="flex justify-center">
                <Image src="/img/p3.webp" width="80" height="70" alt="IMAGE" />
              </div>
              <h5 className="elementHeading5  "> E-Commerce Store</h5>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Free</span> Domain &
                  Hosting{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg "> Professional</span>{" "}
                  Layout{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">20 </span> Products{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> 50 </span>{" "}
                  Categories
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Live </span> Visitor
                  Chat
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> Slideshow </span>{" "}
                  for Homepage
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> Full</span> SEO
                  Optimized{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Custom </span> Fonts
                  & Colors{" "}
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Advance </span> CSS
                  Coding
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Google </span>{" "}
                  Sitemap
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg "> Contact </span> Us
                  Form{" "}
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Social </span> Icons
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Uploading </span> &
                  Configuration
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Server </span>{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Free </span> Support{" "}
                </p>
              </div>
              <h4 className="elementHeading4 text-primary py-6 ">
                Price $899.00
              </h4>
            </div>
            {/* fourth */}

            <div className="Second border-2 text-center p-4  space-y-3 ">
              <div className="flex justify-center">
                <Image src="/img/p2.webp" width="50" height="70" alt="IMAGE" />
              </div>
              <h5 className="elementHeading5  ">Custom Website</h5>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Free</span> Domain &
                  Hosting{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg "> Professional</span>{" "}
                  Layout{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> Optimized </span>{" "}
                  Images
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">12 </span> Pages{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> Web </span> Type
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Unlimited </span>{" "}
                  Pages
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> Can </span> be
                  Added
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Slideshowe </span>{" "}
                  for Homepag
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg "> Full</span> SEO
                  Optimized{" "}
                </p>
              </div>
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Custom </span> Fonts
                  & Colors{" "}
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Advance </span> CSS
                  Coding
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600" />
                <p>
                  <span className=" font-semibold text-lg ">Google </span>{" "}
                  Sitemap
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5  text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg "> Contact </span> Us
                  Form{" "}
                </p>
              </div>{" "}
              <div className="flex">
                <LuCheckCheck className=" w-5 text-green-600 " />
                <p>
                  <span className=" font-semibold text-lg ">Social </span> Icons
                </p>
              </div>
              <h4 className="elementHeading4 text-primary py-6 ">Lets Talk</h4>
            </div>
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
