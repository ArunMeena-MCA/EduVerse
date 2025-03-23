import React from "react";

function VideoCard() {
  return (
    <div className="w-96 md:80 lg:w-72 mt-4">
      <div className="w-full h-[70%]">
        <img
          className="rounded h-full w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s"
          alt="Playlist Thumbnail"
        />
      </div>
      <div className="w-full flex items-center gap-2">
        <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s" alt="Profile pic" />
        <div className="w-full">
            <h1 className="text-white font-semibold line-clamp-1">Video Title</h1>
            <div className="flex justify-between items-center">
                <h3 className="text-gray-400 text-xs">Channel Name</h3>
                <h3 className="text-gray-400 text-xs">33k Views | 44 minutes ago</h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
