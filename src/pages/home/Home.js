import React, { useState } from "react";
import SlideButton from "../../components/common/button/pulse/SlideButton";
import "./Home.scss";

const Home = () => {
  const [adminButtonContent, setAdminButtonContent] =
    useState("관리자이신가요?");

  const handleAdminButtonMouseEnter = () => {
    setAdminButtonContent("관리자 페이지로");
  };

  const handleAdminButtonMouseLeave = () => {
    setAdminButtonContent("관리자이신가요?");
  };

  return (
    <div className="home-container">
      <div className="home-contents">
        <div className="app-introducer">
          <span>간편한 전기차 충전소 예약 서비스</span>
          <br />
          <span>핸디비</span>
        </div>
        <div className="buttons">
          <div className="button-container">
            <div className="button-wrapper">
              <SlideButton
                className="booking-button"
                content={"충전기 예약하러 가기"}
              />
            </div>
          </div>
          <div className="button-container">
            <div className="button-wrapper admin-button">
              <SlideButton
                content={adminButtonContent}
                onMouseEnter={handleAdminButtonMouseEnter}
                onMouseLeave={handleAdminButtonMouseLeave}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;