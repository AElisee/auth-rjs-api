import React from "react";
import Navigation from "../Navigation";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const AuthComponent = () => {
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  };
  return (
    <div>
      <Navigation />
      <div className="auth-body">
        <>
          <h1>Auth Component</h1>
          <button type="submit" onClick={() => logout()}>
            deconnexion
          </button>
        </>
      </div>
    </div>
  );
};

export default AuthComponent;
