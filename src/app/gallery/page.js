"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState(null);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const galleryRef = useRef(null);

  // Fetch JSON dynamically on the client
  useEffect(() => {
    const fetchGallery = async () => {
      const response = await fetch("@/app/components/constants/gallery.json"); // Ensure this file exists in `public/`
      const data = await response.json();
      setGalleryData(data);
    };
    fetchGallery();
  }, []);

  useEffect(() => {
    if (!galleryRef.current || !galleryData) return;

    gsap.fromTo(
      galleryRef.current.children,
      { opacity: 0, rotateY: 90 },
      { opacity: 1, rotateY: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, [galleryData]);

  const openLightbox = (src) => {
    setLightboxImage(src);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
    setLightboxImage("");
  };

  if (!galleryData) return <p className="text-center">Loading...</p>; // Prevents hydration mismatch

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5 lg:pb-16 pb-10">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Gallery
          </h2>
          <div className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Step into a realm where art comes to life.
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery grid gap-8" ref={galleryRef}>
          <div className="flex flex-col mb-10">
            <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
              <div className="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
                <img
                  src={galleryData.images[0]}
                  alt="Gallery image"
                  className="object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full"
                  onClick={() => openLightbox(galleryData.images[0])}
                />
              </div>
              <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
                <img
                  src={galleryData.images[1]}
                  alt="Gallery image"
                  className="object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full"
                  onClick={() => openLightbox(galleryData.images[1])}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
              {galleryData.images.slice(2).map((src, index) => (
                <div key={index} className="h-[277px] w-full rounded-3xl">
                  <img
                    src={src}
                    alt={`Gallery image ${index + 3}`}
                    className="object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full"
                    onClick={() => openLightbox(src)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxVisible && (
          <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
            <span
              className="text-white text-3xl absolute top-5 right-5 cursor-pointer"
              onClick={closeLightbox}
            >
              &times;
            </span>
            <img src={lightboxImage} alt="Lightbox" className="max-w-full max-h-full" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
