import React, { useEffect } from "react";
import PopularPosts from "../components/PopularPosts";
import PostItem from "../components/PostItem";

import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/features/post/postSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts.length) {
    return <h3 className="header">NO POSTS</h3>;
  }

  return (
    <div className="ui two column grid">
      <div className="twelve wide column">
        <div className="ui inverted divided list" style={{ cursor: "pointer" }}>
          {posts?.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
      </div>
      <div className="four wide column">
        <h2 className="header">Popular:</h2>
        <div className="ui link cards">
          {popularPosts?.map((post, index) => (
            <PopularPosts key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
