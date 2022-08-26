import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/post/postSlice";
import authSlice from "./features/auth/authSlice";
import commentSlice from "./features/comment/commentSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    comment: commentSlice,
  },
});
