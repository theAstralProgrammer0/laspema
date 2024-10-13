import React from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'


const Login = () => {
  return(
  <React.Fragment>
    <Navbar/>
    <div className="p-20 h-fit bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500">
    <LoginForm/>
    </div>
    <Footer/>
  </React.Fragment>
)
}
export default Login