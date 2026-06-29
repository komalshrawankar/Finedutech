import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Overview from '../components/Programme/Overview'
import InitiativesSection from '../components/InitiativesSection'
import HowitWorks from '../components/Programme/HowitWorks'
import Footer from '../components/Footer'
import ProgramHero from '../components/Programme/ProgramHero'

const ProgramPage = () => {
  return (
    <>
     <Navbar/>
     <ProgramHero/>
     <Overview/>
     <InitiativesSection/>
     <HowitWorks/>
     <Footer/>
    </>
  )
}

export default ProgramPage
