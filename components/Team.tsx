"use client"; // Required for hooks
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import pulseImg from '@/src/assets/images/pulseImage.png'
import LinkedIn from '@/src/assets/linkedIn.svg'
// --- IMAGE IMPORTS (Based on your snippet) ---
import doctorImg from '../src/assets/doctor-shows-interaction-patient-mechanism-blurred-background-222802318.webp';
import profile1 from '@/src/assets/assets/Profile Pictures/RanjithK.webp'
import profile2 from '@/src/assets/assets/Profile Pictures/SitharamanS.webp'
import profile3 from '@/src/assets/assets/Profile Pictures/SureshKumar.webp'
// Placeholders
const waveDecorationImg = doctorImg;

function LeadershipSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const team = [
    {
      name: "Ranjith K",
      role: "MANAGING DIRECTOR",
      bio: "25+ years in IVD and medical devices with leadership roles across India and Southeast Asia. Expert in sales strategy and business development.",
      image: profile1,
      linkedin: "https://www.linkedin.com/in/ranjith-k-68363838/"
    },
    {
      name: "Sitharaman S",
      role: "OPERATIONS DIRECTOR",
      bio: "25+ years in diagnostics and services with a strong engineering background. Skilled in building and managing operations.",
      image: profile2,
      linkedin: "https://www.linkedin.com/in/sitharaman-srinivasan-0067591b/"
    },
    {
      name: "Suresh Kumar",
      role: "HEAD OF SERVICE",
      bio: "15+ years in service management with expertise in critical care and radiology equipment. Formerly with Danaher Corp.",
      image: profile3,
      linkedin: "#"
    }
  ];

  // --- INTERSECTION OBSERVER LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when 10% of the section is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once triggered (so it doesn't replay when scrolling up)
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);


  return (
    <>
      
      {/* 1. INJECTED STYLES FOR TYPING ANIMATION */}
      <style jsx>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% } 
        }
        @keyframes typing-delayed {
          0% { width: 0; opacity: 1; }
          100% { width: 100%; opacity: 1; }
        }
        /* Robust blinking that toggles specific colors */
        @keyframes blink-purple {
          0%, 100% { border-right-color: #9a4593; }
          50% { border-right-color: transparent; }
        }
        @keyframes hide-cursor {
          to { border-right-color: transparent; }
        }
        
        /* Animation for First Line */
        .type-line-1 {
          border-right: 3px solid #9a4593;
          animation: 
            typing 1.5s steps(22, end) forwards,
            blink-purple .5s step-end 4, /* Blink approx 2s (4 times) then stop */
            hide-cursor 0s step-end 2s forwards; /* Force hide after 2s */
        }

        /* Animation for Second Line (Starts after 2s delay) */
        .type-line-2 {
           border-right: 3px solid transparent; /* Invisible start */
           animation: 
            typing-delayed 1.5s steps(20, end) 1.5s forwards,
            blink-purple .75s step-end infinite 2s; /* Blink FOREVER after 2s start */
        }
      `}</style>

    <section 
      id="leadership" 
      ref={sectionRef} 
      className="relative w-full min-h-screen py-24 overflow-hidden bg-[#4A4A4A] flex flex-col justify-center"
    >
      
      {/* NEW: Leadership Typing Text (Replaces Button) */}
      <div className="relative pt-4 pb-10 z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-gray-800 flex flex-col items-start gap-1">
              {/* LINE 1: Leadership That Powers */}
              <span className="relative inline-block">
                  {/* Ghost Text (Sets Width) */}
                  <span className="opacity-0 pointer-events-none" aria-hidden="true">
                      Leadership That Powers&nbsp;
                  </span>
                  {/* Animated Text */}
                  <span className={`absolute text-gray-200 top-0 left-0 h-full w-0 overflow-hidden whitespace-nowrap ${isVisible ? 'type-line-1' : ''}`}>
                      Leadership That Powers
                  </span>
              </span>
              
              {/* LINE 2: Innovation and Care (Gradient) */}
              <span className="relative inline-block">
                  {/* Ghost Text */}
                  <span className="opacity-0 pointer-events-none" aria-hidden="true">
                      Innovation and Care.
                  </span>
                  {/* Animated Text */}
                  <span className={`absolute top-0 left-0 h-full w-0 overflow-hidden whitespace-nowrap ${isVisible ? 'type-line-2' : ''}`}>
                      <span className="bg-gradient-to-t from-[#9a4593]/40 via-[#9a4593] to-[#9a4593] bg-clip-text text-transparent">
                          Innovation and Care.
                      </span>
                  </span>
              </span>

          </h3>
      </div>
      
      {/* 1. HEARTBEAT LINE DECORATION (Top Right) */}
      {/* <div className="absolute top-10 right-0 left-0 h-32 pointer-events-none opacity-40">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-full text-red-600">
           <path 
             d="M0 60 H800 L820 10 L840 110 L860 30 L880 90 L900 60 H1440" 
             stroke="currentColor" 
             strokeWidth="2"
             vectorEffect="non-scaling-stroke"
           />
        </svg>
      </div> */}

      {/* 2. BACKGROUND WAVE IMAGE (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Image 
            src={pulseImg} 
            alt="Background Wave Decoration" 
            fill
            className="object-contain object-bottom-left"
          />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {team.map((member, index) => (
                <div 
                  key={index} 
                  className={`relative group transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                  `}
                  // Stagger delay: Index * 200ms (0ms, 200ms, 400ms)
                  style={{ transitionDelay: `${index * 200}ms` }} 
                >
                    
                    {/* The White Card */}
                    <div className="bg-white rounded-[2rem] p-8 pt-24 text-center shadow-2xl transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col">
                        
                        {/* 3. POP-OUT IMAGE CONTAINER */}
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                            <div className="relative w-32 h-32 rounded-full border-7 border-white shadow-lg overflow-hidden bg-gray-200">
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
                        <a href={member.linkedin} target="_blank" className="flex justify-center text-[#0077b5] hover:scale-105 transition-transform mt-auto">
                             <Image src={LinkedIn} alt='LinkedIn icon' className='w-8 h-8'/>
                             {/* <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                             </svg> */}
                        </a>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
    </>
  );
}

export default LeadershipSection;