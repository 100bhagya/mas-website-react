import React from "react";
import "../index.css";

const About_Intro = () => {
  return (
    <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
      <div className="lg:flex lg:items-center max-w-lg md:max-w-xl lg:max-w-[950px] mx-80">
        <div className="lg:pt-16 pb-44 lg:bottom-12">
          <h1 className="font-medium text-center justify-center relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[48px]  leading-8 font-primary">
            Meet the Mentors
          </h1>

          <p className="relative justify-center lg:top-12 text-lg font  text-black leading-8">
            Experienced mentors to steer you through the journey from being a
            student to an industry-driven professional. With a constant
            interactive support from our mentors with a personalized touch, get
            a chance of a lifetime to engage with accomplished and competent
            mentors who will be adept at tackling your doubts and queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_Intro;
