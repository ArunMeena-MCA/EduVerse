import React, { useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import api from "../utils/api";
function TweetCard(tweet) {
  const [like, setLike] = useState(false);
  const [user, setUser] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [likedTweet, setLikedTweet] = useState([]);

  useEffect(() => {
    getUser();
    getLikeCount();
    getLikedTweet();
  }, [tweet.tweet.owner]);

  // This runs AFTER likedTweet or Tweet changes
  useEffect(() => {
    if (tweet.tweet._id && likedTweet.length > 0) {
      setLikeStatus();
    }
  }, [tweet.tweet._id, likedTweet]);

  // Fetch user data when video is loaded
  const getUser = async () => {
    // console.log("Tweet Owner ID:", tweet.tweet.owner);
    try {
      const response = await api.get(`/users/${tweet.tweet.owner}`, {});
      //   console.log(response);
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLike = async () => {
    try {
      const response = await api.post(
        `/likes/tweet/${tweet.tweet._id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      // console.log(response);
      if (like) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setLike(!like);
    } catch (error) {
      console.error(error);
    }
  };

  const getLikeCount = async () => {
    try {
      const response = await api.get(
        `/likes/likeCount/tweet/${tweet.tweet._id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      // console.log(response.data);
      setLikeCount(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getLikedTweet = async () => {
    try {
      const response = await api.get("/likes/liked-tweets", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      // console.log(response.data.data);
      setLikedTweet(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const setLikeStatus = () => {
    if (likedTweet.length > 0) {
      const isLiked = likedTweet.some((v) => v.tweet === tweet.tweet._id);
      setLike(isLiked);
    } else {
      setLike(false);
    }
  };

  const editTweet = async (tweet) => {
    try {
      const response = await api.post(`/tweet/${tweet.tweet._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTweet = async (tweet) => {
    try {
      const response = await api.delete(`/tweet/${tweet.tweet._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex gap-3 mr-6 mt-4">
        <img
          className="w-10 h-10 rounded-full mt-1"
          src={user.avatar}
          alt="Profile pic"
        />
        <div>
          <div className="flex gap-5 items-center">
            <h1 className="font-semibold text-white">{user.fullname}</h1>
            <h3 className="text-gray-400 text-xs">5 hours ago</h3>
          </div>
          <p className="text-white line-clamp-2 text-sm mt-1">
            {tweet.tweet.content}
          </p>
          <div className="flex gap-3 w-fit mt-2">
            <h1 className="text-md text-white border px-2 rounded-md flex items-center gap-2">
              {likeCount}{" "}
              <BiSolidLike
                onClick={() => toggleLike()}
                className={`text-xl hover:scale-125 ${
                  like ? "text-rose-500" : ""
                }`}
              />
            </h1>
            <h1
              onClick={() => editTweet(tweet)}
              className="text-white hover:text-red-500 font-semibold cursor-pointer"
            >
              Edit
            </h1>
            <h1
              onClick={() => deleteTweet(tweet)}
              className="text-white hover:text-red-500 font-semibold cursor-pointer"
            >
              Delete
            </h1>
          </div>
        </div>
      </div>
      <hr className="mt-2 border-gray-600" />
    </div>
  );
}

export default TweetCard;
