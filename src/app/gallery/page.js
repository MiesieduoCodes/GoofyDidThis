"use client";
import React, { useState } from "react";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "https://pagedone.io/asset/uploads/1713942989.png",
    "https://pagedone.io/asset/uploads/1713943004.png",
    "https://pagedone.io/asset/uploads/1713943024.png",
    "https://pagedone.io/asset/uploads/1713943039.png",
    "https://pagedone.io/asset/uploads/1713943054.png",
    "https://pagedone.io/asset/uploads/1713943060.png",
    "https://pagedone.io/asset/uploads/1713943070.png",
    "https://pagedone.io/asset/uploads/1713943080.png",
    "https://pagedone.io/asset/uploads/1713943090.png",
  ];

  const openLightbox = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5 lg:pb-16 pb-10 text-center">
          <h2 className="w-full text-gray-900 text-4xl font-bold leading-normal">
            Our Gallery
          </h2>
          <div className="w-full text-gray-600 text-lg font-normal leading-8">
            Step into a realm where art comes to life.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((src, index) => (
            <div key={index} className="h-[300px] rounded-3xl overflow-hidden group">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image object-cover w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-105 hover:grayscale"
                onClick={() => openLightbox(src)}
              />
            </div>
          ))}
        </div>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <span className="text-white text-3xl absolute top-5 right-5 cursor-pointer" onClick={closeLightbox}>
              &times;
            </span>
            <img
              src={currentImage}
              alt="Lightbox"
              className="lightbox-image max-w-full max-h-full"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;