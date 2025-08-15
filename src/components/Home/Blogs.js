import React from "react";
import blogs from "./../SampleData/BlogData";
import Slider from "react-slick";
import Blog from "../Cards/Blog";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blogs = ({ title, subtitle }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="slider-container m-auto mt-4">
        <Slider {...settings}>
          {blogs.reverse().map((blog, key) => (
            <Blog
              key={blog.id}
              name={blog.name}
              author={blog.author}
              subtitle={blog.subtitle}
              image={blog.image}
              date={blog.date}
              link={blog.link}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
