import React from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Learning from "./Learning";
import Working from "./Working";
import Offers from "./Offers";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

const App = () => {
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

export default App;
