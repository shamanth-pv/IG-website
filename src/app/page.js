"use client"
import Navbar from '@/components/Navbar';
import PartnersSection from '@/components/PartnersSection';
import ServicesSection from '@/components/ServicesSection';
import SwipeCard, { slides } from '@/components/SwipeCard'
import React, {useState} from 'react'

export default function page() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div>
      <Navbar isHome={1} />
      <SwipeCard 
        current={currentSlideIndex} 
        setCurrent={setCurrentSlideIndex} 
      />
      <PartnersSection />
      <ServicesSection />
    </div>
  )
}
