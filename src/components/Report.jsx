import React from 'react'



const Report = () => {
  return (
  <div className="bg-slate-200 p-[5%]">
    <div id="report" className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 max-w-[1240px] m-auto w-full p-4 md:max-w-[1300px] border-zinc-500 rounded-lg shadow-2xl">
        <h1 className="font-serif text-center md:text-start text-[#000300] py-3 text-2xl md:text-4xl">Report a Violation of our Urban Face</h1>
        <form action='submit' method='POST' className='lg:flex lg:justify-between w-full items-center' >
          <div className='md:flex md:flex-wrap w-full justify-between'>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2'>Name</label>
              <input type='email' className='bg-zinc-200 text-sans text-sm text-[#000300] required border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 invalid:border-solid invalid:border-2 invalid:border-pink-600 shadow-2xl'/>
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2'>Street</label>
              <input type='text' className='bg-zinc-200 text-sans text-sm text-[#000300] required border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl'/>
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2'>Landmark</label>
              <input type='text' className='bg-zinc-200 text-sans text-sm text-[#000300] required border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl'/>
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 py-2'>
              <label className='font-semibold font-[#000300] text-xs px-3 py-2'>L.G.A</label>
              <select name='' id='' className='bg-zinc-200 text-sans text-sm text-[#000300] lg:w-[250px] md:w-full border border-slate-300 rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 outline-none focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl'>
                <option value='' disabled={true}>choose one</option>
                <option value=''>Agege</option>
                <option value=''>Ajeromi-Ifelodun</option>
                <option value=''>Alimosho</option>
                <option value=''>Amuwo-Odofin</option>
                <option value=''>Apapa</option>
                <option value=''>Badagry</option>
                <option value=''>Epe</option>
                <option value=''>Eti-Osa</option>
                <option value=''>Ibeju-Lekki</option>
                <option value=''>Ifako-Ijaiye</option>
                <option value=''>Ikeja</option>
                <option value=''>Ikorodu</option>
                <option value=''>Kosofe</option>
                <option value=''>Lagos Island</option>
                <option value=''>Lagos Mainland</option>
                <option value=''>Mushin</option>
                <option value=''>Ojo</option>
                <option value=''>Oshodi-Isolo</option>
                <option value=''>Somolu</option>
                <option value=''>Surulere</option>
              </select>
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2 '>Date of sighting</label>
              <input type='date' className='bg-zinc-200 text-sans text-sm text-[#000300] border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 outline-none focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl'/>

            </div>
            {/* <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2 '>Time of sighting</label>
              <input type='time' className='bg-zinc-200 text-sans text-sm text-[#000300] border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 outline-none focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl'/>

            </div> */}
            <div className='flex flex-col w-full lg:max-w-[550px] my-2 p-2'>
              <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2 '>Description</label>
              <textarea className='bg-zinc-200 text-sans text-sm text-[#000300] border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 outline-none focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl' cols="30" rows="10"></textarea>
            </div>
            <div className='flex flex-col w-full lg:max-w-[550px] my-2 p-2'>
              <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2 '>Upload a picture</label>
              <input type='file' />
              <button type='submit' className="bg-[#AFEEEE] text-gray-900 w-[200px] rounded-md font-medium mt-7 mx-auto py-3 hover:py-4 hover:w-[230px] hover:bg-[#f5ef42] hover:text-black hover:text-lg ease-in-out duration-300 shadow-2xl">Go!</button>
            </div>
            </div>
        </form>
    </div>
  </div>
  )
}

export default Report