import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import Img from "../../assets/sample-sq.JPG";

const Community = () => {
  return (
    <div className="origins-section d-flex flex-wrap">
      <div className="mob-full-w p-4 my-auto" style={{ width: "50%" }}>
        <div className="big-text">A COMMUNITY, UNITED.</div>
        <div
          className="big-text"
          style={{ fontSize: "42px", fontWeight: "600" }}
        >
          Be a part of the team.
        </div>
        <div className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Labore officia repellat, quo a doloremque deleniti exercitationem
          nobis autem expedita quae.
        </div>
        <div className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facilis!
        </div>
        <Link
          to="/contact-us"
          style={{ textDecoration: "none", color: "cyan" }}
          className="fw-bold"
        >
          {"CONTACT US"}
        </Link>
        {" to learn more ->"}
      </div>
      <div className="mob-full-w my-auto" style={{ width: "50%" }}>
        <img src={Img} alt="something" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Community;
