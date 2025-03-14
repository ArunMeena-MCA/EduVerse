import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; 
import modalReducer from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, // Add more reducers here if needed
    modal: modalReducer,
  },
});

export default store;
