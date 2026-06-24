import React from 'react'
import Hero from '../Components/Hero'
import Header from '../Components/Header'
import ShortAbout from '../Components/ShortAbout'
import HowItWorks from '../Components/HowItWorks'
import FAQ from '../Components/FAQ'


const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <ShortAbout/>
        <HowItWorks/>
        <FAQ/>
    </>
  )
}

export default Home