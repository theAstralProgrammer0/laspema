import React from 'react'
import { TfiLinkedin } from 'react-icons/tfi'
import GMQuoteCard from './GMQuoteCard'

const baseUrl = `${process.env.REACT_APP_GOOGLE_DRIVE_BASE_URL}`;
const gm = `${baseUrl}${process.env.GM}`;
const GM = () => {
  return (
    <div className="w-full bg-slate-200 py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <a href="https://web.facebook.com/daisi.oso/?_rdc=1&_rdr"><img className="w-[300px] h-auto mx-auto my-4 rounded-full shadow-2xl hover:scale-105 ease-in-out duration-300" src={gm} alt='/' /></a>
            <div className="flex flex-col justify-center">
                <p className="text-black font-bold">GENERAL MANAGER, LAGOS STATE PLANNING AND ENVIRONMENTAL MONITORING AUTHOURITY</p>
                <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2">Tpl. Daisi Oso</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat facilis temporibus voluptas dolore nesciunt, eaque vero sed neque aspernatur. Officia saepe et sed, facilis modi veritatis dignissimos ex unde cumque?</p>
                <a href="https://www.linkedin.com/in/daisi-oso-424a7184/" target="blank"><button className="bg-black text-[#00df98] w-[200px] rounded-md font-medium mt-7 mx-auto md:mx-0 flex justify-evenly py-3 hover:py-4 hover:w-[230px] hover:bg-[#4278f5] hover:text-slate-300 hover:text-bold ease-in-out duration-300">Connect<TfiLinkedin className="relative right-5 bottom-0.7px shadow-2xl" size={20}/></button></a>
                <GMQuoteCard/>
            </div>
        </div>
    </div>
  )
}

export default GM
