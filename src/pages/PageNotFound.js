import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import Bg from "../assets/background/other.png";
import Pg404 from "../assets/404.png";

const PageNotFound = () => {
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Layout
        title="Page Not Found"
        description="Event details page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <div
          style={{
            minHeight: "87.5vh",
          }}
        >
          <div className="mob-full-w mx-auto" style={{ width: "85%" }}>
            <div className="mob-full-w" style={{ width: "50%" }}>
              <img src={Pg404} width="100%" alt="404 icon" className="mt-4" />
              <div className="title m-0">PAGE NOT FOUND</div>
              <div
                className="mt-0 text-white"
                style={{ textAlign: "center", fontSize: "20px" }}
              >
                Sorry, we're unable to find the page you are looking for.
              </div>
              <div className="d-grid d-flex flex-wrap">
                <div className="d-flex flex-wrap p-1" style={{ width: "100%" }}>
                  <div style={{ width: "50%" }} className="mob-full-w p-2">
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
                  <div style={{ width: "50%" }} className="mob-full-w p-2">
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
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PageNotFound;
