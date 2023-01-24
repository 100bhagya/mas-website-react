import React from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    id: 1,
    src: "https://wallpapercave.com/wp/jgbFbWR.jpg",
  },
  {
    id: 2,
    src: "https://wallpapercave.com/wp/j1O8bCz.jpg",
  },
  {
    id: 3,
    src: "https://wallpapercave.com/wp/zNbNzrh.jpg",
  },
];

const Companies = () => {
  return (
    <>
      <Navbar />
      <div className="absolute top-0 w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="absolute bottom-40 md:static md:bottom-0"
          
        >
          {data.map((data) => {
            return (
              <SwiperSlide
                key={data.id}
                
                className="absolute top-56 md:static md:top-0 "
              >
                <img className="img" src={data.src} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Companies;
