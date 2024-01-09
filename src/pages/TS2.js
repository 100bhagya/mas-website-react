import React from "react";
import Navbar from "../components/Navbar";
import Artboard from "../images/Artboard.png";
import Footer from "../components/Footer";
import "../index.css";
import Artboard2 from "../images/ts3_2.png";
import Artboard3 from "../images/ts3_3.png";
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
      <div className="text-sm font-normal w-[18%] text-center md:pt-6 pt-4">
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

const Card = ({ image, heading, content, mobile, laptop }) => {
  return (
    <div
      className={`bg-white lg:w-[18%] md:w-[34%] w-[50%]  md:m-10 md:mx-12 mx-2 mt-10 pt-8 md:pl-6 md:pr-16 pb-7 rounded-3xl ${mobile} ${laptop}`}
    >
      <div className="">
        <img src={image} alt="" className="h-32 ml-5 md:ml-0" />
      </div>
      <div className="text-[19px] font-semibold mt-5 md:mb-10 mb-5 text-center md:text-left">
        {heading}
      </div>
      <div className="md:text-sm text-[11px] font-normal px-2 md:px-0  text-center md:text-left">
        {content}
      </div>
    </div>
  );
};

const TS2 = () => {
  return (
    <div className="bg-back">
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row pt-28 bg-blue-100 to-blue-50 text-center justify-center">
        <div className="md:mb-24 mb-16 relative lg:right-[12%] md:w-1/2">
          <div className="lg:pt-20 md:pb-28 pb-10 lg:bottom-12">
            <h1 className="md:font-medium font-semibold text-center justify-center relative lg:bottom-6  text-black text-2xl md:text-2xl lg:text-[50px]  leading-8 font-primary">
              Test Series 2
            </h1>

            <p className="relative justify-center lg:top-5 md:text-lg text-sm font  text-black leading-8">
              This will act as your shotgun to smash and ace placement tests to
              get an interview opportunity in your dream company.
            </p>
          </div>
          <a
            href="apply"
            className=" py-3 px-8 bg-sky-700 rounded-2xl text-white"
          >
            Register Now
          </a>
        </div>
        <img
          src={Artboard}
          alt="artboard"
          className="relative md:left-[20%] left-[10%] lg:left-[5%]  bottom-6 md:bottom-12 w-[75%] md:w-fit"
        ></img>
      </div>

      <div className="flex justify-center mt-5">
        <Card
          image={Artboard2}
          heading="combined test"
          content="Combined (20 Tests + 7 FREE Tests)"
        />
        <Card
          image={Artboard3}
          heading="Company wise test"
          content="Company-wise (15 Tests)"
        />
      </div>

      <div className=" justify-center">
        <div className="flex justify-center mt-16">
          <div className="lg:w-10/12 flex bg-blue-50 md:rounded-3xl">
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
                <div className="md:mt-20 lg:ml-16 md:ml-20 pb-10 md:pb-0">
                  <a
                    href="download"
                    className="md:text-[15px] text-[12px] font-medium ml-2 md:ml-0 md:px-6 lg:px-10 px-3 py-2 md:py-3 bg-sky-700 md:rounded-xl rounded-md text-white"
                  >
                    Download test series timeline
                  </a>
                </div>
                <div className="md:mt-12 md:ml-16">
                  <a
                    href="tests"
                    className="md:text-[15px] text-[12px] font-medium mr-2 md:mr-0 lg:px-[103.5px] md:px-[90px] md:left-4 relative lg:left-0 px-5 py-2 md:py-3 bg-sky-700 md:rounded-xl rounded-md text-white"
                  >
                    Sample tests
                  </a>
                </div>
              </div>
            </div>
            <img
              src={Artboard6}
              alt=""
              className="my-28 mr-10 md:mr-2 lg:mr-10 hidden md:block"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative lg:left-[9%] left-[4%] md:my-20 mt-20 md:pb-12">
          <div className="text-center lg:w-10/12 w-11/12 md:text-[40px] text-2xl font-medium md:mb-8">
            Test Series Comparison
          </div>
          <div className="md:shadow-2xl lg:w-10/12 w-11/12">
            <div className="flex border-b-2 mt-10 md:mt-0  border-solid md:bg-card bg-back border-blue-600 w-full md:h-[95px] h-[44px] rounded-t-2xl">
              <div className="md:text-2xl text-xl font-semibold w-[48%] text-blue-600 md:text-center md:pt-8 pt-2">
                Offerings
              </div>
              <div className="md:text-2xl text-xl font-semibold w-[18%] text-blue-600 text-center md:pt-8 pt-2">
                TS1
              </div>
              <div className="md:text-2xl text-xl font-semibold w-[18%] bg-sky-700 text-white text-center md:pt-8 pt-2">
                TS2
              </div>
              <div className="md:text-2xl text-xl font-semibold w-[18%] text-blue-600 text-center md:pt-8 pt-2">
                TS3
              </div>
            </div>

            <IncomeSlab
              name="Sectional test"
              no_1="37"
              no_2={false}
              no_3="37"
              color="md:bg-card"
            />

            <IncomeSlab
              color="md:bg-card"
              name="Combined test"
              no_1="5"
              no_2="20"
              no_3="20"
            />

            <IncomeSlab
              color="md:bg-card"
              name="Practice quizzes"
              no_1={false}
              no_2={false}
              no_3="20"
            />

            <IncomeSlab
              color="md:bg-card"
              name="Company Wise Tests (Based on the pattern and level of tests of top companies visiting the campus)"
              no_1={false}
              no_2="15"
              no_3="15"
            />

            <IncomeSlab
              color="md:bg-card"
              name="Mock Interview from Industry Experts to get you Placement Ready"
              no_1={false}
              no_2={true}
              no_3={true}
            />
            <IncomeSlab
              color="md:bg-card"
              name="One on One Case Study & Guesstimate Session"
              no_1={false}
              no_2={false}
              no_3={true}
            />
            <IncomeSlab
              color="md:bg-card"
              name="Group Discussion Session"
              no_1={false}
              no_2={false}
              no_3={true}
            />
            <IncomeSlab
              color="md:bg-card"
              name="Pricing"
              no_1="₹ 2599"
              no_2="₹ 3999"
              no_3="₹ 5999"
            />
            <div className="md:flex w-full h-[90px] pt-1 rounded-b-2xl bg-card hidden">
              <div className="text-sm font-normal w-[48%] px-14 text-center pt-6"></div>
              <div className="text-sm font-normal w-[18%] text-center pt-8 mb-5">
                <a
                  href="explore"
                  className="px-8 rounded-xl text-white py-3 bg-sky-700"
                >
                  <Link to="/ts1">Explore</Link>
                </a>
              </div>
              <div className="text-sm font-normal w-[18%] text-center pt-8">
                <a
                  href="explore"
                  className="px-8 rounded-xl text-white py-3 bg-sky-700"
                >
                  <Link to="/ts2">Explore</Link>
                </a>
              </div>
              <div className="text-sm font-normal w-[18%] text-center pt-8">
                <a
                  href="explore"
                  className="px-8 rounded-xl text-white py-3 bg-sky-700"
                >
                  <Link to="/ts3">Explore</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TestimonialOtherPages />

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

export default TS2;
