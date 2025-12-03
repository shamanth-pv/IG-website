"use client";
import AboutUs from '@/components/AboutUs'
import ContactSection from '@/components/ContactSection';
import LeadershipSection from '@/components/LeadershipSection';
import Navbar from '@/components/Navbar'
import PartnersSection from '@/components/PartnersSection';
import ServicesSection from '@/components/ServicesSection';
import SolutionsSection from '@/components/SolutionsSection';
import SwipeCard, { slides } from '@/components/SwipeCard'
import React, { useState } from 'react'

function page() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // 2. Determine the color based on the current slide
  // If slide 0 is active, grab slides[0].navColor
  const currentNavColor = slides[currentSlideIndex].navColor;

  return (
    <main>
      {/* 3. Pass the color down to Navbar */}
      <Navbar slideColor={currentNavColor} />
      
      {/* 4. Pass the state control down to Slider */}
      <SwipeCard 
        current={currentSlideIndex} 
        setCurrent={setCurrentSlideIndex} 
      />

      {/* Other sections */}
      {/* <AboutUs /> */}
      <SolutionsSection />
      <PartnersSection />
      <ServicesSection />
    </main>
  )
}

export default page