import React, { useRef, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Login = () => {
  const email = useRef();
  const password = useRef();
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    const message = document.querySelector(".message");
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "https://auth-rjs.herokuapp.com/login",
      data: {
        email: email.current.value,
        password: password.current.value,
      },
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/auth";

        // message if success
        // message.innerHTML = "<p>connexion réussie</p>";
      })
      .catch((error) => {
        // error = new error();
        message.innerHTML = "<p>connexion  échouée</p>";
      });
  };
  return (
    <div className="form-container">
      <h1>se connecter</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="email" ref={email} />
        <input
          type="password"
          placeholder="
        password"
          ref={password}
        />
        <input
          type="submit"
          value="se connecter"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
      <div className="message"></div>
    </div>
  );
};

export default Login;
