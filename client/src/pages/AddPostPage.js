import React, { useState } from "react";
import "./AddPostPage.css";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/features/post/postSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = () => {
    try {
      const data = new FormData();

      data.append("title", title);
      data.append("text", text);
      data.append("image", image);

      dispatch(createPost(data));

      if (text && title) {
        toast.success("Post created");
        navigate("/");
      } else {
        toast.error("Enter title and text");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearHandler = () => {
    setImage("");
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
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
            </div>
            {image && (
              <img
                className="ui rounded medium centered image"
                src={URL.createObjectURL(image)}
                alt="image"
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
            Create
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

export default AddPostPage;
