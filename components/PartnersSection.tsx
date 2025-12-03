"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import TODO from '@/src/assets/images/medical.png'
import HexagonPurple from '@/src/assets/hex.svg'
import HexagonBlue from '@/src/assets/hexBlue.svg'

// Placeholder Logo URL
const logoPlaceholder = TODO;

function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // --- INTERSECTION OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const associations = [
    { name: "Acute Care", logo: logoPlaceholder },
    { name: "Agappe", logo: logoPlaceholder },
    { name: "Sensa Core", logo: logoPlaceholder },
    { name: "Vet Care", logo: logoPlaceholder },
    { name: "Peerless Biotech", logo: logoPlaceholder },
  ];

  const clientele = [
    { name: "Friendly Tails", logo: logoPlaceholder },
    { name: "Kasturba Medical", logo: logoPlaceholder },
    { name: "First Neuro", logo: logoPlaceholder },
    { name: "Neuberg", logo: logoPlaceholder },
    { name: "St. Johns", logo: logoPlaceholder },
    { name: "The Pet Speciality", logo: logoPlaceholder },
    { name: "MyPetz", logo: logoPlaceholder },
    { name: "Manipal Hospitals", logo: logoPlaceholder },
    { name: "Sakra World Hospital", logo: logoPlaceholder },
    { name: "Bhagwan Mahaveer", logo: logoPlaceholder },
    { name: "Father Muller", logo: logoPlaceholder },
  ];

  return (
    <section 
      id="partners" 
      ref={sectionRef}
      className="relative w-full py-24 bg-white overflow-hidden"
    >
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes typing {
          from { width: 0 }
          to { width: 100% } 
        }
        
        @keyframes blink-blue {
          0%, 100% { border-right-color: #1e88e5; }
          50% { border-right-color: transparent; }
        }
        
        @keyframes blink-purple {
          0%, 100% { border-right-color: #9a4593; }
          50% { border-right-color: transparent; }
        }

        @keyframes hide-cursor {
          to { border-right-color: transparent; }
        }
        
        .type-associations {
          border-right: 3px solid #1e88e5;
          white-space: nowrap;
          overflow: hidden;
          animation: 
            typing 1.5s steps(16, end) forwards,
            blink-blue .75s step-end 3,
            hide-cursor 0s step-end 2.25s forwards;
        }

        .type-clientele {
          border-right: 3px solid #9a4593;
          white-space: nowrap;
          overflow: hidden;
          animation: 
            typing 1.5s steps(13, end) forwards,
            blink-purple .75s step-end 3,
            hide-cursor 0s step-end 2.25s forwards;
        }
      `}} />

      {/* Background Decorative Rings */}
      <div className="absolute top-20 -left-20 w-80 h-80 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#FF6B6B" strokeWidth="0.5">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="35" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="25" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ASSOCIATIONS */}
        <div className="mb-24">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e88e5] shrink-0 w-full md:w-1/3 leading-none pb-1">
                    {/* FIX: Added 'whitespace-nowrap' to force single line */}
                    <span className="relative inline-block whitespace-nowrap">
                        <span className="opacity-0 pointer-events-none" aria-hidden="true">
                            Our Associations&nbsp;
                        </span>
                        {/* FIX: Changed h-full to h-[85%] and top-[7.5%] to reduce cursor height */}
                        <span className={`absolute top-[7.5%] left-0 h-[105%] w-0 ${isVisible ? 'type-associations' : ''}`}>
                            Our Associations
                        </span>
                    </span>
                </h2>

                <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 w-full pl-4 py-4
                                [&:has(>div:hover)>div:not(:hover)]:opacity-50 
                                [&:has(>div:hover)>div:not(:hover)]:scale-90 
                                [&:has(>div:hover)>div:not(:hover)]:blur-[2px]">
                    {associations.map((partner, index) => (
                        <div 
                            key={index}
                            className="relative w-32 h-20 flex items-center justify-center transition-all duration-300 ease-out
                                       hover:scale-110 hover:drop-shadow-xl hover:z-10"
                        >
                            <div className="relative w-full h-full">
                                <Image 
                                    src={partner.logo} 
                                    alt={partner.name} 
                                    fill 
                                    className="object-contain" 
                                />
                            </div>
                        </div>
                    ))}
                    
                    <div className="relative w-32 h-36 hidden md:flex items-center justify-center opacity-40 pointer-events-none transition-all duration-300 ease-out
                                       hover:scale-110 hover:drop-shadow-xl hover:z-10">
                        <Image
                            src={HexagonPurple}
                            alt="Hexagon"
                            width={150}
                            height={150}
                            className="animate-[spin_10s_linear_infinite]"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* CLIENTELE */}
        <div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#9a4593] shrink-0 w-full md:w-1/3 leading-none pb-1">
                    {/* FIX: Added 'whitespace-nowrap' here too */}
                    <span className="relative inline-block whitespace-nowrap">
                        <span className="opacity-0 pointer-events-none" aria-hidden="true">
                            Key Clientele&nbsp;
                        </span>
                        {/* FIX: Changed h-full to h-[85%] and top-[7.5%] to reduce cursor height */}
                        <span className={`absolute top-[7.5%] left-0 h-[105%] w-0 ${isVisible ? 'type-clientele' : ''}`}>
                            Key Clientele
                        </span>
                    </span>
                </h2>

                <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 w-full pl-4 py-4
                                [&:has(>div:hover)>div:not(:hover)]:opacity-50 
                                [&:has(>div:hover)>div:not(:hover)]:scale-90 
                                [&:has(>div:hover)>div:not(:hover)]:blur-[2px]">
                    {clientele.map((client, index) => (
                        <div 
                            key={index}
                            className="relative w-28 h-16 flex items-center justify-center transition-all duration-300 ease-out
                                       hover:scale-110 hover:drop-shadow-xl hover:z-10"
                        >
                            <div className="relative w-full h-full">
                                <Image 
                                    src={client.logo} 
                                    alt={client.name} 
                                    fill 
                                    className="object-contain" 
                                />
                            </div>
                        </div>
                    ))}

                    <div className="relative w-28 h-32 hidden md:flex items-center justify-center opacity-40 pointer-events-none transition-all duration-300 ease-out
                                       hover:scale-110 hover:drop-shadow-xl hover:z-10">
                        <Image
                            src={HexagonBlue}
                            alt="Hexagon"
                            width={150}
                            height={150}
                            className="animate-[spin_10s_linear_infinite]"
                        />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}

export default PartnersSection;