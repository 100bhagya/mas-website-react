import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import artboard1 from "../images/courses_artboard1.png";
import artboard2 from "../images/courses_artboard2.png";
import artboard3 from "../images/courses_artboard3.png";
import artboard4 from "../images/courses_artboard4.png";
import artboard5 from "../images/courses_artboard5.png";
import exclusive from "../images/exclusive.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:flex pt-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 text-center justify-center">
        <div className="lg:pt-28 md:pb-36 pb-16 lg:bottom-12">
          <h1 className="md:font-medium font-semibold mt-16 text-center justify-center relative lg:bottom-6  text-black text-2xl md:text-2xl lg:text-[48px]  leading-8 font-primary">
            Courses
          </h1>

          <p className="relative justify-center mt-8 lg:top-5 text-[14px] font  text-black leading-8">
            We provide an arsenal of a wide range of offerings from internships
            to placements which are strategically curated and drafted by
            Analytics professionals as per industry standards.
          </p>
        </div>
      </div>
      <div className="bg-back">
        <div className="lg:flex pt-20 pb-20 justify-center">
          <div className="flex flex-col-reverse md:flex-row bg-card md:m-12 md:p-12 m-4 p-7 pb-0 rounded-2xl shadow-2xl">
            <div className="mr-20">
              <p className="text-2xl hidden md:block font-semibold mb-8">
                MAS 101
              </p>
              <p className="text-sm font-normal mb-5">One to one mentorship</p>
              <p className="text-sm font-normal mb-5">
                <b>120+</b> practice tests
              </p>
              <p className="text-sm font-normal mb-5">
                <b>20+ </b> Company specific tests
              </p>
              <p className="text-sm font-normal mb-5">
                Off campus job oppurtunities
              </p>
              <p className="text-[15px] font-semibold text-blue-600 mb-5">
                ₹ 3000 + ISA
              </p>

              <Link
                to="/mas101"
                className="text-sm lg:hidden md:left-96 md:bottom-1  font-medium px-4 py-3 relative left-40 bottom-14 rounded-xl text-white bg-blue-600"
              >
                Explore Now
              </Link>
            </div>
            <div className="">
              <div className="">
                <p className="text-2xl md:hidden font-semibold relative top-3">
                  MAS 101
                </p>

                <p className="lg:text-[22px] md:left-72 text-lg font-semibold relative lg:left-48 left-52 text-white lg:bottom-[8px] bottom-4 z-10">
                  For IIT
                </p>
                <img
                  src={exclusive}
                  alt="exclusive"
                  className="relative left-[142px] md:left-[216px] lg:left-[142px] lg:bottom-10 bottom-12"
                />
              </div>
              <img
                src={artboard1}
                alt="artboard"
                className="h-44 relative bottom-6 md:mb-12"
              />
              <Link
                to="/mas101"
                className="text-sm explore font-medium px-4 py-3 relative left-32 rounded-xl mt-12 text-white bg-blue-600"
              >
                Explore Now
              </Link>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row bg-card md:m-12 md:p-12 m-4 p-7 pb-0 rounded-2xl shadow-2xl">
            <div className="mr-20">
              <p className="text-2xl hidden md:block font-semibold mb-8">
                MAS 102
              </p>
              <p className="text-sm font-normal mb-5">One to one mentorship</p>
              <p className="text-sm font-normal mb-5">
                <b>120+</b> practice tests
              </p>
              <p className="text-sm font-normal mb-5">
                <b>20+ </b> Company specific tests
              </p>
              <p className="text-sm font-normal mb-5">
                Off campus job oppurtunities
              </p>
              <p className="text-[15px] font-semibold text-blue-600 mb-5">
                ₹ 3000 + ISA
              </p>

              <Link
                to="/mas101"
                className="text-sm lg:hidden md:left-96 md:bottom-1  font-medium px-4 py-3 relative left-40 bottom-14 rounded-xl text-white bg-blue-600"
              >
                Explore Now
              </Link>
            </div>
            <div className="">
              <div className="">
                <p className="text-2xl md:hidden font-semibold relative top-3">
                  MAS 102
                </p>

                <p className="lg:text-lg text-[16px] md:left-[250px] font-semibold relative lg:left-40 left-44 text-white lg:bottom-[8px] bottom-5 z-10">
                  For NIT,Bits,etc
                </p>
                <img
                  src={exclusive}
                  alt="exclusive"
                  className="relative left-[142px] md:left-[216px] lg:left-[136px] lg:bottom-10 bottom-12"
                />
              </div>
              <img
                src={artboard2}
                alt="artboard"
                className="h-44 relative bottom-6 md:mb-12"
              />
              <Link
                to="/mas102"
                className="text-sm explore font-medium px-4 py-3 relative left-32 rounded-xl mt-12 text-white bg-blue-600"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-back md:pb-40 pb-20">
        <div className="text-[40px] text-center mb-16">Our Test Series</div>
        <div className="lg:flex justify-center">
          <div className="bg-card md:mx-8 md:h-[445px] lg:h-[auto] mx-3 md:flex lg:block md:p-12 p-4 my-4 rounded-2xl shadow-2xl">
            <div className="">
              <p className="text-2xl font-semibold mb-10">Test Series 1</p>
              <img src={artboard3} alt="artboard" className=""></img>
              <p className="mb-4 mt-12">Sectional tests </p>
              <p className="my-4">Combined test</p>
              <p className="mt-4 md:mb-[150px] mb-10 text-[15px] text-blue-600 font-semibold">
                ₹ 2499
              </p>
            </div>
            <div className="flex md:block lg:flex md:left-40 md:top-20 lg:left-0 lg:top-0 left-0 top-0 relative">
              <a
                href="https://razorpay.com/payment-button/pl_HiD8BM0f5CORWM/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                type="submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-4 py-2 h-12 rounded-xl mr-4 border-blue-600 border-solid border-2">
                  Apply now
                </div>
              </a>
              <div className="px-4 py-3 h-12 md:mt-14 lg:mt-0 mt-0 lg:right-0 right-0 relative md:right-10 rounded-xl bg-blue-600 text-white ml-7">
                <Link to="/ts1">Explore Now</Link>
              </div>
            </div>
          </div>
          <div className="bg-card md:mx-8 md:h-[445px] lg:h-[auto] mx-3 md:flex lg:block md:p-12 p-4 my-4 rounded-2xl shadow-2xl">
            <div className="">
              <p className="text-2xl font-semibold mb-10">Test Series 2</p>
              <img src={artboard4} alt="artboard" className=""></img>
              <p className="mb-4 mt-9">Combined test</p>
              <p className="my-4">Company wise test</p>
              <p className="mt-4 md:mb-[150px] mb-10 text-[15px] text-blue-600 font-semibold">
                ₹ 3999
              </p>
            </div>
            <div className="flex md:block lg:flex md:left-40 md:top-20 lg:left-0 lg:top-0 left-0 top-0 relative">
              <a
                href="https://razorpay.com/payment-button/pl_HiD8BM0f5CORWM/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                type="submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-4 py-2 h-12 rounded-xl mr-4 border-blue-600 border-solid border-2">
                  Apply now
                </div>
              </a>
              <div className="px-4 py-3 h-12 md:mt-14 lg:mt-0 mt-0 lg:right-0 right-0 relative md:right-10 rounded-xl bg-blue-600 text-white ml-7">
                <Link to="/ts2">Explore Now</Link>
              </div>
            </div>
          </div>
          <div className="bg-card md:mx-8 mx-3 md:flex lg:block md:p-12 p-4 my-4 rounded-2xl shadow-2xl">
            <div className="">
              <p className="text-2xl font-semibold mb-10">Test Series 3</p>
              <img src={artboard5} alt="artboard" className=""></img>
              <p className="my-4">Sectional tests</p>
              <p className="my-4">Combined test</p>
              <p className="my-4">Company wise test </p>
              <p className="my-4">Practice quizzes</p>
              <p className="my-4">Interview prep</p>
              <p className="mt-4 mb-9 text-[15px] text-blue-600 font-semibold">
                ₹ 5999
              </p>
            </div>
            <div className="flex md:block lg:flex md:left-40 md:top-20 lg:left-0 lg:top-0 left-0 top-0 relative">
              <a
                href="https://razorpay.com/payment-button/pl_HiD8BM0f5CORWM/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                type="submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-4 py-2 h-12 rounded-xl mr-4 border-blue-600 border-solid border-2">
                  Apply now
                </div>
              </a>
              <div className="px-4 py-3 h-12 md:mt-14 lg:mt-0 mt-0 lg:right-0 right-0 relative md:right-10 rounded-xl bg-blue-600 text-white ml-7">
                <Link to="/ts3">Explore Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
