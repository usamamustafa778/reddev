import { useState } from 'react'
import { Tab } from '@headlessui/react'
import FullContainer from '../common/FullContainer'
import Container from '../common/Container'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function OurOffering() {
  let [categories] = useState({
    "Software consulting": [
      {
        id: 1,
        title: 'Software consulting',
        para: "We combine deep multi-domain expertise, client-centric thinking, and an innovative approach to design and plan reliable solutions that perfectly fit the needs and behavior of their users.",
      button: "Our Software Consulting service →",
      },
    ],
   " Custom software development": [
      {
        id: 1,
        title: 'Custom software development',
        para: "We create software with long-term business value – tailored uniquely to your business processes and adjustable to future needs.",
        button:"Our custom software developement service →",
    },
  
    ],
   "Enterprise software development" : [
      {
        id: 1,
        title: 'Enterprise software development',
        para:"We build multi-faceted enterprise solutions that easily withstand the highest loads, scale up as your business grows, and flexibly accommodate functional extensions.",
        button:"Our software development service →",       
      },
      
    ],
    "ASoftware product development" : [
        {
          id: 1,
          title: 'Software product development',
          para:"We build strong SaaS, mobile, and desktop software that's user-friendly. Our quick development approach gets your basic version in 1-4 months, with updates every 2-4 weeks afterward.",
          button:" Our Software product development service →",       
        },
        
      ],
      "Cloud application development" : [
        {
          id: 1,
          title: ' Cloud application development',
          para:" We create and provide cloud applications that can grow with your needs, are easy to use anywhere, and keep your information safe. We also assist in moving apps from in-house systems to the cloud, no matter how complicated they are ",
          button:"Our cloud application  development service  →",       
        },
        
      ],
      " Legacy software modernization" : [
        {
          id: 1,
          title: '  Legacy software modernization',
          para:"We makeover and improve your current software to provide a modern solution without breaking the bank and causing disruptions to your business operations.          ",
          button:" Our Legacy software modernization service →",       
        },
        
      ],
      " Software support and maintenance" : [
        {
          id: 1,
          title: ' Software support and maintenance',
          para:"We make sure your software works well and stays up-to-date. We regularly check its performance, fix issues quickly, and add new features to keep it running smoothly and meeting your needs.      ",
          button:"Our Software support and maintenance Services→",       
        },
        
      ],
  })

  return (
    <FullContainer >
        <Container >
        <p className="py-10 text-black text-lg pl-4 lg:pl-0">
            <span className="font-bold text-2xl ">
           Software development services {" "}
            </span>
            that elevate your business. Our experts deliver tailored solutions, enhancing efficiency and driving growth. From custom applications to ongoing support, we`&apos;`re your trusted partner in technological innovation and success.
          </p>
        <h2 className="elementHeading2 my-8 pl-4 lg:pl-0 ">
            {" "}
            <span className=" border-b-2 border-yellow-600 ">Exp</span>
            lore Our Offering
          </h2>
       <div className=" grid  lg:grid-cols-tab max-w-full px-2 pb-16 ">
      <Tab.Group>

        <Tab.List className="  bg-blue-950 p-1 lg:space-y-6 lg:py-4 ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-2xl  font-medium ',
                  '  ',
                  selected
                    ? 'bg-blue-800 lg:py-6 text-white '
                    : 'text-blue-100  hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        
        <Tab.Panels className=" lg:px-8 bg-white shadow-2xl">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 "
                  >
                    <div className="space-y-10">

                    <h3 className="text-2xl font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 text-xl  space-y-10 font-normal  text-gray-500">
                      <li>{post.para}</li>
                      <li>{post.button}</li>
                    </ul>
                    </div>

                 
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </Container>

    </FullContainer>

  )
}
