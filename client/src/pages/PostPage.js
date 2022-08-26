import axios from "../utils/axios";
import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "../components/PostItem";
import { useNavigate, useParams } from "react-router-dom";
import { isLogedIn } from "../redux/features/auth/authSlice";

import { toast } from "react-toastify";
import { removePost } from "../redux/features/post/postSlice";
import {
  createComment,
  getAllComments,
} from "../redux/features/comment/commentSlice";
import CommentItem from "../components/CommentItem";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  const { user } = useSelector((state) => state.auth);
  const { comments } = useSelector((state) => state.comment);
  const isAuth = useSelector(isLogedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const removePostHandler = () => {
    try {
      dispatch(removePost(params.id));
    } catch (error) {
      console.log(error);
    }
    navigate("/");
    toast.warn("Post deleted");
  };

  const handleSubmit = () => {
    try {
      const postId = params.id;
      dispatch(createComment({ postId, comment }));
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = useCallback(async () => {
    try {
      dispatch(getAllComments(params.id));
    } catch (error) {
      console.log(error);
    }
  }, [params.id, dispatch]);

  const fecthPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fecthPost();
  }, [fecthPost]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div>
      <div>
        <button
          onClick={() => navigate("/")}
          style={{ marginBottom: "40px" }}
          className="ui inverted large button"
        >
          Back
        </button>
        {user?._id === post?.author && (
          <React.Fragment>
            <button
              onClick={removePostHandler}
              className="ui right floated inverted red large button"
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/post/${params.id}/edit`)}
              className="ui right floated inverted orange large button"
            >
              Edit
            </button>
          </React.Fragment>
        )}
      </div>

      <div className="ui center aligned two column grid">
        <div className="eleven wide column">
          <div className="ui inverted list">
            <PostItem post={post} />
          </div>
        </div>
        <div className="five wide column">
          <div style={{ height: "77vh" }} className="ui black segment">
            <h2 style={{ color: "black" }} className="header">
              Comments
            </h2>
            {isAuth ? (
              <form onSubmit={(e) => e.preventDefault()} className="ui form">
                <div className="field">
                  <div className="ui action input">
                    <input
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      type="text"
                      placeholder="Comment"
                    />
                    <button
                      onClick={handleSubmit}
                      className="ui right floated button"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              ""
            )}
            <div className="ui comments">
              {comments?.map((comment) => {
                return <CommentItem key={comment._id} comment={comment} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
