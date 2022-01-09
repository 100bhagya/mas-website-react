/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navbar from "../components/Navbar";
import About_Intro from "../components/About_Intro";
import About_Testimonial from "../components/About_Testimonial";

const About = () => {
  return (
    <div>
      <Navbar />
      <About_Intro />
      <About_Testimonial />
    </div>
  );
};

export default About;
