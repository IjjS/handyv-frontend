import React from "react";
import "./App.scss";
import Header from "./components/common/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AdminRoutes from "./pages/admin/AdminRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
