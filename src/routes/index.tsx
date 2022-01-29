import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Tempo, Home } from "../Pages";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/tempo" element={<Tempo />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
