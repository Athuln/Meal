import "../css/style.css";
import React from "react";
const Header = () => {
  return (
    <header className="site-header">
      <div className="row align-items-center">
        <div className="col-5 col-md-3"></div>
        <div className="col-2 col-md-6 text-center site-logo-wrap">
          <a href="#Home" className="site-logo">
            M
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
