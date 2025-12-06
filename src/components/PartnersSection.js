"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import HexagonPurple from '@/assets/Design Elements/HexPurple.svg'
import HexagonBlue from '@/assets/Design Elements/HexBlue.svg'

function PartnersSection() {
  const [visible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    { name: "Acute Care", logo: "/1.webp" },
    { name: "Agappe", logo: "/2.webp" },
    { name: "Sensa Core", logo: "/3.webp" },
    { name: "Vet Care", logo: "/4.webp" },
    { name: "Peerless Biotech", logo: "/5.webp" },
  ];

  const clientele = [
    { name: "Friendly Tails", logo: "/6.webp" },
    { name: "Kasturba Medical", logo: "/7.webp" },
    { name: "First Neuro", logo: "/8.webp" },
    { name: "Neuberg", logo: "/9.webp" },
    { name: "St. Johns", logo: "/10.webp" },
    { name: "The Pet Speciality", logo: "/11.webp" },
    { name: "MyPetz", logo: "/12.webp" },
    { name: "Manipal Hospitals", logo: "/13.webp" },
    { name: "Sakra World Hospital", logo: "/14.webp" },
    { name: "Bhagwan Mahaveer", logo: "/15.webp" },
    { name: "Father Muller", logo: "/16.webp" },
  ];

  return (
    <section 
      id="partners" 
      ref={sectionRef}
      className="font-montserrat relative w-full py-12 bg-white overflow-hidden"
    >
      {/* Background Circles */}
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
        <div className="mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e88e5] shrink-0 w-full md:w-1/3 leading-none pb-1">
                    <span className="relative inline-block whitespace-nowrap">
                        Our Associations
                    </span>
                </h2>

                <div className={`flex flex-wrap justify-center md:justify-start gap-1 w-full pl-0 md:pl-4 py-4
                                transition-all duration-[500ms] ease-[cubic-bezier(.22,.68,.32,1.01)]
                                    ${visible
                                        ? "opacity-100 translate-y-0 scale-100"
                                        : "opacity-0 translate-y-12 scale-[0.95]"
                                    }
                                {/* Desktop Only: Sibling Blur Effects */}
                                md:[&:has(>div:hover)>div:not(:hover)]:opacity-50 
                                md:[&:has(>div:hover)>div:not(:hover)]:scale-90 
                                md:[&:has(>div:hover)>div:not(:hover)]:blur-[2px]`}
                                style={{ transitionDelay: `${170}ms` }}>
                    {associations.map((partner, index) => (
                        <div 
                            key={index}
                            // Mobile: w-28 h-32 | Desktop: w-40 h-48 | Hover only on md
                            className="relative w-28 h-32 md:w-40 md:h-48 flex items-center justify-center transition-all duration-300 ease-out md:hover:scale-110 md:hover:drop-shadow-xl md:hover:z-10"
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
                    
                    <div className="relative w-28 h-32 md:w-40 md:h-48 hidden md:flex items-center justify-center opacity-40 pointer-events-none transition-all duration-300 ease-out md:hover:scale-110 md:hover:drop-shadow-xl md:hover:z-10">
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
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#9a4593] shrink-0 w-full md:w-1/3 leading-none pb-1">
                    <span className="relative inline-block whitespace-nowrap">
                        Key Clientele
                    </span>
                </h2>

                <div className={`flex flex-wrap justify-center md:justify-start gap-1 w-full pl-0 md:pl-4 py-4
                                transition-all duration-[500ms] ease-[cubic-bezier(.22,.68,.32,1.01)]
                                    ${visible
                                        ? "opacity-100 translate-y-0 scale-100"
                                        : "opacity-0 translate-y-12 scale-[0.95]"
                                    }
                                {/* Desktop Only: Sibling Blur Effects */}
                                md:[&:has(>div:hover)>div:not(:hover)]:opacity-50 
                                md:[&:has(>div:hover)>div:not(:hover)]:scale-90 
                                md:[&:has(>div:hover)>div:not(:hover)]:blur-[2px]`}
                                style={{ transitionDelay: `${500}ms` }}>
                    {clientele.map((client, index) => (
                        <div 
                            key={index}
                            // Mobile: w-24 h-28 | Desktop: w-32 h-40 | Hover only on md
                            className="relative w-24 h-28 md:w-32 md:h-40 flex items-center justify-center transition-all duration-300 ease-out md:hover:scale-110 md:hover:drop-shadow-xl md:hover:z-10"
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

                    <div className="relative w-24 h-28 md:w-32 md:h-40 hidden md:flex items-center justify-center opacity-40 pointer-events-none transition-all duration-300 ease-out md:hover:scale-110 md:hover:drop-shadow-xl md:hover:z-10">
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