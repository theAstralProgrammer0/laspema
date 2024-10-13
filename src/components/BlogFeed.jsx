import React from 'react'
import { useState, useEffect } from 'react'
import {feedData, feedNav} from '../utils/blogData.js'
import BlogNews from '../components/BlogNews'



const BlogFeed = () => {
  
  // define all useStates for setting feedState with useEffect, and defining activeState & itemState (ie each news item)   
  const [item, setItem] = useState({name: "all"});
  const [feed, setFeed] = useState([]);
  const [active, setActive] = useState(0);

  // useEffect function
  useEffect(() => {
    if (item.name === "all"){
      setFeed(feedData)
    } else{
      const newFeed = feedData.filter(
        (feed) => {
          return feed.category.toLowerCase() === item.name
        }
      )
      setFeed(newFeed);
    }
  }, [item]
  );


  // defining handleClick
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase()});
    setActive(index);
  }

  // render block
  return (
    <div>
      {/* navs */}
      <nav className="mb-12 max-x-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-zinc-800 ">
          {/* feedNav map function */}
          {feedNav.map((item, index) => {
            return <li 
            onClick = {(e) => {
              handleClick(e, index);
            }}
            className={`${active === index ? 'text-xl bg-[#00df9e] text-slate-50' : ''} font-sans font-semibold text-[#000300] hover:font-semibold hover:text-2xl hover:text-slate-50 hover:cursor-pointer ease-in-out duration-300 cursor-pointer capitalize m-4 p-4 rounded-lg`}>{item.name}</li>
          })}
        </ul>
      </nav>

      {/* feed grid */}
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-6 lg:gap-y-8">
        {feed.map((item)=> {
          return <BlogNews item={item} key={item.id}/>
        })}
      </section>

    </div>
  )
}

export default BlogFeed