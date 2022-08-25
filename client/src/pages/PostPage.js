import axios from "../utils/axios";
import React, { useCallback, useState, useEffect } from "react";
import PostItem from "../components/PostItem";
import { Link, useParams } from "react-router-dom";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const params = useParams();

  const fecthPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fecthPost();
  }, [fecthPost]);

  return (
    <div>
      <Link to={"/"}>
        <button
          style={{ marginBottom: "40px" }}
          className="ui inverted large button"
        >
          Back
        </button>
      </Link>

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
