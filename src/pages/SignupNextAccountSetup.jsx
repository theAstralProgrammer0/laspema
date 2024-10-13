import React from 'react'
import SignupNextForm from '../components/SignupNextForm'
import Footer from '../components/Footer'

const SignupNextAccountSetup = () => {
  return (
    <React.Fragment>
    <div className="p-20 h-fit bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500">
    <SignupNextForm/>
    </div>
    <Footer/>
  </React.Fragment>
  )
}

export default SignupNextAccountSetup