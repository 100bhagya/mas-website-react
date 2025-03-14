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
import { CheckIcon } from "@heroicons/react/solid";
import Colon from "../images/upper colon.png";
import Testimonial from "../components/Testimonial";

const Tests = () => {
  return (
    <div>
      <Navbar />
      <section className="pt-24 pb-16 bg-blue-50">
        <h1 className="py-8 text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl lg:text-5xl text-center  font-primary">
          <span className="text-sky-800">Test</span> Yourself
        </h1>

        <p className="px-8 pb-8 text-base text-center text-slate-600 md:px-24 lg:top-5 lg:text-lg max-w-6xl mx-auto">
        Our specialised test portal to challenge youself
        </p>       
      </section>

      <section className="py-16">
        <div className="flex flex-col items-center space-y-6 lg:flex-row justify-center lg:space-y-0 lg:space-x-8 mx-4">
          <div className="border shadow-lg rounded-xl p-16">
            <h2 className="text-black text-2xl font-bold pb-4">
              We offer
            </h2>
            <div className="md:text-base text-sm">
                <p className="mb-3 text-slate-600">
                  <CheckIcon className="inline w-5 h-5 mr-1 text-green-600" />
                  Quant Sectional Tests
                </p>
                <p className="mb-3 text-slate-600">
                  <CheckIcon className="inline w-5 h-5 mr-1 text-green-600" />                  
                  LRDI Sectional Tests
                </p>
                <p className="mb-3 text-slate-600">
                  <CheckIcon className="inline w-5 h-5 mr-1 text-green-600" />                  
                  Verbal Sectional Tests
                </p>
                <p className="mb-3 text-slate-600">
                  <CheckIcon className="inline w-5 h-5 mr-1 text-green-600" /> Combined Tests</p>
                <p className="mb-3 text-slate-600">
                  <CheckIcon className="inline w-5 h-5 mr-1 text-green-600" />                  
                  Company Wise Tests
                </p>
                <p className="mb-3 text-slate-600">
                  <CheckIcon className="inline w-5 h-5 mr-1 text-green-600" /> Weekly Tests</p>
                <p className="mb-3 text-slate-600">
                  <CheckIcon className="inline w-5 h-5 mr-1 text-green-600" />                  
                  Quizzes (Self Evaluation)
                </p>
            </div>
          </div>
          <div className="shadow-lg border rounded-xl p-14">
            <h2 className="text-center text-black text-2xl font-bold pb-8">
              Sample Tests
            </h2>
            <div className="flex flex-col space-y-6 md:flex-row-reverse md:space-y-0 justify-between items-center">
              <img
                src={Artboard}
                alt="artboard"
                className="h-48 md:h-64"
              />
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://ezex.in/4ea7xl"
                  className="block text-sm text-white bg-sky-700 rounded-xl shadow-lg p-4 hover:bg-sky-700 hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer">
                  
                  <button className="">
                    Analytics Mock Placement Test
                  </button>
                </a>                
                <a
                  href="https://ezex.in/e896c7"
                  className="block text-sm text-white bg-sky-700 rounded-xl shadow-lg p-4 hover:bg-sky-700 hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"              
                  >
                    <button>
                      Quant Sectional Test
                    </button>
                  
                </a>                
                <a
                  href="https://ezex.in/8fphur" 
                  className="block text-sm text-white bg-sky-700 rounded-xl shadow-lg p-4 hover:bg-sky-700 hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <button>
                      Verbal Sectional Test
                    </button>
                </a>
              </div>
              
            </div>

          </div>
        </div>

      </section>

      <section className="mb-16 py-16">
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8 justify-center items-center bg-blue-50 rounded-xl shadow-md p-12 lg:w-4/5 mx-auto">
          <div className="flex flex-col space-y-4 md:w-1/2">
            <h2 className="text-center md:text-left text-black text-2xl font-bold pb-4">
              Overview of Test Platform
            </h2>
            <p className="md:text-base text-sm text-slate-700">
              Having trouble registering on our test platform, click {" "}
              <a
                href="https://myanalyticsschool.com/video/register.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                here
              </a>{" "}
              to download instructions or watch this video 
            </p>
            <a
              href="https://myanalyticsschool.ezexam.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg bg-sky-700 py-4 text-white rounded-xl text-center hover:bg-sky-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              Visit platform
            </a>
          </div>                                            
          <iframe
            width="590"
            height="340"
            src="https://www.youtube.com/embed/pKyiLrMLQ80"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="rounded-2xl border-solid border-slate-300 border-2"
          ></iframe>            
        </div>         
      </section>    

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
          className="px-8 py-3 bg-sky-700 text-center rounded-xl text-[15px] font-medium text-white"
        >
          Register Now
        </a>
      </div> */}

      <Footer />
    </div>
  );
};

export default Tests;
