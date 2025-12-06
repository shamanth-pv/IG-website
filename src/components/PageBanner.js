"use client"
import React, { useEffect, useState } from 'react';

function PageBanner({ title, image }) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

  const imageUrl = (image && typeof image === 'object' && 'src' in image) 
    ? image.src 
    : image;

  return (
    <div className={`
      relative w-full overflow-hidden bg-[#2A1B3D] flex items-center
      
      /* Mobile: Height 350px, Center Content, Padding 6 */
      h-[350px] justify-center px-6 
      
      /* Desktop: Height 450px, Start (Left) Content, Padding 24 */
      md:h-[450px] md:justify-start md:px-24
    `}>
      
      {/* 1. Background Image */}
      {imageUrl && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            // Mobile: Center | Desktop: Center 70% (Original)
            backgroundPosition: 'center', 
          }}
        >
          
          <style jsx>{`
            @media (min-width: 768px) {
              div { background-position: center 70% !important; }
            }
          `}</style>
        </div>
      )}

      <div className="absolute inset-0 bg-[#2A1B3D]/70 mix-blend-multiply"></div>
      
      <div className={`
        relative z-10 pt-10
        /* Mobile: Center text */
        text-center
        /* Desktop: Left align text (to match justify-start) */
        md:text-left
        px-4
      `}>
        
        <h1 
          className={`
            font-spartan font-bold text-white tracking-widest uppercase drop-shadow-lg
            transform transition-all duration-300 ease-out leading-tight
            
            /* Mobile: Text 4xl */
            text-4xl 
            /* Desktop: Text 7xl */
            md:text-7xl

            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
          `}
        >
          {title || "PAGE TITLE"}
        </h1>

        {/* Decorative Underline */}
        <div 
          className={`
            h-2 w-24 bg-[#9a4593] mt-6 rounded-full shadow-lg
            transform transition-all duration-300 ease-out delay-300
            
            /* Mobile: Center the line (mx-auto) */
            mx-auto
            /* Desktop: Left align the line (ml-0, mr-auto) */
            md:mx-0 md:mr-auto

            ${isVisible ? "opacity-100 -translate-y-0" : "opacity-0 translate-y-10"}
          `}
        ></div>
    </div>
    </div>
  );
}

export default PageBanner;