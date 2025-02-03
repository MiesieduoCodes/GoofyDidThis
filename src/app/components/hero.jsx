'use client'

import { useEffect } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  useEffect(() => {
    gsap.from(".hero-title", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from(".hero-subtitle", { duration: 1, delay: 0.5, y: -50, opacity: 0 });

    // Background animation for the tiles
    gsap.to(".hero-background", {
      duration: 4, 
      x: '100%', 
      repeat: -1, 
      ease: "linear", 
      backgroundPosition: '0% 0%', 
      backgroundSize: 'auto 100%',
    });
  }, []);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="hero-background absolute inset-0 bg-repeat"></div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="hero-title text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Your Creative Journey Starts Here
          </h1>
          <p className="hero-subtitle mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            Showcasing my work, experiences, and skills in the world of design and development.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#portfolio"
              className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-400"
            >
              View Portfolio
            </a>
            <a href="#about" className="text-sm font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
