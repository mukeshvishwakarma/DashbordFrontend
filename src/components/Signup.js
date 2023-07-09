import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./CSS/Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const collectData = async () => {
    console.log(name, email, password, password_confirmation);
    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password, password_confirmation }),
      headers:{
        authorization:`bearer${JSON.parse(localStorage.getItem('token'))}`,
    }
    });
    result = await result.json();
    console.log(result);
    console.log(result.auth);
    console.log(result.result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate("/");
    }
  };
  return (
    <div className="register">
      <h1>SignUp</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <input
        className="inputBox"
        type="text"
        value={password_confirmation}
        onChange={(e) => setpassword_confirmation(e.target.value)}
        placeholder="Enter password_confirmation"
      />
      <input
        onClick={collectData}
        className="appbutton"
        type="button"
        value={"Sign Up"}
      />
    </div>
  );
};
export default Signup;
