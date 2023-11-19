import React from "react";
import DropdownMenu from "./DropdownMenu";
import "./HoverToggle.scss";

const HoverToggle = ({ buttonElement, contentList }) => {
  return (
    <div className="hover-toggle-button-container">
      <div className="root-button">{buttonElement}</div>
      <ul className="dropdown-list">
        {contentList.map((dropdownElement, index) => (
          <DropdownMenu
            key={index}
            title={dropdownElement.title}
            path={dropdownElement.path}
          />
        ))}
      </ul>
    </div>
  );
};

export default HoverToggle;
