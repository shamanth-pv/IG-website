"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'; // 1. Import hook
import TODO from '@/src/assets/images/medical.png'

// Placeholder Images (Replace with your actual product imports)
const productImg = TODO;

// ---------------------------------------------------------
// DATA: Products List
// ---------------------------------------------------------
const allProducts = [
  {
    id: 1,
    category: "Point of Care",
    name: "Pathfast",
    description: "Cardiac Biomarker Analyzer with CLEIA Technology",
    image: productImg,
    isNew: false,
  },
  {
    id: 2,
    category: "Point of Care",
    name: "Mispa Chem DX",
    description: "Auto Dry Biochemistry Analyzer",
    image: productImg,
    isNew: false,
  },
  {
    id: 3,
    category: "Point of Care",
    name: "Mispa HBX",
    description: "Portable Hemoglobin Analyzer",
    image: productImg,
    isNew: false,
  },
  {
    id: 4,
    category: "Specialty Diagnostics",
    name: "Mispa Revo",
    description: "Automated Cartridge Based Specific Protein Analyzer",
    image: productImg,
    isNew: true, // Shows "NEW" Ribbon
  },
  {
    id: 5,
    category: "Pet Care",
    name: "Q-3 Plus",
    description: "Veterinary Immunoassay Analyzer",
    image: productImg,
    isNew: true,
  },
  {
    id: 6,
    category: "Pre-Analytics",
    name: "Getein 1160",
    description: "Multi-Channel Analyzer",
    image: productImg,
    isNew: false,
  },
];

const categories = ["Point of Care", "Specialty Diagnostics", "Pet Care", "Pre-Analytics"];

function ProductsSection() {
  const searchParams = useSearchParams(); // 2. Get params
  const categoryParam = searchParams.get('category');
  
  const [activeTab, setActiveTab] = useState("Point of Care");

  // 3. Effect to switch tab when URL changes
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveTab(categoryParam);
    }
  }, [categoryParam]);

  // Filter logic
  const filteredProducts = activeTab === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeTab);

  return (
    <section id="products-section" className="w-full py-16 bg-white min-h-screen pt-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* 1. TABS NAVIGATION */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16 border-b border-gray-200 pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-lg font-medium pb-4 transition-all duration-300 relative
                ${activeTab === cat ? "text-[#9a4593]" : "text-gray-500 hover:text-[#9a4593]"}
              `}
            >
              {cat}
              {/* Active Underline */}
              <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#9a4593] rounded-t-md transition-transform duration-300 origin-left
                ${activeTab === cat ? "scale-x-100" : "scale-x-0"}
              `}></span>
            </button>
          ))}
        </div>

        {/* 2. PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
            >
              
              {/* --- IMAGE AREA --- */}
              <div className="relative h-64 w-full p-8 flex items-center justify-center bg-white">
                <div className="relative w-full h-full">
                    <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
              </div>

              {/* --- TEXT CONTENT (Normal State) --- */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#9a4593] transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    {product.description}
                </p>
              </div>

              {/* --- OVERLAY (Hover State) --- */}
              <div className="absolute inset-0 bg-[#9a4593]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {product.name}
                </h3>
                <p className="text-sm text-white/90 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {product.description}
                </p>
                <button className="bg-white text-[#9a4593] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                    Learn More
                </button>
              </div>

              {/* --- "NEW" RIBBON --- */}
              {product.isNew && (
                <div className="absolute top-0 left-0">
                   <div className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 shadow-md z-20 relative">
                      NEW
                   </div>
                   {/* Little triangle for ribbon effect */}
                   <div className="absolute top-0 right-[-6px] w-0 h-0 border-t-[6px] border-t-red-700 border-r-[6px] border-r-transparent"></div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-400">
                <p>No products found in this category.</p>
            </div>
        )}

      </div>
    </section>
  );
}

export default ProductsSection;