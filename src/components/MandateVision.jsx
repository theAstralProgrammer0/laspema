import React from 'react'
import mandatepic1 from '../assets/GM LASPEMA pays courtesy visit to Lagos.webp'
import mandatepic2 from '../assets/Babajide_Sanwo-Olu-laspema-site.webp'
import visionpic1 from '../assets/Lagos_Informal_sector-scaled.webp'
import visionpic2 from '../assets/Governor Sanwo Olu HD.jpg'

const MandateVision = () => {
  return (
    <div className="w-full bg-slate-200 pb-12">
      <div className="flex h-auto">
          <div className="w-full max-w-[1248px] mx-auto">
            <div className="text-[#74787b] font-semibold font-sans text-sm text-center py-11">CORE MANDATE</div>
            <h1 className="text-[#0e1318] font-sans font-bold md:text-5xl sm:text-3xl text-2xl text-center py">Lagos State Urban and Regional Planning Development Law</h1>
            <p className="text-center text-[#74787b] font-sans font-normal md:text-base py-11">LASPEMA derives its Mandate pursuant to <i>Section 2 (e) Lagos State Urban and Regional Planning Development Law 2019 as amended</i></p>
            <div className='w-full mt-4 py-[2rem] px-4 bg-slate-200 rounded-2xl border-4 border-l-[#00d98a] shadow-2xl'>
        <figure>
        <blockquote cite='https://twitter.com/jidesanwoolu/status/1520092383173656577?lang=en'>
            <p className="text-lg font-serif font-semibold text-[#000300]">
            “Determination of the Locations for Urban Furniture, Infrastructural Facilities and Centres of Economic Activities in the State. Section 2 (n) Regulating the Location, positioning, dimensions, appearance display and manner in which urban furniture will be affixed to land in the State.
            </p>
        </blockquote>
        </figure>
        
    </div>
          </div>
      </div>
      <div className="max-w-[1248px] mx-auto my-9 block md:flex md:justify-center gap-3 border-b-black">
        <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={mandatepic1} alt='/' />
        <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={mandatepic2} alt='/'/>
        {/* <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={} alt='/'/> */}
      </div>
      <div className="flex h-auto my-6">
          <div className="w-full max-w-[1248px] mx-auto">
            <div className="text-[#74787b] ml-3 font-semibold font-sans text-xl py-9">LASPEMA VISION</div>
            <h1 className="text-[#0e1318] ml-3 font-sans font-bold md:text-5xl sm:text-3xl text-2xl">Lagos as a Sustainable SMART City of Choice</h1>
            <p className="text-center text-[#74787b] font-sans font-normal md:text-base py-9">Established in 2001 as an Authority under the Ministry of Physical Planning and Environment during the Administration of Governor Emeritus, Asiwaju Bola Ahmed Tinubu. In 2004, it became an Agency under the Ministry of Physical Planning and Urban Development (PP & UD).</p>
          </div>
      </div>
      <div className="max-w-[1248px] mx-auto block md:flex md:justify-center gap-2 border-b-black">
        <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={visionpic1} alt='/' />
        <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={visionpic2} alt='/'/>
        {/* <img className="w-[410px] h-auto mx:auto m-auto my-2 rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300" src={aboutpic6} alt='/'/> */}
      </div>
      {/* <Slider1/>       */}
    </div>
  )
}

export default MandateVision