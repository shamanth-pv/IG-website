import About from '@/components/About'
import Navbar from '@/components/Navbar'
import React from 'react'
import Team from '@/components/Team'
function page() {
  return (
    <>
        <Navbar textColor='text-white'/>
        <About />
        <Team />
    </>
  )
}

export default page