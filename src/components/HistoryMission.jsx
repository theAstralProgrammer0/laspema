import React from 'react'
import aboutpic1 from '../assets/about_laspema.jpg'
import aboutpic2 from '../assets/img 3.webp'
import aboutpic3 from '../assets/Sanwo.jpg'
import aboutpic6 from '../assets/Themes agenda critical.webp'
import aboutpic5 from '../assets/img 1.webp'
import aboutpic4 from '../assets/img 2.webp'
// import Slider1 from '../components/Slider1'

const HistoryMission = () => {
  
  return (

    <div className="w-full bg-slate-200 pb-12">
      <div className="flex h-auto">
          <div className="w-full max-w-[1248px] mx-auto">
            <div className="text-[#74787b] font-semibold font-sans text-sm text-center py-11">ABOUT LASPEMA</div>
            <h1 className="text-[#0e1318] font-sans font-bold md:text-5xl sm:text-3xl text-2xl text-center py">Monitoring All Setbacks And Incidental Open Spaces</h1>
            <p className="text-center text-[#74787b] font-sans font-normal md:text-base py-11">LASPEMA is the Agency saddled with the responsibility of monitoring all setbacks i.e road, railway, power transmission lines; (Water, Gas, PMS AGO) pipelines; gorges, wetlands etc and incidental urban spaces to prevent their abuse/misuse and ensure urban aesthetics as well as coordinate site selection for location of informal businesses and ensure compliance with Operational/ Conditional license(s) for operators.</p>
          </div>
      </div>
      <div className="max-w-[1248px] mx-auto my-9 block md:flex md:justify-center gap-3 border-b-black">
        <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={aboutpic1} alt='/' />
        <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={aboutpic2} alt='/'/>
        <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={aboutpic3} alt='/'/>
      </div>
      <div className="flex h-auto my-6">
          <div className="w-full max-w-[1248px] mx-auto">
            <div className="text-[#74787b] ml-3 font-semibold font-sans text-xl py-9">OUR HISTORY</div>
            <h1 className="text-[#0e1318] ml-3 font-sans font-bold md:text-5xl sm:text-3xl text-2xl">We've Come A Long Way</h1>
            <p className="text-center text-[#74787b] font-sans font-normal md:text-base py-9">Established in 2001 as an Authority under the Ministry of Physical Planning and Environment during the Administration of Governor Emeritus, Asiwaju Bola Ahmed Tinubu. In 2004, it became an Agency under the Ministry of Physical Planning and Urban Development (PP & UD).</p>
          </div>
      </div>
      <div className="max-w-[1248px] mx-auto block md:flex md:justify-center gap-2 border-b-black">
        <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={aboutpic4} alt='/' />
        <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={aboutpic5} alt='/'/>
        <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={aboutpic6} alt='/'/>
      </div>
      {/* <Slider1/>       */}
    </div>
  )
}

export default HistoryMission