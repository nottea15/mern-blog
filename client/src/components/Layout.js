import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ marginTop: "20px" }} className="ui container">
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
