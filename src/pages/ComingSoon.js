import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import Bg from "../assets/background/other.png";
import ComingSoonImg from "../assets/coming-soon.png";

const ComingSoon = () => {
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "auto 100vh",
        backgroundPosition: "center",
      }}
    >
      <Layout
        title="Coming Soon"
        description="Event details page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <div
          style={{
            height: "87.5vh",
          }}
        >
          <div
            className="mob-full-w mx-auto d-flex flex-wrap"
            style={{ width: "85%" }}
          >
            <div className="mob-full-w" style={{ width: "50%" }}>
              <img
                src={ComingSoonImg}
                width="100%"
                alt="Coming Soon icon"
                className="mt-4"
              />
            </div>
            <div
              className="mob-full-w m-auto d-flex flex-wrap"
              style={{ width: "35%", opacity: "75%" }}
            >
              <div style={{ width: "48%" }} className="mob-full-w">
                <div
                  className="btn btn-dark btn-block"
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                  }}
                >
                  <Link to="/home" style={{ color: "white" }}>
                    <div style={{ margin: "0.25rem auto" }}>Home</div>
                  </Link>
                </div>
              </div>
              <div
                style={{ width: "48%", marginLeft: "auto" }}
                className="mob-full-w"
              >
                <div
                  className="btn btn-dark btn-block"
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                  }}
                >
                  <Link to="/contact-us" style={{ color: "white" }}>
                    <div style={{ margin: "0.25rem auto" }}>Contact</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default ComingSoon;
