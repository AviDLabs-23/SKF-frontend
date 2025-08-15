import React, { useState, useEffect } from "react";

// // import axios from "axios";
// // import toast from "react-hot-toast";
import Footer from "../../components/Layout/Footer/Footer";
import "./register.css";
import { Link } from "react-router-dom";
import Layout2 from "../../components/Layout/Layout2";
import logo from "../../assets/logo-mini.png";

const Register = () => {
  return (
    <div className="main">
      <Layout2
        title="Sign Up"
        description="Sign up page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      ></Layout2>
      <div className="reg-landing">
        <div className="mob-hide p-4 col-md-4">
          <div style={{ fontWeight: 400, fontSize: "48px" }}>
            “Stay hungry, remain humble, and get better today.”
          </div>
          <p></p>
          <h2>~ Pete Carroll</h2>
        </div>
        <div className="sec-2 col-md-3"></div>
        <div
          className="reg-form d-grid gap-2 p-3 m-3"
          style={{
            background: "white",
            opacity: "85%",
            borderRadius: "8px",
            color: "black",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <img src={logo} alt="SKF Logo" className="m-auto" />
          <div className="form-title">SIGN UP</div>
          <div className="reg-input-rows">
            <div className="d-flex flex-wrap">
              <div className="p-2 mx-auto">
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="form-input mx-auto"
                />
              </div>
              <div className="p-2 mx-auto">
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="form-input mx-auto"
                />
              </div>
            </div>
            <div className="d-flex flex-wrap">
              <div className="p-2 mx-auto">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="form-input mx-auto"
                />
              </div>
              <div className="p-2 mx-auto">
                <input
                  type="number"
                  placeholder="Enter phone number"
                  className="form-input mx-auto"
                />
              </div>
            </div>
            <div className="d-flex flex-wrap">
              <div className="p-2 mx-auto">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="form-input mx-auto"
                />
              </div>
              <div className="p-2 mx-auto">
                <input
                  type="password"
                  placeholder="Enter password again"
                  className="form-input mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="tnc-box m-auto">
            <input type="checkbox" checked />
            <span className="m-2">
              I agree to the <Link to="/terms-of-use">terms of use</Link> and{" "}
              <Link to="/privacy-policy">privacy policy</Link> of the community
              and webapp.
            </span>
          </div>
          <div className="reg-btn">Create Account</div>
          <div className="d-flex flex-wrap m-auto">
            <div style={{ marginRight: "10px" }}>Already a member?</div>
            <Link
              to="/sign-in"
              className="fw-bold"
              style={{ textDecoration: "none" }}
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
