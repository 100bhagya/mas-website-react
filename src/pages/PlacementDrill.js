import React from "react";
import Navbar from "../components/Navbar";
import Artboard from "../images/Artboard.png";
import Footer from "../components/Footer";
import "../index.css";
import Artboard1 from "../images/ts3_1.png";
import Artboard2 from "../images/ts3_2.png";
import Artboard3 from "../images/ts3_3.png";
import Artboard4 from "../images/ts3_4.png";
import Artboard5 from "../images/ts3_5.png";
import Artboard6 from "../images/image 21.png";
import tick from "../images/tick.png";
import { Link } from "react-router-dom";
import TestimonialOtherPages from "../components/TestimonialOtherPages";

const IncomeSlab = ({ name, no_1, no_2, no_3, color }) => {
  return (
    <div
      className={`flex w-full lg:h-[75px] pb-4 border-b-[1px] border-solid border-blue-500 pt-1 ${color}`}
    >
      <div className="text-sm font-normal w-[48%] md:px-14 md:text-center md:pt-6 pt-4">
        {name}
      </div>
      <div className="text-sm font-normal w-[18%] text-center md:pt-6 pt-4">
        {no_1 === true ? (
          <img src={tick} alt="tick" className="relative left-[47%]"></img>
        ) : no_1 === false ? (
          <span>✗</span>
        ) : (
          no_1
        )}
      </div>
      <div className="text-sm font-normal w-[18%] text-center md:pt-6 pt-4">
        {no_2 === true ? (
          <img src={tick} alt="tick" className="relative left-[47%]"></img>
        ) : no_2 === false ? (
          <span>✗</span>
        ) : (
          no_2
        )}
      </div>      
    </div>
  );
};

