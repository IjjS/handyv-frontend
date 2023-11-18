import React from "react";
import "./SlideButton.scss";

const SlideButton = ({
  className,
  content,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const slideButtonClassName = "slide-button";
  const activeClassName = className
    ? className + " " + slideButtonClassName
    : slideButtonClassName;
  return (
    <button
      className={activeClassName}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <span>{content}</span>
    </button>
  );
};

export default SlideButton;
