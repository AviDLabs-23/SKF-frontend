import React from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import Landing from "../components/Event/Landing";
import Editors from "../components/Event/Editors";
import TopPlayers from "../components/Event/TopPlayers";
import Stats from "../components/Event/Stats";
import Partners from "../components/Partners";
import events from "../components/SampleData/EventData";
import WinnersSec from "../components/Event/WinnersSec";
import PointsTable from "../components/Event/PointsTable";
import EventDetails from "../components/Event/EventDetails";
import Rules from "../components/Event/Rules";

const Event = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  let data = {};

  for (var i = 0; i < events.length; i++) {
    if (title === events[i].link) {
      data = events[i];
      break;
    }
  }

  return (
    <div className="main">
      <Layout
        title={data.title}
        description="Event details page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <Landing image={data.image} />
        <div style={data.description ? {} : { display: "none" }}>
          <div className="title">Description</div>
          <div
            style={{
              color: "white",
              fontSize: "18",
              width: "60%",
              margin: "0 auto",
              textAlign: "center",
            }}
            className="intro p-2"
          >
            {data.description}
          </div>
        </div>
        <EventDetails
          date={data.date}
          time={data.time}
          venue={data.venue}
          status={data.status}
          poster={data.poster}
          reg_link={data.reg_link}
          link={data.link}
        />
        <WinnersSec
          winners_data={data.winners}
          runnersup_data={data.runnersup}
          winner_description={data.winner_description}
        />
        <Editors event={data.link} />
        <Stats
          expected_attendees={data.expected_attendees}
          attendees={data.attendees}
          players={data.players}
          goals={data.goals}
          matches={data.matches}
        />
        <Rules status={data.status} format={data.format} />
        <TopPlayers topPlayers={data.topPlayers} />
        <PointsTable team_stats={data.points} />
        <Partners sponsors={data.partners} />
      </Layout>
      <Footer />
    </div>
  );
};

export default Event;
