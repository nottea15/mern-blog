import React from "react";
import { useNavigate } from "react-router-dom";

const PopularPosts = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/post/${post._id}`)}>
      <div className="content">
        <div className="header">{post.title}</div>
      </div>
    </div>
  );
};

export default PopularPosts;
