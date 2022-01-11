import React from "react";
import "../index.css";
import Rectangle from "../images/Rectangle 528.png";

const About_Intro = () => {
  return (
    <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
      <div className="lg:flex lg:items-center px-4 pt-9 max-w-lg md:max-w-xl lg:max-w-7xl mx-auto">
        <div className="lg:pt-16 pb-32 relative lg:right-24 lg:bottom-12">
          <h1 className="font-normal relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[40px]  leading-8 font-primary">
            About Us
          </h1>
          <img
            src={Rectangle}
            className="relative lg:bottom-3 w-8"
            alt="Rectangle"
          ></img>
          <p className="relative lg:top-12 font text-sm  text-black leading-8">
            My Analytics School aims to bridge the gap between the tremendous
            potential of the students and the acclaim they get. Through our
            strategic program, we aim to instil an industry-centric approach in
            the students. Our goal is to provide the quintessential guidance to
            the students keen on becoming world-class professionals.My Analytics
            School aims to bridge the gap between the tremendous potential of
            the students and the acclaim they get. Through our strategic
            program, we aim to instil an industry-centric approach in the
            students. Our goal is to provide the quintessential guidance to the
            students keen on becoming world-class professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_Intro;
