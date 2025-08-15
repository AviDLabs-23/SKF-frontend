import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./event.css";
import Tsoon from "../../assets/background/tsoon-landing.png";

const Game = ({ title, image, venue, location, date, time, link }) => {
  return (
    <div>
      <Link to={`/event?title=${link}`}>
        <div className="event-card">
          <div style={{ backgroundColor: "black" }}>
            <img
              src={image !== null ? image : Tsoon}
              alt={title}
              style={{
                borderRadius: "20px 20px 0 0",
                width: "100%",
              }}
            />
          </div>
          <div className="card-text-area">
            <div className="event-title">{title}</div>
            <div className="event-venue d-flex flex-wrap">
              <FaLocationDot className="m-1" />
              {` ${venue}, ${location}`}
            </div>
            <div className="event-schedule d-flex flex-wrap">
              <FaCalendarAlt className="m-1" />
              {`Date: ${date}`}
            </div>
            {time !== undefined ? (
              <div className="event-schedule d-flex flex-wrap">
                <FaClock className="m-1" />
                {`Time: ${time}`}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Game;
