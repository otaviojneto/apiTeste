import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Tempo } from "../Pages";

const Rout: React.FC = () => (
    <BrowserRouter>
        <Routes>

            <Route path="/home" element={<Home />} />
            <Route path="/tempo" element={<Tempo />} />
        </Routes>
    </BrowserRouter>

);

export default Rout;
