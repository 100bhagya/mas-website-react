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

      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
        <h1 className="text-center text-black text-3xl font-bold font-serif py-8">
          Courses
        </h1>

        <p className="px-8 md:px-24 pb-8 lg:top-5 text-base text-black lg:text-lg text-center">
          We provide an arsenal of a wide range of offerings from internships
          to placements which are strategically curated and drafted by
          Analytics professionals as per industry standards.
        </p>        
      </section>

      <section className="bg-back py-16">
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6 justify-center items-center">
          <div className="flex flex-col space-y-4 bg-white rounded-2xl pl-6 py-6 md:pl-12 md:py-12 shadow-2xl">
            <div className="flex justify-between items-center w-full pb-4 space-x-12">
              <h3 className="text-2xl font-bold">
                MAS 101
              </h3>
              <div className="relative">                            
                <img
                    src={exclusive}
                    alt="exclusive"
                    className="h-full z-0"
                />
                <p className="absolute text-white z-10 top-1.5 right-8 font-bold">
                  For IITs
                </p>
              </div>                                   
            </div>

            <div className="flex flex-col items-center space-y-4 md:flex-row-reverse md:space-y-0 md:justify-between md:items-start pr-6 md:pr-12">
              <img
                    src={artboard1}
                    alt="artboard"
                    className="w-1/2 h-36 md:ml-8"
                  />
              <div className="text-sm min-w-xl">
                <p className="mb-4">One to one mentorship</p>
                <p className="mb-4">
                  <b>120+</b> practice tests
                </p>
                <p className="mb-4">
                  <b>20+ </b> Company specific tests
                </p>
                <p className="mb-4">
                  Off campus job oppurtunities
                </p>
                <p className="text-[15px] font-semibold text-blue-600">
                  ₹ 3000 + ISA
                </p>
              </div>
            </div>
            <div className="text-right pr-12" >
              <Link
                  to="/mas101"
                  className="mb-4 text-sm px-4 py-3 rounded-xl text-white bg-blue-800 hover:bg-blue-900 hover:shadow-xl"
                >
                  Explore Now
              </Link>
            </div>
            
          </div>

          <div className="flex flex-col space-y-4 bg-white rounded-2xl pl-6 py-6 md:pl-12 md:py-12 shadow-2xl">
            <div className="flex justify-between items-center w-full pb-4 space-x-12">
              <h3 className="text-2xl font-bold">
                MAS 102
              </h3>
              <div className="relative">                            
                <img
                    src={exclusive}
                    alt="exclusive"
                    className="h-full z-0"
                />
                <p className="absolute text-white z-10 top-1.5 right-8 font-bold">
                  For NITs, BITS
                </p>
              </div>                                   
            </div>

            <div className="flex flex-col items-center space-y-4 md:flex-row-reverse md:space-y-0 md:justify-between md:items-start pr-6 md:pr-12">
              <img
                    src={artboard2}
                    alt="artboard"
                    className="w-1/2 h-36 md:ml-8"
                  />
              <div className="text-sm min-w-xl">
                <p className="mb-4">One to one mentorship</p>
                <p className="mb-4">
                  <b>120+</b> practice tests
                </p>
                <p className="mb-4">
                  <b>20+ </b> Company specific tests
                </p>
                <p className="mb-4">
                  Off campus job oppurtunities
                </p>
                <p className="text-[15px] font-semibold text-blue-600">
                  ₹ 3000 + ISA
                </p>
              </div>
            </div>
            <div className="text-right pr-12" >
              <Link
                  to="/mas102"
                  className="mb-4 text-sm px-4 py-3 rounded-xl text-white bg-blue-800 hover:bg-blue-900 hover:shadow-xl"
                >
                  Explore Now
              </Link>
            </div>
            
          </div>
        </div>        
      </section>

      <section className="bg-back pb-16">      
        <h1 className="text-center text-black text-3xl font-bold font-serif py-8">
          MAS Prep Drills
        </h1>

        <div className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-y-0 md:space-x-4">
          <div className="bg-card flex flex-col justify-center items-center p-6 md:p-12 rounded-xl shadow-2xl space-y-6">
            <h3 className="text-2xl font-bold">
              Test Drill
            </h3>
            <img src={artboard3} alt="artboard" className="" />
            <div className="flex flex-col space-y-4 text-sm mx-8 py-4">
              <p className="">DPPs / Combined / Company Tests</p>              
              <p className="">Quant Sectional Tests</p>
              <p className="">LRDI Sectional Tests</p>
              <p className="">Verbal Sectional Tests</p>
              <p className="">Weekly Test</p>
              <p className="">Price - <span className="line-through">₹ 9000</span></p>
              <p className="">Discount - 50%</p>
              <p className="mb-10 text-[15px] text-blue-600 font-semibold">
                Final Price - ₹ 4500 (Incl. 18 % GST)
              </p>
            </div>
            <div className="flex justify-around items-center space-x-6">
              <a
                href="https://razorpay.com/payment-button/pl_K4pHLfrzbEotPb/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                type="submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-6 py-2 rounded-xl border-blue-800 border-solid border-2 hover:border-blue-900 hover:shadow-xl">
                  Buy now
                </div>
              </a>

              <div>
                <Link to="/testDrill" className="px-4 py-3 rounded-xl bg-blue-800 hover:bg-blue-900 hover:shadow-xl cursor-pointer text-white">Explore Now</Link>
              </div>
            </div>
          </div>

          <div className="bg-card flex flex-col justify-center items-center p-6 md:p-12 rounded-xl shadow-2xl space-y-6">
            <h3 className="text-2xl font-bold">
              Placement Drill
            </h3>
            <img src={artboard3} alt="artboard" className="" />
            <div className="flex flex-col space-y-4 text-sm mx-8 py-4">
              <p className="">DPPs / Combined / Company Tests</p>              
              <p className="">Case Study Expertise</p>
              <p className="">Guesstimates Expertise</p>
              <p className="">Interview Prep & Mocks</p>
              <p className="">GD / Puzzles / Non-Tech Mocks</p>
              <p className="">Price - <span className="line-through">₹ 15000</span></p>
              <p className="">Discount - 50%</p>
              <p className="mb-10 text-[15px] text-blue-600 font-semibold">
                Final Price - ₹ 7500 (Incl. 18 % GST)
              </p>
            </div>
            <div className="flex justify-around items-center space-x-6">
              <a
                href="https://razorpay.com/payment-button/pl_K4pHLfrzbEotPb/view/?utm_source=payment_button&amp;utm_medium=button&amp;utm_campaign=payment_button"
                type="submit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="px-6 py-2 rounded-xl border-blue-800 border-solid border-2 hover:border-blue-900 hover:shadow-xl">
                  Buy now
                </div>
              </a>

              <div>
                <Link to="/placementDrill" className="px-4 py-3 rounded-xl bg-blue-800 hover:bg-blue-900 hover:shadow-xl cursor-pointer text-white">Explore Now</Link>
              </div>
            </div>
          </div>
        </div>        
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
