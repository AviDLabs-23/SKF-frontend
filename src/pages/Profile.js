import React from "react";

import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegShareSquare } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

import "./styles.css";

import Footer from "../components/Layout/Footer/Footer";
import Layout from "../components/Layout/Layout";
import user from "../components/SampleData/UserData";
import {
  positionsInactive,
  positionsActive,
} from "../components/SampleData/Positions";
import { AllAchievements } from "../components/SampleData/AchievementsData";
import reviews from "../components/SampleData/ReviewData";

const Profile = () => {
  const { username } = useParams();
  const loginUsername = "AviD78";
  // GET API call with username filter

  return (
    <div className="main">
      <Layout
        title={`Profile - ${username}`}
        description="Profile page for the user"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <div
          className="mx-auto mob-full-w"
          style={{ width: "85%", minHeight: "87.5vh" }}
        >
          <div className="d-flex flex-wrap">
            <div className="mx-auto mob-full-w mt-4" style={{ width: "25%" }}>
              <div className="mx-auto" style={{ width: "65%" }}>
                <img
                  src={user.picture}
                  alt={user.name}
                  width="100%"
                  style={{ borderRadius: "50%", border: "5px solid white" }}
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  color: "white",
                  fontWeight: "700",
                  marginTop: "1rem",
                }}
              >
                {user.username}
              </div>
              {username === loginUsername &&
              reviews.find((review) => review.username === username).review ===
                "" ? (
                <div
                  className="mob-full-w mx-auto mt-2"
                  style={{ width: "80%" }}
                >
                  <textArea
                    className="bg-dark p-1"
                    type="text"
                    placeholder="&#x2605; Give us a review..."
                    style={{
                      background: "",
                      width: "100%",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              ) : (
                <div
                  className="mt-4"
                  style={{ color: "white", textAlign: "center" }}
                >
                  &#x275D;
                  {
                    reviews.find((review) => review.username === username)
                      .review
                  }
                  &#x275E;
                </div>
              )}
            </div>
            <div className="mx-auto mob-full-w m-2" style={{ width: "45%" }}>
              <div
                className="d-flex flex-wrap"
                style={{
                  margin: "1rem 1rem 0 1rem",
                  textAlign: "left",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                <div style={{ width: "" }}>{user.name}</div>
                <div className="d-flex" style={{ marginLeft: "auto" }}>
                  <CopyToClipboard text="www.google.com">
                    <Link>
                      <FaRegShareSquare
                        style={{ color: "yellow" }}
                        onClick={() =>
                          toast.success("Link copied!", {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          })
                        }
                      />
                      <ToastContainer />
                    </Link>
                  </CopyToClipboard>
                  <Link to="/profile/edit">
                    <FaUserEdit
                      style={
                        loginUsername === username
                          ? { marginLeft: "16px", color: "cyan" }
                          : { display: "none" }
                      }
                    />
                  </Link>
                </div>
              </div>
              <div className="d-flex">
                <div
                  style={
                    user.age.display === true
                      ? {
                          textAlign: "center",
                          fontSize: "22px",
                          color: "white",
                          fontWeight: "600",
                          marginLeft: "1rem",
                          marginRight: "10px",
                        }
                      : { marginLeft: "1rem" }
                  }
                >
                  {user.age.display ? `${user.age.years} |` : ""}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "22px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  {user.location.display ? user.location.area : ""}
                </div>
              </div>
              <div
                className="subtext"
                style={{ fontSize: "20px", margin: "1rem", color: "white" }}
              >
                {user.bio}
              </div>
              <div className="d-flex">
                <div
                  className="btn btn-dark m-1 p-2"
                  style={
                    user.link.title !== "" && user.link.title !== ""
                      ? { width: "31.5%" }
                      : { display: "none" }
                  }
                >
                  <Link
                    style={{ color: "white" }}
                    to={user.link.url}
                    target="_blank"
                  >
                    {user.link.title}
                  </Link>
                </div>
                <div
                  className="btn btn-dark m-1 p-2"
                  style={
                    user.phone.display
                      ? { width: "31.5%" }
                      : { display: "none" }
                  }
                >
                  <a href={`tel:${user.phone.number}`} className="text-white">
                    Phone
                  </a>
                </div>
                <div
                  className="btn btn-dark m-1 p-2"
                  style={
                    user.email.display
                      ? { width: "31.5%" }
                      : { display: "none" }
                  }
                >
                  <a href={`mailto:${user.email.url}`} className="text-white">
                    Email
                  </a>
                </div>
              </div>
              <div>
                <div
                  className="text-white fw-bold mt-4"
                  style={{ textAlign: "center" }}
                >
                  ACHIEVEMENTS
                </div>
                <div
                  className="d-flex flex-wrap"
                  style={{ justifyContent: "center" }}
                >
                  {user.achievements.map((pos, index) => (
                    <div
                      key={index}
                      className="achievement-card"
                      style={
                        user.achievements.length < 4
                          ? { width: "33.33%" }
                          : { width: "25%" }
                      }
                    >
                      <img src={pos.badge} alt={pos.title} width="100%" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="mx-auto mob-full-w mt-4"
              style={{ width: "21%", justifyContent: "center" }}
            >
              <div
                className="text-white fw-bold"
                style={{ textAlign: "center" }}
              >
                PLAYING POSITIONS
              </div>
              <div
                className="d-flex flex-wrap"
                style={{ justifyContent: "center" }}
              >
                {user.positions.map((pos, index) => (
                  <div key={index} style={{ width: "33.33%" }}>
                    <img
                      src={
                        pos ? positionsActive[index] : positionsInactive[index]
                      }
                      alt="position"
                      width="100%"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>
          {` 
                    ::placeholder { 
                        color: white; 
                    }`}
        </style>
      </Layout>
      <Footer />
    </div>
  );
};

export default Profile;
