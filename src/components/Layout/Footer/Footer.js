import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./footer.css";
import logo_no_bg from "../../../assets/logo-no-bg.png";
import fb from "../../../assets/social/fb.png";
import ig from "../../../assets/social/ig.png";
import yt from "../../../assets/social/yt.png";
import wp from "../../../assets/social/wp.png";
import email from "../../../assets/social/email.png";
import call from "../../../assets/social/call.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div-mob m-auto" style={{ maxWidth: "85%" }}>
        <div className="d-flex flex-wrap" style={{ paddingBottom: "48px" }}>
          <div className="col-md-3 mx-auto">
            <div className="">
              <img src={logo_no_bg} alt="SKF Logo" width="100%" />
            </div>
            <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
              Join us for enjoying regular football games every week and the
              triannual tournament Tekkers. You can be a player as well as a
              host.
            </p>
          </div>
          <div className="links col-md-6 d-flex flex-wrap">
            <div>
              <p className="fw-bold link1">COMMUNITY</p>
              <Link to="/home" className="link1">
                Home
              </Link>
              <p></p>
              <Link to="/about" className="link1">
                About
              </Link>
              <p></p>
              <Link to="/sign-up" className="link1">
                Be A Member
              </Link>
              <p></p>
              <Link to="/Gallery" className="link1">
                Gallery
              </Link>
              <p></p>
              <Link to="/blogs-n-news" className="link1">
                Blogs & News
              </Link>
              <p></p>
              <Link to="/contact-us" className="link1">
                Contact Us
              </Link>
            </div>
            <div>
              <p className="fw-bold">POPULAR LINKS</p>
              <Link to="/play">Play</Link>
              <p></p>
              <Link to="/play">Join A Game</Link>
              <p></p>
              <HashLink to="/play/#host">Be A Host</HashLink>
              <p></p>
              <Link to="/events">Tekkers</Link>
              <p></p>
              <HashLink to="/events/#partners">Partnerships</HashLink>
            </div>
            <div>
              <p className="contact fw-bold">GET IN TOUCH</p>
              <div className="">
                <a
                  className="d-flex flex-wrap"
                  href="mailto:southkolkatafootball@gmail.com"
                >
                  <img
                    src={email}
                    alt="Gmail Logo"
                    style={{ width: "32px", marginRight: "0.5rem" }}
                  ></img>
                  <div style={{ margin: "auto 0" }}>Email</div>
                </a>
                <a className="d-flex flex-wrap" href="tel:9874618262">
                  <img
                    src={call}
                    alt="Phone Logo"
                    style={{ width: "32px", marginRight: "0.5rem" }}
                  ></img>
                  <div style={{ margin: "auto 0" }}>Phone</div>
                </a>
                <Link
                  className="d-flex flex-wrap"
                  to="https://wa.me/9874618262"
                >
                  <img
                    src={wp}
                    alt="Whatsapp Logo"
                    style={{ width: "32px", marginRight: "0.5rem" }}
                  ></img>
                  <div style={{ margin: "auto 0" }}>Whatsapp</div>
                </Link>
              </div>
            </div>
            <div className="social-mob">
              <p className="contact fw-bold">JOIN US AT</p>
              <div className="">
                <Link
                  className="d-flex flex-wrap"
                  to="https://chat.whatsapp.com/Lk0jrfAnToiBxQNb2gbrI0"
                  target="_blank"
                >
                  <img
                    src={wp}
                    alt="Whatsapp Logo"
                    style={{ width: "32px", marginRight: "0.5rem" }}
                  ></img>
                  <div style={{ margin: "auto 0" }}>Whatsapp</div>
                </Link>
                <Link
                  className="d-flex flex-wrap"
                  to="https://www.instagram.com/southkolkatafootball/"
                  target="_blank"
                >
                  <img
                    src={ig}
                    alt="Instagram Logo"
                    style={{ width: "32px", marginRight: "0.5rem" }}
                  ></img>
                  <div style={{ margin: "auto 0" }}>Instagram</div>
                </Link>
                <Link
                  className="d-flex flex-wrap"
                  to="https://wa.me/9874618262"
                >
                  <img
                    src={fb}
                    alt="Facebook Logo"
                    style={{ width: "32px", marginRight: "0.5rem" }}
                  ></img>
                  <div style={{ margin: "auto 0" }}>Facebook</div>
                </Link>
                <Link
                  className="d-flex flex-wrap"
                  to="https://wa.me/9874618262"
                >
                  <img
                    src={yt}
                    alt="Youtube Logo"
                    style={{ width: "32px", marginRight: "0.5rem" }}
                  ></img>
                  <div style={{ margin: "auto 0" }}>Youtube</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ margin: "0 auto" }}>
            <div className="mob-hide">
              <p className="contact fw-bold">JOIN US AT</p>
              <div className="d-flex flex-wrap">
                <Link
                  to="https://chat.whatsapp.com/Lk0jrfAnToiBxQNb2gbrI0"
                  target="_blank"
                >
                  <img
                    src={wp}
                    alt="Whatsapp Logo"
                    style={{ width: "42px", marginRight: "1rem" }}
                  ></img>
                </Link>
                <Link
                  to="https://www.instagram.com/southkolkatafootball/"
                  target="_blank"
                >
                  <img
                    src={ig}
                    alt="Instagram Logo"
                    style={{ width: "42px", marginRight: "1rem" }}
                  ></img>
                </Link>
                <Link>
                  <img
                    src={fb}
                    alt="Facebook Logo"
                    style={{ width: "42px", marginRight: "1rem" }}
                  ></img>
                </Link>
                <Link>
                  <img
                    src={yt}
                    alt="Youtube Logo"
                    style={{ width: "42px" }}
                  ></img>
                </Link>
              </div>
            </div>
            <p></p>
            <p className="subs-title fw-bold">DROP YOUR CONTACT</p>
            <div className="d-flex flex-wrap" style={{ width: "100%" }}>
              <input
                type="text"
                placeholder="Enter email or phone"
                className="subscribe"
                style={{ width: "66%" }}
              />
              <div className="sub-btn">Let's go</div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-wrap"
          style={{ borderTop: "2px solid white", paddingTop: "35px" }}
        >
          <div className="copy-statement col-md-4">
            &copy; 2023 South Kolkata Football, All Rights Reserved.
          </div>
          <div className="tnc-mob m-auto">
            <Link to="/about">Terms of Use</Link>|
            <Link to="/policies">Privacy Policy</Link>
          </div>
          <div className="made m-auto">
            Made with &#x2764; by Avishek Dutta and Sanchari Ghosh.
          </div>
          <div className="mob-hide ms-auto">
            <Link to="/terms-of-use">Terms of Use</Link>|
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
