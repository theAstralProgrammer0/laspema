import React from 'react'
import { useState } from 'react'
// import { feedData } from '../utils/blogData'


const BlogNews = ({item}) => {
  
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  // const [comment, setComment] = useState(false);
  // const [share, setShare] = useState(false);


  const handleClickLike = () => {
      setLike(!like);
      setDislike(false)
}
  const handleClickDislike = () => {
      setDislike(!dislike);
      setLike(false)
}

  // const handleClickComment = () => {
  //     setComment(!comment);
  // }
  // const handleClickShare = () => {
  //     setShare(!share);
  // }

  

  return (
    <div key={item.id} className="bg-slate-200/50 flex flex-col items-center text-center rounded-2xl shadow-2xl">
      <div className="mb-8 p-3">
        <img src={item.image} alt='/' className="w-[400px] h-auto rounded-md shadow-2xl"/>
      </div>
      <p className="capitalize text-[#000300] text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="w-[90%] h-auto p-2 truncate">{item.paragraph}</p>
      <div className="flex gap-4 my-3 justify-around items-center">
      <div id='like' className={`${like 
                              ? 'text-[#000300] rounded-lg  bg-cyan-300 p-3 hover:text-lg hover:text-cyan-300'
                              : ''} p-3 hover:text-lg hover:text-cyan-300 `} onClick={handleClickLike}>
          {item.like}
        </div>
        <div id='dislike' className={`${dislike 
                              ? 'text-[#000300] rounded-lg  bg-cyan-300 p-3 hover:text-lg hover:text-cyan-300'
                              : ''} p-3 hover:text-lg hover:text-cyan-300 `} onClick={handleClickDislike}>
          {item.dislike}
        </div>
        <div id='comment' className=" p-3 hover:text-lg hover:text-cyan-300">
          {item.comment}
        </div>
        <div id='share' className="p-3 hover:text-lg hover:text-cyan-300" >
          {item.share}
        </div>
      </div>
    </div>
  )
}

export default BlogNews