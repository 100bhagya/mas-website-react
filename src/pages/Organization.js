import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/App.css";

const Organization = ({ props, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="bg-white">
      <h1 className="py-12 text-xl font-bold text-center text-gray-900 lg:text-2xl">
        {props}
      </h1>

      <div className="box-border p-4 my-6 space-x-4 space-y-2 text-center">
        <Slider {...settings} className="absolute left-2 flex md:static md:left-0">
          {data.map((data) => {
            return (
              <div className="flex justify-items-center items-center">
                <img alt="img" className="lg:h-24 h-16 lg:px-10 px-4 p-2" src={data.image} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Organization;
