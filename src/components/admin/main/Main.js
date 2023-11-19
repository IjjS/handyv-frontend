import React from "react";
import SlideButton from "../../common/button/slide/SlideButton";
import HoverToggle from "../../common/button/hover-toggle/HoverToggle";
import "./Main.scss";

const Main = () => {
  return (
    <div className="page admin-main-container">
      <div className="admin-features-container">
        <div className="admin-features-wrapper">
          <HoverToggle
            buttonElement={
              <SlideButton className="station" content="충전소 관리" />
            }
            contentList={["충전소 추가"]}
          />
          <HoverToggle
            buttonElement={
              <SlideButton className="charger" content="충전기 관리" />
            }
            contentList={["충전기 추가"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
