import React from "react";
import "../Home/home.css";
import Avishek from "../../assets/team/Avishek.png";

const Partners = () => {
  return (
    <div className="m-auto" style={{ width: "85%" }}>
      <div
        className="subtitle"
        style={{ fontSize: "50px", fontWeight: "900", marginTop: "4rem" }}
      >
        SKF MANAGEMENT TEAM
      </div>
      <div className="d-flex flex-wrap">
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={Avishek} alt="Avishek Dutta" width="100%" />
        </div>
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={Avishek} alt="Aritro Datta" width="100%" />
        </div>
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={Avishek} alt="Monosig Saha" width="100%" />
        </div>
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={Avishek} alt="Chandan Gupta" width="100%" />
        </div>
      </div>
      <div className="d-flex flex-wrap" style={{ marginLeft: "" }}>
        <div className="mob-hide" style={{ width: "12.5%" }}></div>
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={Avishek} alt="Rishab Roy" width="100%" />
        </div>
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={Avishek} alt="Debojit Sadhukhan" width="100%" />
        </div>
        <div className="logos p-4" style={{ width: "25%" }}>
          <img src={Avishek} alt="Soham Kundu" width="100%" />
        </div>
        <div className="mob-hide" style={{ width: "12.5%" }}></div>
      </div>
    </div>
  );
};

export default Partners;
