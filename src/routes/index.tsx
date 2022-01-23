import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Tempo } from "../Pages";

const Rout: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tempo />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Rout;
