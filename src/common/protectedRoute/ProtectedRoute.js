import React from "react";
import gettingTokenFromLocalStorage from "../getTokenFromLocalStorage/GetToken";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = gettingTokenFromLocalStorage();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
