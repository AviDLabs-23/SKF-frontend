import React from "react";
import { GiLaurelsTrophy } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { GiGloves } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";

import "../Home/home.css";

const TopPlayers = ({ topPlayers }) => {
  return (
    <div
      className="m-auto"
      style={topPlayers.length > 0 ? { width: "85%" } : { display: "none" }}
    >
      <div className="title">TOP PLAYERS</div>
      <div className="d-flex flex-wrap">
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={topPlayers[0]} alt="Avishek Dutta" width="100%" />
          <div style={{ color: "white", textAlign: "center" }}>
            <GiLaurelsTrophy className="mx-1" color="yellow" />
            Man Of The Tournament
          </div>
        </div>
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={topPlayers[1]} alt="Aritro Datta" width="100%" />
          <div style={{ color: "white", textAlign: "center" }}>
            <GiRunningShoe className="mx-1" color="yellow" />
            Highest Scorer
          </div>
        </div>
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={topPlayers[2]} alt="Monosig Saha" width="100%" />
          <div style={{ color: "white", textAlign: "center" }}>
            <FaShieldAlt className="mx-1" color="yellow" />
            Best Defender
          </div>
        </div>
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={topPlayers[3]} alt="Chandan Gupta" width="100%" />
          <div style={{ color: "white", textAlign: "center" }}>
            <GiGloves className="mx-1" color="yellow" />
            Best Goalkeeper
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlayers;
