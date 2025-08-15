// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";

import Quick from "../components/Home/Quick";
import ForPlayers from "../components/Play/ForPlayers";
import Games from "../components/Play/Games";
import ForOrganizers from "../components/Play/ForOrganizers";
import Landing from "../components/Play/Landing";
import Faq from "../components/Faq/FaqPlay";

const Play = () => {
  return (
    <div className="main">
      <Layout
        title="Play"
        description="About page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <Landing />
        <Quick />
        <ForPlayers />
        <Games />
        <ForOrganizers />
        <Faq />
      </Layout>
      <Footer />
    </div>
  );
};

export default Play;
