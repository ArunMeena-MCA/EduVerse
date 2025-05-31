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
    isAddVideoToPlaylistModalOpen: false,
    isEditVideoModalOpen: false,
    isEditPlaylistModalOpen: false,
    isLogoutOpen: false,
    selectedPlaylist: null,
    videoIdToEdit: null,
    playlistToEdit: null,
    isDeletePlaylistModalOpen: false,
    playlistIdToDelete: null,    
    isDeleteVideoModalOpen: false,
    videoIdToDelete: null,
    isNotificationModalOpen: false,    
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
    openAddVideoToPlaylistModal: (state, action) => {
      state.isAddVideoToPlaylistModalOpen = true;
      state.selectedPlaylist = action.payload;
    },
    closeAddVideoToPlaylistModal: (state) => {state.isAddVideoToPlaylistModalOpen = false;},
    openEditVideoModal: (state, action) => {state.isEditVideoModalOpen = true; state.videoIdToEdit = action.payload},
    closeEditVideoModal: (state) => {state.isEditVideoModalOpen = false;},
    openEditPlaylistModal: (state, action) => {state.isEditPlaylistModalOpen = true; state.playlistToEdit = action.payload},
    closeEditPlaylistModal: (state) => {state.isEditPlaylistModalOpen = false;},
    openDeletePlaylistModal: (state, action) => {state.isDeletePlaylistModalOpen = true; state.playlistIdToDelete = action.payload},
    closeDeletePlaylistModal: (state) => {state.isDeletePlaylistModalOpen = false},
    openDeleteVideoModal: (state, action) => {state.isDeleteVideoModalOpen = true; state.videoIdToDelete = action.payload},
    closeDeleteVideoModal: (state) => {state.isDeleteVideoModalOpen = false},
    openNotificationModal: (state) => {state.isNotificationModalOpen = true; },
    closeNotificationModal: (state) => {state.isNotificationModalOpen = false; },
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
  openAddVideoToPlaylistModal, closeAddVideoToPlaylistModal,
  openEditVideoModal,closeEditVideoModal,
  openEditPlaylistModal,closeEditPlaylistModal,
  openDeletePlaylistModal,closeDeletePlaylistModal,
  openDeleteVideoModal,closeDeleteVideoModal,
  openNotificationModal,closeNotificationModal,
  openLogout, closeLogout,
} = modalSlice.actions;

export default modalSlice.reducer;
