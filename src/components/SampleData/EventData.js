// Venues
import venues from "./VenueData";

// Partners
import {
  Redbull,
  Decathlon,
  HotelRiva,
  AlexaHealth,
  Petuk,
  JerseyStore11Kolkata,
  TurfXL,
  HouseOfJersey,
  NestCafe,
  Monginis,
  BakeUpArtist,
  FKolkataJerseys,
  GodsEye,
} from "./PartnersData";

// Format
import Format from "../../assets/format.png";

// Landing Banner
import T23we from "../../assets/background/t23we-landing.png";
import T24se from "../../assets/background/t24se-landing.png";
import T24me from "../../assets/background/t24me-landing.png";

// Poster
import T23we_poster from "../../assets/posters/t23we-poster.png";
import T24se_poster from "../../assets/posters/t23we-poster.png";
import T24me_poster from "../../assets/posters/t23we-poster.png";

//Teams
import SampleLogo from "../../assets/sample-sq2.png";

// Winners
import Winner23we from "../../assets/sample-sq.JPG";
import Winner24se from "../../assets/sample-sq.JPG";

// Runnersup
import Runner23we from "../../assets/sample-sq.JPG";
import Runner24se from "../../assets/sample-sq.JPG";

// Top Players
import Avishek from "../../assets/team/Avishek.png";

