import React, { useState } from "react";
import PrimaryButton from "../utils/PrimaryButton";
import GeneralButton from "../utils/GeneralButton";
import VideoListCard from "./VideoListCard";
import PlaylistCard from "./PlaylistCard";
import TweetCard from "./TweetCard";
import ChannelCard from "./ChannelCard";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { GrPlayFill } from "react-icons/gr";
import { TiPlus } from "react-icons/ti";
import { RiPlayList2Fill } from "react-icons/ri";
import { TbMessageReportFilled } from "react-icons/tb";
function Profile() {
    const [toggle, setToggle] = useState(1);
    const [videoCount, setVideoCount] = useState(1)
    const [playlistCount, setPlaylistCount] = useState(1)
    const [tweetCount, setTweetCount] = useState(1)
    const [subscribedCount, setSubscribedCount] = useState(1)
  return (
    <div>
      <div className="h-full md:ml-60">
        <div>
          <img
            className="h-32 md:h-52 w-full"
            src="https://marketplace.canva.com/EAECJXaRRew/3/0/1600w/canva-do-what-is-right-starry-sky-facebook-cover-4SpKW5MtQl4.jpg"
            alt="Cover Image"
          />
        </div>
        <div className="md:flex justify-between items-center px-5 md:px-10 mt-4">
          <div className="flex items-center gap-5">
            <img
              className="rounded-full w-24 h-24 md:w-32 md:h-32"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCixyM2urliFC1w0DyNMJpBRMOXFizr3FR8aRIFfcDUGBzEaXcV6mt4gVWRqGAqqu4PI&usqp=CAU"
              alt="Profile pic"
            />
            <div>
              <h1 className="text-white font-semibold text-lg md:text-2xl">FullName</h1>
              <h2 className="text-gray-400 text-xs md:text-sm">@Username</h2>
              <h3 className="text-gray-400 text-xs md:text-sm">600k Subscribers</h3>
            </div>
          </div>
          <div className="flex gap-5 ">
            <PrimaryButton className="font-semibold flex items-center gap-1"><TiPlus/> Upload Video</PrimaryButton>
            <GeneralButton className="font-semibold flex items-center gap-2"><MdOutlineModeEditOutline /> Edit</GeneralButton>
          </div>
        </div>
        <hr className="md:hidden mt-4 md:mt-1 "/>
        <div className="flex flex-col md:flex-row justify-between items-center mx-10 mt-10">            
                <button onClick={()=> {setToggle(6)}} className={`md:hidden flex justify-center md:w-[25%] w-full mt-2 border md:border-none rounded-md md:rounded-none py-1 text-white cursor-pointer hover:font-bold ${ toggle === 6 ? "md:bg-zinc-600 md:font-semibold" : ""}`}>Edit Profile</button>
                <button onClick={()=> {setToggle(6)}} className={`md:hidden flex justify-center md:w-[25%] w-full mt-2 border md:border-none rounded-md md:rounded-none py-1 text-white cursor-pointer hover:font-bold ${ toggle === 7 ? "md:bg-zinc-600 md:font-semibold" : ""}`}>Upload Video</button>
                <button onClick={()=> {setToggle(1)}} className={`flex justify-center md:w-[25%] w-full mt-2 border md:border-none rounded-md md:rounded-none py-1 text-white cursor-pointer hover:font-bold ${ toggle === 1 ? "md:bg-zinc-600 md:font-semibold" : ""}`}>Videos</button>
                <button onClick={()=> {setToggle(2)}} className={`flex justify-center md:w-[25%] w-full mt-2 border md:border-none rounded-md md:rounded-none py-1 text-white cursor-pointer hover:font-bold ${ toggle === 2 ? "md:bg-zinc-600 md:font-semibold" : ""}`}>Playlists</button>
                <button onClick={()=> {setToggle(3)}} className={`flex justify-center md:w-[25%] w-full mt-2 border md:border-none rounded-md md:rounded-none py-1 text-white cursor-pointer hover:font-bold ${ toggle === 3 ? "md:bg-zinc-600 md:font-semibold" : ""}`}>Tweets</button>
                <button onClick={()=> {setToggle(4)}} className={`flex justify-center md:w-[25%] w-full mt-2 border md:border-none rounded-md md:rounded-none py-1 text-white cursor-pointer hover:font-bold ${ toggle === 4 ? "md:bg-zinc-600 md:font-semibold" : ""}`}>Dashboard</button>
                <button onClick={()=> {setToggle(5)}} className={`flex justify-center md:w-[25%] w-full mt-2 border md:border-none rounded-md md:rounded-none py-1 text-white cursor-pointer hover:font-bold ${ toggle === 5 ? "md:bg-zinc-600 md:font-semibold" : ""}`}>Subscribed</button>
        </div>
        <hr className="mt-4 md:mt-1 border-2"/>
        <div className="hidden md:block">
          {toggle === 1 && videoCount === 0 && (
              <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center w-12 h-12 bg-rose-400 rounded-full mt-10">
                      <GrPlayFill/>
                  </div>
                  <h1 className="text-white font-semibold mt-4">No videos uploaded</h1>
                  <p className="text-white mt-2">This page has yet to upload a video. Search another page in order to find more videos.</p>
              </div>
          )}
          {toggle === 1 && videoCount > 0 && (
              <div className="flex flex-col gap-5 justify-start mt-4 md:mx-0 lg:mx-10">
                <VideoListCard/>
                <VideoListCard/>
                <VideoListCard/>
                <VideoListCard/>
                <VideoListCard/>
                <VideoListCard/>
              </div>
          )}
          {toggle === 2 && playlistCount === 0 && (
              <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center w-12 h-12 bg-rose-400 rounded-full mt-10">
                      <RiPlayList2Fill size={24}/>
                  </div>
                  <h1 className="text-white font-semibold mt-4">No playlist created</h1>
                  <p className="text-white mt-2">There are no playlist created on this channel.</p>
              </div>
          )}
          {toggle === 2 && playlistCount > 0 && (
              <div className="flex flex-wrap justify-center gap-5 mt-4">
                <PlaylistCard/>
                <PlaylistCard/>
                <PlaylistCard/>
                <PlaylistCard/>
                <PlaylistCard/>
                <PlaylistCard/>
                <PlaylistCard/>
                <PlaylistCard/>
                <PlaylistCard/>
              </div>
          )}
          {toggle === 3 && tweetCount === 0 && (
              <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center w-12 h-12 bg-rose-400 rounded-full mt-10">
                      <TbMessageReportFilled size={24}/>
                  </div>
                  <h1 className="text-white font-semibold mt-4">No Tweets</h1>
                  <p className="text-white mt-2">This channel has yet to make a Tweet.</p>
              </div>
          )}
          {toggle === 3 && tweetCount > 0 && (
              <div className="flex flex-wrap justify-center gap-5 mt-4 mr-5">
                <TweetCard/>
                <TweetCard/>
                <TweetCard/>
                <TweetCard/>
                <TweetCard/>
                <TweetCard/>
              </div>
          )}
          {toggle === 5 && subscribedCount === 0 && (
              <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center w-12 h-12 bg-rose-400 rounded-full mt-10">
                      <TbMessageReportFilled size={24}/>
                  </div>
                  <h1 className="text-white font-semibold mt-4">Not subscribed any channel</h1>
                  <p className="text-white mt-2">This channel has yet to subscribe a new channel.</p>
              </div>
          )}
          {toggle === 5 && subscribedCount > 0 && (
              <div className="flex flex-col gap-5 mt-4 mx-4">
                <ChannelCard/>
                <ChannelCard/>
                <ChannelCard/>
                <ChannelCard/>
                <ChannelCard/>
              </div>
          )}
        </div>
        <div>
      </    div>
        </div>
    </div>
  ); 
}

export default Profile;
