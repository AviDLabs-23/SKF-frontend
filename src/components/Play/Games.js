import React from "react";
import games_active from "./../SampleData/GameData";
import Slider from "react-slick";
import Game from "../Cards/Game";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Games = () => {
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
      <div className="title">{games_active.length} Active Games</div>
      <div className="subtitle">Don't Miss Out</div>
      <div className="slider-container m-auto">
        <Slider {...settings}>
          {games_active.map((game, key) => (
            <Game
              key={game.id}
              name={game.name}
              location={game.location}
              image={game.image}
              day={game.day}
              date={game.date}
              time={game.time}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Games;
