import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Mentors_Intro";
import Mentor from "../components/Mentors_Testimonial";
import Footer from "../components/Footer";

const Mentors = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Mentor />
      <Footer />
    </div>
  );
};

export default Mentors;
