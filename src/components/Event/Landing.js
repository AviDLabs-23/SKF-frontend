import React from "react";
import Tsoon from "../../assets/background/tsoon-landing.png";
import "./event.css";
const Landing = ({ image }) => {
  return (
    <div
      className="event-landing"
      style={
        image !== null
          ? {
              backgroundImage: `url(${image})`,
            }
          : { backgroundImage: `url(${Tsoon})`, height: "87.5vh" }
      }
    ></div>
  );
};

export default Landing;
