// Profile Picture
import Avishek from "../../assets/team/Avishek.png";

// Achievements
import {
  T23Runners,
  T24SERunners,
  Games100,
  // Games200,
} from "./AchievementsData";

const user = {
  name: "Avishek Dutta",
  username: "AviD78",
  picture: Avishek,
  age: { years: 24, display: false },
  location: { area: "Behala", display: true },
  bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum placeat, quae rem expedita nisi cum reiciendis id dolorum consequatur veniam.",
  link: {
    title: "Instagram",
    url: "https://www.instagram.com/_._.avishek._._/",
  },
  phone: { number: "+91-987618262", display: true },
  email: { url: "avishek.dutta.2000@gmail.com", display: true },
  positions: [false, false, false, true, true, true, true, false, true, false],
  achievements: [T24SERunners, Games100, T23Runners],
  review:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit illum id totam optio vitae aliquid ab velit nam facilis!",
};

export default user;
