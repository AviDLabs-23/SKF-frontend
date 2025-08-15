import React from "react";
import "./timeline.css";

const TimelineCard = ({ image, text, date }) => {
  return (
    <div>
      <div className="timeline-card">
        <div>
          <img
            src={image}
            alt="Play"
            style={{ borderRadius: "15px", width: "100%" }}
          />
        </div>
        <div className="timeline-text">
          {text}
          <span style={{ color: "red", fontWeight: "700" }}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
