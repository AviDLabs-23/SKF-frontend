// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import Landing from "../components/Blogs/Landing";
import Editors from "../components/Blogs/Editors";
import LatestBlogs from "../components/Home/Blogs";

const Blogs = () => {
  return (
    <div className="main">
      <Layout
        title="Blogs and News"
        description="About page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <Landing />
        <Editors />
        <LatestBlogs title="Latest Blogs" />
      </Layout>
      <Footer />
    </div>
  );
};

export default Blogs;
