import React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/free">Free</a>
        </li>
        <li>
          <a href="auth">Auth</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
