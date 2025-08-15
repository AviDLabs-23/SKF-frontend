import React, { useState, useEffect } from "react";

// // import axios from "axios";
// // import toast from "react-hot-toast";
import "./contact.css";
import Img from "../../assets/contact.png";

const ContactSection = () => {
  return (
    <div className="contact-landing d-flex flex-wrap">
      <div className="p-4 col-md-5" style={{ textAlign: "center" }}>
        <div className="p-2" style={{ borderRadius: "5px", fontSize: "17px" }}>
          <div>WE'RE HERE TO HELP</div>
          <p></p>
          <div>
            If you didn't find what you were looking for or need some help, we
            are just one click away. Fill in the form and let's kick off the
            conversation.
          </div>
          <p></p>
          <div>
            You can also text/call at{" "}
            <a
              href="tel:9874618262"
              style={{ fontFamily: "sans-serif" }}
              className="text-info"
            >
              +91-9874618262
            </a>{" "}
            or email us at{" "}
            <a
              href="mailto:southkolkatafootball@gmail.com"
              style={{ fontFamily: "sans-serif" }}
              className="text-info"
            >
              southkolkatafootball@gmail.com
            </a>
            !
          </div>
        </div>
        <img src={Img} style={{ maxWidth: "75%" }} className="mob-hide" />
      </div>
      <div className="p-5 col-md-4" style={{ alignContent: "flex-end" }}>
        <div
          style={{
            borderRadius: "5px",
            color: "white",
            overflowY: "auto",
            maxHeight: "87.5vh",
            opacity: "85%",
          }}
          className="bg-dark"
        >
          <div
            style={{
              width: "85%",
              paddingBottom: "1.5rem",
            }}
            className="mx-auto"
          >
            <div className="reg-form d-grid gap-2">
              <div className="form-title text-white">REACH US</div>
              <input
                type="text"
                placeholder="Tell us your name..."
                className="log-form-input mx-auto"
                style={{ width: "100%" }}
              />
              <input
                type="text"
                placeholder="What's your phone number?"
                className="log-form-input mx-auto"
                style={{ width: "100%" }}
              />
              <input
                type="email"
                placeholder="Your email..."
                className="log-form-input mx-auto"
                style={{ width: "100%" }}
              />
              <textarea
                type="text"
                rows="4"
                placeholder="How can we help you?"
                className="log-form-input mx-auto"
                style={{ width: "100%" }}
              />
              <div style={{ textAlign: "center" }}>
                We'll get back as soon as possible!
              </div>
              <div className="reg-btn" style={{ marginLeft: "auto" }}>
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
