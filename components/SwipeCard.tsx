"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Hexagon from '@/src/assets/Design Elements/HexPurple.svg'
import Landing1 from '@/src/assets/BG Images/Landing2.webp'
import Landing3 from '@/src/assets/BG Images/Landing3.webp'
import doctorImg from '@/src/assets/images/pulseImage.jpeg';
const labImg = doctorImg;
const landingVideo = "/videos/Landing1.mp4"

export const slides = [
  {
    id: 1,
    title: "Innovative Arterial Blood Gas Sampler",
    linkText: "Learn more about IG Artery",
    link: "/products?category=Pre-Analytics",
    image: Landing1,
    navColor: "text-black" 
  },
  {
    id: 2,
    title: "Reliable Tools in POC That Strengthen Patient Care",
    linkText: "Explore our POC solutions",
    link: "/products?category=Point+of+Care",
    image: labImg, 
    video: "/videos/Landing1.mp4",
    navColor: "text-black"
  },
  {
    id: 3,
    title: "Trusted Diagnostics Meet Clinical Needs",
    linkText: "Explore our product range",
    link: "/products",
    image: Landing3, 
    navColor: "text-black"
  }
];

const SlowMotionVideo = ({ src }) => {
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // if (isActive) {
      video.currentTime = 0;
      video.playbackRate = 1.0;
      video.play().catch((e) => console.log("Auto-play blocked:", e));
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
  }, 
  );

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      className="object-cover object-center w-full h-full"
    />
  );
};

// Main component
function SwipeCard({ current, setCurrent }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [setCurrent]);

  return (
    <div className="font-montserrat relative w-full h-screen overflow-hidden bg-white">

      {slides.map((slide, index) => {
        const isActive = index === current;
        const showContent = isActive && mounted;

        return (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
              ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >

            {/* RIGHT SIDE IMAGE/VIDEO */}
            <div className="absolute top-0 right-0 w-full h-full">
              <SlowMotionVideo src={landingVideo} />
            </div>

            {/* GRADIENT */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-white to-transparent" /> */}

            {/* TEXT */}
            <div className="relative z-20 h-full w-full max-w-7xl mx-auto flex items-center px-8 md:px-16">
              <div className="max-w-xl mt-20">

                <h1
                  className={`text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#9a4593]
                    transition-all duration-1000 ease-out delay-300
                    ${showContent ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
                >
                  {slide.title}
                </h1>

                <div
                  className={`h-1 w-32 mb-6 bg-gray-300
                    transition-all duration-1000 ease-out delay-500
                    ${showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
                />

                <a
                  href={slide.link}
                  className={`group inline-flex flex-col
                    transition-all duration-1000 ease-out delay-700
                    ${showContent ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
                >
                  <span className="text-gray-500 italic text-xl tracking-wide group-hover:text-gray-800 transition-colors">
                    {slide.linkText}
                  </span>
                  <span className="h-[1px] w-full bg-gray-400 mt-1 transition-all group-hover:bg-gray-800"></span>
                </a>

              </div>
            </div>
          </div>
        );
      })}

      {/* BOTTOM DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`
              h-3 rounded-full transition-all duration-500 border border-blue-500
              ${current === idx ? "w-8 bg-blue-500" : "w-3 bg-transparent hover:bg-blue-200"}`}
          />
        ))}
      </div>

      {/* DECORATION */}
      <div className="absolute bottom-10 left-10 z-20 opacity-60 pointer-events-none">
        <Image
          src={Hexagon}
          alt="Hexagon"
          width={150}
          height={150}
          className="animate-[spin_10s_linear_infinite]"
        />
      </div>

    </div>
  );
}

export default SwipeCard;
