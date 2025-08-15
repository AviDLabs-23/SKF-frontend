import React from "react";
import "./blog.css";

const Landing = ({ name, subtitle, image }) => {
  return (
    <div className="blog-landing" style={{ backgroundImage: `url(${image})` }}>
      <div>
        <div className="big-text landing-text" style={{ textAlign: "center" }}>
          {name}
        </div>
        <div className="subtext mt-2" style={{ textAlign: "center" }}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default Landing;
