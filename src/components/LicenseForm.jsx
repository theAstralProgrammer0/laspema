import React from 'react'
import  laspema_logo  from '../assets/LASPEMA Logo Cropped.jpg'

const LicenseForm = () => {
  return (
    <div className="bg-slate-200 p-9 md:pt-[180px]">
        <div id='license' className="max-w-[1240px] mx-auto w-full p-4 py-16 bg-gradient-to-r from-slate-400 via-slate-400 to-slate-500 border-zinc-500 rounded-2xl shadow-2xl">
                <h2 className="text-center text-slate-300 text-5xl font-bold py-4">Register for a License</h2>
                <p className="text-center text-slate-300 py-2">Fill in the required fields to register for your license</p>
                <div className="grid md:grid-cols-2 items-center">
                    <img src={laspema_logo} alt='/' width='50%' height='50%' className="ml-[25%] border rounded-full shadow-2xl"/>
                    <form className="">
                        <div>
                            
                        <div >
                            <label for="firstname" className="block text-sm font-medium text-slate-100 py-4">First Name</label>
                        </div>
                        <div className="mt-1">
                            <input id="firstname" name="firstname" type="text" autoComplete="firstname" required className="w-full  border-gray-300 px-3 py-2  focus:ring-1 focus:ring-[#afeeee]  bg-zinc-200 text-sans text-sm text-[#000300] required rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl" placeholder='First Name'/>
                        </div>
                        <div >
                            <label for="lastname" className="block text-sm font-medium text-slate-100 py-4">Last Name</label>
                        </div>
                        <div className="mt-1">
                            <input id="lastname" name="lastname" type="text" autoComplete="lastname" required className="w-full border border-gray-300 px-3 py-2  focus:ring-1 focus:ring-[#afeeee] bg-zinc-200 text-sans text-sm text-[#000300] required rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl" placeholder='Last Name'/>
                        </div>
                        <div >
                            <label for="middlename" className="block text-sm font-medium text-slate-100 py-4">Middle Name</label>
                        </div>
                        <div className="mt-1">
                            <input id="lastname" name="lastname" type="text" autoComplete="lastname" className="w-full border border-gray-300 px-3 py-2  focus:ring-1 focus:ring-[#afeeee] bg-zinc-200 text-sans text-sm text-[#000300] required rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl" placeholder='Middle Name (optional)'/>
                        </div>
                        <div >
                            <label for="email" className="block text-sm font-medium text-slate-100 py-4">Email</label>
                        </div>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" autoComplete="email" required className="w-full border border-gray-300 px-3 py-2  focus:ring-1 focus:ring-[#afeeee] bg-zinc-200 text-sans text-sm text-[#000300] required rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl invalid:border-solid invalid:border-2 invalid:border-pink-600" placeholder='Enter email...'/>
                        </div>
                        <div >
                            <label for="phone" className="block text-sm font-medium text-slate-100 py-4">Mobile</label>
                        </div>
                        <div className="mt-1">
                            <input id="phone" name="phone" type="text" autoComplete="phone" required className="w-[50%] border border-gray-300 px-3 py-2  focus:ring-1 focus:ring-[#afeeee] bg-zinc-200 text-sans text-sm text-[#000300] required rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl" placeholder='Phone Number'/>
                        </div>
                        <div >
                            <label for="phone" className="block text-sm font-medium text-slate-100 py-4">Specifications</label>
                        </div>
                        <div className="mt-1">
                            <textarea cols='30' rows='10' id="specifications" name="specifications" type="text" autoComplete="" className="w-full border border-gray-300 px-3 py-2  focus:ring-1 focus:ring-[#afeeee] bg-zinc-200 text-sans text-sm text-[#000300] required rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl" placeholder="I would like to ..."></textarea>
                        </div>
                        <button className="bg-[#AFEEEE] text-gray-900/95 w-[200px] rounded-md font-medium my-6 px-6 py-4 hover:py-5 hover:w-[230px] hover:bg-[#f5ef42] hover:text-black hover:text-lg focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 ease-in-out duration-300 shadow-lg">Submit</button>

                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default LicenseForm