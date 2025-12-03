"use client"
import React from 'react';
import Image from 'next/image';
import doctorImg from '../src/assets/doctor-shows-interaction-patient-mechanism-blurred-background-222802318.webp';
import PageBanner from './PageBanner';
import Hexagon from '@/src/assets/hex.svg'
import AboutHeader from '../src/assets/assets/BG Images/AboutUsHeader.webp'
import AboutBody from '../src/assets/assets/BG Images/AboutUsBody.webp'
// Placeholder image URL. Replace with your local import if needed.
const doctorImgUrl = doctorImg;

function About() {
  const purpleColor = "#9a4593"; 

  return (
    <>
    <PageBanner title="ABOUT US" image={AboutHeader} />
    <section id="about" className="w-full bg-white overflow-hidden relative flex flex-col md:flex-row py-12 md:py-24">
      {/* --- LEFT COLUMN: Text Content --- */}
      <div className="w-full md:w-1/2 flex flex-col justify-start px-8 md:px-16 lg:px-24 relative z-10 order-2 md:order-1">
        
        {/* Decorative Pattern - Top Left Circles */}
        <div className="absolute -left-24 -top-24 w-80 h-80 opacity-[0.08] pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" stroke={purpleColor} strokeWidth="0.5">
                <circle cx="50" cy="50" r="45" />
                <circle cx="50" cy="50" r="38" />
                <circle cx="50" cy="50" r="31" />
                <circle cx="50" cy="50" r="24" />
                <circle cx="50" cy="50" r="17" />
            </svg>
        </div>

        <div className="relative">
            <div className="space-y-8 text-xl text-justify leading-relaxed text-gray-600">
                <p>
                    Inspire Gene delivers high quality  <span className="font-semibold text-[#9a4593]">Point of Care diagnostics, specialty neuro markers, high quality QC solutions</span> and <span className="font-semibold text-[#9a4593]">medical devices</span> to hospitals, clinics, ICUs and veterinary care facilities. Our strong relationships with healthcare professionals help us understand real world needs and provide tailored, high value solutions that support better clinical outcomes.
                </p>
                <p>
                    We work closely with leading manufacturers to offer a complete product range and stay ahead of evolving market demand. With a focus on exceptional customer experience, we ensure optimal equipment performance through our dedicated technical support and service team.
                </p>
            </div>
        </div>
      </div>

      {/* --- RIGHT COLUMN: Image --- */}
      <div className="w-full md:w-1/2 relative flex items-center justify-end order-1 md:order-2 pb-10 md:pb-0">
        
        {/* The Image Container */}
        <div className="relative w-full h-[400px] md:h-[400px] md:w-[90%] z-20">
           <Image 
              src={AboutBody} 
              alt="Doctor writing on a clipboard" 
              fill
              className="object-cover object-center md:rounded-l-[1rem] shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>

        {/* Decorative Pattern - Bottom Right Hexagons */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-[0.08] z-10 pointer-events-none hidden md:block">
            <svg viewBox="0 0 100 100" fill="none" stroke={purpleColor} strokeWidth="0.5">
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
                <path d="M50 12 L82.9 31 L82.9 69 L50 88 L17.1 69 L17.1 31 Z" />
                <path d="M50 24 L72.5 37 L72.5 63 L50 76 L27.5 63 L27.5 37 Z" />
            </svg>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;