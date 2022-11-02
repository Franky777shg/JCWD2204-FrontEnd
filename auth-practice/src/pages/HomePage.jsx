import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/login" replace={true} />}
      <div>Homepage</div>
    </>
  );
};
