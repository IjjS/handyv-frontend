import React from "react";
import "./App.scss";
import Header from "./components/common/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Main from "./pages/admin/main/Main";
import Landing from "./pages/admin/landing/Landing";
import CreateStation from "./pages/admin/station/CreateStation";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Landing />} />
        <Route path="/admin/main" element={<Main />} />
        <Route path="/admin/station/create" element={<CreateStation />} />
      </Routes>
    </div>
  );
}

export default App;
