import React from 'react'
import Hero from './components/home/Hero'
import Facilities from './components/home/Facilities'
import Services from './components/home/Services'
import WhyChooseUs from './components/home/WhyChooseUs'
import Specialists from './components/home/Specialists'
import Testimonials from './components/home/Testimonials'
import DoctorProfile from './components/home/DoctorProfile'
import FAQ from './components/home/FAQ'

const page = () => {
  return (
    <div>
      <Hero />
      <Facilities />
      <Services />
      <WhyChooseUs />
      <Specialists />
      <Testimonials />
      <DoctorProfile />
      <FAQ />
      
    </div>
  )
}

export default page
