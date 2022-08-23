import React from "react";
import Moment from "react-moment";

const PostItem = ({ post }) => {
  if (!post) {
    return <h1 className="header">No Posts</h1>;
  }
  return (
    <div className="ui link item">
      <div className="content">
        {post.imgUrl && (
          <div className="ui fluid rounded image">
            <img
              style={{ maxHeight: "500px" }}
              src={`http://localhost:3002/${post.imgUrl}`}
              alt="img"
            />
          </div>
        )}
        <a style={{ margin: "20px 0" }} className="header">
          <h2>{post.title}</h2>
        </a>
        <div className="description">
          <p>{post.text}</p>
        </div>
        <div style={{ marginTop: "20px" }} className="extra">
          <div className="description">
            <p className="left floated">{post.username}</p>
            <p className="left floated">
              <Moment date={post.createdAt} format="D MMM YYYY" />
            </p>
            <p className="right floated ">
              <i className="heart outline like icon"></i>
              {post.views}
            </p>
            <p className="right floated ">
              <i className="comment icon"></i>
              {post.comments?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
