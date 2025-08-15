import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="mob-full-w" style={{ width: "50%" }}>
        <div className="big-text landing-text">PLAY FOOTBALL</div>
        <div className="subtext">WHERE EMOTIONS MEET THE PITCH</div>
        <div
          className="d-grid d-flex flex-wrap"
          style={{
            background: "#d9d9d9",
            opacity: "75%",
            borderRadius: "8px",
          }}
        >
          <div className="d-flex flex-wrap p-1" style={{ width: "100%" }}>
            <div style={{ width: "50%" }} className="mob-full-w p-2">
              <div
                className="btn btn-dark btn-block"
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  height: "100%",
                }}
              >
                <Link to="/play" style={{ color: "white" }} className="">
                  <div style={{ margin: "0.25rem auto" }}>JOIN A GAME</div>
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
                <Link to="/play/#host" style={{ color: "white" }}>
                  <div style={{ margin: "0.25rem auto" }}>HOST A GAME</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
