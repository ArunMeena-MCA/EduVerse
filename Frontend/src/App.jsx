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
import { useDispatch, useSelector } from "react-redux";
function App() {
  const {isLoginOpen,isRegisterationOpen} = useSelector((state) => state.modal)

  return (
    <div className="min-h-screen min-w-screen bg-zinc-900">     
      <div className={`${(isLoginOpen || isRegisterationOpen) ? "blur-sm" : ""}`}>
        <Navbar/>
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

      {isLoginOpen && 
        <div className="fixed inset-0 flex items-center justify-center">
            <Login />
       </div>
      }

      {
        isRegisterationOpen && 
        <div className="fixed inset-0 flex items-center justify-center">
            <Register />
       </div>
      }
    </div>
  );
}

export default App;