import React from "react";
import { Link } from "react-router-dom";

const Partners = ({ sponsors }) => {
  let c = 100 / Math.ceil(sponsors.length / 2);
  if (c < 20) c = 20;
  const w = `${c}%`;
  return (
    <div
      className="m-auto"
      id="partners"
      style={sponsors.length > 0 ? { width: "85%" } : { display: "none" }}
    >
      <div className="title" style={{ fontWeight: "900" }}>
        OFFICIAL PARTNERS
      </div>
      <div className="d-flex flex-wrap" style={{ justifyContent: "center" }}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className="logos" style={{ width: w }}>
            {sponsor.link !== "" ? (
              <Link
                to={sponsor.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <img src={sponsor.logo} alt={sponsor.title} width="100%" />
              </Link>
            ) : (
              <img src={sponsor.logo} alt={sponsor.title} width="100%" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
