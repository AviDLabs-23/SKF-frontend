import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Tekkers = () => {
  return (
    <div className="tekkers-section d-flex flex-wrap">
      <div
        className="pt-4 pb-4 m-auto"
        style={{ width: "80%", textAlign: "center" }}
      >
        <div
          className="big-text"
          style={{ fontSize: "75px", fontWeight: "900" }}
        >
          TEKKERS
        </div>
        <div
          className="big-text"
          style={{ fontSize: "30px", fontWeight: "600" }}
        >
          What is Tekkers?
        </div>
        <div className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          sit eaque. Itaque sapiente exercitationem, minus in asperiores
          recusandae tempora est eos maiores inventore dolor harum vitae iste
          dolorem doloremque, alias iure odit.
        </div>
        <div className="mt-4 mb-4">
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
    </div>
  );
};

export default Tekkers;
