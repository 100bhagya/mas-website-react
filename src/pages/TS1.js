import React from "react";
import Navbar from "../components/Navbar";
import Artboard from "../images/Artboard.png";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Data from "../data/SwiperData";
import "../index.css";
import Colon from "../images/upper colon.png";
import Artboard1 from "../images/ts3_1.png";
import Artboard2 from "../images/ts3_2.png";
import Artboard6 from "../images/image 21.png";
import tick from "../images/tick.png";
import { Link } from "react-router-dom";

const IncomeSlab = ({ name, no_1, no_2, no_3, color }) => {
  return (
    <div
      className={`flex w-full h-[75px] border-b-[1px] border-solid border-blue-500 pt-1 ${color}`}
    >
      <div className="text-sm font-normal w-[48%] px-14 text-center pt-6">
        {name}
      </div>
      <div className="text-sm font-normal w-[18%] text-center pt-6">
        {no_1 === true ? (
          <img src={tick} alt="tick" className="relative left-[47%]"></img>
        ) : no_1 === false ? (
          <span>✗</span>
        ) : (
          no_1
        )}
      </div>
      <div className="text-sm font-normal w-[18%] text-center pt-6">
        {no_2 === true ? (
          <img src={tick} alt="tick" className="relative left-[47%]"></img>
        ) : no_2 === false ? (
          <span>✗</span>
        ) : (
          no_2
        )}
      </div>
      <div className="text-sm font-normal w-[18%] text-center pt-6">
        {no_3 === true ? (
          <img src={tick} alt="tick" className="relative left-[47%]"></img>
        ) : no_3 === false ? (
          <span>✗</span>
        ) : (
          no_3
        )}
      </div>
    </div>
  );
};

const Card = ({ image, heading, content }) => {
  return (
    <div className="bg-white w-[17%] m-10 pt-8 pl-6 pr-16 pb-7 rounded-3xl">
      <div className="">
        <img src={image} alt="" className="h-32" />
      </div>
      <div className="text-[19px] font-semibold mt-5 mb-10">{heading}</div>
      <div className="text-sm font-normal">{content}</div>
    </div>
  );
};

const TS1 = () => {
  return (
    <div className="bg-back">
      <Navbar />
      <div className="lg:flex pt-28 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 text-center justify-center">
        <div className="mb-24 relative right-[12%]">
          <div className="lg:pt-20 pb-28 lg:bottom-12">
            <h1 className="font-medium text-center justify-center relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[50px]  leading-8 font-primary">
              Test Series 1
            </h1>

            <p className="relative justify-center lg:top-5 text-lg font  text-black leading-8">
              An intense series to test your limits
            </p>
          </div>
          <a
            href="apply"
            className=" py-3 px-8 bg-blue-700 rounded-2xl text-white"
          >
            Apply now
          </a>
        </div>
        <img
          src={Artboard}
          alt="artboard"
          className="relative left-[20%] bottom-12"
        ></img>
      </div>

      <div className="flex justify-center mt-5">
        <Card
          image={Artboard1}
          heading="Sectional test"
          content="Quant Sectional (17 Tests)
                       LRDI Sectional (15 Tests)
                       Verbal Sectional (5 Tests)"
        />
        <Card
          image={Artboard2}
          heading="combined test"
          content="Combined (5 Tests)"
        />
      </div>

      <div className=" justify-center">
        <div className="flex justify-center mt-16">
          <div className="w-10/12 flex bg-blue-50 rounded-3xl">
            <div className="ml-16 mt-44 mr-72">
              <p className="text-lg font-normal">
                Get hold of the perfect timeline for placement preparation
                strategy in order to get an edge over others by our extensive
                practice tests, company-specific tests, courses, projects and
                regular discussions.
              </p>
              <div className="mt-20 ml-16">
                <a
                  href="download"
                  className="text-[15px] font-medium px-10 py-3 bg-blue-600 rounded-xl text-white"
                >
                  Download test series timeline
                </a>
              </div>
              <div className="mt-12 ml-16">
                <a
                  href="tests"
                  className="text-[15px] font-medium px-[103.5px] py-3 bg-blue-600 rounded-xl text-white"
                >
                  Sample tests
                </a>
              </div>
            </div>
            <img src={Artboard6} alt="" className="my-28 mr-10" />
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative left-[9%] my-20 pb-12">
          <div className="text-center w-10/12 text-[40px] font-medium mb-8">
            Test Series Comparison Chart
          </div>
          <div className="shadow-2xl w-10/12">
            <div className="flex border-b-2 border-solid bg-card border-blue-600 w-full h-[95px] rounded-t-2xl">
              <div className="text-2xl font-semibold w-[48%] text-blue-600 text-center pt-8">
                Offerings
              </div>
              <div className="text-2xl font-semibold w-[18%] text-blue-600 text-center pt-8">
                TS1
              </div>
              <div className="text-2xl font-semibold w-[18%] text-blue-600 text-center pt-8">
                TS2
              </div>
              <div className="text-2xl font-semibold w-[18%] text-blue-600 text-center pt-8">
                TS3
              </div>
            </div>

            <IncomeSlab
              name="Sectional test"
              no_1="37"
              no_2={false}
              no_3="37"
              color="bg-card"
            />

            <IncomeSlab
              color="bg-card"
              name="Combined test"
              no_1="5"
              no_2="20"
              no_3="20"
            />

            <IncomeSlab
              color="bg-card"
              name="Practice quizzes"
              no_1={false}
              no_2={false}
              no_3="20"
            />

            <IncomeSlab
              color="bg-card"
              name="Company Wise Tests (Based on the pattern and level of tests of top companies visiting the campus)"
              no_1={false}
              no_2="15"
              no_3="15"
            />

            <IncomeSlab
              color="bg-card"
              name="Mock Interview from Industry Experts to get you Placement Ready"
              no_1={false}
              no_2={true}
              no_3={true}
            />
            <IncomeSlab
              color="bg-card"
              name="One on One Case Study & Guesstimate Session"
              no_1={false}
              no_2={false}
              no_3={true}
            />
            <IncomeSlab
              color="bg-card"
              name="Group Discussion Session"
              no_1={false}
              no_2={false}
              no_3={true}
            />
            <IncomeSlab
              color="bg-card"
              name="Pricing"
              no_1="₹ 2599"
              no_2="₹ 3999"
              no_3="₹ 5999"
            />
            <div className="flex w-full h-[90px] pt-1 rounded-b-2xl bg-card">
              <div className="text-sm font-normal w-[48%] px-14 text-center pt-6"></div>
              <div className="text-sm font-normal w-[18%] text-center pt-8 mb-5">
                <a
                  href="explore"
                  className="px-8 rounded-xl text-white py-3 bg-blue-600"
                >
                  <Link to="/ts1">Explore</Link>
                </a>
              </div>
              <div className="text-sm font-normal w-[18%] text-center pt-8">
                <a
                  href="explore"
                  className="px-8 rounded-xl text-white py-3 bg-blue-600"
                >
                  <Link to="/ts2">Explore</Link>
                </a>
              </div>
              <div className="text-sm font-normal w-[18%] text-center pt-8">
                <a
                  href="explore"
                  className="px-8 rounded-xl text-white py-3 bg-blue-600"
                >
                  <Link to="/ts3">Explore</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[40px] font-medium text-center mb-20">
        Testimonial
      </div>
      <div className="bg-back">
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

        <div className="text-center mb-28 mt-10">
          <a
            href="apply"
            className="px-8 py-3 bg-blue-600 text-center rounded-xl text-[15px] font-medium text-white"
          >
            Apply Now
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TS1;
