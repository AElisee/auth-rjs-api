import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const PrivateRoute = ({ children }) => {
  const auth = cookies.get("TOKEN");

  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
