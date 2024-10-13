import React from 'react'
// import { useState, useEffect } from 'react'
// import { TfiClose, TfiMenuAlt } from 'react-icons/tfi'
// // import { AiFillCLoseCircles } from 'react-icons/ai'
// import { Link, Route, Routes } from 'react-router-dom'
// // import { Link as LinkRoll } from 'react-scroll'
// import { BlogSidebar  } from '../components/BlogSidebar'
// import {blogReportData} from '../utils/blogData'
import BlogFeed from '../components/BlogFeed'

// import logo from '../assets/LASPEMA Logo Cropped.jpg'




const BlogHome = () => {

    return (
        <div id="bhome" className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 section min-h-[1500px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title text-center text-5xl py-4  text-gray-700 font-bold before:content-'PORTFOLIO' relative before:absolute before:opacity-40 before:-top[2rem] before:-left-3/4 before:hidden before:lg:block">News & Reports</h2>
                    <p className="font-sans text-center text-black pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo est quos alias voluptatum itaque corporis iusto similique ducimus explicabo?</p>
                </div>
                <BlogFeed/>

            </div>
        </div>
  )
}

export default BlogHome