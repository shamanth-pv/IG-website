"use client";
import React, { useEffect, useRef, useState } from "react";
import hands from '@/src/assets/images/hands.png'
// Placeholder background image (Doctors stacking hands or similar team image)
// const bgImage = "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop";

function ServicesSection() {
    const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const services = [
    {
      title: "Installation & Training",
      description: "Pre-Installation, smooth installation process and detailed user training for medical professionals. Post-Installation care."
    },
    {
      title: "Technical Support",
      description: "On-demand support for maintenance, troubleshooting, and calibration of critical care and application Support."
    },
    {
      title: "NABL/NABH Support",
      description: "Comprehensive Annual and Comprehensive Maintenance. Calibration Certifications. NABL/NABH document support."
    }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
    >
        <style jsx>{`
        .parallax-card {
        opacity: 0;
        transform: translateY(40px) scale(0.97);
        transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s;
        }
        .parallax-card.show {
        opacity: 1;
        transform: translateY(0) scale(1);
        }
        `}</style>
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hands.src})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-blue-50/50"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* HEADER */}
        <div className="mb-16">
          <h2 className="font-spartan text-4xl md:text-5xl font-bold text-[#206bc4] mb-4">
            OUR SERVICES
          </h2>
          <div className="h-1 w-24 bg-[#206bc4] mx-auto rounded-full mb-8"></div>

                <p className="font-montserrat max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
                    At Inspire Gene, service excellence isn’t just a goal, it’s embedded in our DNA. We are committed to delivering not only high-quality products but also unmatched support, ensuring that every interaction reflects our dedication to reliability, responsiveness, and the highest standards of care.
                </p>
            </div>

            {/* 4. CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                    key={index}
                    className={`
                        group relative bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-8 
                        shadow-xl transition-all duration-[1200ms] ease-[cubic-bezier(.22,.68,.32,1.01)]
                        flex flex-col items-center justify-center min-h-[250px]

                        ${visible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-12 scale-[0.97]"
                        }
                    `}
                    style={{ transitionDelay: `${500 + index * 250}ms` }}
                    >
                            <h3 className="font-spartan text-2xl font-bold text-[#1e3a8a] mb-4">
                            {service.title}
                        </h3>
                        {/* Divider Line inside card */}
                        <div className="h-0.5 w-16 bg-[#206bc4] mb-6 transition-all duration-300 group-hover:w-24"></div>
                        
                        <p className="font-montserrat text-gray-700 font-medium leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    </section>
  );
}

export default ServicesSection;