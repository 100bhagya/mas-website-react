import React, { useState } from "react";

import LinkedIn from "../images/Linkedin.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../data/Data";
const Mentor = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1824,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          speed: 15000,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          speed: 3000,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 3000,
          dots: false,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
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
      <div className="mt-16 text-xl text-center">Testimonials</div>

      <div className="p-8 my-12 space-y-2 text-center ">
        <Slider
          {...settings}
          className="absolute left-4 md:static md:left-0"
        >
          {Data.map((data) => (
            <div className="mb-32 mt-28">
              <div className="box-border flex flex-col px-8 py-4 mt-5 space-x-12 transition duration-500 transform border-2 shadow-xl cursor-pointer bg-blue-50 place-content-around md:w-auto hover:shadow-slate-500 hover:-translate-y-3 rounded-2xl h-42 mx-7 border-slate-300 card">
                <div className="relative items-center w-full mt-10 bottom-10">
                  <div className="relative  flex flex-col bottom-16 lg:bottom-20 mt-5w-full h-[11vh]">
                    <img className="relative w-4/12 left-16 md:left-20 lg:left-28 " src={data.image} alt="img" />
                    <div>
                      <h1 className="text-xl lg:text-xl md:text-2xl lg:mt-0 md:mt-5">{data.name}</h1>
                      <h3 className="text-base lg:text-base md:text-lg text-slate-500">{data.position}</h3>
                    </div>
                  </div>
                  <div className="overflow-y-auto  md:text-lg lg:text-sm  rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100 p-6  mt-5 text-sm  w-full  h-[40vh]">
                    {data.about}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
     
    </>
  );
};

export default Mentor;
{
  /* <div className="">
        <Slider {...settings} className="absolute p-10 top-10 bg-slate-400 left-4 md:static md:left-0">
          {Data.map((data) => (
            <div className="mt-20 mb-32 bg-red-300">
              <div className="box-border flex flex-col items-center justify-center px-8 py-5 mt-5 space-x-12 transition duration-500 transform border-2 shadow-xl cursor-pointer bg-slate-700 hover:shadow-slate-500 hover:-translate-y-3 rounded-2xl h-42 mx-7 border-slate-300 place-content-around card">
                <div>
                <img
                  className="relative z-10 w-2/6 bottom-20 left-6 "
                  src={data.image}
                  alt="img"
                />

                </div>

                <div className="relative mt-5 mb-10 right-5 h-[11vh]">
                  <h1 className="text-lg">{data.name}</h1>
                  <h3 className="text-slate-500">{data.position}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */
}
