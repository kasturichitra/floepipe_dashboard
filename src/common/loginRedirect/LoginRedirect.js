import React from "react";
import gettingTokenFromLocalStorage from "../getTokenFromLocalStorage/GetToken";
import { Navigate } from "react-router-dom";

const LoginRedirect = ({ children }) => {
  const token = gettingTokenFromLocalStorage();

  if (token) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export default LoginRedirect;
