import React from "react";
import Navbar from "./components/Navbar";
import PrimaryButton from "./utils/PrimaryButton";
import SecButton from "./utils/SecButton";
import GeneralButton from "./utils/GeneralButton";
import Login from "./components/Login";
import Introductory from "./components/Introductory";
import Register from "./components/Register";
import VideoDetail from "./components/VideoDetail";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UploadVideo from "./components/UploadVideo";
import { useDispatch, useSelector } from "react-redux";
import { Upload } from "lucide-react";
import PostTweet from "./components/PostTweet";
import EditProfile from "./components/EditProfile";
function App() {
  const {
    isLoginOpen,
    isRegisterationOpen,
    isUploadVideoModalOpen,
    isTweetModalOpen,
    isEditProfileModalOpen,
  } = useSelector((state) => state.modal);

  return (
    <div className="min-h-screen min-w-screen bg-zinc-900">
      <div
        className={`${
          isLoginOpen ||
          isRegisterationOpen ||
          isUploadVideoModalOpen ||
          isTweetModalOpen ||
          isEditProfileModalOpen
            ? "blur-sm"
            : ""
        }`}
      >
        <Navbar />
        {/* <div className="flex justify-center mt-[6%]">
          <Login/>
        </div> */}
        {/* <div>
          <Introductory/>
        </div> */}
        {/* <div>
          <VideoDetail />
        </div> */}
        <div>
          {/* <Home/> */}
          <Profile />
        </div>
      </div>

      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Login />
        </div>
      )}

      {isRegisterationOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Register />
        </div>
      )}
      {isUploadVideoModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <UploadVideo />
        </div>
      )}

      {isTweetModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <PostTweet />
        </div>
      )}

      {isEditProfileModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <EditProfile />
        </div>
      )}
    </div>
  );
}

export default App;
