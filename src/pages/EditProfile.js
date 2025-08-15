import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import user from "../components/SampleData/UserData";
import {
  positionsInactive,
  positionsActive,
} from "../components/SampleData/Positions";

const EditProfile = () => {
  // Image settings
  const [imgBtnToggle, setImgBtnToggle] = useState(false);
  const [image, setImage] = useState(user.picture);
  const handleImageChange = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  // Password settings
  const [pwdUpdateBtnToggle, setPwdUpdateBtnToggle] = useState(false);

  // Positions settings
  const [lw, setLw] = useState(user.positions[0]);
  const [cf, setCf] = useState(user.positions[1]);
  const [rw, setRw] = useState(user.positions[2]);
  const [lm, setLm] = useState(user.positions[3]);
  const [cm, setCm] = useState(user.positions[4]);
  const [rm, setRm] = useState(user.positions[5]);
  const [lb, setLb] = useState(user.positions[6]);
  const [cb, setCb] = useState(user.positions[7]);
  const [rb, setRb] = useState(user.positions[8]);
  const [gk, setGk] = useState(user.positions[9]);

  // Personal Details settings
  const [linkTitle, setLinkTitle] = useState(user.link.title);
  const [linkUrl, setLinkUrl] = useState(user.link.url);

  return (
    <div className="main">
      <Layout
        title={`Edit Profile`}
        description="Edit profile page for the user"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <div
          className="d-flex flex-wrap mx-auto mt-2"
          style={{ width: "85%", minHeight: "80vh" }}
        >
          <div className="mob-full-w p-2 " style={{ width: "25%" }}>
            <div
              className="subtitle bg-dark mt-2"
              style={{ borderRadius: "5px", fontWeight: "300" }}
            >
              Settings
            </div>

            <div className="mob-full-w mt-4">
              <div className="mob-full-w mt-4 fw-bold">
                What are your playing positions?
              </div>
              <div
                className="d-flex flex-wrap "
                style={{ justifyContent: "center" }}
              >
                <div
                  className="pointer"
                  style={{ width: "33.33%" }}
                  onClick={() => {
                    setLw(!lw);
                  }}
                >
                  <img
                    src={lw ? positionsActive[0] : positionsInactive[0]}
                    alt="position"
                    width="100%"
                  />
                </div>
                <div
                  className="pointer"
                  style={{ width: "33.33%" }}
                  onClick={() => {
                    setCf(!cf);
                  }}
                >
                  <img
                    src={cf ? positionsActive[1] : positionsInactive[1]}
                    alt="position"
                    width="100%"
                  />
                </div>
                <div
                  className="pointer"
                  style={{ width: "33.33%" }}
                  onClick={() => {
                    setRw(!rw);
                  }}
                >
                  <img
                    src={rw ? positionsActive[2] : positionsInactive[2]}
                    alt="position"
                    width="100%"
                  />
                </div>
                <div
                  className="pointer"
                  style={{ width: "33.33%" }}
                  onClick={() => {
                    setLm(!lm);
                  }}
                >
                  <img
                    src={lm ? positionsActive[3] : positionsInactive[3]}
                    alt="position"
                    width="100%"
                  />
                </div>
                <div
                  className="pointer"
                  style={{ width: "33.33%" }}
                  onClick={() => {
                    setCm(!cm);
                  }}
                >
                  <img
                    src={cm ? positionsActive[4] : positionsInactive[4]}
                    alt="position"
                    width="100%"
                  />
                </div>
                <div
                  className="pointer"
                  style={{ width: "33.33%" }}
                  onClick={() => {
                    setRm(!rm);
                  }}
                >
                  <img
                    src={rm ? positionsActive[5] : positionsInactive[5]}
                    alt="position"
                    width="100%"
                  />
                </div>
                <div
                  className="pointer"
                  style={{ width: "33.33%" }}
                  onClick={() => {
                    setLb(!lb);
                  }}
                >
                  <img
                    src={lb ? positionsActive[6] : positionsInactive[6]}
                    alt="position"
                    width="100%"
                  />
                </div>
                <div
                  className="pointer"
                  style={{ width: "33.33%" }}
                  onClick={() => {
                    setCb(!cb);
                  }}
                >
                  <img
                    src={cb ? positionsActive[7] : positionsInactive[7]}
                    alt="position"
                    width="100%"
                  />
                </div>
                <div
                  className="pointer"
                  style={{ width: "33.33%" }}
                  onClick={() => {
                    setRb(!rb);
                  }}
                >
                  <img
                    src={rb ? positionsActive[8] : positionsInactive[8]}
                    alt="position"
                    width="100%"
                  />
                </div>
                <div
                  className="pointer"
                  style={{ width: "33.33%" }}
                  onClick={() => {
                    setGk(!gk);
                  }}
                >
                  <img
                    src={gk ? positionsActive[9] : positionsInactive[9]}
                    alt="position"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mob-full-w p-2" style={{ width: "50%" }}>
            <div className="mob-full-w-no-p mx-auto" style={{ width: "75%" }}>
              <div
                className="bg-dark d-flex p-2 mt-2"
                style={{
                  borderRadius: "5px",
                }}
              >
                <input
                  type="text"
                  placeholder={`Name: ${user.name}`}
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "grey",
                  }}
                />
              </div>
              <div
                className="bg-dark d-flex p-2 mt-2"
                style={{
                  borderRadius: "5px",
                }}
              >
                <input
                  type="text"
                  placeholder={`Username: ${user.username}`}
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "grey",
                  }}
                />
              </div>
              <div className="d-flex flex-wrap">
                <div
                  className="mob-full-w bg-dark d-flex p-2 mt-2"
                  style={{
                    borderRadius: "5px",
                    width: "40%",
                  }}
                >
                  <input
                    type="number"
                    placeholder={`${user.age}`}
                    style={{
                      width: "75%",
                      borderRadius: "5px",
                      paddingLeft: "8%",
                      background: "grey",
                    }}
                  />
                  <div
                    className="btn btn-sm btn-primary my-auto"
                    style={{ marginLeft: "8px", fontSize: "16px" }}
                  >
                    Show
                  </div>
                </div>
                <div
                  className="mob-full-w bg-dark d-flex p-2 mt-2"
                  style={{
                    borderRadius: "5px",
                    width: "58%",
                    marginLeft: "auto",
                  }}
                >
                  <input
                    type="text"
                    placeholder={`${user.location}`}
                    style={{
                      width: "75%",
                      borderRadius: "5px",
                      padding: "5px",
                      background: "grey",
                      color: "white",
                    }}
                  />
                  <div
                    className="btn btn-sm btn-primary my-auto"
                    style={{ marginLeft: "8px", fontSize: "16px" }}
                  >
                    Show
                  </div>
                </div>
              </div>
              <div
                className="bg-dark d-flex p-2 mt-2"
                style={{
                  borderRadius: "5px",
                }}
              >
                <input
                  type="text"
                  placeholder={`Phone: ${user.phone}`}
                  style={{
                    width: "80%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "grey",
                  }}
                />
                <div
                  className="btn btn-primary btn-sm my-auto"
                  style={{ marginLeft: "8px", fontSize: "16px" }}
                >
                  Show
                </div>
              </div>
              <div
                className="bg-dark d-flex p-2 mt-2"
                style={{
                  borderRadius: "5px",
                }}
              >
                <input
                  type="email"
                  placeholder={`Email: ${user.email}`}
                  style={{
                    width: "80%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "grey",
                  }}
                />
                <div
                  className="btn btn-primary btn-sm my-auto"
                  style={{ marginLeft: "8px", fontSize: "16px" }}
                >
                  Show
                </div>
              </div>
              <div className="d-flex flex-wrap">
                <div
                  className="bg-dark d-flex p-2 mt-2"
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                  }}
                >
                  <input
                    type="text"
                    placeholder={linkTitle === "" ? "Link Title" : linkTitle}
                    style={{
                      width: "25%",
                      borderRadius: "5px 0px 0px 5px",
                      padding: "5px",
                      background: "grey",
                    }}
                  />
                  <input
                    type="text"
                    placeholder={linkUrl === "" ? "Link Url" : linkUrl}
                    style={{
                      width: "70%",
                      borderRadius: "0px 5px 5px 0px",
                      padding: "5px",
                      background: "grey",
                      marginLeft: "0px",
                    }}
                  />
                  <div
                    className="pointer my-auto"
                    style={{ color: "red", marginLeft: "8px" }}
                    onClick={() => {
                      setLinkTitle("");
                      setLinkUrl("");
                    }}
                  >
                    &#x2716;
                  </div>
                </div>
              </div>
              <div
                className="bg-dark d-flex p-2 mt-2"
                style={{
                  borderRadius: "5px",
                }}
              >
                <textarea
                  type="text"
                  placeholder={`Bio: ${user.bio}`}
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "grey",
                  }}
                />
              </div>
              <div className="mob-full-w mx-auto" style={{ width: "40%" }}>
                <div
                  className="btn btn-success mt-2"
                  style={{ fontSize: "16px", width: "100%" }}
                >
                  save details
                </div>
              </div>
            </div>
          </div>
          <div className="mob-full-w p-2" style={{ width: "25%" }}>
            <div className="mx-auto" style={{ width: "65%" }}>
              <img
                src={image}
                alt={user.name}
                width="100%"
                style={{ borderRadius: "50%", border: "5px solid white" }}
              />
            </div>
            <div
              className="btn btn-block btn-dark mt-3 mx-auto"
              onClick={() => {
                setImgBtnToggle(!imgBtnToggle);
                setPwdUpdateBtnToggle(false);
              }}
              style={{ fontSize: "16px" }}
            >
              Update Profile Picture
            </div>
            <div style={imgBtnToggle ? {} : { display: "none" }}>
              <div className="mt-2 d-flex">
                <input
                  type="file"
                  className=""
                  onChange={handleImageChange}
                  style={{ borderRadius: "5px" }}
                />
                <div
                  className="pointer my-auto"
                  style={
                    // setImage !== user.picture?
                    { color: "red", marginLeft: "8px" }
                    // : { color: "grey", marginLeft: "8px" }
                  }
                  onClick={() => {
                    setImage(user.picture);
                  }}
                >
                  &#x2716;
                </div>
              </div>
            </div>
            <div
              className="btn btn-block btn-dark mt-2 mx-auto"
              onClick={() => {
                setPwdUpdateBtnToggle(!pwdUpdateBtnToggle);
                setImgBtnToggle(false);
              }}
              style={{ fontSize: "16px" }}
            >
              Change Password
            </div>
            <div style={pwdUpdateBtnToggle ? {} : { display: "none" }}>
              <div
                className="bg-dark d-flex p-2 mt-2"
                style={{
                  borderRadius: "5px",
                }}
              >
                <input
                  type="password"
                  placeholder="Enter current password"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "grey",
                  }}
                />
              </div>
              <div
                className="bg-dark d-flex p-2 mt-2"
                style={{
                  borderRadius: "5px",
                }}
              >
                <input
                  type="password"
                  placeholder="Enter new password"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "grey",
                  }}
                />
              </div>
              <div
                className="bg-dark d-flex p-2 mt-2"
                style={{
                  borderRadius: "5px",
                }}
              >
                <input
                  type="password"
                  placeholder="Confirm new password"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "grey",
                  }}
                />
              </div>
              <div
                className="btn btn-success btn-block mt-2"
                style={{ fontSize: "16px", width: "100%" }}
              >
                update password
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
export default EditProfile;
