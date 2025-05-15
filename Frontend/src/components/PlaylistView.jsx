import React, { useEffect, useState } from "react";
import Playlist_Thumbnail from "../assets/Playlist_Thumbnail.png";
import VideoListCard from "./VideoListCard";
import { matchPath, useLocation, useParams } from "react-router-dom";
import api from "../utils/api";
import PrimaryButton from "../utils/PrimaryButton";

function PlaylistView() {
  const playlistId = useParams();
  const location = useLocation();
  const [playlist, setPlaylist] = useState({});
  const [user, setUser] = useState({});
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(0);
  const [error, setError] = useState(null);
  const [match,setMatch] = useState(false);

  let thumbnail = Playlist_Thumbnail;

  useEffect(() => {
    getPlaylist();
  }, [playlistId]);

  useEffect(() => {
    if (playlist.owner) {
      getUser();
      setMatch(localStorage.getItem("userId") === playlist.owner);
    }
  }, [playlist]);

  const fetchVideos = async (videoIds) => {
    try {
      const token = localStorage.getItem("token");
      const videoRequests = videoIds.map((id) =>
        api.get(`/videos/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      );

      const responses = await Promise.all(videoRequests);
      const videoData = responses.map((res) => res.data.data);
      setVideos(videoData);

      // Optionally, set the thumbnail of the first video
      if (videoData.length > 0) {
        thumbnail = videoData[0].thumbnail;
      }
    } catch (error) {
      console.log(error);
      setError("Failed to fetch videos");
    }
  };

  const getPlaylist = async () => {
    try {
      const response = await api.get(
        `/playlist/getPlaylistById/${playlistId.id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      const playlistData = response.data.data;
      setPlaylist(playlistData);
      setVideoCount(playlistData.videos.length);

      if (playlistData.videos.length > 0) {
        console.log("fetching");

        fetchVideos(playlistData.videos); // Fetch all videos
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await api.get(`/users/${playlist.owner}`, {});
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center lg:justify-start">
      <div className="mx-4 sm:mx-10 lg:mx-2 lg:w-[30%] my-6 flex flex-col justify-center items-center">
        <div>
          <img
            className="rounded-md lg:mx-2"
            src={thumbnail}
            alt="Playlist Thumbnail"
          />
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-white font-semibold text-xl md:ml-2">
              {playlist.name}
            </h1>
            <div className="w-[25%] flex justify-end">
              <h1 className="text-stone-400 font-semibold text-md">
                {videoCount} Videos
              </h1>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-1 lg:ml-2">
            <img
              className="w-6 h-6 rounded-full mt-1"
              src={user.avatar}
              alt="Profile pic"
            />
            <h3 className="text-gray-400 text-sm">{user.fullname}</h3>
          </div>
          <hr className="text-gray-800 my-2 lg:ml-2" />
          <div>
            <h1 className="text-gray-400 text-md lg:ml-2 line-clamp-10">
              {playlist.description}
            </h1>
          </div>
        </div>
        {match && (
          <div className="my-6 lg:mt-32 flex justify-center">
            <PrimaryButton className="px-20">Add Video</PrimaryButton>
          </div>
        )}
      </div>
      <div className="md:ml-6 my-6">
        <div className="flex flex-col gap-3 mx-4">
          {videos.map((video) => (
            <VideoListCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaylistView;
