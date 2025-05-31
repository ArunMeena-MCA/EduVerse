import React from 'react'
import { useDispatch } from 'react-redux'
import { closeNotificationModal } from '../redux/slices/modalSlice';

function Notification() {
    const dispatch = useDispatch();
  return (
    <div className='border border-rose-400 w-[85%] sm:w-[50%] md:w-[40%] lg:w-[30%] h-[60%] mt-[16%] sm:mt-[8%] mr-[8%] md:mt-[7%] lg:mt-[5%] flex flex-col bg-zinc-900 rounded-lg justify-between overflow-hidden'>
        <div className='flex flex-col m-2'>
            <div className='flex items-center mx-2 my-2 gap-2'>
                <img src="" alt="" className='h-8 w-8 rounded-full'/>
                <h1 className='text-white'>XYZ has subscribed your channel. da asd asd af ewedf afafd </h1>
            </div>
            <hr className='border-1 border-gray-700'/>
            <div className='flex items-center mx-2 my-2 gap-2'>
                <img src="" alt="" className='h-8 w-8 rounded-full'/>
                <h1 className='text-white'>XYZ liked ABC video.</h1>
            </div>
            <hr className='border-1 border-gray-700'/>
        </div>
        <button onClick={() => dispatch(closeNotificationModal())} className='bg-zinc-600'>HIDE</button>
    </div>
  )
}

export default Notification