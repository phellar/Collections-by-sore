import React from 'react'
import Hero from '../Components/Hero'
import Header from '../Components/Header'
import ShortAbout from '../Components/ShortAbout'
import HowItWorks from '../Components/HowItWorks'
import FAQ from '../Components/FAQ'
import PersonalizedPortrait from '../Components/PersonalizedPortrait'
import LatestCollection from '../Components/LatestCollection'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <ShortAbout/>
        <LatestCollection/>
        <HowItWorks/>
        <PersonalizedPortrait/>
        <FAQ/>
        <Footer/>
    </>
  )
}

export default Home