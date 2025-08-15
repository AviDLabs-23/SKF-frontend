import React from "react";
import { GoDotFill } from "react-icons/go";

import "./winner.css";

const Winners = ({ title, logo, image, teamlist, win }) => {
  let cat = "WINNER";
  if (win === false) cat = "RUNNERS-UP";
  return (
    <div>
      <div className="winner-card">
        <div
          style={
            win
              ? {
                  background: "gold",
                  color: "black",
                  fontSize: "36px",
                  fontWeight: "900",
                  textAlign: "center",
                  borderRadius: "20px 20px 0 0",
                  padding: "1rem",
                }
              : {
                  background: "silver",
                  color: "black",
                  fontSize: "36px",
                  fontWeight: "900",
                  textAlign: "center",
                  borderRadius: "20px 20px 0 0",
                  padding: "1rem",
                }
          }
        >
          {cat}
        </div>
        <div>
          <img
            src={image}
            alt={title}
            style={{
              // borderRadius: "20px 20px 0 0",
              width: "100%",
            }}
          />
        </div>
        <div className="card-text-area d-flex flex-wrap">
          <div className="m-auto" style={{ width: "25%" }}>
            <img src={logo} alt={title} style={{ width: "100%" }} />
          </div>
          <div style={{ width: "75%", padding: "0.5rem" }}>
            <div className="winner-title">{title}</div>
            <div className="d-flex flex-wrap">
              {teamlist.map((player) => (
                <div className="d-flex">
                  <div>
                    <GoDotFill />
                  </div>
                  <div style={{ marginTop: "1px", marginRight: "2px" }}>
                    {player}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
