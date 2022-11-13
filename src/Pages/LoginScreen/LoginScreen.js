import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInScreen from "../SignInScreen/SignInScreen";
import logo from "../../assets/netflix-logo.png";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <Link to="/">
          <img className="loginScreen__logo" src={logo} alt="netflixlogo" />
        </Link>

        <button className="loginScreen__btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen_sec">
        {signIn ? (
          <div className="signInScreen__body">
            <SignInScreen />
          </div>
        ) : (
          <>
            <div className="loginScreen__body">
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <div className="floating-label">
                    <input
                      className="floating-input"
                      type="email"
                      placeholder=" "
                      id="email"
                      name="email"
                      autoComplete="off"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <button type="submit" onClick={() => setSignIn(true)}>
                    Get Started
                  </button>
                </form>
                {/* <p className="email_valid">Email is required.</p> */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
