import React, { useState } from "react";
import { closeTweetModal } from "../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import PrimaryButton from "../utils/PrimaryButton";
import api from "../utils/api";

function PostTweet() {
  const dispatch = useDispatch();
  const [tweetText, setTweetText] = useState();
  const [error, setError] = useState(null);

  const handleSubmit = async() => {
    try {
      const data = {
        tweetText: tweetText,
      }
      
      const response = await api.post("/tweet/", data,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // console.log(response)
      dispatch(closeTweetModal());
      setTweetText('');
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);    
    }
  }

  return (
    <div>
      <div className="max-h-[650px] md:w-fit w-72 overflow-y-auto border border-white rounded-xl pt-2 px-16 pb-6 bg-zinc-900 shadow-[0px_0px_20px_rgba(251,113,133,0.9)]">
        <button
          className="pl-[100%] text-white text-2xl hover:text-gray-300"
          onClick={() => dispatch(closeTweetModal())}
        >
          ✖
        </button>
        <h2 className="text-2xl text-center text-white font-semibold mb-8">
          TWEET
        </h2>
        <div className="md:w-72 flex flex-col items-center">
          <h1 className="text-white text-sm">Express your thoughts here : </h1>
          {/* Tweet input field */}          
          <textarea
            className="border-2 border-gray-300 rounded-md p-2 w-full mb-4"
            placeholder="What's happening?"
            onChange={(e) => setTweetText(e.target.value)}
          />
          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {/* Tweet button */}
          <PrimaryButton onClick={handleSubmit}>Add Tweet</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default PostTweet;
