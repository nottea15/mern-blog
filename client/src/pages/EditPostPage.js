import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../redux/features/post/postSlice";
import { toast } from "react-toastify";

import axios from "../utils/axios";

const EditPostPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [newImage, setNewImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const fecthPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setTitle(data.title);
    setText(data.text);
    setOldImage(data.imgUrl);
  }, [params.id]);

  useEffect(() => {
    fecthPost();
  }, [fecthPost]);

  const onSubmit = () => {
    try {
      const updatedPost = new FormData();
      updatedPost.append("title", title);
      updatedPost.append("text", text);
      updatedPost.append("id", params.id);
      updatedPost.append("image", newImage);
      dispatch(updatePost(updatedPost));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const clearHandler = () => {
    setText("");
    setTitle("");
    navigate("/");
  };

  return (
    <div
      style={{ height: "90vh" }}
      className="ui middle aligned center aligned grid"
    >
      <div className="twelve wide column">
        <h1 className="header">Create Post</h1>
        <form onSubmit={(e) => e.preventDefault()} className="ui form">
          <div className="ui inverted stacked segment">
            <div className="field">
              <div className="ui action input">
                <label
                  style={{
                    width: "100%",
                    padding: "20px",
                    justifyContent: "center",
                    color: "#ccc",
                  }}
                  htmlFor="file"
                  className="ui icon inverted button"
                >
                  <i className="file icon"></i>
                  Open File
                </label>
                <input
                  onChange={(e) => {
                    setNewImage(e.target.files[0]);
                    setOldImage("");
                  }}
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
            </div>
            {oldImage && (
              <img
                className="ui rounded medium centered image"
                src={`http://localhost:3002/${oldImage}`}
                alt={oldImage.name}
              ></img>
            )}
            {newImage && (
              <img
                className="ui rounded medium centered image"
                src={URL.createObjectURL(newImage)}
                alt={newImage.name}
              ></img>
            )}
            <div className="inverted field">
              <label>Title</label>
              <div className="addPostInput ui transparent inverted input">
                <input
                  style={{ color: "white" }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Title"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label>Post text</label>
              <textarea
                style={{
                  backgroundColor: "#1b1c1d",
                  border: "1px solid #ccc",
                  color: "white",
                }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="4"
                placeholder="Post Text"
              />
            </div>
          </div>
          <button onClick={onSubmit} className="ui large inverted button">
            Update
          </button>
          <button
            onClick={clearHandler}
            className="ui large inverted red button"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPostPage;
