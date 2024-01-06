import React, { useState } from "react";
import Data from "../data/MentorsData";
import LinkedIn from "../images/Linkedin.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mentor = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    pauseOnMouseEnter: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1824,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          infinite: true,
          speed: 18000,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          speed: 8000,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          speed: 6000,
          dots: false,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          speed: 6000,
          autoplaySpeed: 6000,
          dots: false,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1500,
          autoplaySpeed: 8000,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      
      <h1 className="py-12 text-3xl font-bold text-center text-gray-900 lg:text-4xl">
        Meet The Mentors
      </h1>
      <div className="mx-10 text-center md:mx-32 text-slate-600">
        <h1>
          Experienced mentors to steer you through the journey from being a
          student to an industry-driven professional. With a constant
          interactive support from our mentors with a personalized touch, get a
          chance of a lifetime to engage with accomplished and competent mentors
          who will be adept at tackling your doubts and queries.
        </h1>
      </div>
      <div className="py-8 my-12 space-y-2 text-center ">
        <Slider {...settings} className="absolute left-4 md:static md:left-0">
          {Data.map((data) => (
            <div className="space-x-3 transition-all duration-500 ease-in-out">
              <div className="box-border flex flex-col items-center justify-center px-8 py-4 mt-5 space-x-12 border-2 shadow-md cursor-pointer lg:duration-500 md:transition lg:transform lg:hover:shadow-slate-200 lg:hover:-translate-y-3 rounded-2xl h-42 mx-7 border-slate-300 place-content-around card">
                <div className="items-center mt-10">
                  <img
                    className="relative w-2/3 left-[20%]"
                    src={data.image}
                    alt="img"
                  />
                   <a href={data.Link_linkedin}>
                  <img
                    src={LinkedIn}
                    alt="icon"
                    className="md:mx-4 hover:scale-110 relative md:bottom-7 lg:left-[47%] 2xl:w-12 2xl:h-12 md:left-[36%] bottom-9 left-[65%]"
                  />
                </a>
                </div>
                <div className="relative mt-5 mb-10 right-5 h-[11vh]">
                  <h1 className="text-lg">{data.name}</h1>
                  <h3 className="text-slate-500">{data.position}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <a
        href="/mentors"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center py-4 my-12 text-md font-bold text-center text-white bg-blue-600 rounded-full w-1/2 md:w-1/4 mx-auto"
      >
        View All Mentors
      </a>
    </>
  );
};

export default Mentor;
