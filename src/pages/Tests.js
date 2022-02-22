import React from "react";
import Navbar from "../components/Navbar";
import Artboard from "../images/Artboard.png";
import Grid from "../images/grid.png";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Data from "../data/SwiperData";
import "../index.css";
import Colon from "../images/upper colon.png";
import Testimonial from "../components/Testimonial";

const Tests = () => {
  return (
    <div className="bg-back">
      <Navbar />
      <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 text-center justify-center">
        <div className="md:pt-28 md:pb-32 pb-12 lg:bottom-12">
          <h1 className="md:font-medium font-semibold mt-16 md:mt-0  text-center justify-center relative lg:bottom-6  text-black text-2xl md:text-2xl lg:text-[48px]  leading-8 font-primary">
            Tests
          </h1>

          <p className="relative justify-center lg:top-12 md:text-lg text-[14px] mt-8 md:mt-0 font  text-black leading-8">
            Our specialised test portal to challenge youself
          </p>
        </div>
      </div>
      <div className="md:pb-32 pb-10">
        <div className="md:flex">
          <div>
            <div className="bg-card shadow-2xl my-20 lg:ml-28 md:ml-8 lg:mr-12 mx-3  lg:w-3/4 md:w-[87%] relative left-1/5  rounded-xl">
              <div className="px-12 py-8">
                <div className="md:text-2xl text-xl md:font-medium font-semibold md:mb-6 mb-9 mt-8">
                  We Offer
                </div>
                <p className="md:text-lg text-[14px] my-4">
                  Quant Sectional Tests
                </p>
                <p className="md:text-lg text-[14px] my-4">
                  {" "}
                  LRDI Sectional Tests
                </p>
                <p className="md:text-lg text-[14px] my-4">
                  {" "}
                  Verbal Sectional Tests
                </p>
                <p className="md:text-lg text-[14px] my-4"> Combined Tests</p>
                <p className="md:text-lg text-[14px] my-4">
                  {" "}
                  Company Wise Tests
                </p>
                <p className="md:text-lg text-[14px] my-4"> Weekly Tests</p>
                <p className="md:text-lg text-[14px] my-4">
                  {" "}
                  Quizzes (Self Evaluation)
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 my-20 md:ml-6 lg:ml-12 md:mr-[22px] lg:mr-0 md:rounded-3xl md:shadow-2xl">
            <div className="flex">
              <div className="md:ml-16 md:mt-16 lg:mr-36 md:mr-4 ml-8 mt-10 mb-6 md:mb-0">
                <div className="md:text-2xl text-xl md:font-medium font-semibold md:mb-28 mb-6">
                  Sample test
                </div>
                <p className="md:text-lg text-[12px] md:my-6 my-3 underline">
                  Analytics Mock Placement Test
                </p>
                <p className="md:text-lg text-[12px] md:my-6 my-3 underline">
                  Quant Sectional Test
                </p>
                <p className="md:text-lg text-[12px] md:my-6 my-3 underline">
                  Verbal Sectional Test
                </p>
              </div>
              <img
                src={Artboard}
                alt="artboard"
                className="relative top-10 md:top-48 lg:top-10  md:right-9 lg:right-0 test_artboard"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-50 lg:w-[86%] md:w-[92%] lg:ml-28 md:ml-8 md:rounded-[30px] flex flex-col-reverse md:flex-row md:shadow-2xl">
          <div className="md:w-[37%] md:my-32 md:mx-20 mb-12 md:mb-16 lg:mb-0">
            <div className="md:text-2xl text-lg text-center md:text-left font-semibold mb-6 md:mb-16">
              Overview Of Test Platform
            </div>
            <p className="md:text-lg text-[14px] font-normal md:mb-16 lg:mb-32 mb-12 w-[80%] ml-10 md:ml-0">
              Having trouble registering on our test platform, click{" "}
              <a
                href="https://myanalyticsschool.com/video/register.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                here
              </a>{" "}
              to download instructions
            </p>
            <a
              href="https://myanalyticsschool.ezexam.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] bg-blue-600 py-3 px-6 text-white rounded-xl relative left-[30%] md:left-0"
            >
              Visit platform
            </a>
          </div>
          <div className="-mb-[130px]">
            <img
              src={Grid}
              alt="grid"
              className="md:w-96 w-72 relative top-5 right-2  md:top-24 lg:top-5 md:right-14 lg:right-2"
            />
            <div className=" lg:ml-12 md:-ml-4 ml-8 relative bottom-16 md:bottom-0 lg:bottom-16 z-10">
              <iframe
                width="590"
                height="340"
                src="https://www.youtube.com/embed/pKyiLrMLQ80"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="rounded-2xl border-solid border-white border-[12px]"
              ></iframe>
            </div>
            <img
              src={Grid}
              alt="grid"
              className="md:w-96 w-72 relative md:bottom-20 lg:bottom-32 bottom-[140px] left-[57%] lg:left-[450px] md:left-[138px]"

            />
          </div>
        </div>
      </div>

      {/* <div className="bg-back lg:block hidden">

        <div className="text-[40px] font-medium text-center mb-20">
          Testimonials
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
          className="w-10/12 "
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
      <div className="text-center mb-28 mt-10">
        <a
          href="apply"
          className="px-8 py-3 bg-blue-600 text-center rounded-xl text-[15px] font-medium text-white"
        >
          Apply Now
        </a>
      </div> */}

      <Footer />
    </div>
  );
};

export default Tests;
