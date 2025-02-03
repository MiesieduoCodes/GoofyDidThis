"use client";
import React from "react";
import aboutData from '@/app/components/constants/about.json'; // Adjust the path as needed

const AboutSection = () => {
  const { title, subtitle, description, statistics, buttonText, imageUrl } = aboutData.about;

  return (
        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                    <h6 className="text-black text-base font-normal leading-relaxed">{subtitle}</h6>
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 className="text-yellow-500 text-4xl font-bold leading-normal lg:text-start text-center">
                        {title}
                      </h2>
                      <p className="text-gray-700 text-base font-normal leading-relaxed lg:text-start text-center">
                        {description}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-center items-start gap-6 flex">
                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                      {statistics.slice(0, 2).map((stat, index) => (
                        <div
                          key={index}
                          className="w-full h-full p-3.5 rounded-xl border border-black hover:border-yellow-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                        >
                          <h4 className="text-black text-2xl font-bold leading-9">{stat.title}</h4>
                          <p className="text-gray-600 text-base font-normal leading-relaxed">{stat.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                      {statistics.slice(2).map((stat, index) => (
                        <div
                          key={index}
                          className="w-full p-3.5 rounded-xl border border-black hover:border-yellow-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                        >
                          <h4 className="text-black text-2xl font-bold leading-9">{stat.title}</h4>
                          <p className="text-gray-600 text-base font-normal leading-relaxed">{stat.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="sm:w-fit w-full group px-3.5 py-2 bg-yellow-200 hover:bg-yellow-300 rounded-lg shadow-lg transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span className="px-1.5 text-black text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                    {buttonText}
                  </span>
                  <svg
                    className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"
                  >
                    <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="w-full lg:justify-start justify-center items-start flex">
                <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-black relative">
                  <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover" src={imageUrl} alt="About Us image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    export default AboutSection;