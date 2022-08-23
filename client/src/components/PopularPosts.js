import React from "react";

const PopularPosts = ({ post }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="header">{post.title}</div>
      </div>
    </div>
  );
};

export default PopularPosts;
