import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Play from "./pages/Play";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ForgotPWD from "./pages/UserAuth/ForgotPWD";
import Test from "./pages/Test";
import Event from "./pages/Event";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const ScrollToTop = () => {
    const pathname = useLocation();

    useEffect(() => {
      const bool = pathname.toString().includes("#");
      if (bool !== true) window.scrollTo(0, 0);
    }, [pathname]);
  };

  ScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/play" element={<Play />} />

      <Route path="/events" element={<Events />} />
      <Route path="/event" element={<Event />} />

      <Route path="/blogs-n-news" element={<Blogs />} />
      <Route path="/blog" element={<BlogPage />} />

      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPWD />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route path="/test" element={<Test />} />
      <Route path="/profile/view/:username" element={<Profile />} />
      <Route path="/profile/edit" element={<EditProfile />} />

      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
