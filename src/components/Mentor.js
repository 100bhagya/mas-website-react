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
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1824,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          infinite: true,
          speed: 15000,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          speed: 3000,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          speed: 3000,
          dots: false,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 4000,
          dots: false,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="mt-16 mb-10 text-xl text-center ">Mentors</div>
      <div className="mx-10 text-center md:mx-32 ">
        <h1>
          Experienced mentors to steer you through the journey from being a
          student to an industry-driven professional. With a constant
          interactive support from our mentors with a personalized touch, get a
          chance of a lifetime to engage with accomplished and competent mentors
          who will be adept at tackling your doubts and queries.
        </h1>
      </div>
      <div className="p-8 my-12 space-y-2 text-center ">
        <Slider {...settings} className="absolute left-4 md:static md:left-0">
          {Data.map((data) => (
            <div className="space-x-3 ">
              <div className="box-border flex flex-col items-center justify-center px-8 py-4 mt-5 space-x-12 transition duration-500 transform border-2 shadow-xl cursor-pointer hover:shadow-slate-500 hover:-translate-y-3 rounded-2xl h-42 mx-7 border-slate-300 place-content-around card">
                <div className="items-center mt-10">
                  <img
                    className="relative w-2/3 left-6 "
                    src={data.image}
                    alt="img"
                  />
                   <a href={data.Link_linkedin}>
                  <img
                    src={LinkedIn}
                    alt="icon"
                    className="md:mx-4 hover:scale-110 relative md:bottom-7 2xl:left-[90px] 2xl:w-12 2xl:h-12 md:left-[65px] bottom-9 left-[110px]"
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
        className="relative text-blue-800 border-b-2 border-transparent left-56 bottom-5 md:left-3/4 hover:border-blue-800"
      >
        Meet The Mentors
      </a>
    </>
  );
};

export default Mentor;
