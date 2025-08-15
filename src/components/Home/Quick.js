import React from "react";
import Find from "../../assets/find.png";
import Join from "../../assets/join.png";
import Play2 from "../../assets/play.png";
import Play from "../Cards/Play";
import "./home.css";

const Quick = () => {
  return (
    <div
      style={{
        width: "85%",
        marginTop: "4rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        className=""
        style={{
          fontSize: "50px",
          fontWeight: "900",
          textAlign: "center",
          color: "white",
        }}
      >
        <span style={{ opacity: "70%" }}>FIND.</span>{" "}
        <span style={{ opacity: "85%" }}>JOIN.</span> <span>PLAY.</span>
      </div>
      <div className="quick-cards d-flex m-auto">
        <Play text="FIND YOUR NEAREST FOOTBALL PITCH." image={Find} />
        <Play text="JOIN YOUR NEXT GAME WITH A FEW CLICKS." image={Join} />
        <Play text="PLAY FOOTBALL. HAVE FUN. FEEL GOOD." image={Play2} />
      </div>
    </div>
  );
};

export default Quick;
