import React from "react";
import timelines from "./../SampleData/TimelineData";
import Slider from "react-slick";
import TimelineCard from "../Cards/Timeline";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Timeline = () => {
  var settings = {
    dots: true,
    infinite: false,
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
      <div className="title">SKF TIMELINE</div>
      <div className="slider-container m-auto">
        <Slider {...settings}>
          {timelines.reverse().map((time) => (
            <TimelineCard
              key={time.id}
              date={time.date}
              text={time.text}
              image={time.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Timeline;
