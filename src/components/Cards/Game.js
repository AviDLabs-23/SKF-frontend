import React from "react";
import "./game.css";
import Location from "../../assets/icons/location.png";

const Game = ({ image, name, location, day, date, time }) => {
  return (
    <div>
      <div className="game-card">
        <div>
          <img
            src={image}
            alt={`turf ${name}`}
            style={{
              borderRadius: "20px 20px 0 0",
              width: "100%",
            }}
          />
        </div>
        <div className="game-name">
          {name}
          {", "}
          {location}
        </div>
        <div className="game-location">{`Date: ${date} (${day})`}</div>
        <div className="game-location">{`Time: ${time}`}</div>
        <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
          <div
            className="game-location btn btn-success btn-block"
            style={{ fontSize: "20px", borderRadius: "5px 5px 15px 15px" }}
          >
            JOIN GAME
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
