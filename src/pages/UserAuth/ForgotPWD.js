import React, { useState, useEffect } from "react";

// // import axios from "axios";
// // import toast from "react-hot-toast";
import Footer from "../../components/Layout/Footer/Footer";
import "./login.css";
import { Link } from "react-router-dom";
import Layout2 from "../../components/Layout/Layout2";
import logo from "../../assets/logo-mini.png";

const ForgotPWD = () => {
  return (
    <div className="main">
      <Layout2
        title="Forgot Password"
        description="Sign in page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      ></Layout2>
      <div className="reg-landing">
        <div
          className="mob-hide col-md-4 fw-bold"
          style={{ fontSize: "30px", borderBottom: "1px solid white" }}
        >
          FORGOT PASSWORD? <p>RESET IN 3 EASY STEPS!</p>
          <ol style={{ fontSize: "30px" }} className="fw-bold">
            <li>Enter your email, press submit.</li>
            <li>Enter OTP sent to your email and sign in.</li>
            <li>Go to your account and reset your password.</li>
          </ol>
        </div>
        <div
          className="reg-form d-grid gap-2 p-5"
          style={{
            background: "white",
            opacity: "85%",
            borderRadius: "8px",
            color: "black",
            paddingLeft: "5rem",
            margin: "1rem",
          }}
        >
          <img src={logo} alt="SKF Logo" className="m-auto" />
          <div className="form-title">SIGN IN WITH OTP</div>
          <input
            type="email"
            placeholder="Enter email"
            className="otp-form-input"
          />
          <div className="reg-btn">Submit</div>
          <input
            type="password"
            placeholder="Enter OTP sent in mail"
            className="otp-form-input"
          />
          <div className="reg-btn">Sign In</div>
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

export default ForgotPWD;
