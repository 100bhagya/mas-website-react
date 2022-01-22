/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import Rectangle from "../images/Rectangle 528.png";
import Data from "../data/AboutData";
import Rectangle1 from "../images/Rectangle 31.png";
import LinkedIn from "../images/Linkedin.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
        <div className="lg:flex lg:items-center px-4 pt-9 max-w-lg md:max-w-xl lg:max-w-7xl mx-auto">
          <div className="lg:pt-28 pb-32 relative lg:right-24 lg:bottom-12">
            <h1 className="font-normal relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[40px]  leading-8 font-primary">
              About Us
            </h1>
            <img
              src={Rectangle}
              className="relative lg:bottom-3 w-8"
              alt="Rectangle"
            ></img>
            <p className="relative lg:top-12 font text-lg  text-black leading-8">
              My Analytics School aims to bridge the gap between the tremendous
              potential of the students and the acclaim they get. Through our
              strategic program, we aim to instil an industry-centric approach
              in the students. Our goal is to provide the quintessential
              guidance to the students keen on becoming world-class
              professionals.My Analytics School aims to bridge the gap between
              the tremendous potential of the students and the acclaim they get.
              Through our strategic program, we aim to instil an
              industry-centric approach in the students. Our goal is to provide
              the quintessential guidance to the students keen on becoming
              world-class professionals.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 pl-28 pt-12 bg-back">
        {Data.map((post) => {
          return (
            <div class="p-4 m-8 rounded-3xl md:w-1/3 lg:w-[43%] shadow-gray-300 bg-card shadow-lg">
              <div className="flex">
                <div class="rounded-lg md:w-[30%] h-48 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center z-10 relative lg:left-8 lg:top-8 h-36 w-36"
                    src={post.image}
                  ></img>
                </div>
                <div className="pt-8">
                  <h2 class="text-4xl ml-7 font-semibold text-gray-900 mt-5">
                    {post.name}
                  </h2>
                  <h2 class="text-[26px] ml-7 font-normal text-gray-400 mt-5">
                    {post.position}
                  </h2>
                </div>
              </div>
              <p class="text-lg ml-7 py-12 font-normal leading-relaxed mt-2">
                {post.about}
              </p>
              <div className="">
                <img src={Rectangle1} alt="Rectangle" className="w-[120%]" />
              </div>
              <div className="flex text-center justify-center mt-10 mb-4">
                <a href={post.Link_linkedin}>
                  <img
                    src={LinkedIn}
                    alt="icon"
                    className="mx-4 hover:scale-110 relative top-2"
                  />
                </a>
                <a href={post.Link_facebook}>
                  <img
                    src={Facebook}
                    alt="icon"
                    className="mx-4 hover:scale-110 w-11"
                  />
                </a>
                <a href={post.Link_instagram}>
                  <img
                    src={Instagram}
                    alt="icon"
                    className="mx-4 hover:scale-110 w-11"
                  />
                </a>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default About;
