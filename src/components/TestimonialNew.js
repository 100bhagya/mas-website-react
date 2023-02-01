import React, { useState } from "react";

import LinkedIn from "../images/Linkedin.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../data/Data";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

          speed: 2000,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 2000,

          dots: false,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          speed: 200,
          dots: false,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          speed: 100,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="mt-16 text-3xl text-center">Testimonials</div>

      <div className="w-full py-8 my-12 space-y-2 text-center">
        <Slider {...settings} className="absolute left-3 md:static md:left-0">
          {Data.map((data) => (
            <div key={data.id}>
              <div className="mb-32 mt-28">
                <div className="box-border flex flex-col px-8 py-4 mt-5 space-x-12 border-2 shadow-xl cursor-pointer lg:transition lg:duration-500 lg:transform bg-blue-50 place-content-around md:w-auto lg:hover:shadow-slate-500 lg:hover:-translate-y-3 rounded-2xl h-42 mx-7 border-slate-300 card">
                  <div className="relative items-center w-full mt-10 bottom-10">
                    <div className="relative  flex flex-col bottom-16 lg:bottom-20 mt-5w-full h-[11vh]">
                      <img
                        className="relative w-4/12 left-[33%] "
                        src={data.image}
                        alt="img"
                      />
                      <div>
                        <h1 className="text-xl lg:text-xl md:text-2xl lg:mt-0 md:mt-5">
                          {data.name}
                        </h1>
                        <h3 className="text-base lg:text-base md:text-lg text-slate-500">
                          {data.position}
                        </h3>
                      </div>
                    </div>
                    <div className="overflow-y-auto  md:text-lg lg:text-sm  rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100 p-6 2xl:mt-16  mt-5 xl:mt-6  text-sm  w-full   2xl:h-[42vh]  h-[40vh]">
                      {data.about}
                    </div>
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

export default Testimonials;
