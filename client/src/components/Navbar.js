import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { isLogedIn, logout } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const isAuth = useSelector(isLogedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast.warn("You are logged out");
  };

  const returnMenu = () => {
    return isAuth ? (
      <div
        style={{ justifyContent: "center", padding: "0" }}
        className="ten wide column item"
      >
        <NavLink to={"/"} className="item">
          Main
        </NavLink>
        <NavLink to={"/posts"} className="item">
          My Blogs
        </NavLink>
        <NavLink to={"/new"} className="item">
          Create
        </NavLink>
      </div>
    ) : (
      ""
    );
  };

  return (
    <div className="ui vertical inverted segment">
      <div className="ui large secondary inverted pointing menu">
        <div className="three column centered ui grid container">
          <h4 className="three wide column item">MERN-BLOG</h4>
          {returnMenu()}
          <div className="three wide column right item">
            {!isAuth ? (
              <Link to={"/login"} className="ui inverted button">
                Login
              </Link>
            ) : (
              <button onClick={logoutHandler} className="ui inverted button">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
