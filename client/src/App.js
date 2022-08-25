import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/features/auth/authSlice";

import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import AddPostPage from "./pages/AddPostPage";
import LoginPage from "./pages/LoginPage";
import EditPostPage from "./pages/EditPostPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/post/:id/edit" element={<EditPostPage />} />
        <Route path="/new" element={<AddPostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Layout>
  );
}

export default App;
