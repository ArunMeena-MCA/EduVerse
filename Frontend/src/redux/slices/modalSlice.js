import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { 
    isLoginOpen: false, 
    isRegisterationOpen: false
  },
  reducers: {
    openLogin: (state) => { state.isLoginOpen = true; },
    closeLogin: (state) => { state.isLoginOpen = false; },
    openRegister: (state) => { state.isRegisterationOpen = true; },
    closeRegister: (state) => { state.isRegisterationOpen = false; },
  }
});

export const { openLogin, closeLogin,openRegister,closeRegister } = modalSlice.actions;
export default modalSlice.reducer;
