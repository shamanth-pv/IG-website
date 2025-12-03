import React from 'react';
import Image from 'next/image';

import doctorImg from '../src/assets/doctor-shows-interaction-patient-mechanism-blurred-background-222802318.webp';
import Bubble from '@/src/assets/bubble.svg'
// Placeholder images
const acuteCareImg = doctorImg
const petCareImg = doctorImg

function SolutionsSection() {
  // Color Palette
  const colors = {
    background: "#210d3bff",//"#2A1B3D", // Deep Purple
    accent: "#00C7B1",     // Vibrant Cyan/Teal
    textHighlight: "#00C7B1"
  };

  // Hexagon Clip Path (Rounded Hexagon look can be achieved by masking, but sticking to polygon for strict shape)
  // Modified to be slightly wider/rounder if needed, but standard pointy hexagon fits best
  const hexClipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <section 
        id="solutions" 
        className="w-full min-h-screen relative overflow-hidden flex items-center py-20" 
        style={{ backgroundColor: colors.background }}
    >
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* --- LEFT COLUMN: Text Content --- */}
            <div className="space-y-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
                    OUR SOLUTIONS
                </h2>
                
                {/* Cyan Divider Line */}
                <div className="h-1.5 w-24 bg-[#00C7B1] mx-auto lg:mx-0 rounded-full"></div>

                <div className="space-y-6 text-lg leading-relaxed text-white/80">
                    <p>
                        Inspire Gene delivers comprehensive solutions tailored specifically for <span className="font-semibold text-[#00C7B1]">Point of Care Diagnostics</span> and <span className="font-semibold text-[#00C7B1]">Medical Device</span> sectors. We understand the unique challenges of these fast-paced environments.
                    </p>
                    <p>
                        Our close partnerships with top-tier manufacturers allow us to curate and market complete product ranges, ensuring ICUs, clinics, and hospitals have immediate access to the <span className="font-semibold text-[#00C7B1]">high-value tools</span> they need to anticipate demand and improve patient outcomes.
                    </p>
                </div>

                {/* Cyan Button */}
                {/* <div className="pt-4">
                    <button className={`bg-[#00C7B1] hover:bg-[#00a896] text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#00C7B1]/50 hover:-translate-y-1`}>
                        View All Solutions
                    </button>
                </div> */}
            </div>

            {/* --- RIGHT COLUMN: Two Hexagonal Links --- */}
            <div className="relative flex flex-col md:flex-row gap-8 justify-center lg:justify-end items-center">
                
                {/* Link Card 1: Acute Care */}
                <a href="#acute-care" className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:-translate-y-2">
                    <div 
                        className="relative w-[240px] h-[280px] drop-shadow-xl transition-all duration-300 group-hover:drop-shadow-[0_20px_20px_rgba(0,199,177,0.3)]"
                        style={{ clipPath: hexClipPath }}
                    >
                        <Image 
                            src={acuteCareImg}
                            alt="Acute Care Solutions"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#2A1B3D]/30 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300"></div>
                        {/* Border Outline effect */}
                        <div className="absolute inset-0 border-[4px] border-[#00C7B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white group-hover:text-[#00C7B1] transition-colors">
                        <span className="text-xl font-bold tracking-wide">Acute Care</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </a>

                {/* Link Card 2: Pet Care (Staggered slightly down on desktop for visual interest) */}
                <a href="#pet-care" className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:-translate-y-2 lg:mt-16">
                    <div 
                        className="relative w-[240px] h-[280px] drop-shadow-xl transition-all duration-300 group-hover:drop-shadow-[0_20px_20px_rgba(0,199,177,0.3)]"
                        style={{ clipPath: hexClipPath }}
                    >
                        <Image 
                            src={petCareImg}
                            alt="Pet Care Solutions"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#2A1B3D]/30 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300"></div>
                        {/* Border Outline effect */}
                        <div className="absolute inset-0 border-[4px] border-[#00C7B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="flex items-center gap-2 text-white group-hover:text-[#00C7B1] transition-colors">
                        <span className="text-xl font-bold tracking-wide">Pet Care</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </a>

            </div>
        </div>
        <div className="absolute bottom-10 right-10 z-20 opacity-60 pointer-events-none">
           <Image src={Bubble} alt="Bubble" width={400} height={400} />
        </div>
    </section>
  );
}

export default SolutionsSection;