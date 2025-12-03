import React from 'react'
import Image from 'next/image'
import Hexagon from '@/src/assets/hex.svg'
import Navbar from './Navbar'
function AboutUs() {
  return (
    <section id="about" className="min-h-screen w-full flex bg-white relative overflow-hidden">
      {/* Left Content Area */}
      <div className="w-1/2 flex flex-col justify-center px-16 relative z-10">
        {/* Abstract Background Pattern Left */}
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-no-repeat bg-contain opacity-20 z-0"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%239a4593' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='50' cy='50' r='35' stroke='%239a4593' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='50' cy='50' r='30' stroke='%239a4593' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='50' cy='50' r='25' stroke='%239a4593' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='50' cy='50' r='20' stroke='%239a4593' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")` }}>
        </div>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold text-[#9a4593] mb-2">ABOUT US</h2>
          <div className="h-1 w-24 bg-[#9a4593] mb-8"></div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Inspire Gene delivers Point of Care Diagnostics and Medical Device solutions to hospitals, clinics, and ICUs. Our close ties with healthcare professionals help us identify needs and offer tailored, high-value solutions. We partner with manufacturers to market complete product ranges and anticipate demand.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Focused on delivering a strong customer experience, we also ensure optimal equipment performance through our dedicated technical support.
          </p>
          
          <button className="bg-[#9a4593] text-white font-medium py-3 px-8 rounded-lg hover:bg-[#823b7d] transition-colors shadow-md">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-1/2 relative flex items-center justify-end">
        <div className="h-[90%] w-[90%] relative">
           <Image 
              src="/next.svg" // Make sure to put your image in public folder
              alt="Doctor writing on clipboard" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-l-3xl shadow-2xl z-10"
            />
          {/* Abstract Hexagon Pattern Right */}
          <div className="absolute -bottom-10 -right-1 w-40 h-40 bg-no-repeat bg-contain z-20"
              //  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg stroke='%239a4593' stroke-width='0.5' fill='none'%3E%3Cpath d='M20 10 L80 10 L95 50 L80 90 L20 90 L5 50 Z'/%3E%3Cpath d='M25 15 L75 15 L85 50 L75 85 L25 85 L15 50 Z'/%3E%3Cpath d='M30 20 L70 20 L75 50 L70 80 L30 80 L25 50 Z'/%3E%3C/g%3E%3C/svg%3E")` }}
              >
            <Image 
             src={Hexagon} 
             alt="Hexagon" 
             width={150} 
             height={150} 
             className="animate-[spin_10s_linear_infinite]"
           />
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  )
}

export default AboutUs