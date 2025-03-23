import React from 'react'
import PlaylistCard from './PlaylistCard'
import VideoCard from './VideoCard'

function Home() {
  return (
    <div>
        <div >
          <div className='flex gap-5 flex-wrap justify-center'>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
          </div>
          <div className='flex gap-5 flex-wrap justify-center'>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
          </div>
        </div>
    </div>
  )
}

export default Home