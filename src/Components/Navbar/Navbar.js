import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/netflix-logo.png";
import profileIcon from "../../assets/profile-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <nav className={`navbar ${show && "navbar__black"}`}>
      <div className="navbar__content">
        <Link to="/">
          <img src={logo} alt="navbarlogo" className="navbar__logo" />
        </Link>

        <Link to="/profile">
          <img
            src={profileIcon}
            alt="navbaravatar"
            className="navbar__avatar"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
