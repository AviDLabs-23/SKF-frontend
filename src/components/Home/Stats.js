import React from "react";
import "./home.css";

const Stats = () => {
  return (
    <div className="stats-section">
      <div className="stats-title">STATS NEVER LIE</div>
      <div className=" d-flex flex-wrap">
        <div
          className="mob-full-w p-4"
          style={{ width: " 33.33%", textAlign: "center" }}
        >
          <div className="" style={{ fontSize: "120px", fontWeight: "900" }}>
            200<span style={{ fontSize: "100px", color: "red" }}>+</span>
          </div>
          <div className="" style={{ fontSize: "40px", fontWeight: "900" }}>
            MEMBERS
          </div>
        </div>
        <div
          className="mob-full-w p-4"
          style={{ width: " 33.33%", textAlign: "center" }}
        >
          <div className="" style={{ fontSize: "120px", fontWeight: "900" }}>
            2K<span style={{ fontSize: "100px", color: "red" }}>+</span>
          </div>
          <div className="" style={{ fontSize: "40px", fontWeight: "900" }}>
            VIEWS
          </div>
        </div>
        <div
          className="mob-full-w p-4"
          style={{ width: " 33.33%", textAlign: "center" }}
        >
          <div className="" style={{ fontSize: "120px", fontWeight: "900" }}>
            140<span style={{ fontSize: "100px", color: "red" }}>+</span>
          </div>
          <div className="" style={{ fontSize: "40px", fontWeight: "900" }}>
            GAMES
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
