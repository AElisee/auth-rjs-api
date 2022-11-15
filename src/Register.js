import React, { useRef, useState } from "react";
import axios from "axios";

const Register = () => {
  const email = useRef();
  const password = useRef();
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "https://auth-rjs.herokuapp.com/register",
      data: {
        email: email.current.value,
        password: password.current.value,
      },
    };
    axios(configuration)
      .then((result) => setRegister(true))
      .catch((error) => (error = new error()));
  };
  return (
    <div className="form-container">
      <h1>s'inscrire</h1>
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
          value="s'inscrire"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
};

export default Register;
