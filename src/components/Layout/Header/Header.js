// import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
// import { useAuth } from "../../context/auth";
// import { toast } from "react-hot-toast";
// import axios from "axios";
import "./header.css";

import logo from "../../../assets/logo-no-bg.png";

const Header = () => {
  // const [auth, setAuth] = useAuth();

  // const handleSignOut = () => {
  //   setAuth({
  //     ...auth,
  //     user: null,
  //     token: "",
  //   });
  //   localStorage.removeItem("CatalogueAuth");
  //   toast.success("Signed out successfully");
  // };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          width: "85%",
          margin: "0 auto",
          height: "12.5vh",
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="" style={{ width: "25%" }}>
              <Link to="/home" className="navbar-brand">
                <img src={logo} width="100%" alt="SKF Logo" />
              </Link>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link text-white mt-1">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-white mt-1">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/play" className="nav-link text-white mt-1">
                  Play
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className="nav-link text-white mt-1">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gallery" className="nav-link text-white mt-1">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blogs-n-news"
                  className="nav-link text-white mt-1"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact-us" className="nav-link text-white mt-1">
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-1">
              <li className="nav-item">
                <NavLink
                  to="/sign-up"
                  className="btn-register btn bg-success btn-lg text-white"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/sign-in"
                  className="btn-login btn bg-primary btn-lg text-white"
                >
                  Login
                </NavLink>
              </li>
              {/* {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/signin" className="nav-link">
                      Sign In
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        {auth?.user?.isAdmin ? (
                          <NavLink to="/user/dashboard" className="nav-link">
                            Dashboard
                          </NavLink>
                        ) : (
                          <>
                            {console.log(auth.user)}
                            <NavLink to="/admin/dashboard" className="nav-link">
                              Dashboard
                            </NavLink>
                          </>
                        )}
                      </li>
                      <li>
                        <NavLink
                          onClick={handleSignOut}
                          to="/signin"
                          className="nav-link"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )} */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
