import React from 'react'
import SecButton from '../utils/SecButton'
import { MdPersonRemove } from "react-icons/md";

function ChannelCard() {
  return (
    <div>
        <div className='flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
            <img className="w-12 h-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s" alt="Profile pic" />
            <div>
                <h1 className='text-lg font-semibold text-white'>Channel Name</h1>
                <h2 className="text-sm text-gray-400">500k Subsribers</h2>
            </div>
        </div>
        <SecButton className='flex gap-2 items-center'> Unsubscribe <MdPersonRemove color='white' size={24}/></SecButton>
        </div>
        <hr className='mt-4 border-gray-600'/>
    </div>
  )
}

export default ChannelCard