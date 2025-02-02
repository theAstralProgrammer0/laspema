import React from 'react'
import { Link } from 'react-router-dom';
import { TfiArrowCircleLeft } from 'react-icons/tfi'

const baseUrl = `${process.env.REACT_APP_GOOGLE_DRIVE_BASE_URL}`;
const laspema_logo = `${baseUrl}${process.env.LASPEMA_LOGO}`;
const SignupNextForm = () => {
  return (
    <div className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 p-[5%]">
      <h1 className="font-sans font-semibold text-center text-[#000300]/75 py-3 text-2xl md:text-5xl"><span className="text-[#00df9a]/95 font-bold p-2 tracking-widest">LASPEMA </span>License Registeration</h1>
      <Link to="/signup"><button className="w-"><TfiArrowCircleLeft className="text-[#f5ef42] hover:text-[#afeeee] focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 ease-in-out duration-300" size={40}/></button></Link>
    <div id="register" className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 max-w-[1240px] m-auto w-full p-4 md:max-w-[1000px] border-zinc-500 rounded-lg shadow-2xl">
        <Link to="/"><img src={laspema_logo} alt='laspema_logo' className="mx-auto w-[20%] h-[20%] border-zinc-500 rounded-full shadow-2xl my-4" /></Link>
        <form action='submit' method='POST' className='lg:flex lg:justify-between w-full items-center' >
          <div className='flex-wrap md:flex w-full justify-between'>
            <div className='flex flex-col w-full lg:max-w-[40%] my-2 p-2'>
              <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2'>First Name</label>
              <input type='text' className='bg-zinc-200 text-sans text-sm text-[#000300] required border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl' placeholder='First Name'/>
            </div>
            <div className='flex flex-col w-full lg:max-w-[40%] my-2 p-2'>
              <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2'>Last Name</label>
              <input type='text' className='bg-zinc-200 text-sans text-sm text-[#000300] required border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl' placeholder='Last Name'/>
            </div>
            <div className='flex flex-col w-full lg:max-w-[100%] my-2 p-2'>
              <label htmlFor='' className='w-[40%] font-semibold font-[#000300] text-xs py-2'>Middle Name</label>
              <input type='text' className='bg-zinc-200 text-sans text-sm text-[#000300] w-[40%] border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl' placeholder='optional...'/>
            </div>
            <div className="flex flex-wrap justify-start">
              <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2 '>Date of Birth</label>
                <input type='date' className='bg-zinc-200 text-sans text-sm text-[#000300] w-[40%] lg:w-[54%] md:w-[54%] border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 outline-none focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl'/>

              </div>
              <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2 '>Apartment Number</label>
                <input type='text' required className='bg-zinc-200 text-sans text-sm text-[#000300] w-[40%] lg:w-[54%] md:w-[54%] border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 outline-none focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl' placeholder='No. #'/>
              </div>
              <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label className='font-semibold font-[#000300] text-xs py-2'>State</label>
                <select name='' id='' className='bg-zinc-200 text-sans text-sm text-[#000300] w-[40%] lg:w-full md:w-full border border-slate-300 rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 outline-none focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl'>
                  <option value='' disabled>--choose option--</option>
                  <option value=''>Abia</option>
                  <option value=''>Anambra</option>
                  <option value=''>Bauchi</option>
                  <option value=''>Bayelsa</option>
                  <option value=''>Benue</option>
                  <option value=''>Borno</option>
                  <option value=''>Cross-River</option>
                  <option value=''>Delta</option>
                  <option value=''>Eboyin</option>
                  <option value=''>Edo</option>
                  <option value=''>Ekiti</option>
                  <option value=''>Enugu</option>
                  <option value=''>Gombe</option>
                  <option value=''>Imo</option>
                  <option value=''>Jigawa</option>
                  <option value=''>Kaduna</option>
                  <option value=''>Kano</option>
                  <option value=''>Katsina</option>
                  <option value=''>Kebbi</option>
                  <option value=''>Kogi</option>
                  <option value=''>Kwara</option>
                  <option value=''>Lagos</option>
                  <option value=''>Nassarawa</option>
                  <option value=''>Niger</option>
                  <option value=''>Ogun</option>
                  <option value=''>Ondo</option>
                  <option value=''>Osun</option>
                  <option value=''>Oyo</option>
                  <option value=''>Plataeu</option>
                  <option value=''>Rivers</option>
                  <option value=''>Sokoto</option>
                  <option value=''>Taraba</option>
                  <option value=''>Yobe</option>
                  <option value=''>Zamfara</option>
                  <option value=''>F.C.T</option>
                </select>
              </div>
              {/* ///////////// */}
              
            </div>
            {/* apt # && LGA of residence */}
            <div className="flex flex-wrap justify-end">
              <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label className='font-semibold font-[#000300] text-xs py-2'>Street</label>
                <input name='' id='' className='bg-zinc-200 text-sans text-sm text-[#000300] lg:w-full md:w-full border border-slate-300 rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 outline-none focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl'/>
              </div>
              <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label className='font-semibold font-[#000300] text-xs py-2'>L.G.A of Residence</label>
                <select name='' id='' className='bg-zinc-200 text-sans text-sm text-[#000300] w-[40%] lg:w-full md:w-full border border-slate-300 rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 outline-none focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl'>
                  <option value='' disabled default>--choose option--</option>
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
              
            </div>
            <div className='flex flex-col w-full lg:max-w-[550px] my-2 p-2'>
              <label htmlFor='' className=' font-semibold font-[#000300] text-xs py-2 '>Description</label>
              <textarea className='bg-zinc-200 text-sans text-sm text-[#000300] border rounded-md p-2 hover:border-solid hover:border-2 hover:border-sky-200 ease-in-out duration-100 outline-none focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 shadow-2xl' cols="30" rows="10"></textarea>
            </div>
            <div className='flex flex-col justify-center items-center w-fit lg:max-w-[550px] my-2 p-2'>
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

export default SignupNextForm
