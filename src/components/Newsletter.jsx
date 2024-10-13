import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full bg-black py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2 text-slate-300">Want tips & tricks to maximize incidental open spaces?</h1>
                <p className='my-2'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="my-0">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input className="peer p-3 mt-0 flex flex-row w-full rounded-md text-black hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 invalid:border-solid invalid:border-2 invalid:border-pink-600 shadow-2xl" type="email" placeholder='Enter email...' />
                    <button className="bg-[#AFEEEE] text-gray-900 w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-4 hover:py-5 hover:w-[230px] hover:bg-[#f5ef42] hover:text-black hover:text-lg focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 ease-in-out duration-300 shadow-2xl">Notify me!</button>
                </div>
                    <p class="my-2 invisible peer-invalid:visible text-pink-600 text-sm">
                    Please provide a valid email address.
                    </p>
                <p>We care about protection of your data. Read our <span className="text-[#00d98a]">Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter