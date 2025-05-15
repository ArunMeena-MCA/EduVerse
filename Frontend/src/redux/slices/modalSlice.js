import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { 
    isLoginOpen: false, 
    isRegisterationOpen: false,
    isUploadVideoModalOpen: false,
    isPlaylistModalOpen: false,
    isTweetModalOpen: false,
    isEditProfileModalOpen: false,
    isLogoutOpen: false,
  },
  reducers: {
    openLogin: (state) => { state.isLoginOpen = true; },
    closeLogin: (state) => { state.isLoginOpen = false; },
    openRegister: (state) => { state.isRegisterationOpen = true; },
    closeRegister: (state) => { state.isRegisterationOpen = false; },
    openUploadVideoModal: (state) => { state.isUploadVideoModalOpen = true; },
    closeUploadVideoModal: (state) => { state.isUploadVideoModalOpen = false; },
    openPlaylistModal: (state) => {state.isPlaylistModalOpen = true; },
    closePlaylistModal: (state) => {state.isPlaylistModalOpen = false; },
    openTweetModal: (state) => { state.isTweetModalOpen = true; },
    closeTweetModal: (state) => { state.isTweetModalOpen = false; },
    openEditProfileModal: (state) => { state.isEditProfileModalOpen = true; },
    closeEditProfileModal: (state) => { state.isEditProfileModalOpen = false; },
    openLogout: (state) => { state.isLogoutOpen = true },
    closeLogout: (state) => { state.isLogoutOpen = false },
  }
});

export const { 
  openLogin, closeLogin,
  openRegister,closeRegister,
  openUploadVideoModal, closeUploadVideoModal,
  openPlaylistModal,closePlaylistModal,
  openTweetModal, closeTweetModal,
  openEditProfileModal, closeEditProfileModal,
  openLogout, closeLogout,
} = modalSlice.actions;

export default modalSlice.reducer;
