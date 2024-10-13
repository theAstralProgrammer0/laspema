import React, {useState, useEffect } from 'react'
import {TfiClose, TfiMenuAlt} from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { navigation } from '../utils/blogData'


const Navbar = () => {
    
    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }

    const [active, setActive] = useState(false)
    const [ setItem] = useState({ name: "home" })
    const [navHR, setNavHR] = useState(false)
    
    
    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(index);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return Math.floor(window.scrollY) > 360 ? setNavHR(true) : setNavHR(false);
        })
    })


  return (
    <React.Fragment>
        <div id="nav" smooth={true} className={ `${navHR
                                    ? 'h-12 ease-out duration-300' 
                                    : 'h-24 ease-in-out duration-300'}
                                    sticky top-0 z-50 bg-[#000300] w-screen flex justify-between items-center  max-w-full mx-auto sm: px-5 md:px-10 lg:px-20  text-[#AFEEEE]`}>
        
        {/** Navbar links for medium to large viewports */}
        <Link to='/'><h1 className="w-full text-3xl font-bold text-[#00df9a] tracking-wider">LASPEMA</h1></Link>
        <ul className="hidden md:flex">
            {
                // Navlinks map function
                navigation.map((item, index) => {
                    return <Link to={item.to} 
                    onClick = {(e) => {
                        handleClick(e, index)
                    }}
                    className={`${active === index ? 'font-bold text-xl' : ''} hover:font-semibold hover:text-2xl hover:text-[#00df9a] hover:cursor-pointer ease-in-out duration-300`}><li className="cursor-pointer capitalize m-4">{item.name}</li></Link>
                })
            }
        </ul>
        {/* Login and Signup buttons for medium to large viewports */}
            <div className="hidden md:flex justify-end items-center">
                <Link to='/login'><button className="text-[#AFEEEE] border-none hover:bg-transparent hover:font-semibold hover:text-2xl hover:text-[#00df9a] hover:cursor-pointer ease-in-out duration-300 mr-4 sm:text-xs md:text-base lg:text-lg" >Log In</button></Link>
                <Link to='/signup'><button className="text-[#000300] border bg-[#00df9a]  hover:bg-transparent hover:text-[#afeeee] hover:text-lg ease-in-out duration-300 shadow-2xl hover:py-4 rounded-md px-8 py-2" >Sign Up</button></Link>
            </div>

            {/* Nav bar for small and xsmall viewports */}
        <div onClick={handleNav} className="block md:hidden">
            {nav 
            ? <TfiClose size={20}/> 
            : <TfiMenuAlt size={20}/>
            }
        </div>
        <div className={nav 
            ? "z-50 fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"}> 
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">LASPEMA</h1>
            <ul className="uppercase p-4">
                <Link to='/'> <li className="p-4 border-b border-b-gray-600 hover:font-bold hover:text-lg hover:text-[#00df9a] hover:cursor-pointer ease-in-out duration-300" >Home</li></Link>
                <Link to='/about'> <li className="p-4 border-b border-b-gray-600 hover:font-bold hover:text-lg hover:text-[#00df9a] hover:cursor-pointer ease-in-out duration-300" >About</li></Link>
                <Link to='/blog'> <li className="p-4 border-b border-b-gray-600 hover:font-bold hover:text-lg hover:text-[#00df9a] hover:cursor-pointer ease-in-out duration-300" >Blog</li></Link>
                <Link to='/responsibilities'> <li className="p-4 border-b border-b-gray-600 hover:font-bold hover:text-lg hover:text-[#00df9a] hover:cursor-pointer ease-in-out duration-300" >Team</li></Link>
                <Link to='/contact'> <li className="p-4 border-b border-b-gray-600 hover:font-bold hover:text-lg hover:text-[#00df9a] hover:cursor-pointer ease-in-out duration-300" >Contact</li></Link>
                {/** Login and Signup buttons for small and xsmall viewports */}
                <div className="flex flex-col my-4">
                    <Link to='/login'><button className="px-8 py-3 text-[#afeeee] hover:font-bold hover:text-lg hover:text-[#00df9a] hover:cursor-pointer ease-in-out duration-300">Log In</button></Link>
                    <Link to='/signup'><button className="px-8 py-3 md:py-2 text-[#000300] border bg-[#00df9a]  hover:bg-transparent hover:text-[#afeeee] hover:text-lg ease-in-out duration-300 shadow-2xl hover:py-4 rounded-md">Sign Up</button></Link>
                </div>
            </ul>

        </div>


    </div>
    </React.Fragment>
  )
}

export default Navbar
