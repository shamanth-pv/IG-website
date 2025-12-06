"use client";
import Navbar from '@/components/Navbar'
import ProductsSection from '@/components/ProductsSection'
import React, { Suspense } from 'react'

function page() {
  return (
    <>
    <Navbar />
    <Suspense>
      <ProductsSection />
    </Suspense>
    </>
  )
}

export default page