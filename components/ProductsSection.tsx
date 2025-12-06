"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Products_png from '@/src/assets/Products';

const allProducts = [
  // Point of Care
  {
    id: 1,
    category: "Point of Care",
    name: "Pathfast",
    description: "Cardiac Biomarker Analyzer with CLEIA Technology",
    image: Products_png.Pathfast_png,
    isNew: false,
    externalLink: 'https://www.agappe.com/in/pathfast-cardiac-biomarker-analyzer-with-cleia-technology.html',
  },
  {
    id: 2,
    category: "Point of Care",
    name: "Mispa Chem DX",
    description: "Auto Dry Biochemistry Analyzer",
    image: Products_png.MispaChemDX_png,
    isNew: false,
    externalLink: 'https://www.agappe.com/in/dry-chemistry-analyzer-chemdx.html',
  },
  {
    id: 3,
    category: "Point of Care",
    name: "Mispa HBX",
    description: "Portable Hemoglobin Analyzer",
    image: Products_png.MispaHBX_png,
    isNew: false,
    externalLink: 'https://www.agappe.com/in/mispa-hbx-hb-meter.html',
  },
  {
    id: 4,
    category: "Point of Care",
    name: "Mispa Revo",
    description: "Automated Cartridge Based Specific Protein Analyzer",
    image: Products_png.MispaRevo_png,
    isNew: false, // Shows "NEW" Ribbon
    externalLink: 'https://www.agappe.com/in/mispa-revo-immunofluorescence-analyzer.html',
  },
  {
    id: 5,
    category: "Point of Care",
    name: "Q-3 Plus",
    description: "Veterinary Immunoassay Analyzer",
    image: Products_png.Q3Plus_png,
    isNew: false,
    externalLink: 'https://www.agappe.com/in/blood-coagulation-q3-plus.html',
  },
  {
    id: 6,
    category: "Point of Care",
    name: "Getein 1160",
    description: "Multi-Channel Analyzer",
    image: Products_png.Getein1160_png,
    isNew: false,
    externalLink: 'https://www.getein.com/getein-1160-immunofluorescence-quantitative-analyzer-supplier\_p91.html',
  },
  // Speciality Diagnostics
  {
    id: 1,
    category: "Speciality Diagnostics",
    name: "Mispa i60",
    description: "Chemiluminescent Enzyme Immunoassay Analyzer",
    image: Products_png.Mispai60_png,
    isNew: false,
    externalLink: 'https://www.agappe.com/in/mispa-i60-chemiluminescence-enzyme-immunoassay-system.html',
  },
  {
    id: 2,
    category: "Speciality Diagnostics",
    name: "Mispa i121",
    description: "Chemiluminescent Enzyme Immunoassay Analyzer",
    image: Products_png.Mispai121_png,
    isNew: false,
    externalLink: 'https://www.agappe.com/in/mispa-i121-fully-auto-chemiluminescence-enzyme-immunoassay-analyzer.html',
  },
  {
    id: 3,
    category: "Speciality Diagnostics",
    name: "Seronorm",
    description: "Immunoassay Lyo",
    image: Products_png.Seronorm_png,
    isNew: false,
    externalLink: 'https://www.sero.no/products/seronorm-immunoassay-lyo',
  },
  // Pet Care
  {
    id: 1,
    category: "Pet Care",
    name: "Mispa Chem DX",
    description: "Auto Dry Biochemistry Analyzer",
    image: Products_png.MispaChemDX_png,
    isNew: false,
    externalLink: 'https://www.getein.com/getein-1160-immunofluorescence-quantitative-analyzer-supplier\_p91.html',
  },
  {
    id: 2,
    category: "Pet Care",
    name: "Mispa VetX 50",
    description: "Description",
    image: Products_png.MispaVetX50_png,
    isNew: false,
    externalLink: '#',
  },
  // Pre-Analytics
  {
    id: 1,
    category: "Pre-Analytics",
    name: "IG Artery",
    description: "Arterial Blood Gas Sampler",
    image: Products_png.IG_Artery_png,
    isNew: true,
    externalLink: '/IGArteryBrochure.pdf',
  },
];

const categories = ["Point of Care", "Speciality Diagnostics", "Pet Care", "Pre-Analytics"];

function ProductsSection() {
  // Entry effect
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  
  const searchParams = useSearchParams(); // 2. Get params
  const categoryParam = searchParams.get('category');
  
  const [activeTab, setActiveTab] = useState("Point of Care");

  // Effect to switch tab when URL changes
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveTab(categoryParam);
    }
  }, [categoryParam]);


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
  // Filter logic
  const filteredProducts = activeTab === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeTab);

  return (
    <section id="products-section" className="w-full py-16 bg-white min-h-screen pt-48">
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* TABS NAVIGATION */}
        <div className="font-montserrat flex flex-wrap items-center justify-center gap-8 mb-16 border-b border-gray-200 pb-1">
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

        {/* PRODUCTS GRID */}
        <div ref={sectionRef}
        className={`font-montserrat grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 
                        transition-all duration-[500ms] ease-[cubic-bezier(.22,.68,.32,1.01)]
                        ${visible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-[1]"
                        }`}>
          
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
            >
              
              {/* IMAGE AREA */}
              <div className="relative h-64 w-full p-4 flex items-center justify-center bg-white">
                <div className="relative w-full h-full">
                    <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
              </div>

              {/* TEXT CONTENT (Normal State) */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#9a4593] transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    {product.description}
                </p>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-[#9a4593]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {product.name}
                </h3>
                <p className="text-sm text-white/90 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {product.description}
                </p>
                <button className="bg-white text-[#9a4593] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                    <a href={product.externalLink} target='_blank'>Learn More</a>
                </button>
              </div>

              {/* "NEW" RIBBON */}
              {product.isNew && (
                <div className="absolute top-0 left-0">
                   <div className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 shadow-md z-20 relative">
                      NEW
                   </div>
                   {/* Triangle for ribbon effect */}
                   <div className="absolute top-0 right-[-6px] w-0 h-0 border-t-[6px] border-t-red-700 border-r-[6px] border-r-transparent"></div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
            <div className="font-montserrat text-center py-20 text-gray-400">
                <p>No products found in this category.</p>
            </div>
        )}

      </div>
    </section>
  );
}

export default ProductsSection;