import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../../assets/png/handyV64.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-logo-wrapper">
          <Link to="/">
            <img src={headerLogo} alt="logo" />
            <span>HandyV</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
