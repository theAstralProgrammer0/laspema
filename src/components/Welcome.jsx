import React from 'react'
import { BsEyeFill } from 'react-icons/bs'
import { SiSimpleanalytics } from 'react-icons/si'
import { ImDatabase } from 'react-icons/im'
import { TbLicense } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const baseUrl = `${process.env.REACT_APP_GOOGLE_DRIVE_BASE_URL}`;
const lekkiBridge = `${baseUrl}${process.env.LEKKI_BRIDGE}`;
const Welcome = () => {
  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col justify-between py-20">
        <div className="grid md:grid-cols-2 gap-4 max-w-[1250px] m-auto">
            <div className="mx-auto flex flex-col justify-between md:items-start w-full px-4 py-8 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 border-zinc-500 rounded-lg shadow-2xl">
                <p className="text-sans font-normal text-center md:text-start text-[#000300] text-2xl py-3">Lagos State Planning And Environmental Monitoring Authourity</p>
                <h1 className="text-sans font-normal text-center md:text-start text-[#000300] py-3 text-5xl md:text-7xl">Welcome</h1>
                <p className="text-sans font-normal text-center md:text-start text-gray-600 text-2xl py-3">Visit our blog page to learn more</p>
                <Link to='/blog'><button className="mx-auto bg-[#AFEEEE] text-gray-900 md:w-[200px] rounded-md font-medium hover:py-4 hover:bg-[#f5ef42] hover:text-black hover:text-lg ease-in-out duration-300 shadow-2xl py-3 px-6 my-4 w-[100%] md:mx-0">Learn more</button></Link>
            </div>
            <div className="px-3 h-fit">
                <img className="object-cover w-full h-[400px] rounded-lg hover:scale-95 ease-in-out duration-300" src={lekkiBridge} alt='/'/>
            </div>
            <div className="flex flex-col md:min-w-[75vw] my-5 py-8 bg-slate-400 border-zinc-500 rounded-lg shadow-2xl text-center">
                <p className="font-sans font-semibold">LASPEMA Services</p>
                <div className="flex flex-wrap justify-between px-4 ">
                    <p className="flex px-4 py-2 text-slate-900 font-sans"><BsEyeFill className="h-6 px-1 text-[#afeeee]"size={30}/>Monitoring</p>
                    <p className="flex px-4 py-2 text-slate-900 font-sans"><SiSimpleanalytics className="h-6 px-1 text-[#afeeee]" size={30}/>Logistics</p>
                    <p className="flex px-4 py-2 text-slate-900 font-sans"><ImDatabase className="h-6 px-1 text-[#afeeee]" size={30}/>Data Storage</p>
                    <p className="flex px-4 py-2 text-slate-900 font-sans"><TbLicense className="h-6 px-1 text-[#afeeee]" size={30}/>Licensing</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Welcome
