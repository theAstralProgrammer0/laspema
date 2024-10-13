import React from 'react'
import locationBckg from '../assets/lekki bridge photo.jpeg'
// import { GrLocation } from 'react-icons/gr'
import { TfiArrowRight } from 'react-icons/tfi'
import { TfiLocationPin } from 'react-icons/tfi'


const Location = () => {
  return (
    <div className="bg-slate-200 w-full h-screen ">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
            <img className="w-full h-full object-cover mix-blend-overlay" src={locationBckg} alt='/'/>
        </div>
        <div className="max-w-[1240px] mx-auto text-white relative">
            <div className="px-4 py-12">
                <h2 className="text-2xl pt-8 text-slate-300 uppercase text-center">Our various branches and HQs</h2>
                <h3 className="text-5xl font-bold py-6 text-center">FINDING <span className="text-[#00df9a] font-bold p-2 tracking-widest">LASPEMA</span></h3>
                <p className="py-4 text-3xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quidem. Saepe, esse expedita error quas necessitatibus, porro omnis totam laudantium excepturi veniam maiores recusandae in officiis aperiam iusto, commodi eius tempore. Ab recusandae suscipit sequi natus doloremque dolore optio excepturi mollitia alias, libero culpa odit, perferendis sit itaque corrupti quidem?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                <div className="bg-slate-400/30 rounded-xl shadow-2xl">
                    <div className="p-8">
                        <h3 className="flex items-center font-bold text-2xl text-[#00df98]/90 my-6 ">Head Office<TfiLocationPin/></h3>
                        <p className="text-zinc-900 text-xl ">230, Giwa Abubakar street, Lekki, Lagos State, Nigeria.</p>
                    </div>
                    <div className="bg-slate-300 pl-8 py-4 rounded-b-lg ">
                        <a href='https://www.linkedin.com/in/babajide-sanwo-olu-483211172/?originalSubdomain=ng'><button className="flex items-center bg-black text-[#00df98] w-[200px] rounded-md font-medium mt-7 mx-auto md:mx-0 py-3 flex justify-evenly hover:py-4 hover:w-[230px] hover:bg-[#4278f5] hover:text-slate-300 hover:text-bold ease-in-out duration-300 shadow-2xl">Contact Us<TfiArrowRight className="w-5 ml-2"/></button></a>
                    </div>
                </div>
                <div className="bg-slate-400/30 rounded-xl shadow-2xl">
                    <div className="p-8">
                        <h3 className="flex items-center font-bold text-2xl text-[#4278f5] my-6 ">Head Quarters<TfiLocationPin/></h3>
                        <p className="text-zinc-900 text-xl">9, Oso Temitayo street, Victoria Island, Lagos State, Nigeria.</p>
                    </div>
                    <div className="bg-slate-300 pl-8 py-4 rounded-b-lg ">
                        <a href='https://www.linkedin.com/in/babajide-sanwo-olu-483211172/?originalSubdomain=ng'><button className="flex items-center bg-black text-[#4278f5] w-[200px] rounded-md font-medium mt-7 mx-auto md:mx-0 py-3 flex justify-evenly hover:py-4 hover:w-[230px] hover:bg-[#00df98] hover:text-slate-300 hover:text-bold ease-in-out duration-300 shadow-2xl">Contact Us<TfiArrowRight className="w-5 ml-2"/></button></a>
                    </div>

                </div>
                <div className="bg-slate-400/30 rounded-xl shadow-2xl">
                    <div className="p-8">
                        <h3 className="flex items-center font-bold text-2xl text-[#00df98]/90 my-6 ">Branch<TfiLocationPin/></h3>
                        <p className="text-zinc-900 text-xl">163, High Court street, Ikeja G.R.A, Lagos State, Nigeria.</p>
                    </div>
                    <div className="bg-slate-300 pl-8 py-4 rounded-b-lg ">
                        <a href='https://www.linkedin.com/in/babajide-sanwo-olu-483211172/?originalSubdomain=ng'><button className="flex items-center bg-black text-[#00df98] w-[200px] rounded-md font-medium mt-7 mx-auto md:mx-0 py-3 flex justify-evenly hover:py-4 hover:w-[230px] hover:bg-[#4278f5] hover:text-slate-300 hover:text-bold ease-in-out duration-300 shadow-2xl">Contact Us<TfiArrowRight className="w-5 ml-2"/></button></a>
                    </div>

                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Location