import React from "react";
import { Link } from "react-router-dom";
import "./DropdownMenu.scss";

const DropdownMenu = ({ title, path }) => {
  return (
    <li className="dropdown-menu">
      <Link className="dropdown-menu" to={path}>
        {title}
      </Link>
    </li>
  );
};

export default DropdownMenu;
