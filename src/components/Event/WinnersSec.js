import React from "react";
import Winners from "../Cards/Winners";

const WinnersSec = ({ winners_data, runnersup_data, winner_description }) => {
  return (
    <div>
      {winners_data === null ? (
        <></>
      ) : (
        <div>
          <div
            style={{
              color: "white",
              fontSize: "18",
              width: "60%",
              margin: "4rem auto 1rem auto",
              textAlign: "center",
            }}
            className="intro p-2"
          >
            {winner_description}
          </div>
          <div
            className="winner-card-sec d-flex flex-wrap m-auto"
            style={{ width: "85%" }}
          >
            <div className="winner-team-card p-1" style={{ width: "50%" }}>
              <Winners
                title={winners_data.team}
                logo={winners_data.logo}
                image={winners_data.image}
                teamlist={winners_data.players}
                win={true}
              />
            </div>
            <div className="winner-team-card p-2" style={{ width: "50%" }}>
              <Winners
                title={runnersup_data.team}
                logo={runnersup_data.logo}
                image={runnersup_data.image}
                teamlist={runnersup_data.players}
                win={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WinnersSec;
