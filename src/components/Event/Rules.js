import React from "react";
import { Link } from "react-router-dom";
import "../Play/play.css";

const Rules = ({ status, format }) => {
  return (
    <>
      {status === "current" ? (
        <div
          className="mob-full-w-no-p players-section d-flex flex-wrap"
          style={{
            width: "85%",
          }}
        >
          <div
            className="rules mob-full-w-no-p p-4 my-auto"
            style={{
              width: "62.6%",
              background: `linear-gradient(to right, #555252, #a7a3a3)`,
              height: "44.6vw",
            }}
          >
            <div
              style={{
                maxHeight: "91.5%",
                overflowY: "auto",
                border: "1px solid white",
                padding: "1rem",
              }}
            >
              <div className="rules-title title mt-0">
                Rules of Qualiification
              </div>
              <div
                className=""
                style={{
                  fontSize: "20px",
                  fontWeight: "300",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                <div>{"-> 6 games will be played per group."}</div>
                <div>
                  {
                    "-> During the group stage, a win is 3 points, a draw is 1 point and a loss is 0 point. No point system in knockouts."
                  }
                </div>
                <div>
                  {
                    "-> For ranking teams during the group stage, points will be considered, followed by head-to-head score, goal difference and goals scored."
                  }
                </div>
                <div>
                  {
                    "-> In case of a draw at the group stage ranking or a knockout match, penalty shootouts will take place."
                  }
                </div>
                <div>
                  {
                    "-> A penalty shootout will consist of 5 penalty kicks (each team). In case of no result, it will be followed by a sudden death of 5 penalty kicks and a coin toss to determine the winner."
                  }
                </div>
              </div>
              <div className="rules-title title mt-3">
                Team and Substitution
              </div>
              <div
                className=""
                style={{
                  fontSize: "20px",
                  fontWeight: "300",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                <div>
                  {
                    "-> Each team will have 7 players, including 1 GK, on the field."
                  }
                </div>
                <div>
                  {
                    "-> A minimum of 5 players are needed to start/continue a match. If any team fails to adhere to this, the win will be awarded to the opponent team."
                  }
                </div>
                <div>
                  {
                    "-> At any point of time if more than 7 players are on the field while the game is in play, the opponent team will be awarded a penalty."
                  }
                </div>
                <div>
                  {
                    "-> Each team will have 2 rolling subs who must have at least 3 minutes of game time in each match."
                  }
                </div>
                <div>
                  {
                    "-> The substitution must take place when the ball is not in play and the point of entry for the substitute player must be as the exiting player."
                  }
                </div>
              </div>
              <div className="rules-title title mt-3">
                General Rules and Code of Conduct
              </div>
              <div
                className=""
                style={{
                  fontSize: "20px",
                  fontWeight: "300",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                <div>
                  {
                    "-> All decisions by the referee are final. Aggressiveness with the referee can lead to a show of cards as well."
                  }
                </div>
                <div>
                  {
                    "-> Any illegal moves, studs-up challendes and  double footed slides will be dealt with strictly by the referee."
                  }
                </div>
                <div>
                  {
                    "-> A red or double yellow card would lead to the dismissal of the player for the rest of the match."
                  }
                </div>
                <div>
                  {
                    "-> Any misbehavior and use of foul language will lead to a match ban."
                  }
                </div>
                <div>
                  {
                    "-> Penalty kicks will be one-step penalties where one foot shall remain on the ground at all times while shooting."
                  }
                </div>
              </div>
            </div>
            <div style={{ fontSize: "22px" }} className="mt-3">
              <Link
                to="/contact-us"
                style={{ color: "cyan" }}
                className="fw-bold"
              >
                {"Contact us"}
              </Link>
              {" to learn more."}
            </div>
          </div>
          <div
            className="mob-full-w-no-p mx-auto"
            style={{ width: "37.4%", justifySelf: "flex-end" }}
          >
            <img src={format} alt="something" width="100%" className="m-auto" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Rules;
