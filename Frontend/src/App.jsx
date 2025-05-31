import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import UploadVideo from "./components/UploadVideo";
import PostTweet from "./components/PostTweet";
import EditProfile from "./components/EditProfile";
import CreatePlaylist from "./components/CreatePlaylist";
import AddVideoToPlaylist from "./components/AddVideoToPlaylist";
import EditVideo from "./components/EditVideo";
import EditPlaylist from "./components/EditPlaylist";
import DeletePlaylist from "./components/DeletePlaylist";
import DeleteVideo from "./components/DeleteVideo";
import Notification from "./components/Notification";
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
    isAddVideoToPlaylistModalOpen,
    selectedPlaylist,
    isEditVideoModalOpen,
    videoIdToEdit,
    isEditPlaylistModalOpen,
    playlistToEdit,
    isDeletePlaylistModalOpen,
    playlistIdToDelete,
    isDeleteVideoModalOpen,
    videoIdToDelete,
    isLogoutOpen,
    isNotificationModalOpen,
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
          isAddVideoToPlaylistModalOpen ||
          isEditVideoModalOpen ||
          isEditPlaylistModalOpen ||
          isDeletePlaylistModalOpen ||
          isDeleteVideoModalOpen ||
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

      {isAddVideoToPlaylistModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <AddVideoToPlaylist playlist={selectedPlaylist} />
        </div>
      )}

      {isEditVideoModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <EditVideo videoId={videoIdToEdit} />
        </div>
      )}

      {isEditPlaylistModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <EditPlaylist playlist={playlistToEdit} />
        </div>
      )}

      {isDeleteVideoModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <DeleteVideo videoId={videoIdToDelete} />
        </div>
      )}

      {isDeletePlaylistModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <DeletePlaylist playlistId={playlistIdToDelete} />
        </div>
      )}

      {isNotificationModalOpen && (
        <div className="fixed inset-0 flex justify-end ">
          <Notification />
        </div>
      )}
    </div>
  );
}

export default App;
