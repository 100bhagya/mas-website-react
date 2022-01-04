import React from "react";
import "../index.css";
import design1 from "../images/business.png";
import design2 from "../images/Vector 3.png";

const Intro = () => {
  return (
    <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
      <div className="lg:flex lg:items-center px-4 pt-9 max-w-lg md:max-w-xl lg:max-w-4xl mx-auto">
        <div className="lg:pt-16 pb-32 relative lg:right-24 lg:bottom-12">
          <h1 className="font-normal  text-black text-xl xs:text-2xl lg:text-5xl leading-relaxed font-primary">
            Learn Analytics, The
            <br />
            <br />
            <p className="relative bottom-5">Analytics Way</p>
          </h1>
          <p className="pt-6 text-lg  text-gray-400 leading-loose">
            Data analysis is a process of inspecting, cleansing, transforming,
            <br />
            and modelling data with the goal of discovering useful information,
          </p>
          <a
            href="download"
            className="inline-block bg-blue-600 mt-20 px-10 py-3 text-white rounded-lg font-normal uppercase font-primary tracking-wide text-sm mr-4"
          >
            Join Today
          </a>
        </div>
      </div>
      <div className="flex">
        <img
          src={design1}
          alt=""
          className="absolute design1  z-10 lg:right-16 lg:bottom-24"
        />
        <img src={design2} alt="" className="relative design2 lg:bottom-16" />
      </div>
    </div>
  );
};

export default Intro;
