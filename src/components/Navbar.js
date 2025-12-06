"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/IGlogo.svg";

function Navbar({ textColor = "text-black", isHome = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [mobileMenuOpen]);
  
  const finalColor = isScrolled || mobileMenuOpen ? "text-black" : textColor;

  const isBlackText = finalColor.includes("black");

  const navBg = isScrolled 
    ? "bg-white shadow-md py-2 md:py-3 backdrop-blur-none" 
    : "bg-transparent py-2 md:py-3 backdrop-blur-lg";

  const dropdownContainerStyle = isBlackText
    ? "bg-white border-gray-100 shadow-xl" // If text is black -> White Dropdown
    : "bg-black/60 backdrop-blur-xl border-white/20 shadow-2xl"; // If text is white -> Glass Dropdown

  return (
    <div
      className={`
        font-montserrat fixed top-0 left-0 w-full z-50 
        transition-all duration-300 border-b border-white/20 
        ${mobileMenuOpen ? "bg-transparent border-none" : navBg} 
        ${finalColor}
      `}
    >
      <div className="flex items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" className="relative z-50">
          <Image src={Logo} alt="Logo" width={50} height={50} className="cursor-pointer" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex select-none text-xl gap-responsive px-32 font-extrabold transition-colors duration-300">
          <NavItem text="Home" href="/" />
          <NavItem text="About" href="/about" />

          {/* Desktop Dropdown */}
          <li className="relative group cursor-pointer flex items-center gap-1 py-4">
            <Link href="/products" className="hover:text-purple-600 transition-colors">
              Products
            </Link>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            
            {/* DROPDOWN PANEL */}
            <div className={`
              absolute top-full left-1/2 -translate-x-1/2 w-64 rounded-xl border
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 p-2
              ${dropdownContainerStyle}
            `}>
               <ul className="flex flex-col gap-1">
                 <ProductLinks isBlackText={isBlackText} />
               </ul>
            </div>
          </li>

          <NavItem text="Contact" href="/contact" />
        </ul>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden relative z-50 p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-around">
            <span className={`block w-full h-0.5 transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2.5 bg-black" : "bg-current"}`} />
            <span className={`block w-full h-0.5 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : "bg-current"}`} />
            <span className={`block w-full h-0.5 transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2.5 bg-black" : "bg-current"}`} />
          </div>
        </button>
      </div>

      {/* MOBILE FULL SCREEN MENU */}
      <div 
        className={`
          fixed inset-0 bg-white z-40 flex flex-col items-center justify-center
          transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
        style={{ height: "100vh" }}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl font-bold text-black">
          <li onClick={() => setMobileMenuOpen(false)}><Link href="/">Home</Link></li>
          <li onClick={() => setMobileMenuOpen(false)}><Link href="/about">About</Link></li>

          <li className="flex flex-col items-center w-full">
            <button 
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex items-center gap-2 hover:text-purple-600"
            >
              Products
              <svg className={`w-5 h-5 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`
              overflow-hidden transition-all duration-300 text-center
              ${mobileProductsOpen ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"}
            `}>
               <ul className="flex flex-col gap-4 text-lg text-gray-500 font-medium">
                  <ProductLinks isMobile={true} />
               </ul>
            </div>
          </li>

          <li onClick={() => setMobileMenuOpen(false)}><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

    </div>
  );
}

const NavItem = ({ text, href }) => (
  <li className="relative group cursor-pointer transition-colors drop-shadow-sm hover:text-purple-600">
    <Link href={href} className="block py-4">
      {text}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-purple-600"></span>
    </Link>
  </li>
);

const ProductLinks = ({ isBlackText, isMobile }) => {
  return (
    <>
      <DropdownItem text="Point of Care" href="/products?category=Point+of+Care" isBlackText={isBlackText} isMobile={isMobile} />
      <DropdownItem text="Specialty Diagnostics" href="/products?category=Speciality+Diagnostics" isBlackText={isBlackText} isMobile={isMobile} />
      <DropdownItem text="Pet Care" href="/products?category=Pet+Care" isBlackText={isBlackText} isMobile={isMobile} />
      <DropdownItem text="Pre-Analytics" href="/products?category=Pre-Analytics" isBlackText={isBlackText} isMobile={isMobile} />
    </>
  );
};

const DropdownItem = ({ text, href, isBlackText, isMobile }) => {
  
  let itemClass = "block px-4 py-2 rounded-lg transition-colors ";

  if (isMobile) {
     // Mobile: Always Grey text
     itemClass += "text-gray-600 hover:text-purple-600 hover:bg-purple-50";
  } else if (isBlackText) {
     // Desktop + Black Nav Text: Grey text (Standard dropdown)
     itemClass += "text-gray-600 hover:text-purple-600 hover:bg-purple-50";
  } else {
     // Desktop + White Nav Text: White text (Glass dropdown)
     itemClass += "text-white hover:bg-white/20 hover:text-white";
  }

  return (
    <li>
      <Link href={href} className={itemClass}>
        {text}
      </Link>
    </li>
  );
};

export default Navbar;