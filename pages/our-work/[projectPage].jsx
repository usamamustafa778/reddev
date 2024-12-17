import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import projectsData from '../../components/json/projectsdata.json';
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import FirstNavbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import OurWork from "@/components/home/OurWork";

export default function ProjectPage() {
  const router = useRouter();
  const { projectPage } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectPage) {
      const foundProject = projectsData.find((p) => p.company === projectPage);
      setProject(foundProject);
    }
  }, [projectPage]);

  if (!projectPage) {
    return <div>Loading...</div>; // Return a loading state while waiting for the query
  }

  if (!project) {
    return <div>Project not found for company: {projectPage}</div>;
  }

  return (
    <FullContainer>
      <FirstNavbar />
      <Container>
        <div className="py-24 grid  grid-cols-1 md:grid-cols-2 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
          <p className="text-xl text-gray-500">{project.description}</p>
        </div>

        {/* banner */}
        <a className=" " href={project.url} alt="https://starlight-nft.netlify.app/">
          <Image
            className="rounded-2xl"
            src={project.bannerimg}
            alt="bannerimage"
            height={1500}
            width={1500}
          />
        </a>

        {/* achivements */}
        <ul className="flex justify-evenly py-12">
          {project.achievements.map((achieve, index) => (
            <li key={index} className="flex flex-col text-center gap-2">
              <div className="text-2xl md:text-5xl text-primary font-bold ">
                {achieve.stat}
              </div>
              <p className="text-sm md:text-base">{achieve.description}</p>
            </li>
          ))}
        </ul>
        {/* about industry of project */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
          <div className="col-span-3  ">
            <h1 className="text-3xl md:text-4xl text-left font-bold text-secondary  pb-4">
              Accelerating Team Expansion and Enhancing HR Operations
            </h1>
            <p className="text-base md:text-lg">
              Sapling, a leading SaaS company, provides a sophisticated platform
              designed to enhance HR operations. They offer automation,
              integration, and superior employee experiences, catering to a
              global clientele.
            </p>
          </div>
          <div className="text-gray-500 col-span-2 border-2 rounded-md p-4 justify-between flex flex-col">
            <div className="flex justify-between border-b py-2">
              <h2>Industry:</h2>{" "}
              <p className="text-secondary font-semibold">{project.industry}</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <div>Location:</div>
              <p className="text-secondary font-semibold">{project.location}</p>
            </div>
            <h2 className="py-2">Services Used</h2>
            <ul>
              {project.servicesUsed.map((service, index) => (
                <button
                  key={index}
                  className="border rounded-full py-2 px-3 m-1 font-semibold text-secondary"
                >
                  {service}
                </button>
              ))}
            </ul>
          </div>
        </div>

        {/* Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
          {/* Images section */}
          <div className="grid grid-cols-2  gap-4 justify-center items-center py-8">
            {project.solutionimage.map((item, index) => (
              <Image
                className={` flex flex-row h-full object-cover rounded-md overflow-auto w-full ${
                  index === 1 || index === 3 ? " mt-10" : ""
                }`}
                key={index}
                src={item.img}
                alt={`solution-image-${index}`}
                height={300}
                width={300}
              />
            ))}
          </div>

          {/* Solutions text section */}
          <div className=" flex flex-col gap-2 justify-center">
            <h1 className="text-3xl md:text-4xl font-bold md:px-6  text-secondary">{project.solutionheading}</h1>
            {project.solutions.map((solution, index) => (
              <div key={index} className="flex gap-2 pl-0 md:pl-6 pt-2">
                <GoDotFill className="text-primary text-4xl  flex relative py-0" />{" "}
                <p className="text-gray-500 text-xs">
                  <strong className="font-bold"> {solution.title}: </strong>
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*  className="">Operational Efficiency */}
        <div className="grid grid-col-1 md:grid-cols-2 py-12 gap-8 md:gap-2">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary text-left">
              Enhancing Operational Efficiency:
            </h1>
            <ul>
              {project.operationalEfficiency.map((efficiency, index) => (
                <div key={index} className="flex gap-2 pt-2">
                  <GoDotFill className="text-primary text-4xl  flex relative py-0" />{" "}
                  <p className="text-gray-500 text-xs">
                    <strong className="font-bold"> {efficiency.title}: </strong>
                    {efficiency.description}
                  </p>
                </div>
              ))}
            </ul>
            <div className=" justify-center flex">
              {project.operationalEfficiencyimg.map((item, index) => (
                <Image
                alt="image"
                  className=""
                  key={index}
                  src={item.img}
                  height={350}
                  width={350}
                />
              ))}
            </div>
          </div>
          <div>
            {" "}
            {project.operationalEfficiencyimg2.map((item, index) => (
              <Image
              alt="image"
                className="w-full h-full md:px-8 px-0 object-cover "
                key={index}
                src={item.img}
                height={300}
                width={300}
              />
            ))}
          </div>
        </div>

        {/* Benefits Achieved */}
        <h1 className="text-3xl md:text-4xl text-center text-secondary font-bold pt-24">Benefits Achieved {project.company}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  py-12">
          <ul className=" flex flex-col gap-2">
            {project.benefits.map((benefit, index) => (
              <li
                className={`${
                  index === 0 || index === 1 ? "flex flex-col " : "hidden"
                }`}
                key={index}
              >
                <div className="text-[5rem] font-bold md:text-right text-primary/10">
                  0{index + 1}
                </div>
                <div className="md:text-right">

                {benefit}
                </div>
              </li>
            ))}
          </ul>
          <div className=" flex items-center">
            <Image
              className=""
              src={project.benefitsimg}
              alt="bannerimage"
              height={1500}
              width={1500}
            />
          </div>
          <ul className="">
            {project.benefits.map((benefit, index) => (
              <li
                className={`${
                  index === 2 || index === 3 ? "flex flex-col" : "hidden"
                }`}
                key={index}
              >
                <div className="text-[5rem] font-bold text-primary/10">
                  0{index + 1}
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <OurWork />
      <Footer />
    </FullContainer>
  );
}