const events = [
  {
    id: 1,
    title: "Tekkers 2023 : Winter Edition",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolorem alias optio. Delectus dolor, ducimus recusandae neque obcaecati omnis aperiam labore! Voluptatum quo odit cupiditate provident sapiente molestias natus accusantium doloremque enim consequatur sint quas est harum itaque id dolorum maxime assumenda, molestiae, esse repellat quae sit facere reprehenderit similique.",
    venue: venues[0],
    image: T23we,
    poster: T23we_poster,
    format: Format,
    date: "03-12-2023",
    time: "09:30 A.M. onwards",
    expected_attendees: 250,
    attendees: 250,
    players: 72,
    goals: 38,
    matches: 15,
    winner_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et sit, excepturi consequuntur ab nulla distinctio atque quas, eum odit, molestias deleniti natus totam non nobis! Officia qui sunt quod, consequuntur consequatur amet, odit, fugit suscipit voluptatibus sint architecto laboriosam.",
    winners: {
      team: "DUFC OG",
      logo: SampleLogo,
      image: Winner23we,
      players: [
        "Aakash M (C)",
        "Rohan",
        "Gourob",
        "Akash",
        "Sohan",
        "Ayan",
        "Abhimanyu",
        "Jeeshan",
        "Suvam",
      ],
    },
    runnersup: {
      team: "Kolkata Warriors FC",
      logo: SampleLogo,
      image: Runner23we,
      players: [
        "Monosig (C)",
        "Rishab",
        "Avishek",
        "Subhro",
        "Piklu",
        "Dipak",
        "Biswajit",
        "Arko",
      ],
    },
    points: {
      A: [
        { teamName: "DUFC OG", logo: SampleLogo, stats: [3, 2, 1, 0, 5, 6] },
        {
          teamName: "KOLKATA WARRIORS FC",
          logo: SampleLogo,
          stats: [3, 1, 1, 1, 2, 4],
        },
        {
          teamName: "APEX UNITED FC",
          logo: SampleLogo,
          stats: [3, 1, 1, 1, -4, 4],
        },
        {
          teamName: "DESTROYERS FC",
          logo: SampleLogo,
          stats: [3, 1, 2, 0, -1, 3],
        },
      ],
      B: [
        {
          teamName: "FC MUSKETEERS",
          logo: SampleLogo,
          stats: [3, 1, 0, 2, 1, 5],
        },
        {
          teamName: "DREAM UNITED FC",
          logo: SampleLogo,
          stats: [3, 1, 0, 2, 1, 5],
        },
        { teamName: "ROVERS FC", logo: SampleLogo, stats: [3, 1, 2, 0, 1, 3] },
        {
          teamName: "Destroyers FC",
          logo: SampleLogo,
          stats: [3, 0, 1, 2, -3, 2],
        },
      ],
      semi: [
        {
          team1: "KOLKATA WARRIORS FC",
          team2: "FC MUSKETEERS",
          logo1: SampleLogo,
          logo2: SampleLogo,
          score1: 1,
          score2: 0,
        },
        {
          team1: "DUFC OG",
          team2: "DREAM UNITED FC",
          logo1: SampleLogo,
          logo2: SampleLogo,
          score1: 1,
          score2: 0,
        },
      ],
      final: {
        team1: "DUFC OG",
        team2: "KOLKATA WARRIORS FC",
        logo1: SampleLogo,
        logo2: SampleLogo,
        score1: 1,
        score2: 0,
      },
    },
    topPlayers: [Avishek, Avishek, Avishek, Avishek],
    partners: [
      NestCafe,
      AlexaHealth,
      FKolkataJerseys,
      Monginis,
      GodsEye,
      TurfXL,
      BakeUpArtist,
    ],
    link: "tekkers-2023-winter-edition",
    status: "past",
  },
  {
    id: 2,
    title: "Tekkers 2024 : Spring Edition",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic dolorem alias optio. Delectus dolor, ducimus recusandae neque obcaecati omnis aperiam labore! Voluptatum quo odit cupiditate provident sapiente molestias natus accusantium doloremque enim consequatur sint quas est harum itaque id dolorum maxime assumenda, molestiae, esse repellat quae sit facere reprehenderit similique.",
    venue: venues[0],
    image: T24se,
    poster: T24se_poster,
    format: Format,
    date: "17-03-2024",
    time: "09:30 A.M. onwards",
    expected_attendees: 300,
    attendees: 300,
    players: 80,
    goals: 48,
    matches: 15,
    winner_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et sit, excepturi consequuntur ab nulla distinctio atque quas, eum odit, molestias deleniti natus totam non nobis! Officia qui sunt quod, consequuntur consequatur amet, odit, fugit suscipit voluptatibus sint architecto laboriosam.",
    winners: {
      team: "Blaze United FC",
      logo: SampleLogo,
      image: Winner24se,
      players: [
        "Akash G (C)",
        "Rishi",
        "Piyush",
        "Dipak",
        "Arkaprava",
        "Agniv",
        "Arjobroto",
        "Dewakar",
        "Amit",
        "Ritabrata",
      ],
    },
    runnersup: {
      team: "Kolkata Warriors FC",
      logo: SampleLogo,
      image: Runner24se,
      players: [
        "Soham (C)",
        "Aritro",
        "Rishab",
        "Avishek",
        "Akash",
        "George",
        "Debojit",
        "Kaustav",
        "Rahul",
      ],
    },
    points: {
      A: [
        {
          teamName: "BLAZE UNITED FC",
          logo: SampleLogo,
          stats: [3, 2, 0, 1, 4, 7],
        },
        {
          teamName: "APEX UNITED FC",
          logo: SampleLogo,
          stats: [3, 1, 0, 2, 1, 5],
        },
        {
          teamName: "FC AZTECS",
          logo: SampleLogo,
          stats: [3, 1, 1, 1, -1, 4],
        },
        {
          teamName: "THE AGED FC",
          logo: SampleLogo,
          stats: [3, 0, 3, 0, -4, 0],
        },
      ],
      B: [
        {
          teamName: "KOLKATA WARRIORS FC",
          logo: SampleLogo,
          stats: [3, 2, 0, 1, 3, 7],
        },
        {
          teamName: "FC MUSKETEERS",
          logo: SampleLogo,
          stats: [3, 1, 0, 2, 1, 5],
        },
        {
          teamName: "DESTROYERS FC",
          logo: SampleLogo,
          stats: [3, 0, 1, 2, -1, 2],
        },
        {
          teamName: "PHOENIX FC",
          logo: SampleLogo,
          stats: [3, 0, 2, 1, -3, 1],
        },
      ],
      semi: [
        {
          team1: "BLAZE UNITED FC",
          team2: "FC MUSKETEERS",
          logo1: SampleLogo,
          logo2: SampleLogo,
          score1: 1,
          score2: 0,
        },
        {
          team1: "KOLKATA WARRIORS FC",
          team2: "APEX UNITED FC",
          logo1: SampleLogo,
          logo2: SampleLogo,
          score1: 1,
          score2: 0,
        },
      ],
      final: {
        team1: "BLAZE UINTED FC",
        team2: "KOLKATA WARRIORS FC",
        logo1: SampleLogo,
        logo2: SampleLogo,
        score1: 1,
        score2: 0,
      },
    },
    topPlayers: [Avishek, Avishek, Avishek, Avishek],
    partners: [
      Redbull,
      Decathlon,
      HotelRiva,
      AlexaHealth,
      Petuk,
      NestCafe,
      JerseyStore11Kolkata,
      TurfXL,
      HouseOfJersey,
    ],
    link: "tekkers-2024-spring-edition",
    status: "past",
  },
  {
    id: 3,
    title: "Tekkers 2024 : Monsoon Edition",
    venue: venues[0],
    image: T24me,
    poster: T24me_poster,
    format: Format,
    date: "TBD",
    time: "09:30 A.M. onwards",
    expected_attendees: 300,
    attendees: 0,
    players: 80,
    goals: 0,
    matches: 15,
    winners: null,
    runnersup: null,
    points: null,
    topPlayers: [],
    partners: [Redbull, Decathlon, HotelRiva, AlexaHealth, NestCafe, TurfXL],
    link: "tekkers-2024-monsoon-edition",
    reg_link: "",
    status: "current",
  },
  {
    id: 4,
    title: "Tekkers 2024 : Winter Edition",
    venue: venues[0],
    image: null,
    date: "TBD",
    time: "09:30 A.M. onwards",
    expected_attendees: 0,
    attendees: 0,
    players: 0,
    goals: 0,
    matches: 0,
    winners: null,
    runnersup: null,
    points: null,
    topPlayers: [],
    partners: [],
    link: "tekkers-2024-winter-edition",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Tekkers 2025 : Spring Edition",
    venue: venues[0],
    image: null,
    date: "TBD",
    time: "09:30 A.M. onwards",
    expected_attendees: 0,
    attendees: 0,
    players: 0,
    goals: 0,
    matches: 0,
    winners: null,
    runnersup: null,
    points: null,
    topPlayers: [],
    partners: [],
    link: "tekkers-2025-spring-edition",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Tekkers 2025 : Monsoon Edition",
    venue: venues[0],
    image: null,
    date: "TBD",
    time: "09:30 A.M. onwards",
    expected_attendees: 0,
    attendees: 0,
    players: 0,
    goals: 0,
    matches: 0,
    winners: null,
    runnersup: null,
    points: null,
    topPlayers: [],
    partners: [],
    link: "tekkers-2025-monsoon-edition",
    status: "upcoming",
  },
  {
    id: 7,
    title: "Tekkers 2025 : Winter Edition",
    venue: venues[0],
    image: null,
    date: "TBD",
    time: "09:30 A.M. onwards",
    expected_attendees: 0,
    attendees: 0,
    players: 0,
    goals: 0,
    matches: 0,
    winners: null,
    runnersup: null,
    points: null,
    topPlayers: [],
    partners: [],
    link: "tekkers-2025-winter-edition",
    status: "upcoming",
  },
];

export default events;
