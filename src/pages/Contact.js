import React from "react";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer/Footer";
import ContactSection from "../components/Contact/ContactSection";
import Bg from "../assets/background/other.png";

const Contact = () => {
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "fill",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Layout
        title="Contact Us"
        description="Contact page for the website"
        keywords="south, kolkata, football, soccer, turf, play"
      >
        <ContactSection />
      </Layout>
      <Footer />
    </div>
  );
};

export default Contact;
