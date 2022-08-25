import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

import PostItem from "../components/PostItem";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchMyPosts = async () => {
    try {
      setisLoading(true);
      const { data } = await axios.get("/posts/user/me");
      setisLoading(false);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="ui active dimmer">
        <div className="ui loader"></div>
      </div>
    );
  }

  if (!posts.length) {
    return <h3 className="header">No Posts</h3>;
  }

  return (
    <div className="ui inverted divided list" style={{ cursor: "pointer" }}>
      {posts?.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
