import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import Data from "../data/MentorsData";
import LinkedIn from "../images/Linkedin.png";
import Footer from "../components/Footer";

const Mentors = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 justify-center">
        <div className="lg:flex lg:items-center max-w-lg md:max-w-xl lg:max-w-[950px]">
          <div className="lg:pt-28 pb-44 lg:bottom-12">
            <h1 className="font-medium  text-center justify-center relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[48px]  leading-8 font-primary">
              Meet the Mentors
            </h1>

            <p className="relative lg:top-12 text-xl font  text-black leading-8">
              Experienced mentors to steer you through the journey from being a
              student to an industry-driven professional. With a constant
              interactive support from our mentors with a personalized touch,
              get a chance of a lifetime to engage with accomplished and
              competent mentors who will be adept at tackling your doubts and
              queries.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 pl-56 pt-12 pb-20 bg-back">
        {Data.map((post) => {
          return (
            <div class="py-4 m-8 md:w-1/3 lg:w-[17%] shadow-gray-300 bg-card shadow-xl rounded-2xl">
              <div class=" w-full h-48 overflow-hidden">
                <img
                  alt="content"
                  class="relative lg:left-[22%] lg:top-8 h-36 w-36"
                  src={post.image}
                ></img>
              </div>
              <div>
                <a href={post.Link_linkedin}>
                  <img
                    src={LinkedIn}
                    alt="icon"
                    className="mx-4 hover:scale-110 relative bottom-11 left-[140px]"
                  />
                </a>
              </div>

              <div className="text-center justify-center pb-7">
                <h2 class="text-lg font font-semibold text-gray-900">
                  {post.name}
                </h2>
                <h2 class="text-sm font font-normal text-gray-400">
                  {post.position}
                </h2>
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

export default Mentors;
