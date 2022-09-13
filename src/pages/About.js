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
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
        <h1 className="text-center text-black text-3xl font-bold font-serif py-8">
          About Us
        </h1>

        <p className="px-8 md:px-24 pb-8 lg:top-5 text-base text-black lg:text-lg text-center">
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
      </section>  
      {/* <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
        <div className="lg:flex lg:items-center px-4 pt-9 max-w-lg md:max-w-xl lg:max-w-7xl mx-auto">
          <div className="lg:pt-28 md:pb-32 pb-16 relative lg:right-24 lg:bottom-12">
            <h1 className="md:font-normal font-semibold text-center md:text-left mt-10 relative lg:bottom-6  text-black text-2xl md:text-2xl lg:text-[40px]  leading-8 font-primary">
              About Us
            </h1>
            <img
              src={Rectangle}
              className="relative lg:bottom-3 w-8 hidden md:block"
              alt="Rectangle"
            ></img>
            <p className="relative lg:top-12 font mt-10 md:text-lg text-[14px]  text-black md:leading-8">
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
      </div> */}
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 pb-10 -mt-4 md:pl-4 lg:pl-28 pt-12 bg-back">
        {Data.map((post) => {
          return (
            <div class="p-4 m-8 md:m-4 lg:m-8 rounded-3xl md:w-[45%] lg:w-[43%] shadow-gray-300 bg-card shadow-lg">
              <div className="flex justify-center md:block lg:flex">
                <div class="rounded-lg md:w-[42%] h-48 md:h-40">
                  <img
                    alt="content"
                    class="object-cover object-center z-10 relative md:left-8 md:top-8 top-5 h-28 w-28 md:h-36 md:w-36 hover:scale-105 hover:opacity-70"
                    src={post.image}
                  ></img>
                </div>
                <div className="md:pt-8 pt-5">
                  <h2 class="md:text-4xl text-xl ml-7 md:pr-16 font-semibold text-gray-900 mt-5">
                    {post.name}
                  </h2>
                  <h2 class="md:text-[26px] text-[16px] ml-7 font-normal text-gray-400 mt-2 md:mt-5">
                    {post.position}
                  </h2>
                </div>
              </div>
              <p class="text-sm md:text-lg md:ml-7 pr-3 ml-4 md:py-12 font-normal leading-relaxed md:mt-2">
                {post.about}
              </p>
              <div className="">
                <img
                  src={Rectangle1}
                  alt="Rectangle"
                  className="w-[120%] mt-6"
                />
              </div>
              <div className="flex text-center justify-center md:mt-6 lg:mt-10 mt-3 md:mb-2">
                <a
                  href={post.Link_linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LinkedIn}
                    alt="icon"
                    className="mx-4 hover:scale-110 relative top-2"
                  />
                </a>
                <a
                  href={post.Link_facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Facebook}
                    alt="icon"
                    className="mx-4 hover:scale-110 w-11"
                  />
                </a>
                <a
                  href={post.Link_instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
      <Footer />
    </div>
  );
};

export default About;
