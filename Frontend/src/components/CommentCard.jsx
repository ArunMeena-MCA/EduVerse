import React, { useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import api from "../utils/api";

function CommentCard(comment) {
  const [user, setUser] = useState({});
  const [likeToggle, setLikeToggle] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (comment?.comment?.owner) {
      getUser(comment.comment.owner);
      getLikeCount();
    }
  }, [comment?.comment?.owner]);

  // Fetch user data when comment is loaded
  const getUser = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`, {});
      // console.log(response.data.data);
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLike = async () => {
    try {
      const response = await api.post(
        `/likes/comment/${comment.comment._id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response);
      if (likeToggle) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setLikeToggle(!likeToggle);
    } catch (error) {
      console.error(error);
    }
  };

  const getLikeCount = async () => {
    try {
      const response = await api.get(
        `/likes/likeCount/comment/${comment.comment._id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      // console.log(response);
      setLikeCount(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-start mt-4 gap-3">
        <img
          className="w-10 h-10 rounded-full"
          src={user.avatar}
          alt="Profile pic"
        />
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-md text-white font-semibold">
              {user.fullname}
            </h1>
            <h2 className="text-xs text-gray-400">08 hours ago</h2>
          </div>
          <div>
            <h2 className="text-xs text-gray-500">@{user.username}</h2>
          </div>
          <p className="text-white text-sm line-clamp-2 mt-1">
            {comment.comment.content}
          </p>
          <div className="flex gap-3 mt-2">
            <h1 className="text-xs text-gray-500 border border-gray-500 px-1 items-end rounded-md flex gap-1">
              {likeCount}{" "}
              <BiSolidLike
                onClick={() => toggleLike()}
                className={`text-lg hover:scale-125 ${
                  likeToggle ? "text-rose-500" : ""
                }`}
              />
            </h1>
            <button className="text-xs text-gray-500 hover:font-semibold">
              Edit
            </button>
            <button className="text-xs text-gray-500 hover:font-semibold hover:text-red-500">
              Delete
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-1 border border-gray-700" />
    </div>
  );
}

export default CommentCard;