const PlacementDrill = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col-reverse justify-center text-center md:flex-row pt-28 bg-blue-50">
        <div className="md:mb-24 mb-16 relative lg:right-[12%] md:w-1/2">
          <div className="pb-16 bg-blue-50">
          <h1 className="py-8 text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl lg:text-5xl text-center  font-primary">
            About <span className="text-sky-800">MAS Placement Drill</span>
          </h1>

          <p className="px-8 pb-8 text-base text-center text-slate-600 md:px-24 lg:top-5 lg:text-lg max-w-6xl mx-auto">
          This will act as your AK47 to smash and ace placement tests and
              get interview-ready with mock cases and interviews
              to convert your dream company.
          </p>  

        </div>
          <a
            href="https://razorpay.com/payment-button/pl_K4pQUWotXrqO4Z/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
            className="px-8 py-3 text-white bg-blue-700 rounded-2xl"
            target="_blank"
          >
            Buy now
          </a>
        </div>
        <img
          src={Artboard}
          alt="artboard"
          className="relative md:left-[20%] left-[10%] lg:left-[5%] bottom-6 md:bottom-12 w-[75%] md:w-fit"
        ></img>
      </div>

      <div className="flex justify-center mt-5">

        <div className={`bg-white lg:w-[18%] border shadow md:w-[34%] w-[50%]  md:m-10 lg:mx-12 md:mx-4 mx-2 mt-10 pt-8 md:pl-6 lg:pr-16 md:pr-8 pb-7 rounded-3xl`}>
          <div className="">
            <img src={Artboard1} alt="" className="h-32 ml-5 md:ml-0" />
          </div>
          <div className="text-[19px] font-semibold mt-5 md:mb-10 mb-5 text-center md:text-left">
            Test Preparation
          </div>
          <div className="md:text-sm text-[11px] font-normal px-2 md:px-0  text-center md:text-left">
            <ul>
              <li>25 DPPs</li>
              <li>18 Combined Tests</li>
              <li>9 Company Tests</li>
              <li>3 Sectional Tests</li>
              <li>3 Weekly Tests</li>
            </ul>
          </div>
        </div>
 
        <div className={`bg-white lg:w-[18%] border shadow md:w-[34%] w-[50%]  md:m-10 lg:mx-12 md:mx-4 mx-2 mt-10 pt-8 md:pl-6 lg:pr-16 md:pr-8 pb-7 rounded-3xl`}>
          <div className="">
            <img src={Artboard2} alt="" className="h-32 ml-5 md:ml-0" />
          </div>
          <div className="text-[19px] font-semibold mt-5 md:mb-10 mb-5 text-center md:text-left">
            Non-Tech Prep
          </div>
          <div className="md:text-sm text-[11px] font-normal px-2 md:px-0  text-center md:text-left">
            <ul>
              <li>1 Guesstimate live session</li>
              <li>3 Case Studies live session</li>
              <li>2 Guesstimates mock</li>
              <li>2 Case Mock</li>
            </ul>
          </div>
        </div>

        <div className={`bg-white lg:w-[18%] border shadow md:w-[34%] w-[50%]  md:m-10 lg:mx-12 md:mx-4 mx-2 mt-10 pt-8 md:pl-6 lg:pr-16 md:pr-8 pb-7 rounded-3xl`}>
          <div className="">
            <img src={Artboard3} alt="" className="h-32 ml-5 md:ml-0" />
          </div>
          <div className="text-[19px] font-semibold mt-5 md:mb-10 mb-5 text-center md:text-left">
            Interview Prep
          </div>
          <div className="md:text-sm text-[11px] font-normal px-2 md:px-0  text-center md:text-left">
            <ul>
              <li>1 Interview Live Session</li>
              <li>2 Mock Interviews</li>
              <li>2 GDs</li>
              <li>Top 50 Puzzles for Interview</li>
            </ul>
          </div>
        </div>       
      </div>

      <div className="justify-center ">
        <div className="flex justify-center mt-16">
          <div className="flex lg:w-10/12 bg-blue-50 md:rounded-3xl">
            <div className="lg:ml-16 lg:mt-44 md:mt-20 lg:mr-72 md:ml-20">
              <p className="md:text-lg text-[12px] font-normal flex ml-3 md:ml-0 mt-12 md:mt-0">
                Get hold of the perfect timeline for placement preparation
                strategy in order to get an edge over others by our extensive
                practice tests, company-specific tests, courses, projects and
                regular discussions.
                <img
                  src={Artboard6}
                  alt=""
                  className="md:my-28 md:mr-10 md:hidden w-[40%] relative bottom-4"
                />
              </p>
              <div className="flex md:block md:w-[161%] md:right-[37%] relative lg:w-auto lg:right-0 flex-row-reverse mt-8">
                <div className="pb-10 md:mt-20 md:mt-8 md:ml-2 md:pb-0">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1LQ1TkGqHWN9Nk9L04bjZtG6u183BLIqBdZ9yeZW-vzY/edit?usp=sharing"
                    className="inline-block cursor-pointer mx-2 bg-blue-600 md:px-10 md:py-3 px-6 py-2 px text-white rounded-lg font-medium uppercase font-primary tracking-wide lg:text-sm text-[12px]"
                    target="_blank"
                  >
                    Download Timeline
                  </a>
                </div>
                <div className="md:mt-8 md:ml-2">
                  <a
                    href="tests"
                    className="inline-block cursor-pointer mx-2 bg-blue-600 md:px-10 md:py-3 px-6 py-2 px text-white rounded-lg font-medium uppercase font-primary tracking-wide lg:text-sm text-[12px]"
                  >
                    Sample Tests
                  </a>
                </div>
              </div>
            </div>
            <img
              src={Artboard6}
              alt=""
              className="hidden mr-10 my-28 md:mr-2 lg:mr-10 md:block"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative lg:left-[9%] left-[4%] md:my-20 mt-20 md:pb-12">
          <div className="text-center lg:w-10/12 w-11/12 md:text-[40px] text-2xl font-medium md:mb-8">
            Drill Comparison
          </div>
          <div className="w-11/12 md:shadow-2xl lg:w-10/12">
            <div className="flex border-b-2 mt-10 md:mt-0  border-solid md:bg-card bg-back border-blue-600 w-full md:h-[95px] h-[44px] rounded-t-2xl">
              <div className="md:text-2xl text-xl font-semibold w-[48%] text-blue-600 md:text-center md:pt-8 pt-2">
                Features
              </div>
              <div className="md:text-2xl text-xl font-semibold w-[18%] text-blue-600 text-center md:pt-8 pt-2">
                Test Drill
              </div>              
              <div className="md:text-2xl text-xl font-semibold w-[18%] text-white  bg-blue-600 text-center md:pt-8 pt-2">
                Placement Drill
              </div>              
            </div>

            <IncomeSlab
              name="Beginner Practice Tests (Sectional & Weekly)"
              no_1={true}
              no_2={true}              
              color="md:bg-card"
            />

            <IncomeSlab
              color="md:bg-card"
              name="Company / Combined / DPP tests"
              no_1={true}
              no_2={true}              
            />

            <IncomeSlab
              color="md:bg-card"
              name="Case Study Expertise"
              no_1={false}
              no_2={true}              
            />

            <IncomeSlab
              color="md:bg-card"
              name="Guesstimates Expertise"
              no_1={false}
              no_2={true}              
            />
            <IncomeSlab
              color="md:bg-card"
              name="GD / Puzzles / Non-Tech Mocks"
              no_1={false}
              no_2={true}              
            />
            <IncomeSlab
              color="md:bg-card"
              name="Interview Prep & Mocks"
              no_1={false}
              no_2={true}              
            />

            <div className="md:flex w-full h-[90px] pt-1 rounded-b-2xl bg-card hidden">
              <div className="text-sm font-normal w-[48%] px-14 text-center pt-6"></div>
              <div className="text-sm font-normal w-[18%] text-center pt-8 mb-5">
                <a
                  href="/testDrill"
                  className="px-8 py-3 text-white bg-blue-600 rounded-xl"
                >
                  <Link to="/testDrill">Explore</Link>
                </a>
              </div>
              <div className="text-sm font-normal w-[18%] text-center pt-8">
                <a
                  href="/placementDrill"
                  className="px-8 py-3 text-white bg-blue-600 rounded-xl"
                >
                  <Link to="/placementDrill">Explore</Link>
                </a>
              </div>              
            </div>
          </div>
        </div>
      </div>
      {/* <TestimonialOtherPages />

      <div className="mt-10 text-center mb-28">
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

export default PlacementDrill;
