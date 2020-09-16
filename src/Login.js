import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    //log in logic

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //login redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    //log in logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //redirect
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://visualhierarchy.co/blog/wp-content/uploads/2018/04/amazon.jpg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in </h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          ></input>
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          ></input>

          <button type="submit" className="login__signInButton" onClick={login}>
            Sign in
          </button>
        </form>

        <button className="login__createButton" onClick={register}>
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Login;
