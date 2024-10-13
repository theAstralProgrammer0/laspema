import React from 'react'
import {
    GrFacebookOption,
    GrInstagram,
    GrLinkedin,
    GrTwitter,
    GrYoutube,
    GrGooglePlus
} from 'react-icons/gr'
import { SiWhatsapp } from 'react-icons/si' 
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] tracking-wider">LASPEMA</h1>
            <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, saepe cumque modi porro aut necessitatibus voluptatibus incidunt quos ipsa facilis fugit accusantium expedita enim, maxime officiis asperiores odit sequi illo.</p>
            <div className="flex justify-between md:w-[100%] my-6">
                <a href="https://www.facebook.com" target="blank"><GrFacebookOption className="hover:cursor-pointer hover:text-[#00df9a] ease-in-out duration-300" size={30}/></a>
                <a href="https://www.instagram.com" target="blank"><GrInstagram className="hover:cursor-pointer hover:text-[#00df9a] ease-in-out duration-300" size={30}/></a>
                <a href="https://www.twitter.com" target="blank"><GrTwitter className="hover:cursor-pointer hover:text-[#00df9a] ease-in-out duration-300" size={30}/></a>
                <a href="https://www.linkedin.com" target="blank"><GrLinkedin className="hover:cursor-pointer hover:text-[#00df9a] ease-in-out duration-300" size={30}/></a>
                <a href="https://www.youtube.com" target="blank"><GrYoutube className="hover:cursor-pointer hover:text-[#00df9a] ease-in-out duration-300" size={30}/></a>
                <a href="https://www.whatsapp.com" target="blank"><SiWhatsapp className="hover:cursor-pointer hover:text-[#00df9a] ease-in-out duration-300" size={30}/></a>
                <a href="https://www.google.com" target="blank"><GrGooglePlus className="hover:cursor-pointer hover:text-[#00df9a] ease-in-out duration-300" size={30}/></a>
            </div>
            
        </div>
        <div className="lg:col-span-2 flex justify-between">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">Marketing</li>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">Analytics</li>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">Commerce</li>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Support</h6>
                    <ul>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">Pricing</li>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">Documentation</li>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">Guides</li>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">APIs</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Company</h6>
                    <ul>
                        <Link to='/about'> <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] hover:text ease-in-out duration-300">About</li></Link>
                        <Link to='/blog'> <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] hover:text ease-in-out duration-300">Blog</li></Link>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] hover:text ease-in-out duration-300">Jobs</li>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] hover:text ease-in-out duration-300">Press</li>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] hover:text ease-in-out duration-300">Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">Claims</li>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">Policy</li>
                        <li className="py-2 text-sm hover:font-bold hover:text-lg hover:text-[#00df9a] ease-in-out duration-300">Terms</li>
                    </ul>
                </div>
            </div>
    </div>
    
  )
}

export default Footer