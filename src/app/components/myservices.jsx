"use client";
import React from "react";
import portfolioData from '@/app/components/constants/myskills.json'; // Adjust the path as necessary

const PortfolioSection = () => {
  return (
    <section className="py-24 relative bg-black text-white">
      <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-center flex-col gap-5 mb-14">
          <span className="bg-yellow-400 text-black text-xs font-medium px-3.5 py-1 rounded-full">
            My Portfolio
          </span>
          <h2 className="font-manrope font-bold text-4xl text-center">
            Showcasing My Work & Expertise
          </h2>
          <p className="text-lg font-normal text-gray-300 max-w-3xl mx-auto text-center">
            Explore my latest projects, services, and skills in web development, game development, and nature photography.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
          {portfolioData.map((item, index) => (
            item.isFeatured ? (
              <div
                key={index}
                className="sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col px-7 py-6 transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              >
                <h6 className="font-medium text-xl leading-8 mb-4 text-yellow-400">
                  {item.title}
                </h6>
                <p className="text-base font-normal text-gray-300">
                  {item.description}
                </p>
              </div>
            ) : (
              <div key={index} className="block">
                <img
                  src={item.imageUrl}
                  alt={`Project image ${index + 1}`}
                  className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )
          ))}
        </div>
        <button className="w-full rounded-lg py-4 px-6 text-center bg-yellow-400 text-lg font-medium text-black transition-all duration-300 hover:text-white hover:bg-yellow-500">
          Load More
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;