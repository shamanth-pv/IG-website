import React from 'react';
import hands from '@/src/assets/images/hands.png'
// Placeholder background image (Doctors stacking hands or similar team image)
// const bgImage = "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop";
const bgImage = hands;

function ServicesSection() {
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

  return (
    <section id="services" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
        
        {/* 1. BACKGROUND IMAGE with Fade Overlay */}
        <div className="absolute inset-0 z-0">
            <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                // style={{ backgroundImage: `url(${bgImage})` }}
                style={{ backgroundImage: `url(${bgImage.src})` }}
            ></div>
            {/* White Gradient Overlay: Fades from solid white at top to semi-transparent at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-blue-50/50"></div>
        </div>

        {/* 2. DECORATIVE PATTERN (Top Right Hexagon) */}
        <div className="absolute top-10 right-0 md:right-10 w-24 h-24 z-10 opacity-60">
             <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-blue-500">
                <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
                </pattern>
                {/* Simple hexagon shape */}
                <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="url(#diagonalHatch)" />
             </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
            
            {/* 3. HEADER SECTION */}
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#206bc4] mb-4">
                    OUR SERVICES
                </h2>
                <div className="h-1 w-24 bg-[#206bc4] mx-auto rounded-full mb-8"></div>
                
                <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
                    At Inspire Gene, service excellence isn’t just a goal, it’s embedded in our DNA. We are committed to delivering not only high-quality products but also unmatched support, ensuring that every interaction reflects our dedication to reliability, responsiveness, and the highest standards of care.
                </p>
            </div>

            {/* 4. CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className="group relative bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl flex flex-col items-center justify-center min-h-[250px]"
                    >
                        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
                            {service.title}
                        </h3>
                        {/* Divider Line inside card */}
                        <div className="h-0.5 w-16 bg-[#206bc4] mb-6 transition-all duration-300 group-hover:w-24"></div>
                        
                        <p className="text-gray-700 font-medium leading-relaxed">
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