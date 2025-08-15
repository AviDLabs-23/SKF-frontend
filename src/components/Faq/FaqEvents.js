import React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

const Faq = () => {
  return (
    <div className="faq-section d-flex flex-wrap">
      <div className="mob-full-w p-4" style={{ width: "50%" }}>
        <div
          className="big-text"
          style={{ fontSize: "50px", fontWeight: "600" }}
        >
          ANY QUESTIONS?
        </div>
        <div
          className="big-text"
          style={{ fontSize: "50px", fontWeight: "600" }}
        >
          WE GOT YOU.
        </div>
        <div className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facilis!
        </div>
        <div className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facilis!
        </div>
        <Link
          to="/contact-us"
          style={{ textDecoration: "none", color: "cyan" }}
          className="fw-bold"
        >
          {"CONTACT US"}
        </Link>
        {" to learn more ->"}
      </div>
      <div className="mob-full-w p-4" style={{ width: "50%" }}>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item accordion-flush">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                How does the community work?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div>
                  South Kolkata Football is a social platform every football
                  lover needs. We connect players with local football games of
                  all shapes and sizes at a click of a button!
                </div>
                <p></p>
                <div>
                  Visit the{" "}
                  <Link
                    to="/play"
                    className="fw-bold"
                    style={{ color: "cyan", textDecoration: "none" }}
                  >
                    PLAY
                  </Link>{" "}
                  section of the website, search games by location or date. Find
                  the game that suits you, book your spot online to secure your
                  spot and play football!
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{ background: "black !important" }}
          >
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                How can I join a game?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                If you found a game that you want to join, simple click the
                'Join game' button. Once the request is approved by the host,
                you are good to go.{" "}
                <Link
                  to="/sign-up"
                  className="fw-bold"
                  style={{ color: "cyan", textDecoration: "none" }}
                >
                  SIGN UP
                </Link>{" "}
                to find a game near you.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Can anybody create a new game?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Yes - you can help build the South Kolkata Football community!{" "}
                <Link
                  to="/sign-up"
                  className="fw-bold"
                  style={{ color: "cyan", textDecoration: "none" }}
                >
                  SIGN UP
                </Link>{" "}
                and host games.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
