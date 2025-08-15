import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import "../Play/play.css";

const EventDetails = ({
  date,
  time,
  venue,
  status,
  poster,
  reg_link,
  link,
}) => {
  return (
    <>
      {status !== "upcoming" ? (
        <div
          className="mob-full-w-no-p players-section d-flex flex-wrap"
          style={{ width: "80%" }}
        >
          <div className="mob-full-w-no-p my-auto" style={{ width: "60%" }}>
            <img src={poster} alt="something" width="100%" />
          </div>
          <div className="mob-full-w p-4 my-auto" style={{ width: "40%" }}>
            <div
              className="big-text"
              style={{ fontSize: "28px", fontWeight: "600" }}
            >
              <FaCalendarAlt className="m-1" />
              Date: {date}
            </div>
            <div
              className="big-text mt-3"
              style={{ fontSize: "28px", fontWeight: "600" }}
            >
              <FaClock className="m-1" />
              Time: {time}
            </div>
            <div
              className="big-text mt-3"
              style={{ fontSize: "28px", fontWeight: "600" }}
            >
              <FaLocationDot className="m-1" />
              Venue: {`${venue.name} `}
              <Link
                to={venue.map}
                target="_blank"
                style={{ fontSize: "18px" }}
              >{`(DIRECTIONS)`}</Link>
            </div>
            {status === "current" ? (
              <div
                className="event-register-btn btn btn-lg btn-primary text-white mt-4"
                style={{ fontSize: "28px", background: "orange" }}
              >
                <Link to={reg_link} style={{ color: "white" }}>
                  REGISTER NOW
                </Link>
              </div>
            ) : (
              <div
                className="event-register-btn btn btn-lg btn-primary text-white mt-4"
                style={{ fontSize: "28px", background: "orange" }}
              >
                <HashLink to={`/gallery/#${link}`} style={{ color: "white" }}>
                  VIEW GALLERY
                </HashLink>
              </div>
            )}
            <div style={{ fontSize: "28px" }} className="mt-3">
              <Link
                to="/contact-us"
                style={{ textDecoration: "none", color: "cyan" }}
                className="fw-bold"
              >
                {"Contact us"}
              </Link>
              {" to learn more."}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default EventDetails;
