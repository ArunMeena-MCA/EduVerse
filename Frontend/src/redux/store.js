import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; 
import modalReducer from "./slices/modalSlice";
import registerReducer from "./slices/registerSlice"; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    register: registerReducer, 
  },
});

export default store;
