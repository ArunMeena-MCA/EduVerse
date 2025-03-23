import React, { useState } from "react";
import PrimaryButton from "../utils/PrimaryButton";
import SecButton from "../utils/SecButton";
import { BiSolidLike } from "react-icons/bi";
import VideoListCard from "./VideoListCard";
function VideoDetail() {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState("");
  return (
    <div className="flex flex-col md:flex-row gap-3 md:mx-0">
      <div className="md:w-[64%] ml-0 md:ml-12">
        <div className="mt-4">
          <video
            className="rounded flex justify-center items-center bg-gray-900 h-full w-full"
            src="https://cdn.pixabay.com/video/2020/08/07/46637-448480646_tiny.mp4"
            controls
            autoPlay
          >
            Oops!, This video can not be played.
          </video>
        </div>
        <div className="borde rounded-lg px-2 py-4">
          <div className="flex justify-between mr-4 items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">Video Title</h1>
              <h2 className="text-xs text-gray-400">
                30,000 views | 08 hours ago
              </h2>
            </div>
            <h1 className="flex text-white text-lg items-center bg-zinc-800 px-2 gap-2 rounded-full">
              <BiSolidLike
                onClick={() => setLike(!like)}
                className={`hover:scale-125 ${like ? "text-rose-500" : ""}`}
                size={24}
              />{" "}
              300
            </h1>
          </div>
          {/* <hr className="mt-4" /> */}
          <div className="flex justify-between items-center  mt-4">
            <div className="flex items-end gap-3">
              <div className="flex items-center gap-2 mt-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iv-KB_R3Ampyd8TyhmjpLgVAPpg-hGDWfA&s"
                  alt="Profile pic"
                />
              </div>
              <div>
                <h1 className="text-white text-sm">Channel Name</h1>
                <h2 className="text-xs text-gray-400">500k Subsribers</h2>
              </div>
            </div>
            <PrimaryButton className="text-xl rounded-2xl px-4">
              Subscribe
            </PrimaryButton>
          </div>
          <hr className="mt-4" />
          <div className="mt-4">
            <h1 className="text-lg text-white font-semibold">Description</h1>
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              commodi incidunt illum quisquam nesciunt, quis doloremque
              laudantium fuga exercitationem, reiciendis, sunt ex at ullam
              explicabo!
            </p>
          </div>
        </div>
        <div className="mt-4 border rounded-lg px-2 py-4">
          <h1 className="text-xl text-white font-semibold px-2">
            323 Comments
          </h1>
          <div className="flex items-center gap-3 mt-4 mx-4">
            <input
              className="w-full h-10 rounded-lg px-2"
              type="text"
              placeholder="Add a comment..."
              onChange={(e) => setComment(e.target.value)}
            />
            <SecButton>Comment</SecButton>
          </div>
          {/* Comment Section */}
          <div className="ml-2">
            <div className="flex items-start mt-4 gap-3">
              <img
                className="w-10 md:w-12 rounded-full"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="Profile pic"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-md text-white font-semibold">
                    FullName{" "}
                  </h1>
                  <h2 className="text-xs text-gray-400">08 hours ago</h2>
                </div>
                <div>
                  <h2 className="text-xs text-white">@username</h2>
                </div>
                <p className="text-white text-sm line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                  commodi incidunt illum quisquam nesciunt, quis doloremque
                  laudantium fuga exercitationem, reiciendis, sunt ex at ullam
                  explicabo!
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="ml-2">
            <div className="flex items-start mt-4 gap-3">
              <img
                className="w-10 md:w-12 rounded-full"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="Profile pic"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-md text-white font-semibold">
                    FullName{" "}
                  </h1>
                  <h2 className="text-xs text-gray-400">08 hours ago</h2>
                </div>
                <div>
                  <h2 className="text-xs text-white">@username</h2>
                </div>
                <p className="text-white text-sm line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                  commodi incidunt illum quisquam nesciunt, quis doloremque
                  laudantium fuga exercitationem, reiciendis, sunt ex at ullam
                  explicabo!
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-4" />
          {/* End Comment Section */}
        </div>
      </div>
      <div className="md:w-[33%] md:borde rounded-lg mt-4 p-2">
        <div className="flex flex-col gap-3">
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
          <VideoListCard />
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
