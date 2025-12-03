import About from '@/components/About'
import Navbar from '@/components/Navbar'
import React from 'react'
import Team from '@/components/Team'
import ContactSection from '@/components/ContactSection'

function page() {
  return (
    <>
        <Navbar textColor='text-white'/>
        <About />
        <Team />
        <ContactSection />
    </>
  )
}

export default page