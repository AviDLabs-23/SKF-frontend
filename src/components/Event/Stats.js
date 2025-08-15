import React from "react";
import "../Home/home.css";
import Img2 from "../../assets/icons/players.png";
import Img3 from "../../assets/icons/goals.png";
import Img1 from "../../assets/icons/attendees.png";
import Img4 from "../../assets/icons/matches.png";

const Stats = ({ expected_attendees, attendees, players, goals, matches }) => {
  let w = "23%";
  if (attendees === 0) {
    w = "25%";
  }
  return (
    <div
      className="stats-section"
      style={expected_attendees === 0 ? { display: "none" } : {}}
    >
      <div
        className=" d-flex flex-wrap"
        style={{ justifyContent: "space-between" }}
      >
        <div
          className="mob-full-w p-4"
          style={
            attendees > 0
              ? {
                  width: "29%",
                  textAlign: "center",
                  backgroundImage: `url(${Img1})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }
              : {
                  width: "40%",
                  textAlign: "center",
                  backgroundImage: `url(${Img1})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }
          }
        >
          <div className="" style={{ fontSize: "120px", fontWeight: "900" }}>
            {attendees > 0 ? attendees : expected_attendees}
            <span style={{ color: "red" }}>+</span>
          </div>
          <div
            className=""
            style={{ fontSize: "30px", color: "red", fontWeight: "900" }}
          >
            {attendees > 0 ? <>ATTENDEES</> : <>EXPECTED ATTENDEES</>}
          </div>
        </div>
        <div
          className="mob-full-w p-4"
          style={{
            width: w,
            textAlign: "center",
            backgroundImage: `url(${Img2})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="" style={{ fontSize: "120px", fontWeight: "900" }}>
            {players}
          </div>
          <div
            className=""
            style={{ fontSize: "30px", color: "red", fontWeight: "900" }}
          >
            PLAYERS
          </div>
        </div>
        <div
          className="mob-full-w p-4"
          style={
            goals > 0
              ? {
                  width: "25%",
                  textAlign: "center",
                  backgroundImage: `url(${Img3})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }
              : { display: "none" }
          }
        >
          <div className="" style={{ fontSize: "120px", fontWeight: "900" }}>
            {goals}
          </div>
          <div
            className=""
            style={{ fontSize: "30px", color: "red", fontWeight: "900" }}
          >
            GOALS & ASSISTS
          </div>
        </div>
        <div
          className="mob-full-w p-4"
          style={{
            width: w,
            textAlign: "center",
            backgroundImage: `url(${Img4})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="" style={{ fontSize: "120px", fontWeight: "900" }}>
            {matches}
          </div>
          <div
            className=""
            style={{ fontSize: "30px", color: "red", fontWeight: "900" }}
          >
            MATCHES
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
