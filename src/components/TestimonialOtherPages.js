import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Data from "../data/SwiperData";
import "../index.css";
import Colon from "../images/upper colon.webp";
import Testimonial from "../components/Testimonial";

const TestimonialOtherPages = () => {
  return (
    <div>
      <div className="hidden bg-back lg:block">
        <div className="text-[40px] font-medium text-center mb-20">
          Testimonial
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-10/12"
        >
          {Data.map((post) => {
            return (
              <div className="">
                <SwiperSlide className="relative left-[59px]">
                  <div className="w-[75%] bg-white relative top-20 rounded-2xl h-[440px]">
                    <div className="text-center h-[155px] bg-blue-100 rounded-t-2xl">
                      <img
                        src={post.picture}
                        alt="testimonial"
                        className="h-36 w-36 relative left-[102px] bottom-20"
                      />
                      <div className="text-[15px] font-semibold relative bottom-14">
                        {post.name}
                      </div>
                      <div className="text-[15px] relative bottom-12">
                        {post.position}
                      </div>
                    </div>
                    <div className="m-10">
                      <img src={Colon} alt="colon" className="" />
                      <div className="mt-8">{post.about}</div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
      <div className="lg:hidden">
        <Testimonial />
      </div>
    </div>
  );
};

export default TestimonialOtherPages;
