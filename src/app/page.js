"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Skills from "@/app/components/myservices";
import MyOffer from "@/app/components/my-offer";
import Hero from "@/app/components/hero";
import { ModeToggle } from "@/app/components/mode-toggle";

const HomePage = () => {
  const comp = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoaded(true);
        },
      });

      tl.from("#intro-slider", { xPercent: "-100", duration: 1.3, delay: 0.3 })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          color: "#ffffff", // Ensure text is visible
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", { xPercent: "-100", duration: 1.3 });

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      {!isLoaded && (
        <div
          id="intro-slider"
          className="h-screen p-10 absolute top-0 left-0 w-full flex flex-col gap-10 tracking-tight z-50 justify-center items-center text-center"
        >
          {/* Background Effect */}
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

          {/* Loader Text */}
          <h1 className="text-6xl font-bold text-white z-10" id="title-1">
            Software Engineer
          </h1>
          <h1 className="text-6xl font-bold text-white z-10" id="title-2">
            Designer
          </h1>
          <h1 className="text-6xl font-bold text-white z-10" id="title-3">
            Freelancer
          </h1>
        </div>
      )}

      {/* Main Page Content */}
      {isLoaded && (
        <div
          className="relative opacity-0 animate-fadeIn transition-opacity duration-700"
          style={{ animation: "fadeIn 1.5s forwards" }}
        >
          <Hero />
          <ModeToggle />
          <MyOffer />
          <Skills />
        </div>
      )}

      {/* CSS Keyframes for Fade-in Effect */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
