"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/src/assets/logo.svg'
function Navbar({ textColor = "text-black" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const finalColor = isScrolled ? "text-black" : textColor;

  return (
    <div className={`text-black fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 backdrop-blur-lg border-b border-white/20 shadow-lg transition-all duration-300
    ${isScrolled 
          ? "bg-white shadow-md py-2" // Scrolled: White BG
          : "bg-transparent"          // Top: Transparent BG
      } ${finalColor}`}>
        <Link href="/" className="flex relative z-20 ml-auto">
        <Image 
          src={Logo} 
          alt="Logo" 
          width={50} 
          height={50} 
          className="cursor-pointer"
        />
        </Link>
        <ul className="select-none p-4 text-xl justify-center flex gap-[clamp(4rem,10vw,8rem)] px-24 py-7 mx-auto
          font-extrabold transition-colors duration-300">
           
            <NavItem text="Home" href="/" /> 
            <NavItem text="About" href="/about" />
            <NavItem text="Products" href="/products" />
            <NavItem text="Contact" href="/contact" />
        </ul>
     </div>
  )
}

const NavItem = ({ text, href}) => (
  <li className="relative group cursor-pointer transition-colors drop-shadow-sm hover:text-purple-600">
    <a href={href} className="block">
      {text}
      {/* Underline */}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-purple-600"></span>
    </a>
  </li>
);

export default Navbar