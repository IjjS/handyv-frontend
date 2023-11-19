import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Main from "./main/Main";
import CreateStation from "./station/create/CreateStation";

const AdminRoutes = () => {
  return (
    <div className="admin-container page">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/station/create" element={<CreateStation />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
