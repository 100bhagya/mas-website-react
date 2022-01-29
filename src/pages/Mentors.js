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
          <div className="lg:pt-28 md:pb-44 pb-16 lg:bottom-12">
            <h1 className="font-medium hidden md:block text-center justify-center relative bottom-6  text-black md:text-3xl lg:text-[48px]  leading-8 font-primary">
              Meet the Mentors
            </h1>
            <h1 className=" font-semibold md:hidden  text-center justify-center mt-16 text-black text-2xl  leading-8 font-primary">
              Mentors
            </h1>

            <p className="relative lg:top-12 md:text-[16px] font  text-black md:leading-8 mt-10 md:mt-0 text-[13px] px-6 justify-center text-center">
              Experienced mentors to steer you through the journey from being a
              student to an industry-driven professional.
              <br /> With a constant interactive support from our mentors with a
              personalized touch, get a chance of a lifetime to engage with
              accomplished and competent mentors who will be adept at tackling
              your doubts and queries.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 pt-12 pb-20 bg-back md:justify-left justify-center">
        {Data.map((post) => {
          return (
            <div class="py-4 md:m-8 m-3 md:w-1/3 lg:w-[17%] w-[40%] shadow-gray-300 bg-card shadow-xl rounded-2xl">
              <div class=" w-full md:h-48 overflow-hidden">
                <img
                  alt="content"
                  class="relative lg:left-[22%] lg:top-8 md:h-36 md:w-36 h-28 w-28 left-[15%]"
                  src={post.image}
                ></img>
              </div>
              <div>
                <a href={post.Link_linkedin}>
                  <img
                    src={LinkedIn}
                    alt="icon"
                    className="md:mx-4 hover:scale-110 relative md:bottom-11 md:left-[140px] bottom-9 left-[110px]"
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
