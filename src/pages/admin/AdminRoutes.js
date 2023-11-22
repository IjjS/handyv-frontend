import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./landing/Landing";
import Main from "./main/Main";
import CreateStation from "./station/create/CreateStation";
import CreateCharger from "./charger/create/CreateCharger";
import StationList from "./station/list/StationList";
import SlideButton from "../../components/common/button/slide/SlideButton";
import "./AdminRoutes.scss";

const AdminRoutes = () => {
  const navigate = useNavigate();

  const backToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <div className="admin-container page">
      <div className="back-button-wrapper">
        <SlideButton onClick={backToPreviousPage} content="< 이전으로" />
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/station/create" element={<CreateStation />} />
        <Route path="/station/list" element={<StationList />} />
        <Route path="/charger/create" element={<CreateCharger />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
