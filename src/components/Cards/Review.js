import React from "react";
import "./review.css";
import Location from "../../assets/icons/location.png";

const Review = ({ image, name, location, review }) => {
  return (
    <div>
      <div className="review-card">
        <div className="review-name">{name}</div>
        <img
          src={Location}
          alt="location"
          style={{ marginLeft: "auto", marginRight: "auto", height: "24px" }}
        />
        <div className="review-location">{location}</div>
        <div
          style={{
            width: "50%",
            margin: "0.5rem auto 0 auto",
            borderTop: "2px solid black",
          }}
        ></div>
        <div className="review-text">
          {'"'}
          {review} {'"'}
        </div>
      </div>
    </div>
  );
};

export default Review;
