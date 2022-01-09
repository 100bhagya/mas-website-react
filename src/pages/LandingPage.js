import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Learning from "../components/WhatWeDo";
import Working from "../components/HowItWorks";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Learning />
      <Working />
      <Offers />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
