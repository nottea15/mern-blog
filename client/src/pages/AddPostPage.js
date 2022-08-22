import React from "react";
import { InputFile } from "semantic-ui-react-input-file";

const AddPostPage = () => {
  return (
    <div
      style={{ height: "90vh" }}
      className="ui middle aligned center aligned grid"
    >
      <div className="twelve wide column">
        <h1 className="header">Create Post</h1>
        <form className="ui form">
          <div className="ui stacked segment">
            <div className="field">
              <div class="ui action input">
                <label
                  style={{ width: "100%", justifyContent: "center" }}
                  for="file"
                  class="ui icon button"
                >
                  <i class="file icon"></i>
                  Open File
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div>
            <div className="field">
              <label>Title</label>
              <div className="ui input">
                <input type="text" placeholder="Title" required />
              </div>
            </div>
            <div class="field">
              <label>Post text</label>
              <textarea rows="4" placeholder="Post Text"></textarea>
            </div>
          </div>
          <button className="ui large inverted button">Create</button>
          <button className="ui large inverted red button">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddPostPage;
