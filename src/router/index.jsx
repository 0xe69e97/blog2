import React from "react";
import Content from "../pages/Content";
import HOC from "../components/HOC";

import Components from "../pages/data";

import { Routes, Route } from "react-router-dom";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Content />}></Route>
      {Components.map((item) => {
        return (
          <Route
            key={item.path}
            path={item.path}
            element={<HOC name={item.name} component={item.component} />}
          ></Route>
        );
      })}
    </Routes>
  );
}
