import React from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Location from '../components/Location'
import LicenseForm from '../components/LicenseForm'

const Contact = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Location/>
        <div className="mt-[1000px] md:mt-0">
          <LicenseForm/>
        </div>
          <Newsletter/>
          <Footer/>
    </React.Fragment>
  )
}

export default Contact