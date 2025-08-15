import React from "react";

const PointsTable = ({ team_stats }) => {
  return (
    <>
      {team_stats === null ? (
        <></>
      ) : (
        <div
          className="mob-full-w mx-auto d-flex flex-wrap"
          style={{
            width: "85%",
            color: "white",
            background: `linear-gradient(to right, #555252, #a7a3a3)`,
            marginTop: "4rem",
          }}
        >
          <div
            className="big-text"
            style={{
              fontSize: "75px",
              fontWeight: "900",
              textAlign: "center",
              width: "100%",
            }}
          >
            SCOREBOARD
          </div>
          <div className="mt-4" style={{ width: "100%", textAlign: "center" }}>
            <span className="fw-bold" style={{ fontSize: "30px" }}>
              FINALS
            </span>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <div
                className="d-flex"
                style={{
                  width: "48%",
                  marginRight: "auto",
                  justifyContent: "right",
                }}
              >
                <div className="p-2 my-auto">{team_stats.final.team1}</div>
                <img
                  src={team_stats.final.logo1}
                  alt={""}
                  width="5%"
                  className="mob-hide mx-1 my-auto"
                  height="auto"
                />
              </div>
              <div className="p-2 my-auto">|</div>
              <div className="p-2 my-auto">{team_stats.final.score1}</div>
              <div className="p-2 my-auto">-</div>
              <div className="p-2 my-auto">{team_stats.final.score2}</div>
              <div className="p-2 my-auto">|</div>
              <div
                className="d-flex"
                style={{ width: "48%", marginLeft: "auto" }}
              >
                <img
                  src={team_stats.final.logo2}
                  alt={""}
                  width="5%"
                  className="mob-hide mx-1 my-auto"
                  height="auto"
                />
                <div className="p-2 my-auto">{team_stats.final.team2}</div>
              </div>
            </div>
          </div>

          <div className="mt-4" style={{ width: "100%", textAlign: "center" }}>
            <span className="fw-bold fs-lg" style={{ fontSize: "30px" }}>
              SEMI FINALS
            </span>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <div
                className="d-flex"
                style={{
                  width: "48%",
                  marginRight: "auto",
                  justifyContent: "right",
                }}
              >
                <div className="p-2 my-auto">{team_stats.semi[0].team1}</div>
                <img
                  src={team_stats.semi[0].logo1}
                  alt={""}
                  width="5%"
                  className="mob-hide mx-1 my-auto"
                  height="auto"
                />
              </div>
              <div className="p-2 my-auto">|</div>
              <div className="p-2 my-auto">{team_stats.semi[0].score1}</div>
              <div className="p-2 my-auto">-</div>

              <div className="p-2 my-auto">{team_stats.semi[0].score2}</div>
              <div className="p-2 my-auto">|</div>
              <div
                className="d-flex"
                style={{ width: "48%", marginLeft: "auto" }}
              >
                <img
                  src={team_stats.semi[0].logo2}
                  alt={""}
                  width="5%"
                  className="mob-hide mx-1 my-auto"
                  height="auto"
                />
                <div className="p-2 my-auto">{team_stats.semi[0].team2}</div>
              </div>
            </div>
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <div
                className="d-flex"
                style={{
                  width: "48%",
                  marginRight: "auto",
                  justifyContent: "right",
                }}
              >
                <div className="p-2 my-auto">{team_stats.semi[1].team1}</div>
                <img
                  src={team_stats.semi[1].logo1}
                  alt={""}
                  width="5%"
                  className="mob-hide mx-1 my-auto"
                  height="auto"
                />
              </div>
              <div className="p-2 my-auto">|</div>
              <div className="p-2 my-auto">{team_stats.semi[1].score1}</div>
              <div className="p-2 my-auto">-</div>
              <div className="p-2 my-auto">{team_stats.semi[1].score2}</div>
              <div className="p-2 my-auto">|</div>
              <div
                className="d-flex"
                style={{ width: "48%", marginLeft: "auto" }}
              >
                <img
                  src={team_stats.semi[1].logo2}
                  alt={""}
                  width="5%"
                  className="mob-hide mx-1 my-auto"
                  height="auto"
                />
                <div className="p-2 my-auto">{team_stats.semi[1].team2}</div>
              </div>
            </div>
          </div>
          <div className="mt-4" style={{ width: "100%", textAlign: "center" }}>
            <span className="fw-bold" style={{ fontSize: "30px" }}>
              GROUP STANDING
            </span>
          </div>
          <div className="d-flex flex-wrap">
            <div className="pts-mob p-3" style={{ width: "50%" }}>
              <div style={{ textAlign: "center" }}>GROUP A</div>
              <table className="mt-3" style={{ width: "100%" }}>
                <tr>
                  <th style={{ maxWidth: "46%" }}>Team</th>
                  <th style={{ width: "9%", textAlign: "center" }}>P</th>
                  <th style={{ width: "9%", textAlign: "center" }}>W</th>
                  <th style={{ width: "9%", textAlign: "center" }}>L</th>
                  <th style={{ width: "9%", textAlign: "center" }}>D</th>
                  <th style={{ width: "9%", textAlign: "center" }}>GD</th>
                  <th style={{ width: "9%", textAlign: "center" }}>Pts</th>
                </tr>
                {team_stats.A.map((team) => (
                  <tr className="" style={{ borderTop: "1px solid white" }}>
                    <td className="my-auto d-flex">
                      <img
                        src={team.logo}
                        alt={team.teamName}
                        width="10%"
                        className="mob-hide mx-1 my-auto"
                        height="10%"
                      />
                      <span className="my-auto">{team.teamName}</span>
                    </td>
                    {team.stats.map((stat) => (
                      <td className="my-auto" style={{ textAlign: "center" }}>
                        {stat}
                      </td>
                    ))}
                  </tr>
                ))}
              </table>
            </div>
            <div className="pts-mob p-3" style={{ width: "50%" }}>
              <div style={{ textAlign: "center" }}>GROUP B</div>
              <table className="mt-3" style={{ width: "100%" }}>
                <tr>
                  <th style={{ maxWidth: "46%" }}>Team</th>
                  <th style={{ width: "9%", textAlign: "center" }}>P</th>
                  <th style={{ width: "9%", textAlign: "center" }}>W</th>
                  <th style={{ width: "9%", textAlign: "center" }}>L</th>
                  <th style={{ width: "9%", textAlign: "center" }}>D</th>
                  <th style={{ width: "9%", textAlign: "center" }}>GD</th>
                  <th style={{ width: "9%", textAlign: "center" }}>Pts</th>
                </tr>
                {team_stats.B.map((team) => (
                  <tr style={{ borderTop: "1px solid white" }}>
                    <td className="my-auto d-flex">
                      <img
                        src={team.logo}
                        alt={team.teamName}
                        width="10%"
                        className="mob-hide mx-1 my-auto"
                        height="10%"
                      />
                      <span className="my-auto">{team.teamName}</span>
                    </td>
                    {team.stats.map((stat) => (
                      <td style={{ textAlign: "center" }}>{stat}</td>
                    ))}
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PointsTable;
