"use client"
import React, { useEffect, useRef, useState } from "react";
import Medical from '@/src/assets/images/medical.png'
// Placeholder background image (Doctor writing on clipboard)

function ContactSection() {
    const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
    <section id="contact" ref={sectionRef} className="min-h-screen relative w-full py-24 flex items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND with Heavy White Overlay */}
      <div className="absolute inset-0 z-0">
         <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat grayscale opacity-100"
            style={{ backgroundImage: `url(${Medical.src})` }}
         ></div>
         {/* Heavy White Fade to match the clean look */}
         <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* HEADER: "GET IN TOUCH" */}
        <div className="text-center mb-16">
            <h3 className={`font-spartan text-xl md:text-2xl font-light tracking-widest text-gray-600 uppercase
                transition-all duration-[1200ms] ease-[cubic-bezier(.22,.68,.32,1.01)]
                    ${visible
                        ? "opacity-100 -translate-y-0 scale-100"
                        : "opacity-0 -translate-y-12 scale-100"
                        }`}>
                Get in Touch
            </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">
            
            {/* --- LEFT COLUMN: Brand Name --- */}
            <div className="font-spartan text-center lg:text-left">
                <h1 className={`text-6xl md:text-7xl font-bold text-[#9a4593] tracking-tight transition-all duration-[1200ms] ease-[cubic-bezier(.22,.68,.32,1.01)]
                    ${visible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-12 scale-100"
                        }`}>
                    Inspire Gene
                </h1>
            </div>

            {/* --- RIGHT COLUMN: Contact Details --- */}
            <div className={`font-montserrat space-y-8 text-gray-700 transition-all duration-[1200ms] ease-[cubic-bezier(.22,.68,.32,1.01)]
                    ${visible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-12 scale-100"
                        }`}
                        style={{ transitionDelay: `${250}ms` }}>
                
                {/* Row 1: Addresses */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="shrink-0 mt-1">
                        <svg className="w-8 h-8 text-[#9a4593]" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                        </svg>
                    </div>

                    {/* Address Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {/* Admin Office */}
                        <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-1">Admin Office:</h4>
                            <p className="text-sm leading-relaxed text-gray-600">
                                Unit No-F103, 1st Floor, Chicago Avenue,<br />
                                No.37/2 Cunningham Road, Bangalore 560001
                            </p>
                        </div>
                        
                        {/* Registered Office */}
                        <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-1">Registered Office:</h4>
                            <p className="text-sm leading-relaxed text-gray-600">
                                No.52, 1st Floor, 8th Main, Vasanth Nagar,<br />
                                Bangalore 560001
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="h-px w-full bg-gray-300/50"></div>

                {/* Row 2: Email */}
                <div className="flex items-center gap-6">
                     <div className="shrink-0">
                        <svg className="w-8 h-8 text-[#9a4593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                     </div>
                     <a href="mailto:office@inspiregene.in" className="text-lg hover:text-[#9a4593] transition-colors">
                        office@inspiregene.in
                     </a>
                </div>

                {/* Row 3: Phone */}
                <div className="flex items-start gap-6">
                     <div className="shrink-0 mt-1">
                        <svg className="w-8 h-8 text-[#9a4593]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.39z"/>
                        </svg>
                     </div>
                     <div className="text-gray-600 font-medium space-y-1">
                        <p>+91 9343334757</p>
                        <p>+91 7022160587</p>
                        <p>+91 8105683852</p>
                     </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;