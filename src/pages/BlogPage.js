import React from "react";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import { Link, useSearchParams } from "react-router-dom";
import blogs from "../components/SampleData/BlogData";
import Landing from "../components/Blog/Landing";
import LatestBlogs from "../components/Home/Blogs";

import "./styles.css";

// Partners
import {
  Redbull,
  Decathlon,
  HotelRiva,
  Petuk,
  AlexaHealth,
  TurfXL,
  JerseyStore11Kolkata,
} from "../components/SampleData/PartnersData";

const BlogPage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  let data = {};

  for (var i = 0; i < blogs.length; i++) {
    if (title === blogs[i].link) {
      data = blogs[i];
      break;
    }
  }

  // Sponsored Ad
  let ads = [
    Decathlon,
    Redbull,
    HotelRiva,
    Petuk,
    AlexaHealth,
    TurfXL,
    JerseyStore11Kolkata,
  ];
  let index = Math.floor(Math.random() * ads.length);
  let ad1 = ads[index];
  ads.splice(index, 1);
  let ad2 = ads[Math.floor(Math.random() * ads.length)];

  return (
    <div className="main">
      <Layout
        title={data.name}
        description="About page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <div
          className="mob-display mob-full-w-no-p my-auto"
          style={{ display: "none", width: "100%" }}
        >
          <img src={ad1.banner_wide} alt="relevant visual" width="100%" />
        </div>
        <Landing
          name={data.name}
          subtitle={data.subtitle}
          image={data.image2}
        />
        <div
          className="d-flex flex-wrap"
          style={{
            borderBottom: "2px solid grey",
          }}
        >
          <div
            className="mob-hide"
            style={{
              width: "8.9%",
              height: "100vh",
              backgroundImage: `url(${ad1.banner_long})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: ad1.background,
            }}
          />
          <div
            className="mob-full-w-no-p d-flex flex-wrap"
            style={{ width: "82.2%" }}
          >
            <div
              className="blog-mob-text mx-auto mob-full-w text-white"
              style={{
                height: "100vh",
                width: "80%",
                overflowY: "auto",
                padding: "0 2rem 0 2rem",
                borderLeft: "5px solid grey",
              }}
            >
              <div className="title">{data.name}</div>
              {data.content.map((para) => (
                <div className="d-flex flex-wrap mt-4">
                  <div
                    className="mob-full-w my-auto"
                    style={
                      para.image === ""
                        ? {
                            width: "100%",
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }
                        : {
                            width: "85%",
                            textAlign: "justify",
                            textJustify: "inter-word",
                            paddingRight: "1rem",
                          }
                    }
                  >
                    {para.text}
                  </div>
                  <div className="mob-full-w my-auto" style={{ width: "15%" }}>
                    <img
                      src={para.image}
                      alt="relevant visual"
                      width="100%"
                      style={para.image === "" ? { display: "none" } : {}}
                    />
                  </div>
                </div>
              ))}
              <div className="fw-bold mt-4">{`Author: ${data.author}`}</div>
              <div className="fw-bold">{`Date: ${data.date}`}</div>
              <div className="fw-bold mt-4">Related Links:</div>
              {data.related_links.map((link) => (
                <div className="mt-0 mb-4">
                  <Link to={link.url}>{link.title}</Link>
                </div>
              ))}
            </div>
          </div>
          <div
            className="mob-hide"
            style={{
              width: "8.9%",
              height: "100vh",
              backgroundImage: `url(${ad2.banner_long})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: ad2.background,
            }}
          />
        </div>
        <div
          className="mob-display mob-full-w-no-p my-auto"
          style={{ display: "none", width: "100%" }}
        >
          <img src={ad2.banner_wide} alt="relevant visual" width="100%" />
        </div>
        <LatestBlogs title="Latest Blogs" />
        <div
          className="mob-full-w mt-4 pt-4 mx-auto"
          style={{ width: "50%", textAlign: "center", fontSize: "28px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat vel
          ex corporis! Cupiditate est, error architecto nostrum voluptas non
          impedit.
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default BlogPage;
