"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/src/assets/logo.svg";

function Navbar({ textColor = "text-black" , isHome = 0}) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const finalColor = isScrolled ? "text-black" : textColor;

  return (
    <div
      className={`font-montserrat fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 backdrop-blur-lg border-b border-white/20 shadow-lg transition-all duration-300
        ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent"} ${finalColor}`}
    >
      {/* Logo */}
      <Link href="/" className="flex relative z-20 ml-auto">
        <Image src={Logo} alt="Logo" width={50} height={50} className="cursor-pointer" />
      </Link>

      {/* NAV MENU */}
      <ul
        className="
          select-none text-xl justify-center flex 
          gap-[clamp(4rem,10vw,8rem)] 
          px-24 py-2 mx-auto
          font-extrabold transition-colors duration-300
        "
      >
        <NavItem text="Home" href="/" />
        <NavItem text="About" href="/about" />

        {/* PRODUCTS DROPDOWN */}
        <li className="relative group cursor-pointer">
          {/* Products + Arrow as one unit */}
          <div className="flex items-center gap-1 py-4">
            <Link href="/products" className="hover:text-purple-600 transition-colors">
              Products
            </Link>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>

          {/* Dropdown Menu */}
          <div
            className="
              absolute top-full left-1/2 -translate-x-1/2 w-64 
              bg-white rounded-xl shadow-xl border border-gray-100
              opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible 
              transition-all duration-300 
              transform -translate-y-2 group-hover:translate-y-0
              p-2
            "
          >
            {/* Little arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>

            <ul className="relative z-10 flex flex-col gap-1">
              <DropdownItem text="Point of Care" href="/products?category=Point+of+Care" />
              <DropdownItem text="Specialty Diagnostics" href="/products?category=Speciality+Diagnostics" />
              <DropdownItem text="Pet Care" href="/products?category=Pet+Care" />
              <DropdownItem text="Pre-Analytics" href="/products?category=Pre-Analytics" />
            </ul>
          </div>
        </li>

        <NavItem text="Contact" href="/contact" />
      </ul>
    </div>
  );
}

const NavItem = ({ text, href }) => (
  <li className="relative group cursor-pointer transition-colors drop-shadow-sm hover:text-purple-600">
    <a href={href} className="block py-4">
      {text}

      {/* Underline animation */}
      <span
        className="
          absolute left-0 -bottom-1 w-0 h-[2px] 
          transition-all duration-300 
          group-hover:w-full 
          bg-purple-600
        "
      ></span>
    </a>
  </li>
);

const DropdownItem = ({ text, href }) => (
  <li>
    <Link
      href={href}
      className="
        block px-4 py-3 text-sm text-gray-600 
        hover:text-purple-600 hover:bg-purple-50 
        rounded-lg transition-colors
      "
    >
      {text}
    </Link>
  </li>
);

export default Navbar;
