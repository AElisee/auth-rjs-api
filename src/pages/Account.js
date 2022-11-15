import React from "react";
import Login from "../Login";
import Navigation from "../Navigation";
import Register from "../Register";

const Account = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Register />
        <Login />
      </div>
    </div>
  );
};

export default Account;
