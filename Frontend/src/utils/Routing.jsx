import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Introductory from '../components/Introductory'
import Home from '../components/Home'
import Profile from '../components/Profile'
import VideoDetail from '../components/VideoDetail'
import PlaylistView from '../components/PlaylistView'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Introductory />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Profile/:id' element={<Profile />} />     
        <Route path='/VideoDetail/:id' element={<VideoDetail />} />   
        <Route path='/PlaylistView/:id' element={<PlaylistView />} />   
    </Routes>
  )
}

export default Routing