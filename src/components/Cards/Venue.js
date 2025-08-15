// import React from "react";
import "./venue.css";
import Location from "../../assets/icons/location.png";

const Venue = ({ image, name, location, review }) => {
  return (
    <div>
      <div className="venue-card">
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
        <div className="venue-name">{name}</div>
        <img
          src={Location}
          alt="location"
          style={{ marginLeft: "auto", marginRight: "auto", height: "24px" }}
        />
        <div className="venue-location">{location}</div>
      </div>
    </div>
  );
};

export default Venue;
