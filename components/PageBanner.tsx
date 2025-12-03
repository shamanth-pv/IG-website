"use client"
import React, { useEffect, useState } from 'react';

function PageBanner({ title, image }) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    // Trigger the animation immediately after mount
        setIsVisible(true);
    }, []);

  // Handle Next.js static imports (which are objects) vs string URLs
  const imageUrl = (image && typeof image === 'object' && 'src' in image) 
    ? image.src 
    : image;

      
  return (
    
    <div className="px-24 relative w-full h-[350px] md:h-[450px] flex items-center justify-start overflow-hidden bg-[#2A1B3D]">
      {/* 1. Background Image */}
      {imageUrl && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-[center_70%] bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      )}

      {/* 2. Overlay (Gradient/Tint) */}
      <div className="absolute inset-0 bg-[#2A1B3D]/70 mix-blend-multiply"></div>
      
      {/* 3. Text Content */}
      <div className="relative z-10 text-center px-4">
        
        <h1 
          className={`text-5xl md:text-7xl font-bold text-white tracking-widest uppercase drop-shadow-lg
            transform transition-all duration-300 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
          `}
        >
          {title || "PAGE TITLE"}
        </h1>
        {/* Decorative Underline */}
        <div 
          className={`h-2 w-24 bg-[#9a4593] mr-auto mt-6 rounded-full shadow-lg
            transform transition-all duration-300 ease-out delay-300
            ${isVisible ? "opacity-100 -translate-y-0" : "opacity-0 translate-y-10"}
          `}
        ></div>

      {/* Optional: Decorative bottom curve or shape divider */}
      {/* <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent opacity-20"></div> */}
    </div>
    </div>
  );
}

export default PageBanner;