import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import "./SignInScreen.css";

const SignInScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

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
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setLoading(false);
      });
    //
    setError(false);
  };

  // console.log(error);
  const togglePasswordVissible = () => {
    setPasswordShown(passwordShown ? false : true);
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
              type={passwordShown ? "text" : "password"}
              value={password}
              placeholder=" "
              id="password"
              name="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <span className="toggleVisible" onClick={togglePasswordVissible}>
              {passwordShown ? "HIDE" : "SHOW"}
            </span>
          </div>
          {error && <p className="errorMsg">{error}</p>}

          {loading ? (
            <button className="signin_loading">
              <span className="signin_loader"></span>
            </button>
          ) : (
            <button type="submit" onClick={signIn} className="signin__btn">
              Sign In
            </button>
          )}
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
