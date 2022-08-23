import React, { useEffect } from "react";
import PopularPosts from "../components/PopularPosts";
import PostItem from "../components/PostItem";

import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/features/post/postSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const { posts, populatPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts.length) {
    return <h1 className="header">No Posts</h1>;
  }

  return (
    <div className="ui two column grid">
      <div className="twelve wide column">
        <div className="ui inverted list">
          {posts?.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
      </div>
      <div className="four wide column">
        <h2 className="header">Popular:</h2>
        <div className="ui link cards">
          {populatPosts?.map((post, index) => (
            <PopularPosts key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
