import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import Agenda from '../components/Agenda'
import Report from '../components/Report'
// import Chat from '../components/Chat'

const Home = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Hero/>
          <Welcome/>
          <Agenda/>
          <Report/>
        <Newsletter/>
        <Footer/>
    </React.Fragment>
  )
}

export default Home