import React from 'react';
import Image from 'next/image';
import doctorImg from '../src/assets/doctor-shows-interaction-patient-mechanism-blurred-background-222802318.webp';

// Placeholder images for the team (replace with real photos later)
// Ideally, use square images for best results in circular frames
const ranjithImg = doctorImg;
const sitharamanImg = doctorImg;
const sureshImg = doctorImg;

// Placeholder for the background wave decoration
// Replace this URL with your local import: import waveImg from '@/assets/wave.png';
const waveDecorationImg = doctorImg;

function LeadershipSection() {
  const team = [
    {
      name: "Mr. Ranjith K",
      role: "SALES DIRECTOR",
      bio: "25+ years in IVD and medical devices with leadership roles across India and Southeast Asia. Expert in sales strategy and market development.",
      image: ranjithImg,
      linkedin: "#"
    },
    {
      name: "Mr. Sitharaman S",
      role: "OPERATIONS DIRECTOR",
      bio: "25 years in diagnostics and services with a strong engineering background. Skilled in building and managing operations.",
      image: sitharamanImg,
      linkedin: "#"
    },
    {
      name: "Mr. Suresh Kumar",
      role: "HEAD OF SERVICE",
      bio: "15+ years in service management with expertise in critical care and radiology equipment. Formerly with Danaher Corp.",
      image: sureshImg,
      linkedin: "#"
    }
  ];

  return (
    <section id="leadership" className="relative w-full min-h-screen py-24 overflow-hidden bg-[#4A4A4A] flex flex-col justify-center">
      
      {/* 1. HEARTBEAT LINE DECORATION (Top Right) */}
      <div className="absolute top-10 right-0 left-0 h-32 pointer-events-none opacity-40">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-full text-red-600">
           <path 
             d="M0 60 H800 L820 10 L840 110 L860 30 L880 90 L900 60 H1440" 
             stroke="currentColor" 
             strokeWidth="2"
             vectorEffect="non-scaling-stroke"
           />
        </svg>
      </div>

      {/* 2. BACKGROUND WAVE IMAGE (Bottom Left) */}
      {/* Replaced SVG with Image component as requested */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
          <Image 
            src={waveDecorationImg} 
            alt="Background Wave Decoration" 
            fill
            className="object-contain object-bottom-left"
          />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* HEADER */}
        <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Leadership That Powers <br />
                <span className="text-gray-300">Innovation and Care</span>
            </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {team.map((member, index) => (
                <div key={index} className="relative group">
                    
                    {/* The White Card */}
                    <div className="bg-white rounded-[2rem] p-8 pt-24 text-center shadow-2xl transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col">
                        
                        {/* 3. POP-OUT IMAGE CONTAINER */}
                        {/* Absolute positioned to sit half-in/half-out of the card */}
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                            <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                                <Image 
                                    src={member.image} 
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-1">
                            {member.name}
                        </h3>
                        <p className="text-xs font-bold tracking-widest text-gray-500 mb-6 uppercase">
                            {member.role}
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                            {member.bio}
                        </p>

                        {/* LinkedIn Icon */}
                        <a href={member.linkedin} className="inline-block text-[#0077b5] hover:scale-105 transition-transform mt-auto">
                             <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                             </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}

export default LeadershipSection;