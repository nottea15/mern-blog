import axios from "../utils/axios";
import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "../components/PostItem";
import { Link, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { removePost } from "../redux/features/post/postSlice";

const PostPage = () => {
  const [post, setPost] = useState(null);

  const { user } = useSelector((state) => state.auth);

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

  const fecthPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fecthPost();
  }, [fecthPost]);

  return (
    <div>
      <div>
        <Link to={"/"}>
          <button
            style={{ marginBottom: "40px" }}
            className="ui inverted large button"
          >
            Back
          </button>
        </Link>
        {user?._id === post?.author && (
          <div className="ui right floated inverted segment">
            <button
              onClick={removePostHandler}
              className="ui  inverted red large button"
            >
              Delete
            </button>
            <button
              onClick={() => navigate(`/post/${params.id}/edit`)}
              className="ui inverted orange large button"
            >
              Edit
            </button>
          </div>
        )}
      </div>

      <div className="ui center aligned two column grid">
        <div className="twelve wide column">
          <div className="ui inverted list">
            <PostItem post={post} />
          </div>
        </div>
        <div className="four wide column">COMMENTS</div>
      </div>
    </div>
  );
};

export default PostPage;
