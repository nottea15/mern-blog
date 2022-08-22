import React, { useState } from "react";

const AuthFrom = ({ onSubmit, header, status }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{ height: "90vh" }}
      className="ui middle aligned center aligned grid"
    >
      <div className="ten wide column">
        <h1 className="header">{header}</h1>
        <div className="ui stacked segment">
          <form
            onSubmit={(e) => onSubmit(e, username, password)}
            className="ui form"
          >
            <div
              className={`field ${
                status && status.type === "error" ? "error" : ""
              }`}
            >
              <div className="ui left icon input">
                <i className="user icon" />
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username"
                  required
                />
              </div>
            </div>
            <div
              className={`field ${
                status && status.type === "error" ? "error" : ""
              }`}
            >
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <button className="large ui fluid secondary submit button">
              {header}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthFrom;
