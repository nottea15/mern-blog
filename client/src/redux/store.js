import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/post/postSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
  },
});
