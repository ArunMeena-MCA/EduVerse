import React from 'react'

function PlaylistCard() {
  return (
    <div className='w-72 sm:w-80 mt-4'>
      <div className='w-full h-full'>
        <div className='relative'>
            <img className='rounded h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s" alt="Playlist Thumbnail" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-end justify-between m-2">
                <div>
                    <h1 className='text-white font-semibold'>Playlist</h1>
                    <h3 className="text-gray-400 text-xs">33k Views | 44 minutes ago</h3>
                </div>
                <h3 className="text-white text-sm font-semibold">12 Videos</h3>                
            </div>
        </div>
        <div className='flex gap-2 items-start'>
          <img className="w-8 h-8 rounded-full mt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s" alt="Profile pic" />
          <div>
            <h1 className='text-sm text-white font-semibold'>Playlist Title</h1>
            <h3 className="text-gray-400 text-xs">Channel Name</h3>
            {/* <p className='text-white line-clamp-1 text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos in commodi beatae harum, corporis sed totam magnam culpa unde modi?</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCard