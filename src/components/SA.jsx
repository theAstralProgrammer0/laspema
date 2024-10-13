import React from 'react'
import sa from '../assets/sa.JPG'
import { TfiLinkedin } from 'react-icons/tfi'
import SAQuoteCard from './SAQuoteCard'


const SA = () => {
  return (
    <div className="w-full bg-slate-200 py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center">
                <p className="font-bold">SPECIAL ADVISER ON e-GIS & PLANNING MATTERS</p>
                <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2">Dr. Olajide Abiodun Babajide</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat facilis temporibus voluptas dolore nesciunt, eaque vero sed neque aspernatur. Officia saepe et sed, facilis modi veritatis dignissimos ex unde cumque?</p>
                <a href='https://www.linkedin.com/in/babajide-sanwo-olu-483211172/?originalSubdomain=ng'><button className="bg-[#00df98] text-black w-[200px] rounded-md font-medium mt-7 mx-auto md:mx-0 py-3 flex justify-evenly hover:py-4 hover:w-[230px] hover:bg-[#4278f5] hover:text-slate-300 hover:text-bold ease-in-out duration-300 shadow-2xl">Connect<TfiLinkedin className="relative right-5 bottom-0.7px" size={20}/></button></a>
                <SAQuoteCard/>
            </div>
            <a href="https://web.facebook.com/jidesanwooluofficial/?_rdc=1&_rdr" target="blank"><img className="w-[300px] h-[300px] mx-auto my-4 rounded-full shadow-2xl hover:scale-105 ease-in-out duration-300" src={sa} alt='/' /></a>
        </div>
    </div>
  )
}

export default SA