import React from "react";
import SlideButton from "../../common/button/slide/SlideButton";
import HoverToggle from "../../common/button/hover-toggle/HoverToggle";
import { adminFeatures } from "../../../constants/adminFeatures";
import "./Main.scss";

const Main = () => {
  return (
    <div className="page admin-main-container">
      <div className="admin-features-container">
        <div className="admin-features-wrapper">
          {adminFeatures.map((feature, index) => (
            <HoverToggle
              key={index}
              buttonElement={
                <SlideButton
                  className={feature.className}
                  content={feature.content}
                />
              }
              contentList={feature.contentList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
