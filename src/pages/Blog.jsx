import React from 'react'
import Navbar from '../components/Navbar'
import BlogHome from '../components/BlogHome'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <BlogHome/>
        <Newsletter/>
        <Footer/>
    </React.Fragment>
  )
}

export default Blog