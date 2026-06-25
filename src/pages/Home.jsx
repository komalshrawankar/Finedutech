import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import PurposeSection from '../components/PurposeSection'
import InitiativesSection from '../components/InitiativesSection'
import PartnerPurposeSection from '../components/PartnerPurposeSection'
import SupportedInstitutions from '../components/SupportedInstitutions'
import ImpactSection from '../components/ImpactSection'
import PartnerSchoolsSection from '../components/PartnerSchoolsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
     <Navbar/>
     <HeroSection/>
    <PurposeSection/>
    <InitiativesSection/>
    <PartnerPurposeSection/>
    <SupportedInstitutions/>
    <ImpactSection/>
    <PartnerSchoolsSection/>
    <TestimonialsSection/>
    <BlogSection/>
    <Footer/>
   </>
    
  
  )
}

export default Home
