import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../Auth";

//TODO change href to auth/google later, come up with a method to use instead of writing down the whole path
function Signin() {
  const use = useAuth();
  const curYear = new Date().getFullYear();
  const history = useHistory();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  function authenticate(event) {
    event.preventDefault();
    use.authsignin(Username, Password, history);
  }

  return (
    <section id="signins">
      <div className="form-signin">
        <div className="signup-btn-div">
          <img
            className="signin-background w-100 h-100 "
            src="/images/corgi.jpg"
            alt="cute corgi pic"
          />
          <img
            className="mb-4 signin-img"
            src="/images/angelsofa.jpg"
            alt="angel on sofa"
          ></img>
          <h1 className="signin-heading h3 mb-3 font-weight-normal">
            Please sign in
          </h1>
          <a href="http://localhost:4000/auth/google">
            <button className="signup-btn btn-block btn btn-lg btn-light btn-outline-primary">
              <FontAwesomeIcon icon={["fab", "google"]} /> Sign in with Google
            </button>
          </a>
        </div>
        <hr />
        <div className="login-div"></div>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          onChange={(event) => setUsername(event.target.value)}
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <button
          onClick={authenticate}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Sign in
        </button>
        <hr></hr>
        <p>
          <b>Don't have account yet? get one today !</b>
        </p>{" "}
        <a href="/createaccount">
          <u>Create Account</u>
        </a>
        <p className="mt-3 mb-3 ">
          &copy; <b className="signin-copyright">Copyright 2020 - {curYear}</b>
        </p>
      </div>
    </section>
  );
}
export default Signin;
