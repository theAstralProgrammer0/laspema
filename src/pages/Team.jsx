import React from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Governor from '../components/Governor'
import Commissioner from '../components/Commissioner'
import GM from '../components/GM'
import SA from '../components/SA'

const Team = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Governor/>
        <SA/>
        <GM/>
        <Commissioner/>
        <Newsletter/>
        <Footer/>
    </React.Fragment>
  )
}

export default Team