import React from "react";

const Agenda = () => {
    return (
        <div className="w-full bg-slate-200">
            <div className="max-w-[900px] mx-auto">
                <div className="text-start p-8 bg-slate-400  border-zinc-500 rounded-lg shadow-2xl">
                    <h2 className="font-serif text-5xl pt-52 md:pt-0 text-center text-[#000300]">T.H.E.M.E.S</h2>
                    <p className="font-serif text-center text-3xl py-6 text-slate-900">T.H.E.M.E.S, represents the six pillars of Lagos State's strategic development agenda</p>
                    <p className="font-normal text-3xl py-6 text-slate-900"><span className=" text-9xl font-serif font-bold text-start">T</span>raffic Management and Transportation </p>
                    <p className="font-normal text-3xl py-6 text-slate-900"><span className=" text-9xl font-serif font-bold text-start">H</span>ealth and Environment</p>
                    <p className="font-normal text-3xl py-6 text-slate-900"><span className=" text-9xl font-serif font-bold text-start">E</span>ducation and Technology</p>
                    <p className="font-normal text-3xl py-6 text-slate-900"><span className=" text-9xl font-serif font-bold text-start">M</span>aking Lagos a 21st Century Economy</p>
                    <p className="font-normal text-3xl py-6 text-slate-900"><span className=" text-9xl font-serif font-bold text-start">E</span>ntertainment and Tourism</p>
                    <p className="font-normal text-3xl py-6 text-slate-900"><span className=" text-9xl font-serif font-bold text-start">S</span>ecurity and Governance</p>
                </div>
                <div className="grid md:grid-cols-3 gap-1 p-6 text-center ">
                    <div className="py-8 border-zinc-500 rounded-lg shadow-2xl bg-gradient-to-r from-slate-400 via-slate-400 to-slate-500">
                        <p className="text-6xl font-bold text-[#afeeee]">100%</p>
                        <p className="text-slate-900 font-sans font-semibold mt-2">Completion</p>
                    </div>
                    <div className="py-8 border-zinc-500 rounded-lg shadow-2xl bg-gradient-to-r from-slate-400 via-slate-400 to-slate-500">
                        <p className="text-6xl font-bold text-[#afeeee]">24/7</p>
                        <p className="text-slate-900 font-sans font-semibold mt-2">Monitoring</p>
                    </div>
                    <div className="py-8 border-zinc-500 rounded-lg shadow-2xl bg-gradient-to-r from-slate-400 via-slate-400 to-slate-500">
                        <p className="text-6xl font-bold text-[#afeeee]">600</p>
                        <p className="text-slate-900 font-sans font-semibold mt-2">Setbacks</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agenda