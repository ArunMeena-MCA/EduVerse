import React, { useEffect, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { useLocation,matchPath, useNavigate } from "react-router-dom";
import Playlist_Thumbnail from "../assets/Playlist_Thumbnail.png"
import api from "../utils/api";

function PlaylistCard({playlist}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [user,setUser] = useState({});
  let thumbnail = Playlist_Thumbnail;
  const match = matchPath(`/Profile/${localStorage.getItem("userId")}`, location.pathname);

  useEffect(() => {
    if(playlist.videos.length){
       thumbnail = playlist.videos[0].thumbnail;
    }
    getUser();
  },[playlist.owner])
  
  const getUser = async () => {
    try {
      const response = await api.get(`/users/${playlist.owner}`, {});
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div onClick={() => navigate(`/playlistView/${playlist._id}`)} className="w-72 sm:w-80 lg:w-72 mt-4">
      <div className="w-full h-full">
        <div className="relative">
          <img
            className="rounded h-full w-full"
            src={thumbnail}
            alt="Playlist Thumbnail"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-end justify-between m-2">
            <div className="w-[70%]">
              {/* <h1 className="text-white font-semibold">{playlist.name}</h1> */}
              <h3 className="text-gray-400 text-xs line-clamp-4">
                {playlist.description}
              </h3>
            </div>
            <h3 className="text-white text-sm font-semibold">{playlist.videos.length} Videos</h3>
          </div>
        </div>
        <div className="flex gap-2 items-start justify-between items-center">
          <div className="flex gap-2">
            <img
              className="w-8 h-8 rounded-full mt-1"
              src={user.avatar}
              alt="Profile pic"
            />
            <div>
              <h1 className="text-sm text-white font-semibold">
                {playlist.name}
              </h1>
              <h3 className="text-gray-400 text-xs">{user.fullname}</h3>
              {/* <p className='text-white line-clamp-1 text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos in commodi beatae harum, corporis sed totam magnam culpa unde modi?</p> */}
            </div>
          </div>
          {
            match && 
            <div className="flex items-center text-white gap-3 pr-1">
              <div>
                <MdOutlineModeEditOutline className="text-2xl hover:text-3xl" />
              </div>
              <div>
                <RiDeleteBinLine className="text-2xl hover:text-3xl" />
              </div>
              {/* <div>
                <FaPlus className="text-2xl hover:text-3xl text-rose-400"/> 
              </div> */}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default PlaylistCard;
