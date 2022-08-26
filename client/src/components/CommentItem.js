import React from "react";
import { useSelector } from "react-redux";

const CommentItem = ({ comment }) => {
  return (
    <div className="comment">
      <div className="content">
        <h4 className="author">{comment.username}</h4>
      </div>
      <div className="text">{comment.comment}</div>
    </div>
  );
};

export default CommentItem;
