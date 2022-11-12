import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import "./SignInScreen.css";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        // alert(err.message);
        setError(err.message);
      });
    setError(false);
  };

  return (
    <div className="signIn">
      <h1 className="signIn__title">Sign In</h1>

      <div className="signInScreen__input">
        <form>
          <div className="signIn-label">
            <input
              className="signIn-input"
              type="email"
              value={email}
              placeholder=" "
              id="email"
              name="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="signIn-label">
            <input
              className="signIn-input"
              type="password"
              value={password}
              placeholder=" "
              id="password"
              name="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          {error && <p className="errorMsg">{error}</p>}
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
      </div>
      <p className="signup__content">
        New to Netflix?
        <Link to="" className="signUp-btn" onClick={register}>
          Sign up now.
        </Link>
      </p>
    </div>
  );
};

export default SignInScreen;
