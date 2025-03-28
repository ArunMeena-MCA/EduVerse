import React, { useState,useEffect } from "react";
import api from "../utils/api";

function VideoListCard(video) {
  const [user,setUser] = useState({})

  useEffect(() => {
    getUser();
  }, [video?.video?.owner]);

  // Fetch user data when video is loaded
  const getUser = async() => {
      try {
        const response = await api.get(`/users/${video.video.owner}`,{})
        setUser(response.data.data)
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div className="h-[170px] flex gap-2 rounded-md">
      <img
        className="rounded-md w-[45%]"
        src={video.video.thumbnail}
        alt="Thumbnail"
      />

      <div className="flex flex-col py-2">
        <h1 className="w-[70%] text-white text-md font-semibold line-clamp-1 sm:line-clamp-2">
          {video.video.title}
        </h1>
        <div className="mt-2">
          <div className="flex items-center gap-2 sm:mt-2">
            <img
              className="h-6 w-6 rounded-full"
              src={user.avatar}
              alt="Profile pic"
            />
            <h1 className="text-gray-400 text-xs">{user.fullname}</h1>
          </div>
          <h3 className="text-gray-400 text-xs mt-1">33k Views | 44 minutes ago</h3>
        </div>
      </div>
    </div>
  );
}

export default VideoListCard;
