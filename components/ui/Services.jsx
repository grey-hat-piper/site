"use client"
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./tabs";
import Image from "next/image";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Socials from "./Socials";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const serviceData =[
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction Services",
    description: "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, our expertise transforms ideas into reality.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Finish",
    ],
    thumbs: [
      {url: "/assets/img/services/thumb-1.jpg"},
      {url: "/assets/img/services/thumb-2.jpg"},
    ]
  
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description: "We upgrade and restore spaces with careful planning and skilled execution. From structural improvements to modern finishes, we enhance functionality, safety, and appearance, hence bringing new life to existing buildings without compromising their integrity.",
    serviceList: [
      "Kitchen Remodel",
      "Flooring & Tiling",
      "Furnishing",
      "Painting",
      "Carpentry",
      "Electrical Upgrades",
      "Mold Solutions"
    ],
    thumbs: [
      {url: "/assets/img/services/thumb-3.jpg"},
      {url: "/assets/img/services/thumb-4.jpg"},
    ]
  
  },
  {
    name: "security",
    icon: <PiUserGearFill />,
    title: "Security Services",
    description: "We provide practical security solutions designed to protect people, property, and assets. From surveillance systems to access control and on-site measures, our services focus on prevention, reliability, and peace of mind.",
    serviceList: [
      "Inspection and Maintenace",
      "CCTV installation",
      "Burglar Proof Works",
      "Security Fencing",
      "Permits & Documentation",
      "Live Monitoring",
      "Safety",
    ],
    thumbs: [
      {url: "/assets/img/services/thumb-5.jpg"},
      {url: "/assets/img/services/thumb-6.jpg"},
    ]
  
  },
  {
    name: "utility",
    icon: <PiWrenchFill />,
    title: "Utility Services",
    description: "We deliver dependable utility solutions that keep properties functional and efficient. From electrical and plumbing systems to water and power management, our work ensures safe installation, consistent performance, and long-term reliability.",
    serviceList: [
      "Electrical Wiring",
      "Home Internet(Broadband)",
      "Water Purification System",
      "Bio-Fill & Bio-Gas",
    ],
    thumbs: [
      {url: "/assets/img/services/thumb-7.jpg"},
      {url: "/assets/img/services/thumb-8.jpg"},
    ]
  
  },
];

const Services = () => {
  const [activateTab, setActivateTab] = useState("construction");
  return (
    <section className="pt-16 xl:pt-32 " id="services">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <Pretitle text="Our Services" center />
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Offering tailored construction solutions, from planning to completion, with a focus on quality and trust.
          </p>
        </div>
        {/* tabs */}
        <Tabs defaultValue="construction" 
        onValueChange={(value) => setActivateTab(value)}
        className="flex flex-col xl:flex-row w-full gap-[30px]">
          <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
            {serviceData.map((item) => {
              return (<TabsTrigger key={item.name} value={item.name} 
              className="cursor-pointer w-full rounded-none h-[100px] flex items-center relative shadow-2xl p-0 outline-none">
                <div 
                className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${activateTab === item.name ? "bg-primary text-white" : "bg-accent text-primary"}`}>
                  <div className="[&>svg]:!w-10 [&>svg]:!h-10">
                    {item.icon}
                  </div>
                </div>
                <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                  {item.name}
                </div>
              </TabsTrigger>)
            })}
          </TabsList>
          {/* tabs content */}
          <div className="flex bg-white shadow-xl h-fill p-[30px]">
            {serviceData.map((item) => (
              <TabsContent
              key={item.name}
              value={item.name}
              className="m-0">
                <div className="flex flex-col md:flex-row gap-[30px] ">
                  {/* images */}
                  <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                    {item.thumbs.map((thumb, index) => (
                      <div key={index}
                      className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]">
                        <Image src={thumb.url} fill alt="" />
                      </div>
                    ))}
                  </div>
                  {/* text & btn */}
                  <div>
                    <div className="ml-0 xl:w-2xl">
                      <h3 className="h3 mb-6">
                        {item.title}
                      </h3>
                      <p className="mb-10">{item.description}</p> 
                      {/* service list */}
                      <ul className="grid grid-cols-2 gap-4 mb-12">
                        {item.serviceList.map((service, index)=> {
                          return (
                            <li key={index} className="flex items-center gap-4">
                              <div className="w-[6px] h-[6px] bg-accent"></div>
                              <div className="capitalize font-medium text-primary">
                                {service}
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                      {/* btn */}
                      <Popover>
                        <PopoverTrigger>
                            <div className='ml-0 cursor-pointer w-[210px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] group bg-accent'>
                              <div className='flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase'>
                                EXPLORE MORE
                              </div>
                              <div className="w-11 h-11 bg-primary flex items-center justify-center">
                                <RiArrowRightUpLine className='text-white text-xl group-hover:rotate-45 transition-all duration-200'/>
                              </div>
                            </div>
                        </PopoverTrigger>

                        <PopoverContent
                          side="right"
                          align="end"
                          sideOffset={7}
                          className="bg-primary md:w-auto w-[125px] z-9"
                        >
                          <Socials
                            containerStyles="justify-center items-center gap-8 mx-auto xl:mx-0 text-xl h-[54px] flex"
                            iconStyles="text-accent"
                          />
                        </PopoverContent>
                      </Popover>

                    </div>
                  </div> 

                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Services;
