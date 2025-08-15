import React from "react";
import "./play.css";

const Play = ({ image, text }) => {
  return (
    <div>
      <div className="play-card">
        <div>
          <img src={image} alt="Play" style={{ width: "100%" }} />
        </div>
        <div className="play-text">{text}</div>
      </div>
    </div>
  );
};

export default Play;
