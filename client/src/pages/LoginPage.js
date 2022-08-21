import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, isLogedIn } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(isLogedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
    if (status && status.type === "error") {
      toast.error(status.content);
    } else if (status && status.type === "success") {
      toast.success(status.content);
      setUsername("");
      setPassword("");
    }
  }, [status, isAuth, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser({ username, password }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ height: "90vh" }}
      className="ui middle aligned center aligned grid"
    >
      <div className="eight wide column">
        <h1 className="header">Login</h1>
        <div className="ui stacket segment">
          <form onSubmit={(e) => onSubmit(e)} className="ui form">
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
              Login
            </button>
          </form>
        </div>
        <div className="ui stacked segment">
          <Link to={"/register"}>New to us? Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
