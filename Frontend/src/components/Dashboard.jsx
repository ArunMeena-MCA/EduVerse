import React, { useState } from 'react'
import GeneralButton from '../utils/GeneralButton';
import { FaEye } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
function Dashboard() {
    const [status,setStatus] = useState(false)
  return (
    <div>
        <div className='flex gap-5'>
            <div className='w-80 border p-4'>
                <FaEye className='w-12 h-12 bg-rose-500 p-2 rounded-full' color='white' size={24}/>
                <h2 className='text-sm text-gray-400 mt-4'>Total Views</h2>
                <h1 className='text-white text-2xl font-semibold'>21,646</h1>
                {/* <p className="text-lg font-bold">{number.toLocaleString()}</p>; */}
            </div>
            <div className='w-80 border p-4'>
                <CgProfile className='w-12 h-12 bg-rose-500 p-2 rounded-full' color='white' size={24}/>
                <h2 className='text-sm text-gray-400 mt-4'>Total subscribers</h2>
                <h1 className='text-white text-2xl font-semibold'>21,646</h1>
                {/* <p className="text-lg font-bold">{number.toLocaleString()}</p>; */}
            </div>
            <div className='w-80 border p-4'>
                <FcLikePlaceholder className='w-12 h-12 bg-rose-500 p-2 rounded-full' color='white' size={24}/>
                <h2 className='text-sm text-gray-400 mt-4'>Total likes</h2>
                <h1 className='text-white text-2xl font-semibold'>21,646</h1>
                {/* <p className="text-lg font-bold">{number.toLocaleString()}</p>; */}
            </div>
        </div>
        <div className='border mt-10 mx-2'>
            <div className='flex border px-4 '>
                <h1 className='w-[40%] text-white font-semibold text-lg'>Your Videos</h1>
                <h1 className='w-[15%] text-white font-semibold text-lg'>Status</h1>
                <h1 className='w-[15%] text-white font-semibold text-lg'>Views</h1>
                <h1 className='w-[15%] text-white font-semibold text-lg'>Likes</h1>
                <h1 className='w-[15%] text-white font-semibold text-lg'>Delete/Edit</h1>
            </div>
            <div>
                <div className='flex items-center p-2 h-14'>
                    <div className='flex w-[40%] items-center gap-2'>
                        <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s" alt="Profile pic" />
                        <h1 className='text-white line-clamp-1'>Video title Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae autem perferendis dolore officiis nam? Dolorem tempora deleniti hic sint culpa.</h1>
                    </div>
                    <div className='w-[15%]'>
                        <h1 className={`w-fit ${status ? "border rounded-full border-green-400 text-green-400 px-2" : "border rounded-full border-red-500 text-red-500 px-2"}`}>{ status ? ("Public") : ("Private")}</h1>
                    </div>
                    <div className='w-[15%]'>
                        <h1 className='text-white'>12,378</h1>
                    </div>
                    <div className='w-[15%]'>
                    <h1 className='text-white'>378</h1>
                    </div>
                    <div className='w-[15%] h-fit flex gap-8'>
                        <MdOutlineModeEditOutline className='text-xl hover:text-2xl' color='white'/>
                        <RiDeleteBinLine className='text-xl hover:text-2xl' color='white'/>
                    </div>
                </div>
                <hr className='border-gray-600'/>
            </div>
            <div>
                <div className='flex items-center p-2 h-14'>
                    <div className='flex w-[40%] items-center gap-2'>
                        <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s" alt="Profile pic" />
                        <h1 className='text-white line-clamp-1'>Video title Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae autem perferendis dolore officiis nam? Dolorem tempora deleniti hic sint culpa.</h1>
                    </div>
                    <div className='w-[15%]'>
                        <h1 className={`w-fit ${status ? "border rounded-full border-green-400 text-green-400 px-2" : "border rounded-full border-red-500 text-red-500 px-2"}`}>{ status ? ("Public") : ("Private")}</h1>
                    </div>
                    <div className='w-[15%]'>
                        <h1 className='text-white'>12,378</h1>
                    </div>
                    <div className='w-[15%]'>
                    <h1 className='text-white'>378</h1>
                    </div>
                    <div className='w-[15%] h-fit flex gap-8'>
                        <MdOutlineModeEditOutline className='text-xl hover:text-2xl' color='white'/>
                        <RiDeleteBinLine className='text-xl hover:text-2xl' color='white'/>
                    </div>
                </div>
                <hr className='border-gray-600'/>
            </div>
            <div>
                <div className='flex items-center p-2 h-14'>
                    <div className='flex w-[40%] items-center gap-2'>
                        <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s" alt="Profile pic" />
                        <h1 className='text-white line-clamp-1'>Video title Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae autem perferendis dolore officiis nam? Dolorem tempora deleniti hic sint culpa.</h1>
                    </div>
                    <div className='w-[15%]'>
                        <h1 className={`w-fit ${status ? "border rounded-full border-green-400 text-green-400 px-2" : "border rounded-full border-red-500 text-red-500 px-2"}`}>{ status ? ("Public") : ("Private")}</h1>
                    </div>
                    <div className='w-[15%]'>
                        <h1 className='text-white'>12,378</h1>
                    </div>
                    <div className='w-[15%]'>
                    <h1 className='text-white'>378</h1>
                    </div>
                    <div className='w-[15%] h-fit flex gap-8'>
                        <MdOutlineModeEditOutline className='text-xl hover:text-2xl' color='white'/>
                        <RiDeleteBinLine className='text-xl hover:text-2xl' color='white'/>
                    </div>
                </div>
                <hr className='border-gray-600'/>
            </div>
            <div className='flex justify-center gap-4 my-4'>
                <GeneralButton className='rounded-full'>Load More</GeneralButton>
            </div>
        </div>
            <hr className='mt-10 border-gray-600'/>
    </div>
  )
}

export default Dashboard