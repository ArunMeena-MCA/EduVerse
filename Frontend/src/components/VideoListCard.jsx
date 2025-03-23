import React from "react";

function VideoListCard() {
  return (
    <div className="flex gap-2 rounded-md">
      <img
        className="rounded-md w-[45%]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s"
        alt="Thumbnail"
      />

      <div className="flex flex-col py-2">
        <h1 className="w-[70%] text-white text-md font-semibold line-clamp-1 sm:line-clamp-2">
          Video title Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolor officia voluptate commodi odit rem dolores explicabo ipsum
          repellendus dolore quae?
        </h1>
        <div className="mt-6">
          <div className="flex items-center gap-2 sm:mt-2">
            <img
              className="h-4 w-4 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s"
              alt="Profile pic"
            />
            <h1 className="text-gray-400 text-xs">Channel Name</h1>
          </div>
          <h3 className="text-gray-400 text-xs mt-1">33k Views | 44 minutes ago</h3>
        </div>
      </div>
    </div>
  );
}

export default VideoListCard;
