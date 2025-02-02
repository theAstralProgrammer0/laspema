import React from 'react';
import { Link } from 'react-router-dom';
import { TfiArrowCircleLeft } from 'react-icons/tfi'

const baseUrl = `${process.env.REACT_APP_GOOGLE_DRIVE_BASE_URL}`;
const laspema_logo = `${baseUrl}${process.env.LASPEMA_LOGO}`;
const AccountSelectForm = () =>{
    return(
        <div className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 p-[2.5%] w-full h-screen ">
            <Link to="/login"><button className="w-"><TfiArrowCircleLeft className="text-[#f5ef42] hover:text-[#afeeee] focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 ease-in-out duration-300" size={40}/></button></Link>
            <div className="max-w-[1040px] mx-auto bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 border-zinc-500 rounded-lg shadow-2xl pt-4">
                <Link to="/"><img src={laspema_logo} alt='laspema_logo' className="mx-auto w-[20%] h-[20%] border-zinc-500 rounded-full shadow-2xl my-4" /></Link>
                <div className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 p-[5%] border-zinc-500 rounded-lg shadow-2xl">
                    <form>
                        <div className="flex flex-wrap items-center justify-center">
                            <label className="w-full block text-sm font-medium text-center text-gray-700" for="USER">LOGIN AS A</label>
                            <div className="w-full">
                                <Link to="" className="flex text-center items-center justify-center"><button className=" bg-[#AFEEEE] text-gray-900 text-lg w-[60%] rounded-full font-medium font-sans ml-4 my-6 px-6 py-8 hover:py-10 hover:w-[75%] hover:bg-[#f5ef42] hover:text-black hover:text-xl focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 ease-in-out duration-300 shadow-lg">USER</button></Link>
                            </div>

                            <label className="w-full block text-sm font-medium text-center text-gray-700" for="ADMIN">or</label>
                            <div className="w-full">
                                <Link to="" className="flex text-center items-center justify-center"><button className=" bg-[#AFEEEE] text-gray-900 text-lg w-[60%] rounded-full font-medium font-sans ml-4 my-6 px-6 py-8 hover:py-10 hover:w-[75%] hover:bg-[#f5ef42] hover:text-black hover:text-xl focus:outline-none focus:border-solid focus:border-2 focus:border-sky-300 ease-in-out duration-300 shadow-lg">ADMIN</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}


export default AccountSelectForm
