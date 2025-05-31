import React, { useState } from "react";
import Routing from "../utils/Routing";
import MeTube from "../assets/MeTube.png";
import Notification from "./Notification";
import { useLocation, useNavigate, matchPath } from "react-router-dom";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  openLogin,
  openRegister,
  openLogout,
  openNotificationModal,
  closeNotificationModal,
} from "../redux/slices/modalSlice";
import { IoNotifications } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isNotificationModalOpen } = useSelector((state) => state.modal);
  const [search, setSearch] = useState("");
  const [notificationBox, setNotificationBox] = useState(false);

  const match = matchPath(
    `/Profile/${localStorage.getItem("userId")}`,
    location.pathname
  );

  const user = useSelector((state) => state.auth.user);

  const handleNotification = () => {
    if(notificationBox){
      dispatch(closeNotificationModal())
    }
    else{
      dispatch(openNotificationModal());
    }
    setNotificationBox(!notificationBox);
  }

  return (
    <div>
      <div className="relative bg-zinc-950 text-white shadow-[0px_0px_20px_rgba(251,113,133,0.5)]">
        {/* Navbar content */}
        <div className="flex items-center justify-between px-2 md:px-6 py-2 sm:py-4 relative z-8">
          {/* Logo */}
          <img
            onClick={() => {
              if (user) {
                navigate("/Home");
              }
            }}
            src={MeTube}
            alt="Logo"
            className="w-8 h-8 md:w-12 md:h-12 cursor-pointer rounded-full hover:shadow-[0px_0px_20px_rgba(251,113,133,0.8)]"
          />

          {/* Search Bar */}
          <div className="ml-[10%] md:ml-20 relative flex items-center w-[50%] bg-zinc-900 rounded-full shadow-[0px_0px_20px_rgba(251,113,133,0.5)]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-1 md:py-2 text-white bg-transparent border-none outline-none placeholder-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute right-4 text-gray-400 cursor-pointer" />
          </div>

          {/* Auth Buttons / Profile */}
          {user && location.pathname !== "/" ? (
            <div className="flex items-center">
              <div className="flex">
                <IoNotifications className="size-4 sm:size-6 md:size-8 mr-2" />
                <GoDotFill
                  onClick={() => handleNotification()}
                  // size={20}
                  className="size-3 sm:size-5 text-red-500 absolute ml-[1%] cursor-pointer"
                />
              </div>
              {match ? (
                <div className="flex gap-2 md:gap-5">
                  <h2
                    onClick={() => dispatch(openLogout())}
                    className="sm:ml-2 md:ml-4 font-semibold hover:font-bold text-xs text-rose-500 md:text-lg cursor-pointer"
                  >
                    Logout
                  </h2>
                </div>
              ) : (
                <div className="sm:w-20 flex justify-end">
                  <button
                    onClick={() =>
                      navigate(`/Profile/${localStorage.getItem("userId")}`)
                    }
                  >
                    <img
                      src={user.avatar}
                      alt="Profile"
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer hover:shadow-[0px_0px_20px_rgba(251,113,133,0.8)]"
                    />
                  </button>
                </div>
              )}
            </div>
          ) : (
            location.pathname === "/" && (
              <div className="flex gap-2 md:gap-5">
                <h2
                  onClick={() => dispatch(openLogin())}
                  className="font-semibold hover:font-bold text-xs text-rose-400 md:text-lg cursor-pointer"
                >
                  Login
                </h2>
                <h2
                  onClick={() => dispatch(openRegister())}
                  className="font-semibold hover:font-bold text-xs text-stone-400 md:text-lg cursor-pointer"
                >
                  Signup
                </h2>
              </div>
            )
          )}
        </div>
      </div>
      <div className={`${isNotificationModalOpen ? "blur-sm" : ""}`}>
        <Routing />
      </div>
    </div>
  );
}
