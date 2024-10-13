import React from 'react'
import Navbar from '../components/Navbar'
import SignupForm from '../components/SignupForm'
import Footer from '../components/Footer'


const Signup = () => {
  return(
  <React.Fragment>
    <Navbar/>
    <div className="p-20 h-fit bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500">
    <SignupForm/>
    </div>
    <Footer/>
  </React.Fragment>
)
}
export default Signup