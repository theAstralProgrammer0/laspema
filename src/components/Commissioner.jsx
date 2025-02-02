import React from 'react'
import { TfiLinkedin } from 'react-icons/tfi'
import CommissionerQuoteCard from './CommissionerQuoteCard'

const baseUrl = `${process.env.REACT_APP_GOOGLE_DRIVE_BASE_URL}`;
const commisioner = `${baseUrl}${process.env.COMMISSIONER}`;
const Commissioner = () => {
  return (
    <div className="w-full bg-slate-200 py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 pt-4">
            <img className="md:order-last w-[300px] h-auto mx-auto my-4 rounded-full shadow-2xl hover:scale-105 ease-in-out duration-300" src={commisioner} alt='/' />
            <div className="flex flex-col justify-center mb-0">
                <p className="text-black font-bold">COMMISSIONER FOR PHYSICAL PLANNING AND URBAN DEVELOPMENT</p>
                <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 text-black">Hon. Omotayo Bamgbose-Martins</h1>
                <p className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat facilis temporibus voluptas dolore nesciunt, eaque vero sed neque aspernatur. Officia saepe et sed, facilis modi veritatis dignissimos ex unde cumque?</p>
                <button className="bg-[#00df98] text-black w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 mt-9 flex justify-evenly hover:py-4 hover:w-[230px] hover:bg-[#4278f5] hover:text-slate-300 hover:text-bold ease-in-out duration-300 shadow-2xl">Connect<TfiLinkedin className="relative right-5 bottom-0.7px" size={20}/></button>
                <CommissionerQuoteCard/>
            </div>
        </div>
    </div>
  )
}

export default Commissioner

