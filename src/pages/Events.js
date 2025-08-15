// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import EventsSec from "../components/Events/EventsSec";
import Partners from "./../components/Partners";
import Tekkers from "./../components/Home/Tekkers";
import Partnership from "./../components/Events/Partnership";
import Faq from "../components/Faq/FaqEvents";
import Landing from "../components/Events/Landing";

import {
  Redbull,
  Decathlon,
  HotelRiva,
  AlexaHealth,
  Petuk,
  JerseyStore11Kolkata,
  TurfXL,
} from "../components/SampleData/PartnersData";

const Events = () => {
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
        title="Events"
        description="About page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <Landing />
        <Tekkers />
        <EventsSec />
        <Partners sponsors={PrimaryPartners} />
        <Partnership />
        <Faq />
      </Layout>
      <Footer />
    </div>
  );
};

export default Events;
