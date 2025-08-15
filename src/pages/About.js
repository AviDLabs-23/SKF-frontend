// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import Landing from "../components/About/Landing";
import Partners from "../components/About/Partners";
import Origin from "../components/About/Origin";
import Simple from "../components/About/Simple";
import Community from "../components/About/Community";
import Timeline from "../components/About/Timeline";
import Faq from "../components/Faq/FaqAbout";

const About = () => {
  return (
    <div className="main">
      <Layout
        title="About"
        description="About page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <Landing />
        <div
          style={{
            color: "white",
            fontSize: "50px",
            fontWeight: "900",
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          WHAT IS FOOTBALL?
        </div>
        <div
          style={{
            color: "white",
            fontSize: "50px",
            fontWeight: "900",
            textAlign: "center",
          }}
        ></div>
        <div
          style={{
            color: "white",
            fontSize: "18",
            width: "69%",
            margin: "0 auto",
            textAlign: "center",
          }}
          className="intro"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          sit eaque. Itaque sapiente exercitationem, minus in asperiores
          recusandae tempora est eos maiores inventore dolor harum vitae iste
          dolorem doloremque, alias iure odit. Numquam distinctio, eos ad dolor
          expedita atque laudantium ipsum? Harum ipsa porro voluptates quasi
          accusantium, pariatur quo eos? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsa eum dolores earum sequi optio expedita
          accusantium officia nisi maiores est?
        </div>
        <Origin />
        <Timeline />
        <Simple />
        <Partners />
        <Community />
        <div
          style={{
            color: "white",
            fontSize: "18",
            width: "50%",
            margin: "4rem auto",
            textAlign: "center",
          }}
          className="intro"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          sit eaque. Itaque sapiente exercitationem, minus in asperiores
          recusandae tempora est eos maiores inventore dolor harum vitae iste
          dolorem doloremque, alias iure odit.
        </div>
        <Faq />
      </Layout>
      <Footer />
    </div>
  );
};

export default About;
