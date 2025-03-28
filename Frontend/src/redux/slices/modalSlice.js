import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { 
    isLoginOpen: false, 
    isRegisterationOpen: false,
    isUploadVideoModalOpen: false,
    isTweetModalOpen: false,
    isEditProfileModalOpen: false
  },
  reducers: {
    openLogin: (state) => { state.isLoginOpen = true; },
    closeLogin: (state) => { state.isLoginOpen = false; },
    openRegister: (state) => { state.isRegisterationOpen = true; },
    closeRegister: (state) => { state.isRegisterationOpen = false; },
    openUploadVideoModal: (state) => { state.isUploadVideoModalOpen = true; },
    closeUploadVideoModal: (state) => { state.isUploadVideoModalOpen = false; },
    openTweetModal: (state) => { state.isTweetModalOpen = true; },
    closeTweetModal: (state) => { state.isTweetModalOpen = false; },
    openEditProfileModal: (state) => { state.isEditProfileModalOpen = true; },
    closeEditProfileModal: (state) => { state.isEditProfileModalOpen = false; },
  }
});

export const { 
  openLogin, closeLogin,
  openRegister,closeRegister,
  openUploadVideoModal, closeUploadVideoModal,
  openTweetModal, closeTweetModal,
  openEditProfileModal, closeEditProfileModal,
} = modalSlice.actions;

export default modalSlice.reducer;
