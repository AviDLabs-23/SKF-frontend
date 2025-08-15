import React from "react";
import venues from "./../SampleData/VenueData";
import Slider from "react-slick";
import Venue from "../Cards/Venue";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Venues = () => {
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
      <div className="title">{venues.length} Venues</div>
      <div className="subtitle">Where The Magic Happens</div>
      <div className="slider-container m-auto">
        <Slider {...settings}>
          {venues.map((ven, key) => (
            <Venue
              key={ven.id}
              name={ven.name}
              location={ven.location}
              image={ven.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Venues;
