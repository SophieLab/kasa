import React from "react";
import "./styles/app.scss";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;