import React from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import HistoryMission from '../components/HistoryMission'
import MandateVision from '../components/MandateVision'
// import Slider1 from '../components/Slider1'

const About = () => {
  return (
    <React.Fragment>
        <Navbar />
        <HistoryMission/>
        <MandateVision/>
        {/* <Slider1/>  */}
        <Newsletter/>
        <Footer/>
    </React.Fragment>
  )
}

export default About