import React from "react";
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-container-logo">Report</div>
        <div className="auth-container-card-root">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
