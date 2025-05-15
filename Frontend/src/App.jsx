import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Logout from "./components/Logout"
import Register from "./components/Register";
import UploadVideo from "./components/UploadVideo";
import PostTweet from "./components/PostTweet";
import EditProfile from "./components/EditProfile";
import CreatePlaylist from "./components/CreatePlaylist";
import PrimaryButton from "./utils/PrimaryButton";
import SecButton from "./utils/SecButton";
import GeneralButton from "./utils/GeneralButton";
import Introductory from "./components/Introductory";
import VideoDetail from "./components/VideoDetail";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, Upload } from "lucide-react";
function App() {
  const {
    isLoginOpen,
    isRegisterationOpen,
    isUploadVideoModalOpen,
    isPlaylistModalOpen,
    isTweetModalOpen,
    isEditProfileModalOpen,
    isLogoutOpen,
  } = useSelector((state) => state.modal);

  return (
    <div className="min-h-screen min-w-screen bg-zinc-900">
      <div
        className={`${
          isLoginOpen ||
          isRegisterationOpen ||
          isUploadVideoModalOpen ||
          isPlaylistModalOpen ||
          isTweetModalOpen ||
          isEditProfileModalOpen ||
          isLogoutOpen
            ? "blur-sm"
            : ""
        }`}
      >
        <Navbar />       
      </div>

      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Login />
        </div>
      )}

      {isLogoutOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Logout />
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

      {isPlaylistModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <CreatePlaylist />
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
