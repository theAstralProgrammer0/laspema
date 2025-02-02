import React from 'react'
import { ReactTyped } from 'react-typed'
import { Link as LinkRoll } from 'react-scroll'
import { Link } from 'react-router-dom'


const baseUrl = `${process.env.REACT_APP_GOOGLE_DRIVE_BASE_URL}`; 
const laspema_logo = `${baseUrl}${process.env.REACT_APP_LASPEMA_LOGO}`; 
const backgroundVideo = `${baseUrl}${process.env.REACT_APP_BACKGROUND_VIDEO}`;
const Hero = () => {
  return (
    <div className="h-screen w-screen relative">
        <div className="bg-cover" style={{ backgroundImage: `url(${backgroundVideo})` }}>
            <video className="h-screen w-full bg-slate-200 rounded-md" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
            </video>
        </div>
        <div className="absolute top-0 left-0 lg:left-96 ">
            <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <img className="w-[250px] mx-auto rounded-full mt-0 pt-0" src={laspema_logo} alt='/' />
                <h1 className="text-[#00df98] md:text-5xl sm:text-4xl text-2xl font-bold py-3 tracking-widest">LAGOS STATE PLANNING AND ENVIRONMENTAL MONITORING AUTHORITY </h1><span className="text-[#00df9a] font-bold p-2 tracking-widest">(LASPEMA)</span>
                <div>
                    <p className="md:text-xl sm:text-lg text:base text-[#000300] font-serif p-2 py-2">
                    Determination of the Locations for Urban Furniture, Infrastructural Facilities and Centres of Economic Activities in the State
                    </p>
                    <ReactTyped className="md:text-xl sm:text-lg text:base text-[#000300] font-semibold p-2" 
                    strings={['+2348026447595', 'info@laspema.ng']}
                    typeSpeed={100}
                    backSpeed={120}
                    loop
                    />
                </div>
                <div className="flex items-center justify-around">
                    <LinkRoll to='report' smooth={true} offset={-40} duration={400}>
                        <button className="bg-[#AFEEEE] text-gray-900 w-[200px] rounded-md font-medium mt-7 mx-auto py-3 hover:py-4 hover:w-[230px] hover:bg-[#f5ef42] hover:text-black hover:text-lg ease-in-out duration-300 shadow-2xl">Report setback violation
                        </button>
                    </LinkRoll> 
                    <Link to='/login'>
                        <button className="bg-[#f5ef42] text-gray-900 w-[200px] rounded-md font-medium mt-7 mx-auto py-3 hover:py-4 hover:w-[230px] hover:bg-[#AFEEEE] hover:text-black hover:text-lg ease-in-out duration-300 shadow-2xl">Renew License
                        </button>
                    </Link> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero
