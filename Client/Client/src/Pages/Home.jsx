import React from 'react'
import Hero from '../Components/Home/Hero'
import LandingPage from '../Components/Home/LandingPage'
import Card from '../Components/Home/Card'
import BookNow from '../Components/Home/BookNow'

const Home = () => {
  return (
    <div>
        <LandingPage/>
        <Hero/>
        <Card/>
        <BookNow/>
    </div>
  )
}

export default Home