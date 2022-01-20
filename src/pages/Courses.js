import React from "react";
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
        <div className="lg:pt-16 pb-36 lg:bottom-12">
          <h1 className="font-medium text-center justify-center relative lg:bottom-6  text-black text-xl md:text-2xl lg:text-[48px]  leading-8 font-primary">
            Courses
          </h1>

          <p className="relative justify-center lg:top-5 text-lg font  text-black leading-8">
            Explore MAS courses and test series drafted to the industry
            standards by professionals
          </p>
        </div>
      </div>
      <div className="bg-back">
        <div className="flex pt-20 pb-20 justify-center">
          <div className="flex bg-card m-12 p-12 rounded-2xl shadow-2xl">
            <div className="mr-20">
              <p className="text-2xl font-semibold mb-8">MAS 101</p>
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
                ₹ 2500 + ISA
              </p>
            </div>
            <div className="">
              <div className="">
                <p className="text-[22px] font-semibold relative left-48 text-white bottom-[5px] z-10">
                  Exclusive
                </p>
                <img
                  src={exclusive}
                  alt="exclusive"
                  className="relative left-[142px] bottom-10"
                />
              </div>
              <img
                src={artboard1}
                alt="artboard"
                className="h-44 relative bottom-6 mb-12"
              />
              <a
                href="explore"
                className="text-sm font-medium px-4 py-3 relative left-32 rounded-xl mt-12 text-white bg-blue-600"
              >
                <Link to="/mas101">Explore Now</Link>
              </a>
            </div>
          </div>
          <div className="flex bg-card m-12 p-12 rounded-2xl shadow-2xl">
            <div className="mr-20">
              <p className="text-2xl font-semibold mb-8">MAS 102</p>
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
                ₹ 2500 + ISA
              </p>
            </div>
            <div className="">
              <img
                src={artboard2}
                alt="artboard"
                className="h-44 relative bottom-6 mb-12 mt-[68px]"
              />
              <a
                href="explore"
                className="text-sm font-medium px-4 py-3 relative left-32 rounded-xl mt-12 text-white bg-blue-600"
              >
                <Link to="/mas102">Explore Now</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-back pb-40">
        <div className="text-[40px] text-center mb-16">Our Test Series</div>
        <div className="flex justify-center">
          <div className="bg-card mx-8 p-12 rounded-2xl shadow-2xl">
            <p className="text-2xl font-semibold mb-10">Test Series 1</p>
            <img src={artboard3} alt="artboard" className=""></img>
            <p className="mb-4 mt-12">Sectional tests </p>
            <p className="my-4">Combined test</p>
            <p className="mt-4 mb-[150px] text-[15px] text-blue-600 font-semibold">
              ₹ 2499
            </p>
            <div className="flex">
              <a
                href="https://razorpay.com/payment-button/pl_HiD8BM0f5CORWM/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                type="submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-4 py-2 rounded-xl mr-4 border-blue-600 border-solid border-2">
                  Apply now
                </div>
              </a>
              <div className="px-4 py-3 rounded-xl bg-blue-600 text-white ml-7">
                <Link to="/ts1">Explore Now</Link>
              </div>
            </div>
          </div>
          <div className="bg-card mx-8 p-12 rounded-2xl shadow-2xl">
            <p className="text-2xl font-semibold mb-10">Test Series 2</p>
            <img src={artboard4} alt="artboard" className=""></img>
            <p className="mb-4 mt-9">Combined test</p>
            <p className="my-4">Company wise test</p>
            <p className="mt-4 mb-[150px] text-[15px] text-blue-600 font-semibold">
              ₹ 3999
            </p>
            <div className="flex">
              <a
                href="https://razorpay.com/payment-button/pl_HiD8BM0f5CORWM/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                type="submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-4 py-2 rounded-xl mr-4 border-blue-600 border-solid border-2">
                  Apply now
                </div>
              </a>
              <div className="px-4 py-3 rounded-xl bg-blue-600 text-white ml-7">
                <Link to="/ts2">Explore Now</Link>
              </div>
            </div>
          </div>
          <div className="bg-card mx-8 p-12 rounded-2xl shadow-2xl">
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
            <div className="flex">
              <a
                href="https://razorpay.com/payment-button/pl_HiD8BM0f5CORWM/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                type="submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-4 py-2 rounded-xl mr-4 border-blue-600 border-solid border-2">
                  Apply now
                </div>
              </a>
              <div className="px-4 py-3 rounded-xl bg-blue-600 text-white ml-7">
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
