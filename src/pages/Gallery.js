// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import GallerySec1 from "../components/Gallery/GallerySec1";
import Landing from "../components/Gallery/Landing";

const Gallery = () => {
  return (
    <div className="main">
      <Layout
        title="Gallery"
        description="Gallery page for the website"
        keywords="south, kolkata, football, soccer, turf, play, images"
      >
        <Landing />
        <div style={{ width: "85%" }} className="mx-auto mt-4">
          <GallerySec1 />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Gallery;
