import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Tempo } from "../Pages";
import Home from "../Pages/Home";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/tempo" element={<Tempo />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
