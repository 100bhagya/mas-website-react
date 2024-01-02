import React, { useState } from "react";
import "../index.css";

import LinkedIn from "../images/Linkedin.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../data/Data";

function AboutSection({ text, highlight }) {
  const words = text.split(" ");

  return (
    <p>
      {words.map((word, index) => (
        <span key={index} className={word === highlight ? "highlighted" : ""}>
          {word}{" "}
        </span>
      ))}
    </p>
  );
}

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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          speed: 200,
          dots: false,
        },
      },

      {
        breakpoint: 650,
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
    <section className="p-12 bg-blue-50 pb-24">  
      <h1 className="py-12 text-3xl font-bold text-center text-gray-900  lg:text-4xl">
        Testimonials
      </h1> 
      <div className="w-full py-3 my-2 space-y-2 text-center">
        <Slider {...settings} className="absolute left-3 md:static md:left-0">
          {Data.map((data) => (
            <div key={data.id}>
              <div className="mb-4 mt-28">
                <div className="box-border flex flex-col px-8 py-4 mt-5 space-x-12 border shadow-md cursor-grab lg:transition lg:duration-500 lg:transform bg-white place-content-around md:w-auto lg:hover:shadow-slate-300 lg:hover:-translate-y-3 rounded-2xl h-42 mx-7 border-slate-300 card">
                  <div className="relative items-center w-full mt-10 bottom-10">
                    <div className="relative  flex flex-col bottom-16 lg:bottom-20 mt-5w-full h-[12vh]">
                      <img
                        className="relative rounded-full w-4/12 left-[33%] "
                        src={data.image}
                        alt="img"
                      />
                      <div className="mb-3">
                        <h1 className="text-xl  lg:mt-0 md:mt-5 font-semibold">
                          {data.name}
                        </h1>
                        <h6 className="text-md lg:mt-0 sm:hidden xl:block md:mt-5 text-slate-400">
                          {data.college}
                        </h6>
                        <div className="flex items-center justify-center space-x-3">
                        <h3 className="text-base text-slate-600 font-semibold">
                          {data.company}
                        </h3>
                        <h3 className="text-base ml-0 pl-0 text-blue-600 font-semibold">
                         at {data.ctc}
                        </h3>

                        </div>

                       
                      </div>
                      
                    </div>
                    <div className="overflow-y-clip bg-slate-50 border-dashed border-2 border-slate-300 text-sm s rounded-2xl p-6 2xl:mt-16  mt-5 xl:mt-10  text-sm  w-full   2xl:h-[44vh]  h-[40vh]">
                      <AboutSection text={data.about} highlight={"MAS"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
