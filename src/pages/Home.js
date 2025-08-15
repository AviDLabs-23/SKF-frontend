// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import Landing from "../components/Home/Landing";
import Faq from "../components/Faq/FaqHome";
import Reviews from "../components/Home/Reviews";
import Venues from "../components/Home/Venues";
import Blogs from "../components/Home/Blogs";
import Tekkers from "../components/Home/Tekkers";
import Quick from "../components/Home/Quick";
import Partners from "../components/Partners";
import Stats from "../components/Home/Stats";

import {
  Redbull,
  Decathlon,
  HotelRiva,
  AlexaHealth,
  Petuk,
  JerseyStore11Kolkata,
  TurfXL,
} from "../components/SampleData/PartnersData";

const Home = () => {
  const PrimaryPartners = [
    Redbull,
    Decathlon,
    HotelRiva,
    AlexaHealth,
    Petuk,
    JerseyStore11Kolkata,
    TurfXL,
  ];

  return (
    <div className="main">
      <Layout
        title="Home"
        description="Home page for the website"
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
          WELCOME TO
        </div>
        <div
          style={{
            color: "white",
            fontSize: "50px",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          SOUTH KOLKATA FOOTBALL
        </div>
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
        <Venues />
        <Quick />
        <Tekkers />
        <Partners sponsors={PrimaryPartners} />
        <Blogs title="BLOGS AND NEWS" subtitle="Keep Up With All The Updates" />
        <Stats />
        <Reviews />
        <Faq />
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
