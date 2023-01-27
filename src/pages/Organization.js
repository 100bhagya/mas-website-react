import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/App.css"

const Organization = ({props}) => {
    
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots:true
          }
        }
    ]
  };
  return (
    <>
      <div className="mx-3 mt-16 mb-10 text-xl text-center md:mx-0 ">{props}</div>
      <div className="box-border p-4 my-6 space-x-4 space-y-2 text-center bg-gradient-to-b from-blue-100 to-white">
        <Slider {...settings} className="absolute left-4 md:static md:left-0">
          <div className="flex mx-2 place-content-center">
            <img alt ="img"  className="w-1/3 my-6" src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
          </div>
          <div className="items-center mx-2 place-content-center">
            <img  alt ="img" className="w-1/3 my-6" src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png" />
          </div>
          <div className="items-center mx-2 place-content-center">
            <img alt ="img" className="w-1/3 my-6" src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
          </div>
          <div className="items-center mx-2 place-content-center">
            <img alt ="img" className="w-1/3 my-6" src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
          </div>
          <div className="items-center mx-2 place-content-center">
            <img alt ="img" className="w-1/3 my-6" src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png" />
          </div>
          <div className="items-center mx-2">
            <img alt ="img" className="w-1/3 my-6" src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Organization;
