"use client"; // Required for hooks
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import pulseImg from '@/assets/images/pulseImage.jpeg'
import LinkedIn from '@/assets/LinkedInlogo.svg'
import profile1 from '@/assets/Profile Pictures/RanjithK.webp'
import profile2 from '@/assets/Profile Pictures/SitharamanS.webp'
import profile3 from '@/assets/Profile Pictures/SureshKumar.webp'

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

  // INTERSECTION OBSERVER LOGIC
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section 
      id="leadership" 
      ref={sectionRef} 
      className="relative w-full min-h-screen py-24 overflow-hidden bg-[#4A4A4A] flex flex-col justify-center"
    >
      
      <div className="relative pt-4 pb-10 z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <h3 className="font-spartan text-3xl md:text-4xl font-bold leading-tight text-gray-800 flex flex-col items-start gap-1">
              <span className="relative inline-block">
                  <span className="opacity-0 pointer-events-none" aria-hidden="true">
                      Leadership That Powers&nbsp;
                  </span>
                  <span className={`absolute text-gray-200 top-0 left-0 h-full w-0 overflow-hidden whitespace-nowrap ${isVisible ? 'type-line-1' : ''}`}>
                      Leadership That Powers
                  </span>
              </span>
              
              <span className="relative inline-block">
                  <span className="opacity-0 pointer-events-none" aria-hidden="true">
                      Innovation and Care.
                  </span>
                  <span className={`absolute top-0 left-0 h-full w-0 overflow-hidden whitespace-nowrap ${isVisible ? 'type-line-2' : ''}`}>
                      <span className="bg-gradient-to-t from-[#9a4593]/40 via-[#9a4593] to-[#9a4593] bg-clip-text text-transparent">
                          Innovation and Care.
                      </span>
                  </span>
              </span>

          </h3>
      </div>
      

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
                  style={{ transitionDelay: `${index * 200}ms` }} 
                >
                    
                    {/* The White Card */}
                    <div className="bg-white font-montserrat rounded-[2rem] p-8 pt-24 text-center shadow-2xl transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col">
                        
                        {/* Pop-out Image Container */}
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