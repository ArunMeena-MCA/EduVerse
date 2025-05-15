import React, { useEffect, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import api from "../utils/api";
import { useLocation } from "react-router-dom";

function DashboardVideoList({ video, onDelete }) {
  const [likeCount, setLikeCount] = useState(null);
  
  useEffect(() => {
    getLikeCount();
  }, [video._id]);

  const getLikeCount = async () => {
    try {
      const response = await api.get(`/likes/likeCount/video/${video._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setLikeCount(response.data.data);
    } catch (error) {
      console.error("Error fetching like count:", error);
      setLikeCount("N/A");
    }
  };

  const deleteVideo = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this video?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/videos/delete/${video._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log("Video deleted!");
      if (onDelete) onDelete(video._id); // Notify parent if provided
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center p-2 h-14">
        <div className="flex w-[40%] items-center gap-2">
          <img
            className="w-8 h-8 rounded-full"
            src={video.thumbnail}
            alt="Thumbnail"
          />
          <h1 className="text-white line-clamp-1">{video.description}</h1>
        </div>

        <div className="w-[15%] flex justify-center">
          <h1
            className={`w-fit ${
              video.ispublished
                ? "border rounded-full border-green-400 text-green-400 px-2"
                : "border rounded-full border-red-500 text-red-500 px-2"
            }`}
          >
            {video.ispublished ? "Public" : "Private"}
          </h1>
        </div>

        <div className="w-[15%] text-center text-white">{video.views}</div>
        <div className="w-[15%] text-center text-white">{likeCount !== null ? likeCount : "Loading..."}</div>

        <div className="w-[6%] h-fit flex gap-10 pl-4">
          <MdOutlineModeEditOutline className="text-xl hover:text-2xl" color="white" />
        </div>

        <div className="w-[9%] h-fit flex gap-10 pl-4">
          <RiDeleteBinLine onClick={deleteVideo} className="text-xl hover:text-2xl" color="white" />
        </div>
      </div>
      <hr className="border-gray-600" />
    </div>
  );
}

export default DashboardVideoList;
