import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Country, Home } from "../Pages";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/country" element={<Country />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
