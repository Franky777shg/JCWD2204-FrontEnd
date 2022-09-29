import React from "react";
import { Routes, Route } from "react-router-dom";
import { List } from "./list";
import { Write } from "./write";

export const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Write />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
};
