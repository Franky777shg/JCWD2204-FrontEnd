import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const id = localStorage.getItem("id");

  return (
    <>
      {!id && <Navigate to="/login" replace={true} />}
      <div>Homepage</div>
    </>
  );
};
