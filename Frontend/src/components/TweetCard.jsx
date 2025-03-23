import React, { useState } from 'react'
import { BiSolidLike } from "react-icons/bi";;
function TweetCard() {
    const [likeToggle, setLikeToggle] =useState(false)
  return (
    <div className='flex gap-3'>
        <img className="w-10 h-10 rounded-full mt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s" alt="Profile pic" />
        <div>
            <div className='flex gap-5 items-center'>
                <h1 className='font-semibold text-white'>Channel Name</h1>
                <h3 className="text-gray-400 text-xs">5 hours ago</h3>
            </div>
            <p className='text-white line-clamp-2 text-sm mt-1'>Tweet text Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit debitis iure eaque ea aspernatur nobis quae cupiditate, enim doloremque quaerat voluptatibus mollitia illum numquam suscipit, odit provident vitae consequatur.</p>
            <div className='w-fit border px-2 rounded-md mt-1' > 
                <h1 className='text-md text-white flex items-center gap-2'>300 <BiSolidLike onClick={()=> setLikeToggle(!likeToggle)} className={`text-xl hover:scale-125 ${likeToggle ? "text-rose-500" : ""}`}/></h1>
            </div>
            <hr className='mt-2 border-gray-600'/>
        </div>
    </div>
  )
}

export default TweetCard