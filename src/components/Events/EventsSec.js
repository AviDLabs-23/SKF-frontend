import React from "react";
import events_list from "../SampleData/EventData";
import Slider from "react-slick";
import Event from "../Cards/Event";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventsSec = () => {
  const pastEvents = [];
  const comingEvents = [];
  for (var i = 0; i < events_list.length; i++) {
    if (events_list[i].status === "past") pastEvents.push(events_list[i]);
    else comingEvents.push(events_list[i]);
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  var settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div className="title">Upcoming Events</div>
      <div className="subtitle">Don't Miss Out On The Events Coming Soon</div>
      <div className="slider-container m-auto">
        <Slider {...settings}>
          {comingEvents.map((game) => (
            <Event
              key={game.id}
              title={game.title}
              venue={game.venue.name}
              location={game.venue.location}
              image={game.image}
              day={game.day}
              date={game.date}
              time={game.time}
              link={game.link}
            />
          ))}
        </Slider>
      </div>
      <div className="title">Past Events</div>
      <div className="subtitle">
        Checkout The Exciting Events We Already Had
      </div>
      <div className="slider-container m-auto">
        <Slider {...settings2}>
          {pastEvents.reverse().map((game) => (
            <Event
              key={game.id}
              title={game.title}
              venue={game.venue.name}
              location={game.venue.location}
              image={game.image}
              day={game.day}
              date={game.date}
              link={game.link}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EventsSec;
