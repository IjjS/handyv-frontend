import React from "react";
import "./SlideButton.scss";

const SlideButton = ({ className, content, onMouseEnter, onMouseLeave }) => {
  const slideButtonClassName = "slide-button";
  const activeClassName = className
    ? className + " " + slideButtonClassName
    : slideButtonClassName;
  return (
    <button
      className={activeClassName}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>{content}</span>
    </button>
  );
};

export default SlideButton;
