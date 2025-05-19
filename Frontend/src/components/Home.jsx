import React, { useEffect, useState } from "react";
import PlaylistCard from "./PlaylistCard";
import VideoCard from "./VideoCard";
import api from "../utils/api";
function Home() {
  const [videos, setVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
    fetchPlaylists();
  }, []);

  // Fetch Videos from API
  const fetchVideos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/videos/getAllVideos", {
        params: { page: 1, limit: 10 }, // Adjust pagination if needed
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setVideos(response.data.data.videos);
    } catch (err) {
      setError("Failed to fetch videos");
    } finally {
      setLoading(false);
    }
  };

  const fetchPlaylists = async () => {
    try {
      const response = await api.get("/playlist/getAllPlaylists", {
        params: { page: 1, limit: 10 }, // Adjust pagination if needed
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      // console.log(response.data.data.Playlists);
      setPlaylists(response.data.data.Playlists);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-white font-semibold text-4xl text-center mt-8">
          Videos
        </h1>
        <hr className="mt-2 border border-gray-600" />
        <div className="flex gap-5 flex-wrap justify-center">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
        <h1 className="text-white font-semibold text-4xl text-center mt-8">
          Playlists
        </h1>
        <hr className="mt-2 border border-gray-600" />
        <div className="flex gap-5 flex-wrap justify-center">
          {playlists.map(
            (playlist) =>
              playlist.videos.length > 0 && (
                <PlaylistCard key={playlist._id} playlist={playlist} />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
