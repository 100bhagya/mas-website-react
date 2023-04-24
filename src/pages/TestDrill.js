import React from "react";

import Artboard from "../images/Artboard.png";

import "../index.css";
import Artboard1 from "../images/ts3_1.png";
import Artboard2 from "../images/ts3_2.png";
import Artboard6 from "../images/image 21.png";
import tick from "../images/tick.png";
import { Link } from "react-router-dom";
import TestimonialOtherPages from "../components/TestimonialOtherPages";

const IncomeSlab = ({ name, no_1, no_2, color }) => {
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

const TestDrill = () => {
  return (
    <div className="bg-back">
    
      <div className="flex flex-col-reverse justify-center text-center md:flex-row pt-28 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
        <div className="md:mb-24 mb-16 relative lg:right-[12%] md:w-1/2">
          <div className="pb-10 lg:pt-20 md:pb-28 lg:bottom-12">
            <h1 className="md:font-medium font-semibold text-center justify-center relative lg:bottom-6  text-black text-2xl md:text-2xl lg:text-[50px]  leading-8 font-primary">
              MAS Test Drill
            </h1>

            <p className="relative justify-center text-sm leading-8 text-black lg:top-5 md:text-lg font">
              This will act as your pistol to smash and ace placement tests to
              get an interview opportunity in your dream company.
            </p>
          </div>
          <a
            href="https://razorpay.com/payment-button/pl_K4pHLfrzbEotPb/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
            className="px-8 py-3 text-white bg-blue-700 rounded-2xl"
            target="_blank"
          >
            Buy now
          </a>
        </div>
        <img
          src={Artboard}
          alt="artboard"
          className="relative left-[10%] lg:left-[5%]  md:left-0 bottom-6 md:bottom-12 w-[75%] md:w-fit"
        ></img>
      </div>

      <div className="flex justify-center mt-5">

        <div className="bg-white lg:w-[18%] md:w-[34%] w-[50%]  md:m-10 md:mx-12 mx-2 mt-10 pt-8 md:pl-6 md:pr-16 pb-7 rounded-3xl">
          <div className="">
            <img src={Artboard1} alt="" className="h-32 ml-5 md:ml-0" />
          </div>
          <div className="text-[19px] font-semibold mt-5 md:mb-10 mb-5 text-center md:text-left">
            Sectional test
          </div>
          <div className="md:text-sm text-[11px] font-normal px-2 md:px-0  text-center md:text-left">
            <ul>
              <li>Quant Sectional (17 Tests)</li>
              <li>LRDI Sectional (15 Tests)</li>
              <li>Verbal Sectional (10 Tests)</li>
            </ul>
          </div>
        </div>        

        <div className="bg-white lg:w-[18%] md:w-[34%] w-[50%]  md:m-10 md:mx-12 mx-2 mt-10 pt-8 md:pl-6 md:pr-16 pb-7 rounded-3xl">
          <div className="">
            <img src={Artboard2} alt="" className="h-32 ml-5 md:ml-0" />
          </div>
          <div className="text-[19px] font-semibold mt-5 md:mb-10 mb-5 text-center md:text-left">
            Full Tests
          </div>
          <div className="md:text-sm text-[11px] font-normal px-2 md:px-0  text-center md:text-left">
            <ul>
              <li>25 DPPs</li>
              <li>18 Combined Tests</li>
              <li>9 Company Tests</li>
              <li>9 Weekly Tests</li>
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
              <div className="flex md:block md:w-[161%] md:right-[37%] relative lg:w-auto lg:right-0 flex-row-reverse justify-center mt-8">
                <div className="pb-10 md:mt-20 lg:ml-16 md:ml-20 md:pb-0">
                  <a
                    href="https://docs.google.com/spreadsheets/d/10EPWbm-fSzFoB62950xRj0Hzt7qPXZERjczXJnUNtf4/edit?usp=sharing"
                    className="md:text-[15px] text-[12px] font-medium ml-2 md:ml-0 md:px-6 lg:px-10 px-3 py-2 md:py-3 bg-blue-600 md:rounded-xl rounded-md text-white"
                    target="_blank"
                  >
                    Download Test Drill Timeline
                  </a>
                </div>
                <div className="md:mt-12 md:ml-16">
                  <a
                    href="tests"
                    className="md:text-[15px] text-[12px] font-medium mr-2 md:mr-0 lg:px-[103.5px] md:px-[90px] md:left-4 relative lg:left-0 px-5 py-2 md:py-3 bg-blue-600 md:rounded-xl rounded-md text-white"
                  >
                    Sample tests
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
              <div className="md:text-2xl text-xl font-semibold w-[18%] text-white  bg-blue-600 text-center md:pt-8 pt-2">
                Test Drill
              </div>
              <div className="md:text-2xl text-xl font-semibold w-[18%] text-blue-600 text-center md:pt-8 pt-2">
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
    
    </div>
  );
};

export default TestDrill;
