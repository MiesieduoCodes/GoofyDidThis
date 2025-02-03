"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import featuresData from '@/app/components/constants/myservices.json'; // Adjust the path as necessary

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
    const sectionRef = useRef(null);
    const featureRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
        );

        featureRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: index * 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
      <section ref={sectionRef} className="py-24 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-bold text-yellow-400 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                My Portfolio
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-gray-300 mb-5">
                Explore my work in web development, game development, and nature photography. Each project reflects my passion for creativity and innovation.
              </p>
              <a
                href="#"
                className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-yellow-400 lg:justify-start hover:text-white"
              >
                View Projects
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {featuresData.map((feature, index) => (
              <div ref={el => featureRefs.current[index] = el} key={index} className="group relative w-full bg-gray-900 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-yellow-400">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={feature.icon} stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-3 capitalize transition-all duration-500 group-hover:text-black">
                  {feature.title}
                </h4>
                <p className="text-sm font-normal text-gray-300 transition-all duration-500 leading-5 group-hover:text-black">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default FeaturesSection;
