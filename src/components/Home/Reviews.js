import React from "react";
import reviews from "./../SampleData/ReviewData";
import Slider from "react-slick";
import Review from "../Cards/Review";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div className="title">{reviews.length} Reviews</div>
      <div className="subtitle">What Our Community Has To Say About Us</div>
      <div className="slider-container m-auto">
        <Slider {...settings}>
          {reviews.map((rev, key) => (
            <Review
              key={rev.id}
              name={rev.name}
              location={rev.location}
              review={rev.review}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
