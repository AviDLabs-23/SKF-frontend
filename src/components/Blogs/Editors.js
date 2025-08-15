import React from "react";
import blogs from "./../SampleData/BlogData";
import Slider from "react-slick";
import BlogBig from "../Cards/BlogBig";
import "./blogs.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Editors = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="m-auto" style={{ width: "87.5%" }}>
      <div className="title">Top Stories</div>
      <div className="slider-container">
        <Slider {...settings}>
          {blogs.map((blog, key) => (
            <BlogBig
              key={blog.id}
              name={blog.name}
              author={blog.author}
              subtitle={blog.subtitle2}
              image={blog.image2}
              date={blog.date}
              link={blog.link}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Editors;
