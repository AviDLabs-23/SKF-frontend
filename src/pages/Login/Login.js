// import React, { useState, useEffect } from "react";

// // import axios from "axios";
// // import toast from "react-hot-toast";
import Footer from "../../components/Layout/Footer/Footer";
import "./login.css";
import { Link } from "react-router-dom";
import Layout2 from "../../components/Layout/Layout2";
import logo from "../../assets/logo-mini.png";

const Login = () => {
  return (
    <div className="main">
      <Layout2
        title="Sign In"
        description="Sign in page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      ></Layout2>
      <div className="reg-landing">
        <div className="mob-hide col-md-4">
          <div style={{ fontWeight: 400, fontSize: "48px" }}>
            “Stay hungry, remain humble, and get better today.”
          </div>
          <p></p>
          <h2>~ Pete Carroll</h2>
        </div>
        <div className="col-md-3"></div>
        <div
          className="reg-form d-grid gap-2 p-5"
          style={{
            background: "white",
            opacity: "85%",
            borderRadius: "8px",
            color: "black",
            paddingLeft: "5rem",
          }}
        >
          <img src={logo} alt="SKF Logo" className="m-auto" />
          <div className="form-title">SIGN IN</div>
          <input
            type="text"
            placeholder="Enter email or phone"
            className="log-form-input"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="log-form-input"
          />
          <Link
            to="/forgot-password"
            style={{ marginTop: "-0.5rem", textAlign: "center" }}
          >
            Forgot password?
          </Link>
          <div className="reg-btn">Submit</div>
          <div className="d-flex flex-wrap m-auto">
            <div style={{ marginRight: "10px" }}>Not a member?</div>
            <Link
              to="/sign-up"
              className="fw-bold"
              style={{ textDecoration: "none" }}
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
